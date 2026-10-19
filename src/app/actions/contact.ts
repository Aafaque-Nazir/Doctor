"use server";

// ---------------------------------------------------------------------------
// Types & Interfaces
// ---------------------------------------------------------------------------

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export interface ChairBookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  doctor?: string;
  date: string;
  timeSlot: string;
  insuranceType?: string;
  insuranceCarrier?: string;
  amenities?: {
    headphones: boolean;
    anxietyFriendly: boolean;
  };
  notes?: string;
  botTrap?: string; // Honeypot anti-spam
}

export interface ExpressCallbackPayload {
  name: string;
  phone: string;
  topic: string;
  preferredMethod: "call" | "sms";
  timeframe: string;
  botTrap?: string; // Honeypot anti-spam
}

// ---------------------------------------------------------------------------
// Security: Sanitizers & Validation
// ---------------------------------------------------------------------------

function sanitizeSingleLine(input: unknown, maxLen = 120): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[\r\n\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

function sanitizeMultiLine(input: unknown, maxLen = 1000): string {
  if (typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15 && /^[+()0-9\s-]{7,25}$/.test(phone);
}

// ---------------------------------------------------------------------------
// Security: In-Memory Sliding-Window Rate Limiter
// ---------------------------------------------------------------------------

const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitStore.get(identifier) ?? [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitStore.set(identifier, validTimestamps);
  return true;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

function getFormSubmitUrl(): string | null {
  const email = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
  if (!email) {
    return null;
  }
  return `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
}

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL;

// ---------------------------------------------------------------------------
// Display-label maps
// ---------------------------------------------------------------------------

const DOCTOR_MAP: Record<string, string> = {
  "dr-sterling": "Dr. Marcus Sterling, DDS — Cosmetic & General Dentistry",
  "dr-vance": "Dr. Elena Vance, DMD — Orthodontics & Clear Aligners",
  "dr-ross": "Dr. Julian Ross, DDS — Implants & Restorative Dentistry",
  "": "First Available Doctor",
};

const TIME_SLOT_MAP: Record<string, string> = {
  morning: "Morning (8:00 AM – 12:00 PM)",
  afternoon: "Afternoon (12:00 PM – 4:00 PM)",
  evening: "Late Afternoon (4:00 PM – 6:00 PM)",
};

const INSURANCE_MAP: Record<string, string> = {
  ppo: "Dental Insurance (PPO)",
  membership: "Aura Clinic Plan",
  "self-pay": "Self-Pay / Monthly Financing",
};

// ---------------------------------------------------------------------------
// Shared fetch helper
// ---------------------------------------------------------------------------

interface FormSubmitResponse {
  success?: string | boolean;
  message?: string;
}

async function sendToFormSubmit(
  body: Record<string, unknown>
): Promise<FormSubmitResponse | null> {
  const url = getFormSubmitUrl();
  if (!url) {
    // Graceful fallback for local development or preview without configured email
    console.info("[FormSubmit Notice] CONTACT_FORM_RECIPIENT_EMAIL not configured. Simulating success.");
    return { success: true, message: "Simulation success" };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (SITE_ORIGIN) {
    headers.Origin = SITE_ORIGIN;
    headers.Referer = `${SITE_ORIGIN}/`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => null)) as FormSubmitResponse | null;

  const failed =
    !res.ok ||
    (data && (data.success === "false" || data.success === false));

  if (failed) {
    console.warn(
      "[FormSubmit Warning]",
      res.status,
      data?.message ?? "Form submission error"
    );
  }

  return data;
}

// ---------------------------------------------------------------------------
// Server Action — Appointment Booking
// ---------------------------------------------------------------------------

export async function submitChairBooking(
  data: ChairBookingPayload
): Promise<FormState> {
  try {
    // 1. Bot trap check
    if (data.botTrap && data.botTrap.trim().length > 0) {
      return { success: true, message: "Your appointment request has been received." };
    }

    // 2. Sanitize and validate inputs
    const firstName = sanitizeSingleLine(data.firstName, 50);
    const lastName = sanitizeSingleLine(data.lastName, 50);
    const fullName = `${firstName} ${lastName}`.trim();
    const email = sanitizeSingleLine(data.email, 120).toLowerCase();
    const phone = sanitizeSingleLine(data.phone, 30);
    const service = sanitizeSingleLine(data.service, 100);
    const date = sanitizeSingleLine(data.date, 30);
    const notes = sanitizeMultiLine(data.notes, 1000);
    const insuranceCarrier = sanitizeSingleLine(data.insuranceCarrier, 80);

    if (!fullName || fullName.length < 2) {
      return { success: false, error: "Please enter your full name." };
    }
    if (!phone || !isValidPhone(phone)) {
      return { success: false, error: "Please enter a valid phone number." };
    }
    if (!email || !isValidEmail(email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    // 3. Rate limiting check (keyed by phone + email)
    const rateLimitKey = `booking:${phone}:${email}`;
    if (!checkRateLimit(rateLimitKey)) {
      return {
        success: false,
        error: "Too many requests. Please wait a moment or call our front desk directly.",
      };
    }

    const doctor = DOCTOR_MAP[data.doctor ?? ""] ?? "First Available Doctor";
    const timeSlot = TIME_SLOT_MAP[data.timeSlot] ?? sanitizeSingleLine(data.timeSlot, 50);
    const insurance = INSURANCE_MAP[data.insuranceType ?? "ppo"] ?? sanitizeSingleLine(data.insuranceType, 50);

    const comforts: string[] = [];
    if (data.amenities?.headphones) comforts.push("Headphones & streaming screen");
    if (data.amenities?.anxietyFriendly) comforts.push("Gentle numbing & extra comfort pace");
    const comfortLabel = comforts.length > 0 ? comforts.join(" · ") : "Standard care";

    await sendToFormSubmit({
      "Request Type":         "🦷 Dental Appointment Booking",
      "Patient Name":         fullName,
      "Phone":                phone,
      "Email":                email,
      "Service Requested":    service,
      "Preferred Doctor":     doctor,
      "Preferred Date":       date,
      "Time Window":          timeSlot,
      "Payment Option":       insurance,
      "Insurance Provider":   insuranceCarrier || "Not specified",
      "Comfort Preferences":  comfortLabel,
      "Patient Notes":        notes || "None",
      "Source":               "Online Booking — Aura Dental Clinic",

      _subject: `🦷 New Appointment: ${fullName} — ${service} (${date})`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
      _autoresponse: [
        `Hello ${firstName},`,
        ``,
        `Thank you for reaching out to Aura Dental Clinic. We have received your appointment request.`,
        ``,
        `Summary of your request:`,
        `  Service:      ${service}`,
        `  Doctor:       ${doctor}`,
        `  Date:         ${date}`,
        `  Time:         ${timeSlot}`,
        `  Payment:      ${insurance}`,
        comforts.length > 0 ? `  Comfort:      ${comfortLabel}` : ``,
        notes ? `  Notes:        ${notes}` : ``,
        ``,
        `What happens next:`,
        `1. Our front desk coordinator will call or message you shortly to confirm your time.`,
        `2. We will verify your dental insurance before you arrive so you have zero surprise costs.`,
        `3. If you have any tooth pain or questions in the meantime, call us at (555) 888-3368.`,
        ``,
        `Warm regards,`,
        `The Aura Dental Clinic Team`,
      ]
        .filter((line) => line !== undefined)
        .join("\n"),
    });

    return {
      success: true,
      message: "Your appointment request has been received. We will contact you shortly!",
    };
  } catch (error) {
    console.error("submitChairBooking error:", error);
    return {
      success: false,
      error: "Could not send your request right now. Please call us directly at (555) 888-3368.",
    };
  }
}

// ---------------------------------------------------------------------------
// Server Action — Quick Callback Request
// ---------------------------------------------------------------------------

export async function submitExpressCallback(
  data: ExpressCallbackPayload
): Promise<FormState> {
  try {
    // 1. Bot trap check
    if (data.botTrap && data.botTrap.trim().length > 0) {
      return { success: true, message: "Your callback request has been received." };
    }

    // 2. Sanitize and validate inputs
    const name = sanitizeSingleLine(data.name, 80);
    const phone = sanitizeSingleLine(data.phone, 30);
    const topic = sanitizeSingleLine(data.topic, 100);
    const preferredMethod = data.preferredMethod === "sms" ? "SMS / Text" : "Phone Call";
    const timeframe = sanitizeSingleLine(data.timeframe, 60);

    if (!name || name.length < 2) {
      return { success: false, error: "Please enter your name." };
    }
    if (!phone || !isValidPhone(phone)) {
      return { success: false, error: "Please enter a valid phone number." };
    }

    // 3. Rate limiting check (keyed by phone)
    const rateLimitKey = `callback:${phone}`;
    if (!checkRateLimit(rateLimitKey)) {
      return {
        success: false,
        error: "Too many callback requests. Please call our clinic directly at (555) 888-3368.",
      };
    }

    const firstName = name.split(" ")[0];
    const timing =
      timeframe === "asap"
        ? "Right away (within 15 minutes)"
        : timeframe === "morning"
          ? "This Morning (8:00 AM – 12:00 PM)"
          : timeframe === "afternoon"
            ? "This Afternoon (12:00 PM – 4:00 PM)"
            : timeframe === "evening"
              ? "This Evening (after 5:00 PM)"
              : timeframe;

    await sendToFormSubmit({
      "Request Type":       "⚡ Quick Callback Request",
      "Patient Name":       name,
      "Phone":              phone,
      "Question / Topic":   topic,
      "Preferred Contact":  preferredMethod,
      "Best Time":          timing,
      "Source":             "Website Quick Inquiry — Aura Dental Clinic",

      _subject: `⚡ Callback Needed: ${name} — ${topic}`,
      _template: "table",
      _captcha: "false",
    });

    return {
      success: true,
      message: `Thanks ${firstName}! We'll ${data.preferredMethod === "sms" ? "text" : "call"} you about "${topic}" shortly.`,
    };
  } catch (error) {
    console.error("submitExpressCallback error:", error);
    return {
      success: false,
      error: "Could not submit your request right now. Please call us directly at (555) 888-3368.",
    };
  }
}
