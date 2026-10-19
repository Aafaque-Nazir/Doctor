"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookingSuccessModal } from "@/components/modals/BookingSuccessModal";
import { submitChairBooking } from "@/app/actions/contact";

interface ServiceTile {
  id: string;
  name: string;
  desc: string;
  badge: string;
  icon: string;
}

const PRIMARY_SERVICES: ServiceTile[] = [
  {
    id: "Teeth Cleaning & Scaling",
    name: "Cleaning & Checkup",
    desc: "Plaque & tartar removal, stain clearing, and gentle digital exam.",
    badge: "Routine",
    icon: "clean_hands",
  },
  {
    id: "Root Canal Treatment (RCT)",
    name: "Root Canal (RCT)",
    desc: "Single-sitting painless relief to save infected or aching tooth.",
    badge: "Pain Relief",
    icon: "healing",
  },
  {
    id: "Dental Implants",
    name: "Dental Implants",
    desc: "Permanent fixed tooth replacement anchored in the jawbone.",
    badge: "Restorative",
    icon: "dentistry",
  },
  {
    id: "Clear Aligners & Braces",
    name: "Clear Aligners & Braces",
    desc: "Straighten teeth and close gaps comfortably without wires.",
    badge: "Straightening",
    icon: "straighten",
  },
  {
    id: "Cavity Fillings & Repair",
    name: "Cavity Fillings",
    desc: "Tooth-colored composite fillings to repair decay and chips.",
    badge: "Tooth Repair",
    icon: "handyman",
  },
  {
    id: "Wisdom Tooth & Emergency",
    name: "Emergency & Wisdom Tooth",
    desc: "Same-day urgent relief for acute toothache or wisdom tooth pain.",
    badge: "Urgent",
    icon: "emergency",
  },
];

const OTHER_SERVICES = [
  "Dental Crowns & Bridges (Caps)",
  "Teeth Whitening",
  "Porcelain Veneers & Makeovers",
  "Kids Dentistry (Pediatric)",
  "Dentures (Full & Partial)",
  "General Dental Consultation",
];

const DOCTORS = [
  { id: "", name: "First Available Doctor (Fastest)" },
  { id: "dr-sterling", name: "Dr. Marcus Sterling, DDS (General & Cosmetic)" },
  { id: "dr-vance", name: "Dr. Elena Vance, DMD (Aligners & Orthodontics)" },
  { id: "dr-ross", name: "Dr. Julian Ross, DDS (Implants & Root Canals)" },
];

function StepwiseBookingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<string>(PRIMARY_SERVICES[0].id);
  const [doctor, setDoctor] = useState<string>("");
  const [date, setDate] = useState<string>(
    () => new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [timeSlot, setTimeSlot] = useState<string>("morning");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [insuranceType, setInsuranceType] = useState<string>("ppo");
  const [botTrap, setBotTrap] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState({
    name: "",
    service: "",
    date: "",
    doctor: "",
  });

  // Handle URL pre-selection if coming from a specific service page
  useEffect(() => {
    const urlService = searchParams.get("service");
    if (!urlService) return;

    const allOptions = [...PRIMARY_SERVICES.map((s) => s.id), ...OTHER_SERVICES];
    const match = allOptions.find((name) =>
      name.toLowerCase().includes(urlService.toLowerCase()) ||
      urlService.toLowerCase().includes(name.toLowerCase())
    );

    if (match) {
      setService(match);
    } else {
      setService(urlService);
    }
  }, [searchParams]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!date) {
        alert("Please select a date.");
        return;
      }
      setStep(3);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill in your name, phone number, and email.");
      return;
    }

    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || fullName.trim();
    const lastName = nameParts.slice(1).join(" ") || "Patient";

    setIsSubmitting(true);
    try {
      await submitChairBooking({
        firstName,
        lastName,
        email,
        phone,
        service,
        doctor,
        date,
        timeSlot,
        insuranceType,
        botTrap,
      });

      setSubmittedDetails({
        name: fullName.trim(),
        service,
        date: `${date} (${timeSlot.toUpperCase()})`,
        doctor: doctor || "First Available Doctor",
      });
      setIsSubmitted(true);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Booking error:", err);
      alert("Something went wrong submitting your booking. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPrimaryServiceSelected = PRIMARY_SERVICES.some((s) => s.id === service);

  return (
    <div className="w-full text-left">
      {/* Step Progress Tracker */}
      <div className="mb-6 pb-4 border-b border-zinc-200">
        <div className="flex items-center justify-between text-xs font-bold text-zinc-950 mb-2">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center text-[10px]">
              {step}
            </span>
            <span>
              {step === 1 && "Step 1 of 3: Select Treatment"}
              {step === 2 && "Step 2 of 3: Preferred Date & Time"}
              {step === 3 && "Step 3 of 3: Your Information"}
            </span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-600">
            {step === 1 && "Next: Schedule"}
            {step === 2 && "Next: Contact"}
            {step === 3 && "Final Step"}
          </span>
        </div>

        {/* Hairline Progress Bar */}
        <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-950 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <div>
            {/* Honeypot field for bot protection */}
            <input
              type="text"
              name="bot_trap_stepper"
              tabIndex={-1}
              autoComplete="off"
              value={botTrap}
              onChange={(e) => setBotTrap(e.target.value)}
              className="hidden opacity-0 pointer-events-none absolute -left-9999px"
              aria-hidden="true"
            />

            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-4 text-left"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight">
                    What can we help you with?
                  </h3>
                  <p className="text-xs text-zinc-700 mt-0.5">
                    Select your treatment or choose from the list below.
                  </p>
                </div>

                {/* If selected treatment is from dropdown or outside primary 6 */}
                {!isPrimaryServiceSelected && (
                  <div className="p-3 rounded-2xl bg-zinc-950 text-white flex items-center justify-between gap-3 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-white">
                        check_circle
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                          Selected Treatment
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-white">
                          {service}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setService(PRIMARY_SERVICES[0].id)}
                      className="text-[11px] underline text-zinc-300 hover:text-white cursor-pointer"
                    >
                      Change
                    </button>
                  </div>
                )}

                {/* 6 Clean Primary Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRIMARY_SERVICES.map((srv) => {
                    const isSelected = service === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setService(srv.id)}
                        className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between gap-2.5 active:scale-[0.99] hover:-translate-y-0.5 ${
                          isSelected
                            ? "border-2 border-zinc-950 bg-white ring-2 ring-zinc-950/10 shadow-sm"
                            : "border border-zinc-300 bg-white hover:border-zinc-950 hover:shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`material-symbols-outlined text-[18px] ${
                              isSelected ? "text-zinc-950 font-bold" : "text-zinc-700"
                            }`}
                          >
                            {srv.icon}
                          </span>
                          <span className="text-[9px] font-bold tracking-wider uppercase text-zinc-800 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                            {srv.badge}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-zinc-950 tracking-tight leading-snug">
                            {srv.name}
                          </h4>
                          <p className="text-[11px] text-zinc-700 mt-0.5 leading-relaxed font-normal">
                            {srv.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Uncluttered Dropdown for All Other Treatments */}
                <div className="pt-1">
                  <label className="block text-xs font-bold text-zinc-950 mb-1">
                    Or select another treatment:
                  </label>
                  <select
                    value={isPrimaryServiceSelected ? "" : service}
                    onChange={(e) => {
                      if (e.target.value) setService(e.target.value);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white cursor-pointer"
                  >
                    <option value="">-- Choose other treatments (Crowns, Whitening, Veneers, Kids...) --</option>
                    {OTHER_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Doctor Selection */}
                <div className="pt-1">
                  <label className="block text-xs font-bold text-zinc-950 mb-1">
                    Preferred Doctor (Optional)
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white cursor-pointer"
                  >
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    <span>Choose Date & Time</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-4 text-left"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                    When would you like to visit?
                  </h3>
                  <p className="text-xs text-zinc-700 font-medium mt-0.5">
                    Pick your preferred date and time of day.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-950 mb-1">
                      Select Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white cursor-pointer"
                    />
                    <p className="text-[11px] text-zinc-700 font-medium mt-1">
                      Open Monday – Saturday from 8:00 AM.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-950 mb-1.5">
                      Preferred Time of Day *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "morning", title: "Morning", time: "8am – 12pm" },
                        { id: "afternoon", title: "Afternoon", time: "12pm – 4pm" },
                        { id: "evening", title: "Evening", time: "4pm – 6pm" },
                      ].map((slot) => {
                        const isSelected = timeSlot === slot.id;
                        return (
                          <div
                            key={slot.id}
                            onClick={() => setTimeSlot(slot.id)}
                            className={`p-3 rounded-xl border text-center cursor-pointer transition-all duration-150 active:scale-95 ${
                              isSelected
                                ? "border-zinc-950 bg-zinc-950 text-white font-bold shadow-sm"
                                : "border-zinc-300 bg-white hover:border-zinc-950 text-zinc-800"
                            }`}
                          >
                            <p className="text-xs font-bold">{slot.title}</p>
                            <p
                              className={`text-[10px] font-mono mt-0.5 ${
                                isSelected ? "text-zinc-200" : "text-zinc-600 font-medium"
                              }`}
                            >
                              {slot.time}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    <span>Enter Your Details</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PATIENT CONTACT & FINALIZE */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-4 text-left"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                    Who is this appointment for?
                  </h3>
                  <p className="text-xs text-zinc-700 font-medium mt-0.5">
                    Enter your contact details so our clinic can hold your spot.
                  </p>
                </div>

                {/* Appointment Review Summary Pill */}
                <div className="p-3.5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 text-xs space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                    Appointment Summary
                  </p>
                  <p className="font-bold text-zinc-950 text-xs sm:text-sm">
                    {service}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-zinc-700 text-[11px] font-medium pt-0.5">
                    <span>📅 {date}</span>
                    <span>⏰ {timeSlot === "morning" ? "Morning (8am-12pm)" : timeSlot === "afternoon" ? "Afternoon (12pm-4pm)" : "Evening (4pm-6pm)"}</span>
                    {doctor && (
                      <span>👨‍⚕️ {DOCTORS.find((d) => d.id === doctor)?.name.split(" ")[1]}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Maya Harrison"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-950 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-950 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="maya@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-950 mb-1">
                      Payment / Insurance Preference
                    </label>
                    <select
                      value={insuranceType}
                      onChange={(e) => setInsuranceType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 transition-colors bg-white cursor-pointer"
                    >
                      <option value="ppo">PPO Dental Insurance (Delta, Cigna, MetLife, Aetna, etc.)</option>
                      <option value="self-pay">Self-Pay (Cash / Card / Payment Plan)</option>
                      <option value="unsure">Not Sure / Check Benefits on Arrival</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFinalSubmit}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving...</span>
                      </>
                    ) : (
                      <span>Confirm Appointment</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            key="confirmed-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6 space-y-4 bg-white rounded-3xl border border-zinc-300 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-950 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[22px] font-bold">check</span>
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
              Appointment Request Received
            </h3>
            <p className="text-sm text-zinc-800 max-w-md mx-auto leading-relaxed">
              Thank you, {submittedDetails.name}. Your visit for{" "}
              <strong className="text-zinc-950 font-bold">{submittedDetails.service}</strong> on{" "}
              <strong className="text-zinc-950 font-bold">{submittedDetails.date}</strong> has been
              received by our clinic.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs font-bold text-zinc-950 underline pt-2 inline-block cursor-pointer hover:text-zinc-800"
            >
              Schedule Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal Confirmation Dialog */}
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

export function StepwiseBookingForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-zinc-500">Loading booking form...</div>}>
      <StepwiseBookingContent />
    </Suspense>
  );
}
