"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitExpressCallback } from "@/app/actions/contact";
import Link from "next/link";

const INQUIRY_OPTIONS = [
  "General Question",
  "Toothache / Root Canal (RCT)",
  "Teeth Cleaning & Scaling",
  "Dental Implants",
  "Clear Aligners & Braces",
  "Wisdom Tooth Removal",
  "Cavity Fillings & Repair",
  "Dental Crowns & Bridges",
  "Teeth Whitening",
  "Porcelain Veneers",
  "Kids Dentistry",
  "Dentures",
  "Dental Insurance & Pricing",
];

export function ContactInquiryForm() {
  const [treatment, setTreatment] = useState(INQUIRY_OPTIONS[0]);
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botTrap, setBotTrap] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneOrEmail.trim() || !message.trim()) {
      alert("Please fill in your name, contact, and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitExpressCallback({
        name: name.trim(),
        phone: phoneOrEmail.trim(),
        topic: `[${treatment}] ${message.trim()}`,
        preferredMethod: phoneOrEmail.includes("@") ? "sms" : "call",
        timeframe: "asap",
        botTrap,
      });
    } catch (err) {
      console.error("Inquiry submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full text-left">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field for bot protection */}
            <input
              type="text"
              name="bot_trap_contact"
              tabIndex={-1}
              autoComplete="off"
              value={botTrap}
              onChange={(e) => setBotTrap(e.target.value)}
              className="hidden opacity-0 pointer-events-none absolute -left-9999px"
              aria-hidden="true"
            />

            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-zinc-800 block mb-0.5">
                Direct Inquiry
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight">
                Send Us a Note or Question
              </h3>
              <p className="text-xs text-zinc-700 mt-0.5">
                Have a question about insurance, pricing, or procedures? We reply promptly.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-zinc-950 mb-1">
                  Treatment / Inquiry Subject *
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 font-medium focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white cursor-pointer"
                >
                  {INQUIRY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-950 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Maya Harrison"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-950 mb-1">
                  Phone Number or Email Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="(555) 000-0000 or email@domain.com"
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-950 mb-1">
                  How Can We Help You? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Ask any question about insurance coverage, treatments, directions, or dental concerns..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors bg-white resize-none font-medium"
                />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Note...</span>
                  </>
                ) : (
                  <span>Send Message to Front Desk</span>
                )}
              </button>
            </div>

            <div className="pt-1 text-center">
              <p className="text-xs text-zinc-700 font-medium">
                Want to book an appointment directly?{" "}
                <Link href="/book" className="text-zinc-950 font-bold underline">
                  Use our Step-by-Step Booking Portal →
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <motion.div
            key="inquiry-submitted"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-4 space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-stone-100 border border-zinc-200 text-zinc-900 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[22px]">check</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
              Message Received
            </h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-zinc-900">{name}</strong>. Our front desk team will review your message and reply via <strong className="text-zinc-900">{phoneOrEmail}</strong> promptly.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setMessage("");
                }}
                className="text-xs font-medium text-zinc-600 hover:text-zinc-900 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
