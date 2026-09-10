"use server";

// ---------------------------------------------------------------------------
// Types
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
}

export interface ExpressCallbackPayload {
  name: string;
  phone: string;
  topic: string;
  preferredMethod: "call" | "sms";
  timeframe: string;
}

// ---------------------------------------------------------------------------
// Config — reads from environment only
// ---------------------------------------------------------------------------

function getFormSubmitUrl(): string {
  const email = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
  if (!email) {
    throw new Error(
      "CONTACT_FORM_RECIPIENT_EMAIL is not set. Add it to .env.local."
    );
  }
  return `https://formsubmit.co/ajax/${email}`;
}

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL;

// ---------------------------------------------------------------------------
// Display-label maps
// ---------------------------------------------------------------------------

const DOCTOR_MAP: Record<string, string> = {
  "dr-sterling": "Dr. Marcus Sterling, DDS — Cosmetic & Veneers",
  "dr-vance": "Dr. Elena Vance, DMD — Orthodontics & Invisalign",
  "dr-ross": "Dr. Julian Ross, DDS — Implantology & Surgery",
  "": "First Available Specialist",
};

const TIME_SLOT_MAP: Record<string, string> = {
  morning: "Morning (8:00 AM – 12:00 PM)",
  afternoon: "Afternoon (12:00 PM – 4:00 PM)",
  evening: "Late Afternoon (4:00 PM – 6:00 PM)",
};

const INSURANCE_MAP: Record<string, string> = {
  ppo: "Dental PPO (In-Network)",
  membership: "Aura Studio Membership",
  "self-pay": "Self-Pay / 0% Financing",
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
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (SITE_ORIGIN) {
    headers.Origin = SITE_ORIGIN;
    headers.Referer = `${SITE_ORIGIN}/`;
  }

  const res = await fetch(getFormSubmitUrl(), {
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
      "[FormSubmit]",
      res.status,
      data?.message ?? "Unknown error — check activation / spam"
    );
  }

  return data;
}

// ---------------------------------------------------------------------------
// Server Action — Chair Booking  (/book, /contact)
// ---------------------------------------------------------------------------

export async function submitChairBooking(
  data: ChairBookingPayload
): Promise<FormState> {
  try {
    const fullName = `${data.firstName} ${data.lastName}`.trim();

    if (!fullName || fullName.length < 2) {
      return { success: false, error: "Please provide a valid full name." };
    }
    if (!data.phone || data.phone.length < 7) {
      return { success: false, error: "Please provide a valid phone number." };
    }
    if (!data.email || !data.email.includes("@")) {
      return { success: false, error: "Please provide a valid email address." };
    }

    const doctor = DOCTOR_MAP[data.doctor ?? ""] ?? "First Available Specialist";
    const timeSlot = TIME_SLOT_MAP[data.timeSlot] ?? data.timeSlot;
    const insurance = INSURANCE_MAP[data.insuranceType ?? "ppo"] ?? data.insuranceType;

    const comforts: string[] = [];
    if (data.amenities?.headphones) comforts.push("Noise-canceling headphones & Netflix");
    if (data.amenities?.anxietyFriendly) comforts.push("Anxiety-friendly gentle care");
    const comfortLabel = comforts.length > 0 ? comforts.join(" · ") : "Standard care";

    await sendToFormSubmit({
      // ── Clinic notification email (what arrives in YOUR inbox) ──────
      "Reservation Type":     "🦷 Dental Chair Reservation",
      "━━━ PATIENT INFO ━━━": "───────────────────────",
      "Patient Name":         fullName,
      "Phone":                data.phone,
      "Email":                data.email,
      "━━━ APPOINTMENT ━━━":  "───────────────────────",
      "Service Requested":    data.service,
      "Treating Specialist":  doctor,
      "Preferred Date":       data.date,
      "Time Window":          timeSlot,
      "━━━ BILLING ━━━":      "───────────────────────",
      "Insurance / Payment":  insurance,
      "Carrier":              data.insuranceCarrier?.trim() || "Not specified",
      "━━━ PREFERENCES ━━━":  "───────────────────────",
      "Comfort Amenities":    comfortLabel,
      "Patient Notes":        data.notes?.trim() || "None",
      "Source":               "Online Booking — aura-dental.com",

      // ── FormSubmit configuration ───────────────────────────────────
      _subject: `🦷 New Booking: ${fullName} — ${data.service} (${data.date})`,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      _autoresponse: [
        `Hello ${data.firstName},`,
        ``,
        `Your appointment request with Aura Dental & Smile Studio has been received successfully.`,
        ``,
        `Here are the details we have on file:`,
        ``,
        `───────────────────────────────────────`,
        `  APPOINTMENT SUMMARY`,
        `───────────────────────────────────────`,
        ``,
        `  Service:        ${data.service}`,
        `  Specialist:     ${doctor}`,
        `  Date:           ${data.date}`,
        `  Time Window:    ${timeSlot}`,
        `  Payment Plan:   ${insurance}`,
        comforts.length > 0 ? `  Comfort Add-ons: ${comfortLabel}` : ``,
        data.notes?.trim() ? `  Your Notes:     ${data.notes.trim()}` : ``,
        ``,
        `───────────────────────────────────────`,
        `  WHAT HAPPENS NEXT`,
        `───────────────────────────────────────`,
        ``,
        `  1. Our patient concierge will call or text you within`,
        `     15–30 minutes to confirm your exact chair time.`,
        ``,
        `  2. We'll verify your insurance coverage and share a`,
        `     cost estimate before your visit.`,
        ``,
        `  3. On the day of your appointment, check in at the`,
        `     front desk 10 minutes early for a smooth start.`,
        ``,
        `───────────────────────────────────────`,
        `  CONTACT US`,
        `───────────────────────────────────────`,
        ``,
        `  Phone:    +1 (555) 888-3368`,
        `  Address:  124 Precision Ave, Suite 400`,
        `            New York, NY 10001`,
        `  Hours:    Mon–Sat, 8:00 AM – 6:00 PM`,
        ``,
        `If you need to reschedule or have questions, reply to`,
        `this email or call us — we're happy to help.`,
        ``,
        `Warm regards,`,
        `The Aura Dental & Smile Studio Team`,
      ]
        .filter((line) => line !== undefined)
        .join("\n"),
    });

    return {
      success: true,
      message: "Your reservation has been received. We'll be in touch shortly!",
    };
  } catch (error) {
    console.error("submitChairBooking error:", error);
    return {
      success: false,
      error: "Could not send your request. Please call us directly.",
    };
  }
}

// ---------------------------------------------------------------------------
// Server Action — Express Callback  (homepage #contact)
// ---------------------------------------------------------------------------

export async function submitExpressCallback(
  data: ExpressCallbackPayload
): Promise<FormState> {
  try {
    if (!data.name || data.name.trim().length < 2) {
      return { success: false, error: "Please enter your name." };
    }
    if (!data.phone || data.phone.trim().length < 7) {
      return { success: false, error: "Please enter a valid phone number." };
    }

    const firstName = data.name.trim().split(" ")[0];
    const method =
      data.preferredMethod === "sms" ? "SMS / Text Message" : "Phone Call";
    const timing =
      data.timeframe === "asap"
        ? "ASAP (within 15 minutes)"
        : data.timeframe === "morning"
          ? "This Morning (8 AM – 12 PM)"
          : data.timeframe === "afternoon"
            ? "This Afternoon (12 PM – 4 PM)"
            : data.timeframe === "evening"
              ? "This Evening (after 5 PM)"
              : data.timeframe;

    await sendToFormSubmit({
      // ── Clinic notification email ──────────────────────────────────
      "Request Type":           "⚡ Priority Callback Request",
      "━━━ PATIENT INFO ━━━":   "───────────────────────",
      "Name":                   data.name,
      "Phone":                  data.phone,
      "━━━ DETAILS ━━━":        "───────────────────────",
      "Topic / Concern":        data.topic,
      "Preferred Contact":      method,
      "Best Time to Reach":     timing,
      "Response Commitment":    "15-minute callback window",
      "Source":                 "Homepage Priority Concierge — aura-dental.com",

      // ── FormSubmit config ──────────────────────────────────────────
      _subject: `⚡ Callback Needed: ${data.name} — ${data.topic}`,
      _template: "table",
      _captcha: "false",
    });

    return {
      success: true,
      message: `Thanks ${firstName}! We'll ${data.preferredMethod === "sms" ? "text" : "call"} you about "${data.topic}" shortly.`,
    };
  } catch (error) {
    console.error("submitExpressCallback error:", error);
    return {
      success: false,
      error: "Could not submit your request. Please try again.",
    };
  }
}
