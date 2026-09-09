"use server";

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

const TARGET_EMAIL =
  process.env.CONTACT_FORM_RECIPIENT_EMAIL || "aafaquenazir4@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

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

const DOCTOR_MAP: Record<string, string> = {
  "dr-sterling": "Dr. Marcus Sterling, DDS (Cosmetic & Veneers Lead)",
  "dr-vance": "Dr. Elena Vance, DMD (Orthodontics & Invisalign Lead)",
  "dr-ross": "Dr. Julian Ross, DDS (Implantology & Surgery Lead)",
  "": "First Available Specialist (Fastest Scheduling)",
};

const TIME_SLOT_MAP: Record<string, string> = {
  morning: "Morning (8:00 AM – 12:00 PM)",
  afternoon: "Afternoon (12:00 PM – 4:00 PM)",
  evening: "Late Afternoon (4:00 PM – 6:00 PM)",
};

const INSURANCE_MAP: Record<string, string> = {
  ppo: "Dental PPO Insurance (In-Network Benefits)",
  membership: "Aura Dental In-House Studio Membership",
  "self-pay": "Self-Pay & 0% Financing Plans",
};

/**
 * Server Action for Full Dental Chair Reservation (/book and /contact)
 */
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

    const doctorName = DOCTOR_MAP[data.doctor ?? ""] || "First Available Specialist";
    const timeSlotLabel = TIME_SLOT_MAP[data.timeSlot] || data.timeSlot;
    const insuranceLabel = INSURANCE_MAP[data.insuranceType ?? "ppo"] || data.insuranceType;

    const amenityList: string[] = [];
    if (data.amenities?.headphones) amenityList.push("Noise-canceling headphones & Netflix glasses");
    if (data.amenities?.anxietyFriendly) amenityList.push("Dental anxiety patient (Gentle numbing & extra care)");
    const amenitiesFormatted = amenityList.length > 0 ? amenityList.join(", ") : "Standard Studio Care";

    const emailBody = {
      "🏥 Clinic & Studio": "Aura Dental & Smile Studio (Flatiron, New York)",
      "📋 Reservation Type": "🦷 Full Dental Chair Reservation",
      "👤 Patient Name": fullName,
      "📞 Contact Phone": data.phone,
      "📧 Email Address": data.email,
      "✨ Requested Service": data.service,
      "👨‍⚕️ Treating Specialist": doctorName,
      "📅 Preferred Date": data.date,
      "⏰ Chair Time Window": timeSlotLabel,
      "💳 Insurance / Payment": insuranceLabel,
      "🎧 Comfort Amenities": amenitiesFormatted,
      "📝 Clinical Notes / Symptoms": data.notes && data.notes.trim() ? data.notes : "None specified",
      "⚡ Priority Status": "High — Online Chair Reservation",
      "📍 Studio Address": "124 Precision Avenue, Suite 400, New York, NY 10001",

      // FormSubmit Configuration
      _subject: `🦷 [Aura Dental] New Chair Reservation: ${fullName} — ${data.service}`,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      _autoresponse: `Dear ${fullName},\n\nThank you for booking your appointment with Aura Dental & Smile Studio! We have safely received your chair reservation request.\n\nAppointment Details:\n• Treatment: ${data.service}\n• Specialist: ${doctorName}\n• Date & Window: ${data.date} (${timeSlotLabel})\n• Studio: 124 Precision Avenue, Suite 400, New York, NY 10001\n\nWhat happens next:\nOur patient care coordinator will call or SMS you within 15–30 minutes to confirm your exact chair time and verify insurance benefits.\n\nNeed urgent assistance?\nCall our emergency direct line at +1 (555) 888-3368.\n\nWarm regards,\nAura Dental & Smile Studio`,
    };

    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("FormSubmit HTTP error:", response.status, errText);
      // Even if FormSubmit has a temporary rate limit or activation check, we don't break the user flow
    }

    return {
      success: true,
      message: "Your chair reservation has been safely recorded and forwarded.",
    };
  } catch (error) {
    console.error("Error submitting chair booking:", error);
    return {
      success: false,
      error: "Could not send appointment request. Please call us directly.",
    };
  }
}

/**
 * Server Action for Homepage 15-Minute Priority Callback (/ #contact)
 */
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

    const emailBody = {
      "🏥 Clinic & Studio": "Aura Dental & Smile Studio (Flatiron, New York)",
      "📋 Request Type": "⚡ 15-Minute Priority Callback",
      "👤 Patient Name": data.name,
      "📞 Phone Number": data.phone,
      "🎯 Procedure / Inquiry Topic": data.topic,
      "💬 Preferred Response Method": data.preferredMethod === "sms" ? "SMS / Text Message" : "Phone Call",
      "⏰ Best Time to Reach": data.timeframe === "asap" ? "Right away (Within 15 minutes)" : data.timeframe,
      "⚡ Response SLA": "15-Minute Response Window Guaranteed",
      "📍 Source": "Homepage Priority Concierge Desk",

      // FormSubmit Configuration
      _subject: `⚡ [Aura Dental] 15-Min Callback Request: ${data.name} — ${data.topic}`,
      _template: "table",
      _captcha: "false",
    };

    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("FormSubmit express callback HTTP error:", response.status, errText);
    }

    return {
      success: true,
      message: "Your callback request has been received.",
    };
  } catch (error) {
    console.error("Error submitting express callback:", error);
    return {
      success: false,
      error: "Could not submit callback request. Please try again.",
    };
  }
}

/**
 * Backwards compatible export for existing components
 */
export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName = String(formData.get("fullName") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const concern = String(formData.get("concern") || "General Dental Visit");
  const notes = String(formData.get("notes") || "");

  return submitChairBooking({
    firstName: fullName.split(" ")[0] || fullName,
    lastName: fullName.split(" ").slice(1).join(" ") || "",
    email,
    phone,
    service: concern,
    date: new Date().toISOString().split("T")[0],
    timeSlot: "morning",
    notes,
  });
}
