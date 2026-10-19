"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingSuccessModal } from "@/components/modals/BookingSuccessModal";
import { submitChairBooking } from "@/app/actions/contact";

interface ServiceOption {
  id: string;
  title: string;
  duration: string;
  desc: string;
}

const SERVICES: ServiceOption[] = [
  {
    id: "Porcelain Veneers & Smile Makeover",
    title: "Porcelain Veneers & Smile Makeover",
    duration: "45 Min Consultation",
    desc: "Digital 3D smile scan, mockup preview, and aesthetic assessment.",
  },
  {
    id: "Invisalign® Clear Aligners",
    title: "Invisalign® Clear Aligners",
    duration: "30 Min Scan",
    desc: "Fast digital scan of bite, aligner plan preview, zero metal braces.",
  },
  {
    id: "Gentle Cleaning & Regular Checkup",
    title: "Gentle Cleaning & Full Exam",
    duration: "60 Min Visit",
    desc: "Gentle plaque removal, enamel polish, oral exam, low-dose digital x-rays.",
  },
  {
    id: "Dental Implants & Restorations",
    title: "Dental Implants & Crowns",
    duration: "45 Min Evaluation",
    desc: "3D digital scans, gentle implant planning, custom ceramic crown.",
  },
  {
    id: "Emergency Toothache Relief",
    title: "Same-Day Emergency Relief",
    duration: "Immediate Walk-In",
    desc: "Severe tooth pain, chipped tooth, or lost filling repair.",
  },
];

const DOCTORS = [
  {
    id: "",
    name: "Earliest Available Doctor",
    role: "Fastest appointment scheduling",
  },
  {
    id: "dr-sterling",
    name: "Dr. Marcus Sterling, DDS",
    role: "Aesthetics & Veneers · NYU",
  },
  {
    id: "dr-vance",
    name: "Dr. Elena Vance, DMD",
    role: "Orthodontics & Aligners · Columbia",
  },
  {
    id: "dr-ross",
    name: "Dr. Julian Ross, DDS",
    role: "Implants & Restorative · Penn Dental",
  },
];

export function DetailedBookingForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Porcelain Veneers & Smile Makeover",
    doctor: "",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    timeSlot: "morning", // morning, afternoon, evening
    insuranceType: "ppo", // ppo, membership, self-pay
    insuranceCarrier: "",
    amenities: {
      headphones: true,
      anxietyFriendly: false,
    },
    notes: "",
    botTrap: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState({
    name: "",
    service: "",
    date: "",
    doctor: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in your contact information.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitChairBooking({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        doctor: formData.doctor,
        date: formData.date,
        timeSlot: formData.timeSlot,
        insuranceType: formData.insuranceType,
        insuranceCarrier: formData.insuranceCarrier,
        amenities: formData.amenities,
        notes: formData.notes,
        botTrap: formData.botTrap,
      });
    } catch (err) {
      console.error("Booking submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedDetails({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        service: formData.service,
        date: `${formData.date} (${formData.timeSlot === "morning" ? "Morning 8am-12pm" : formData.timeSlot === "afternoon" ? "Afternoon 12pm-4pm" : "Evening 4pm-6pm"})`,
        doctor: formData.doctor,
      });
      setIsModalOpen(true);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900/10 transition-colors bg-white";
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5";

  return (
    <div className="w-full">
      {/* Visual Stepper Tracker - Minimal Architectural Stepper */}
      <div className="mb-10 pb-5 border-b border-zinc-300 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 text-xs">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`flex items-baseline gap-2 transition-colors cursor-pointer ${
              currentStep === 1 ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950 font-semibold"
            }`}
          >
            <span className="font-mono text-[11px] text-zinc-700 font-bold">01</span>
            <span>Treatment</span>
          </button>

          <span className="text-zinc-400 font-bold">/</span>

          <button
            type="button"
            onClick={() => setCurrentStep(2)}
            className={`flex items-baseline gap-2 transition-colors cursor-pointer ${
              currentStep === 2 ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950 font-semibold"
            }`}
          >
            <span className="font-mono text-[11px] text-zinc-700 font-bold">02</span>
            <span>Schedule</span>
          </button>

          <span className="text-zinc-400 font-bold">/</span>

          <button
            type="button"
            onClick={() => setCurrentStep(3)}
            className={`flex items-baseline gap-2 transition-colors cursor-pointer ${
              currentStep === 3 ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950 font-semibold"
            }`}
          >
            <span className="font-mono text-[11px] text-zinc-700 font-bold">03</span>
            <span>Details</span>
          </button>
        </div>

        <span className="text-[11px] text-zinc-700 font-mono font-bold hidden sm:inline">
          Step {currentStep} of 3
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {/* Honeypot field for bot protection */}
            <input
              type="text"
              name="bot_trap_booking"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botTrap}
              onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
              className="hidden opacity-0 pointer-events-none absolute -left-9999px"
              aria-hidden="true"
            />

            {/* STEP 1: TREATMENT & DOCTOR SELECTION */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    Select Your Treatment & Doctor
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Choose the visit category and optionally select an attending specialist.
                  </p>
                </div>

                {/* Service Cards Grid */}
                <div className="space-y-2.5">
                  <label className={labelClass}>Treatment Category *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setFormData({ ...formData, service: srv.id })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between gap-3 ${
                          formData.service === srv.id
                            ? "border-zinc-950 bg-[#fcfcfb] ring-1 ring-zinc-950/20 shadow-xs"
                            : "border-zinc-300 hover:border-zinc-950 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-zinc-950">{srv.title}</p>
                          <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-mono shrink-0 font-semibold border border-zinc-200">
                            {srv.duration}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-700 leading-relaxed font-normal">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Selection Cards */}
                <div className="space-y-2.5 pt-2">
                  <label className={labelClass}>Preferred Doctor (Optional)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DOCTORS.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => setFormData({ ...formData, doctor: doc.id })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer text-left space-y-1 ${
                          formData.doctor === doc.id
                            ? "border-zinc-950 bg-zinc-950 text-white shadow-xs"
                            : "border-zinc-300 hover:border-zinc-950 bg-white text-zinc-950"
                        }`}
                      >
                        <p className="text-xs font-bold truncate">{doc.name}</p>
                        <p className={`text-[11px] truncate ${
                          formData.doctor === doc.id ? "text-zinc-200 font-medium" : "text-zinc-600 font-medium"
                        }`}>
                          {doc.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 1 Next Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Proceed to Schedule</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME SLOTS */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    Date & Time Preferences
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Select your preferred day and arrival window.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Consultation Date *</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={inputClass}
                    />
                    <p className="text-[11px] text-zinc-700 font-medium mt-1">Open Monday – Saturday from 8:00 AM.</p>
                  </div>

                  <div>
                    <label className={labelClass}>Arrival Window *</label>
                    <div className="space-y-2">
                      {[
                        { id: "morning", label: "Morning Window", time: "8:00 AM – 12:00 PM" },
                        { id: "afternoon", label: "Afternoon Window", time: "12:00 PM – 4:00 PM" },
                        { id: "evening", label: "Late Afternoon Window", time: "4:00 PM – 6:00 PM" },
                      ].map((slot) => (
                        <div
                          key={slot.id}
                          onClick={() => setFormData({ ...formData, timeSlot: slot.id })}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            formData.timeSlot === slot.id
                              ? "border-zinc-950 bg-zinc-950 text-white font-bold shadow-sm"
                              : "border-zinc-300 hover:border-zinc-950 bg-white text-zinc-800"
                          }`}
                        >
                          <span className="text-xs font-bold">{slot.label}</span>
                          <span className={`text-[11px] font-mono ${
                            formData.timeSlot === slot.id ? "text-zinc-200" : "text-zinc-600 font-medium"
                          }`}>{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2 Nav Buttons */}
                <div className="pt-4 flex items-center justify-between border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Proceed to Patient Info</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PATIENT CONTACT & INSURANCE */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    Patient Details & Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Your medical privacy is strictly protected under clinical guidelines.
                  </p>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="e.g. Maya"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="e.g. Harrison"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Insurance & Payment Preference */}
                <div className="space-y-3 pt-2">
                  <label className={labelClass}>Billing & Insurance Option</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "ppo", title: "Dental Insurance (PPO)", desc: "Delta, Cigna, MetLife, Aetna, Guardian" },
                      { id: "membership", title: "Aura Membership", desc: "Direct annual plan with no deductibles" },
                      { id: "self-pay", title: "Direct Self-Pay", desc: "Itemized receipts & 0% APR financing" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, insuranceType: opt.id })}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          formData.insuranceType === opt.id
                            ? "border-zinc-950 bg-[#fcfcfb] ring-1 ring-zinc-950/20 font-bold"
                            : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-950"
                        }`}
                      >
                        <p className="text-xs font-bold text-zinc-950">{opt.title}</p>
                        <p className="text-[11px] text-zinc-600 mt-1 font-medium">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comfort Amenities */}
                <div className="space-y-2 pt-1">
                  <label className={labelClass}>Comfort Preferences</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <label className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-300 bg-white cursor-pointer hover:border-zinc-950">
                      <input
                        type="checkbox"
                        checked={formData.amenities.headphones}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenities: { ...formData.amenities, headphones: e.target.checked },
                          })
                        }
                        className="rounded accent-zinc-950 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-zinc-800 font-medium">Noise-canceling headphones & streaming screen</span>
                    </label>

                    <label className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-300 bg-white cursor-pointer hover:border-zinc-950">
                      <input
                        type="checkbox"
                        checked={formData.amenities.anxietyFriendly}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenities: { ...formData.amenities, anxietyFriendly: e.target.checked },
                          })
                        }
                        className="rounded accent-zinc-950 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-zinc-800 font-medium">Anxious patient protocol (gentle, unhurried pace)</span>
                    </label>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div>
                  <label className={labelClass}>Notes or Tooth Concerns (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you would like evaluated or if any specific tooth is sensitive..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Step 3 Nav & Final Submit */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 cursor-pointer order-2 sm:order-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <span>Submit Appointment Request</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        ) : (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-6 space-y-4 bg-white rounded-3xl border border-zinc-300 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-950 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[22px] font-bold">check</span>
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
              Appointment Request Submitted
            </h3>
            <p className="text-sm text-zinc-800 max-w-md mx-auto leading-relaxed">
              Thank you, {submittedDetails.name}. Your schedule request for <strong className="text-zinc-950 font-bold">{submittedDetails.service}</strong> on <strong className="text-zinc-950 font-bold">{submittedDetails.date}</strong> has been received by our clinic.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="text-xs font-bold text-zinc-950 underline pt-2 inline-block cursor-pointer hover:text-zinc-800"
            >
              Book Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal Popup */}
      <BookingSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patientName={submittedDetails.name}
        service={submittedDetails.service}
        preferredDate={submittedDetails.date}
        doctor={submittedDetails.doctor}
      />
    </div>
  );
}
