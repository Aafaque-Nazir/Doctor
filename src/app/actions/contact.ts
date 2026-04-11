"use server";

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/aafaquebuisness@gmail.com";

export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const concern = formData.get("concern");
    const notes = formData.get("notes");

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.length < 2) {
      return { success: false, error: "Please provide a valid full name." };
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return { success: false, error: "Please provide a valid email address." };
    }
    if (!phone || typeof phone !== "string" || phone.length < 7) {
      return { success: false, error: "Please provide a valid phone number." };
    }

    // Send to FormSubmit.co with clean template
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // Lead data
        "Patient Name": fullName,
        "Email Address": email,
        "Phone Number": phone,
        "Primary Concern": concern ?? "General Consultation",
        "Clinical Notes": notes || "No additional notes provided.",

        // FormSubmit config for clean email
        _subject: `🏥 New Consultation Request — ${fullName}`,
        _template: "table",
        _captcha: "false",
        _autoresponse:
          `Dear ${fullName},\n\nThank you for reaching out to ClinicalCurator. We have received your consultation request and our scheduling team will contact you within 4 clinical hours.\n\nHere's a summary of your request:\n• Concern: ${concern ?? "General Consultation"}\n• Phone: ${phone}\n\nWarm regards,\nClinicalCurator Team\nPrecision in Care`,
        _replyto: email,
      }),
    });

    if (!response.ok) {
      console.error(
        "FormSubmit error:",
        response.status,
        await response.text()
      );
      return {
        success: false,
        error: "Failed to send your request. Please try again.",
      };
    }

    return {
      success: true,
      message: "Your consultation request has been received.",
    };
  } catch (error) {
    console.error("Error processing form:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
