"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookingSuccessModal } from "@/components/modals/BookingSuccessModal";
import { submitExpressCallback } from "@/app/actions/contact";

const INQUIRY_TOPICS = [
  { id: "emergency", label: "Toothache Emergency", icon: "emergency" },
  { id: "veneers", label: "Veneers & Cosmetic", icon: "auto_awesome" },
  { id: "invisalign", label: "Invisalign Aligners", icon: "straighten" },
  { id: "cleaning", label: "Routine Cleaning", icon: "clean_hands" },
  { id: "pricing", label: "Price / Insurance Check", icon: "payments" },
];

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState("Veneers & Cosmetic");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredMethod: "call", // "call" | "sms"
    timeframe: "asap", // "asap" | "evening"
    notes: "",
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
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3 text-left">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
            Priority Concierge Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Have Questions? Request a 15-Minute Priority Callback.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Skip the paperwork and phone queues. Leave your number and our patient care team will reach out directly to answer pricing, check insurance, or answer dental concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Quick Studio Info & Full Booking Link */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct Full Booking Portal Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white shadow-xl space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold border border-white/10">
                <span className="material-symbols-outlined text-[15px]">event_available</span>
                Looking to reserve a specific chair?
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Self-Schedule Your Full Visit Online
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose your specific dentist, select morning or evening chair slots, and input insurance details in our dedicated appointment system.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Open Online Booking Portal
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Studio Hours & Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h4 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-600 text-[20px]">location_on</span>
                Our Studio Location
              </h4>
              <div className="text-xs text-slate-600 space-y-1 pl-7">
                <p className="font-semibold text-slate-900">Aura Dental & Smile Studio</p>
                <p>124 Precision Avenue, Suite 400</p>
                <p>Flatiron / Midtown, New York, NY 10001</p>
                <p className="pt-2 text-[11px] text-slate-400">Near 23rd St Subway (N, Q, R, W, 1, 2)</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="text-slate-400 font-medium">Direct Line</p>
                  <a href="tel:+15558883368" className="font-bold text-slate-900 hover:text-sky-700 transition-colors">
                    +1 (555) 888-3368
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 font-medium">Hours</p>
                  <p className="font-semibold text-slate-900">Mon–Sat from 8:00 AM</p>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0 mt-0.5">emergency</span>
                <div>
                  <p className="font-bold">Immediate Tooth Pain?</p>
                  <p className="text-amber-800 text-[11px] leading-relaxed mt-0.5">
                    Call our emergency desk directly at <a href="tel:+15558883368" className="font-bold underline">(555) 888-3368</a> for same-day walk-in relief.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 10-Second Express Callback Form */}
          <div className="lg:col-span-7 text-left">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="express-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                        15-Min Response Guarantee
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Quick Smile Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Tell us what you need help with and your number. No pressure, no endless phone trees.
                      </p>
                    </div>

                    {/* Quick Topic Pills Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2.5">
                        What can we help you with? *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_TOPICS.map((topic) => (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => setSelectedTopic(topic.label)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                              selectedTopic === topic.label
                                ? "bg-slate-900 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/70"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[15px] opacity-80">
                              {topic.icon}
                            </span>
                            <span>{topic.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Maya Lin"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number (to reach you) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-white"
                        />
                      </div>
                    </div>

                    {/* Method & Timing Preferences */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          How would you like us to reply?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredMethod: "call" })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer ${
                              formData.preferredMethod === "call"
                                ? "bg-sky-50 border-sky-500 text-sky-800 font-bold"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[15px]">call</span>
                            Phone Call
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredMethod: "sms" })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer ${
                              formData.preferredMethod === "sms"
                                ? "bg-sky-50 border-sky-500 text-sky-800 font-bold"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[15px]">sms</span>
                            SMS / Text
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Best Time to Reach You
                        </label>
                        <select
                          value={formData.timeframe}
                          onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-white"
                        >
                          <option value="asap">Right away (Within 15 minutes)</option>
                          <option value="morning">This Morning (8am – 12pm)</option>
                          <option value="afternoon">This Afternoon (12pm – 4pm)</option>
                          <option value="evening">This Evening (after 5pm)</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Requesting Priority Callback...</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[17px]">flash_on</span>
                            <span>Request 15-Minute Callback</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">lock</span>
                        100% Confidential
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
                        No Spam Guarantee
                      </span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="callback-received"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                      <span className="material-symbols-outlined text-[28px]">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Callback Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our patient care team will reach out to you via <strong className="text-slate-900">{formData.preferredMethod === "sms" ? "SMS" : "phone call"}</strong> shortly regarding <strong className="text-slate-900">{selectedTopic}</strong>.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                      >
                        Submit another inquiry
                      </button>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-sky-700 hover:underline"
                      >
                        Or schedule an exact chair date online →
                      </Link>
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
        service={`Priority Callback: ${selectedTopic}`}
      />
    </section>
  );
}
