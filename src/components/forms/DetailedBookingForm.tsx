"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingSuccessModal } from "@/components/modals/BookingSuccessModal";

interface ServiceOption {
  id: string;
  title: string;
  duration: string;
  desc: string;
  icon: string;
}

const SERVICES: ServiceOption[] = [
  {
    id: "Porcelain Veneers & Smile Makeover",
    title: "Porcelain Veneers & Smile Makeover",
    duration: "45 Min Consultation",
    desc: "Digital 3D smile scan, mockup preview, and aesthetic assessment.",
    icon: "auto_awesome",
  },
  {
    id: "Invisalign® Clear Aligners",
    title: "Invisalign® Clear Aligners",
    duration: "30 Min iTero Scan",
    desc: "Fast digital scan of bite, aligner plan preview, zero metal braces.",
    icon: "straighten",
  },
  {
    id: "Gentle Cleaning & Regular Checkup",
    title: "Gentle Cleaning & Full Exam",
    duration: "60 Min Comprehensive",
    desc: "Ultrasonic scaling, enamel polishing, oral cancer screening, low-dose x-rays.",
    icon: "clean_hands",
  },
  {
    id: "Dental Implants & Restorations",
    title: "Dental Implants & Crowns",
    duration: "45 Min Evaluation",
    desc: "CBCT 3D bone scan, titanium post planning, custom ceramic crown.",
    icon: "dentistry",
  },
  {
    id: "Emergency Toothache Relief",
    title: "Same-Day Emergency Relief",
    duration: "Immediate Chair Access",
    desc: "Severe tooth pain, chipped tooth, or loose restoration repair.",
    icon: "emergency",
  },
];

const DOCTORS = [
  {
    id: "",
    name: "First Available Specialist",
    role: "Fastest appointment scheduling",
    icon: "schedule",
  },
  {
    id: "dr-sterling",
    name: "Dr. Marcus Sterling, DDS",
    role: "Cosmetic & Veneers Lead · NYU Graduate",
    icon: "person",
  },
  {
    id: "dr-vance",
    name: "Dr. Elena Vance, DMD",
    role: "Orthodontics & Invisalign · Harvard Dental",
    icon: "person",
  },
  {
    id: "dr-ross",
    name: "Dr. Julian Ross, DDS",
    role: "Implantology & Surgery · Columbia Dental",
    icon: "person",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedDetails({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        service: formData.service,
        date: `${formData.date} (${formData.timeSlot === "morning" ? "Morning 8am-12pm" : formData.timeSlot === "afternoon" ? "Afternoon 12pm-4pm" : "Evening 4pm-6pm"})`,
        doctor: formData.doctor,
      });
      setIsModalOpen(true);
    }, 800);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-white";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5";

  return (
    <div className="w-full">
      {/* Visual Stepper Tracker */}
      <div className="mb-8 pb-4 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 text-xs font-bold">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`flex items-center gap-1.5 transition-colors ${
              currentStep === 1 ? "text-sky-700 font-extrabold" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
              currentStep === 1 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-700"
            }`}>1</span>
            <span>Treatment & Doctor</span>
          </button>

          <span className="text-slate-300">/</span>

          <button
            type="button"
            onClick={() => setCurrentStep(2)}
            className={`flex items-center gap-1.5 transition-colors ${
              currentStep === 2 ? "text-sky-700 font-extrabold" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
              currentStep === 2 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-700"
            }`}>2</span>
            <span>Date & Time</span>
          </button>

          <span className="text-slate-300">/</span>

          <button
            type="button"
            onClick={() => setCurrentStep(3)}
            className={`flex items-center gap-1.5 transition-colors ${
              currentStep === 3 ? "text-sky-700 font-extrabold" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
              currentStep === 3 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-700"
            }`}>3</span>
            <span>Patient & Insurance</span>
          </button>
        </div>

        <span className="hidden md:inline-flex text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
          ● Chair Reservation Portal
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {/* STEP 1: TREATMENT & DOCTOR SELECTION */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Step 1: Choose Your Treatment & Specialist
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select what you would like to have done during your appointment.
                  </p>
                </div>

                {/* Service Cards Grid */}
                <div className="space-y-2.5">
                  <label className={labelClass}>Select Dental Procedure *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setFormData({ ...formData, service: srv.id })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between gap-2 ${
                          formData.service === srv.id
                            ? "border-sky-600 bg-sky-50/60 ring-2 ring-sky-500/20 shadow-xs"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className={`material-symbols-outlined text-[20px] ${
                            formData.service === srv.id ? "text-sky-700" : "text-slate-400"
                          }`}>
                            {srv.icon}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold">
                            {srv.duration}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{srv.title}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{srv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Selection Cards */}
                <div className="space-y-2.5 pt-2">
                  <label className={labelClass}>Preferred Specialist (Optional)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DOCTORS.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => setFormData({ ...formData, doctor: doc.id })}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                          formData.doctor === doc.id
                            ? "border-slate-900 bg-slate-900 text-white shadow-xs"
                            : "border-slate-200 hover:border-slate-300 bg-white text-slate-900"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          formData.doctor === doc.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          <span className="material-symbols-outlined text-[18px]">{doc.icon}</span>
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-bold truncate">{doc.name}</p>
                          <p className={`text-[10px] truncate ${
                            formData.doctor === doc.id ? "text-slate-300" : "text-slate-500"
                          }`}>
                            {doc.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 1 Next Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Proceed to Date & Time</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME SLOTS */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Step 2: Choose Date & Chair Time Window
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Pick your ideal appointment day and chair window.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Preferred Date *</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={inputClass}
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Open Mon–Sat. Sunday is on-call emergency care.</p>
                  </div>

                  <div>
                    <label className={labelClass}>Chair Time Window *</label>
                    <div className="space-y-2">
                      {[
                        { id: "morning", label: "Morning", time: "8:00 AM – 12:00 PM", icon: "wb_sunny" },
                        { id: "afternoon", label: "Afternoon", time: "12:00 PM – 4:00 PM", icon: "wb_twilight" },
                        { id: "evening", label: "Late Afternoon", time: "4:00 PM – 6:00 PM", icon: "nights_stay" },
                      ].map((slot) => (
                        <div
                          key={slot.id}
                          onClick={() => setFormData({ ...formData, timeSlot: slot.id })}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            formData.timeSlot === slot.id
                              ? "border-sky-600 bg-sky-50 text-sky-900 font-bold"
                              : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-sky-600">
                              {slot.icon}
                            </span>
                            <span className="text-xs">{slot.label}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-mono">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2 Nav Buttons */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back to Treatment</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
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
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Step 3: Patient Information & Comfort Preferences
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your details are protected by medical confidentiality standards.
                  </p>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      required
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
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Insurance & Payment Preference */}
                <div className="space-y-3 pt-2">
                  <label className={labelClass}>Insurance & Billing Preference</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "ppo", title: "Dental PPO Insurance", desc: "Delta, Cigna, MetLife, Aetna, Guardian" },
                      { id: "membership", title: "Aura Studio Plan", desc: "In-house membership (No deductibles)" },
                      { id: "self-pay", title: "Self-Pay & Financing", desc: "0% APR monthly installments" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, insuranceType: opt.id })}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          formData.insuranceType === opt.id
                            ? "border-sky-600 bg-sky-50 text-sky-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <p className="text-xs font-bold">{opt.title}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comfort Amenities */}
                <div className="space-y-2 pt-1">
                  <label className={labelClass}>Complimentary Studio Amenities</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={formData.amenities.headphones}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenities: { ...formData.amenities, headphones: e.target.checked },
                          })
                        }
                        className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                      />
                      <span>Noise-canceling headphones & Netflix glasses</span>
                    </label>

                    <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={formData.amenities.anxietyFriendly}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenities: { ...formData.amenities, anxietyFriendly: e.target.checked },
                          })
                        }
                        className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
                      />
                      <span>I experience dental anxiety (extra gentle numbing)</span>
                    </label>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div>
                  <label className={labelClass}>Special Requests or Symptoms (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you want to achieve or any tooth sensitivity you feel..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Step 3 Nav & Final Submit */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back to Date</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving Your Chair...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[17px]">event_available</span>
                        <span>Confirm & Reserve Appointment</span>
                      </>
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
            className="text-center py-16 px-6 space-y-4 bg-slate-50/70 rounded-3xl border border-slate-200"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Appointment Chair Reserved
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, {submittedDetails.name}! Your visit for <strong className="text-slate-900">{submittedDetails.service}</strong> on <strong className="text-slate-900">{submittedDetails.date}</strong> is recorded.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="text-xs font-semibold text-sky-700 hover:underline pt-2 inline-block cursor-pointer"
            >
              Reserve Another Appointment Slot
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal Popup with Digital Pass Ticket */}
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
