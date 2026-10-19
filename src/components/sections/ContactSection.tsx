"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookingSuccessModal } from "@/components/modals/BookingSuccessModal";
import { submitExpressCallback } from "@/app/actions/contact";

const INQUIRY_TOPICS = [
  { id: "emergency", label: "Toothache / Urgent" },
  { id: "veneers", label: "Porcelain Veneers" },
  { id: "invisalign", label: "Invisalign Aligners" },
  { id: "cleaning", label: "Routine Cleaning" },
  { id: "pricing", label: "Insurance & Costs" },
];

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState("Porcelain Veneers");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredMethod: "call", // "call" | "sms"
    timeframe: "asap", // "asap" | "morning" | "afternoon" | "evening"
    botTrap: "", // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await submitExpressCallback({
        name: formData.name,
        phone: formData.phone,
        topic: selectedTopic,
        preferredMethod: formData.preferredMethod as "call" | "sms",
        timeframe: formData.timeframe,
        botTrap: formData.botTrap,
      });
    } catch (err) {
      console.error("Error submitting callback:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-18 bg-white border-b border-zinc-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-lg mb-8 md:mb-10 space-y-1.5 text-left">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
            Contact & Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold tracking-tight text-zinc-950 leading-snug">
            Speak directly with our front desk team.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
            Leave your contact details below. Our friendly team will reach out directly to answer your questions or help you book a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Architectural Directory & Hours */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Studio Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-sm space-y-4">
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold tracking-wider uppercase text-zinc-700">Location</p>
                <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                  Aura Dental · Midtown NYC
                </h3>
                <p className="text-xs text-zinc-700 font-medium">124 Precision Avenue, Suite 400</p>
                <p className="text-xs text-zinc-700 font-medium">New York, NY 10001</p>
                <p className="text-[11px] text-zinc-700 font-medium pt-0.5">Transit: 23rd St Subway (N, Q, R, W, 1, 2)</p>
              </div>

              <div className="pt-3 border-t border-zinc-300 space-y-1 text-xs">
                <p className="text-[10px] font-bold tracking-wider uppercase text-zinc-700">Phone Number</p>
                <a
                  href="tel:+15558883368"
                  className="block text-base font-extrabold text-zinc-950 hover:text-zinc-700 transition-colors"
                >
                  (555) 888-3368
                </a>
              </div>

              <div className="pt-3 border-t border-zinc-300 space-y-1 text-xs text-zinc-700">
                <p className="text-[10px] font-bold tracking-wider uppercase text-zinc-700">Hours of Practice</p>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="font-medium text-zinc-700">Mon – Thu</span>
                  <span className="font-bold text-zinc-950">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="font-medium text-zinc-700">Friday</span>
                  <span className="font-bold text-zinc-950">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-zinc-700">Saturday</span>
                  <span className="font-bold text-zinc-950">9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Link */}
            <div>
              <Link
                href="/book"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 transition-all shadow-sm"
              >
                <span>Book Online in 3 Steps</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Compact Callback Request Desk */}
          <div className="lg:col-span-7 text-left">
            <div className="p-5 sm:p-7 rounded-2xl bg-white border border-zinc-300 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="express-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Honeypot field for bot protection */}
                    <input
                      type="text"
                      name="bot_trap_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.botTrap}
                      onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                      className="hidden opacity-0 pointer-events-none absolute -left-9999px"
                      aria-hidden="true"
                    />

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-zinc-800 block mb-0.5">
                        Quick Callback
                      </span>
                      <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">
                        Request a Quick Phone Call
                      </h3>
                      <p className="text-xs text-zinc-700 mt-0.5">
                        Leave your details and our team will call you back to help.
                      </p>
                    </div>

                    {/* Quick Topic Chips Selector */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-950 mb-1.5">
                        Inquiry Topic *
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {INQUIRY_TOPICS.map((topic) => (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => setSelectedTopic(topic.label)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                              selectedTopic === topic.label
                                ? "bg-zinc-950 text-white shadow-xs"
                                : "bg-white text-zinc-800 hover:text-zinc-950 border border-zinc-300 hover:border-zinc-500 font-semibold"
                            }`}
                          >
                            <span>{topic.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-zinc-950 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Maya Lin"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-950 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white font-medium"
                        />
                      </div>
                    </div>

                    {/* Method & Timing Preferences */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                      <div>
                        <label className="block text-xs font-bold text-zinc-950 mb-1">
                          Contact Preference
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredMethod: "call" })}
                            className={`py-2 px-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1 cursor-pointer transition-all ${
                              formData.preferredMethod === "call"
                                ? "bg-zinc-950 text-white border-zinc-950"
                                : "bg-white border border-zinc-300 text-zinc-800 hover:border-zinc-500 font-semibold"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            Call
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredMethod: "sms" })}
                            className={`py-2 px-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1 cursor-pointer transition-all ${
                              formData.preferredMethod === "sms"
                                ? "bg-zinc-950 text-white border-zinc-950"
                                : "bg-white border border-zinc-300 text-zinc-800 hover:border-zinc-500 font-semibold"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[14px]">sms</span>
                            SMS
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-950 mb-1">
                          Timing Window
                        </label>
                        <select
                          value={formData.timeframe}
                          onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white cursor-pointer"
                        >
                          <option value="asap">Earliest Available</option>
                          <option value="morning">Morning (8am – 12pm)</option>
                          <option value="afternoon">Afternoon (12pm – 4pm)</option>
                          <option value="evening">Evening (After 5pm)</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 active:scale-[0.99] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>Submit Request</span>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="callback-received"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto text-zinc-900">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      Inquiry Received
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-zinc-900">{formData.name}</strong>. Our front desk team will contact you shortly regarding <strong className="text-zinc-900">{selectedTopic}</strong>.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-medium text-zinc-600 hover:text-zinc-900 underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Success Modal Popup */}
      <BookingSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patientName={formData.name}
        service={`Inquiry: ${selectedTopic}`}
      />
    </section>
  );
}
