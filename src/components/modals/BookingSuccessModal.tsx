"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientName?: string;
  service?: string;
  preferredDate?: string;
  doctor?: string;
}

// Playful floating confetti particle shapes
const CONFETTI_PARTICLES = [
  { id: 1, x: -130, y: -70, scale: 0.9, color: "bg-sky-400", delay: 0.05, rotate: 45 },
  { id: 2, x: 120, y: -80, scale: 1.1, color: "bg-amber-400", delay: 0.1, rotate: -30 },
  { id: 3, x: -150, y: -10, scale: 0.8, color: "bg-emerald-400", delay: 0.15, rotate: 60 },
  { id: 4, x: 140, y: -20, scale: 1, color: "bg-indigo-400", delay: 0.08, rotate: -45 },
  { id: 5, x: -80, y: -100, scale: 0.7, color: "bg-rose-400", delay: 0.18, rotate: 90 },
  { id: 6, x: 85, y: -95, scale: 0.85, color: "bg-teal-400", delay: 0.12, rotate: 15 },
];

export function BookingSuccessModal({
  isOpen,
  onClose,
  patientName,
  service,
  preferredDate,
  doctor,
}: BookingSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  const [refCode, setRefCode] = useState("AUR-7804");

  // Generate a realistic reference code when opened
  useEffect(() => {
    if (isOpen) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setRefCode(`AUR-${randomNum}`);
      setCopied(false);
    }
  }, [isOpen]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopyRef = () => {
    navigator.clipboard.writeText(`#${refCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const doctorLabels: Record<string, string> = {
    "dr-sterling": "Dr. Marcus Sterling, DDS",
    "dr-vance": "Dr. Elena Vance, DMD",
    "dr-ross": "Dr. Julian Ross, DDS",
  };

  const assignedDoctor = doctor && doctorLabels[doctor] ? doctorLabels[doctor] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain p-3 sm:p-4 md:p-6 flex min-h-full items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container: Max-height bounded with clean flex layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              type: "spring", 
              damping: 26, 
              stiffness: 340, 
              mass: 0.7 
            }}
            className="relative w-full max-w-lg max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-100 z-10 my-auto overflow-hidden text-center"
          >
            {/* Ambient Background Glow Effect */}
            <div 
              aria-hidden="true" 
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-b from-sky-200/40 via-emerald-100/25 to-transparent rounded-full blur-3xl pointer-events-none" 
            />

            {/* Confetti Particles */}
            {CONFETTI_PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  scale: [0, p.scale, p.scale * 0.9, 0], 
                  x: p.x, 
                  y: p.y, 
                  rotate: p.rotate 
                }}
                transition={{ duration: 1.4, delay: p.delay, ease: "easeOut" }}
                className={`absolute left-1/2 top-14 w-2 h-2 rounded-xs pointer-events-none ${p.color}`}
              />
            ))}

            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7 space-y-4 sm:space-y-5 text-left flex-1 overscroll-contain">
              
              {/* Header with Centered Badge & Icon */}
              <div className="text-center space-y-2.5 pt-1">
                {/* Checkmark Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 260 }}
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20"
                >
                  <motion.svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>

                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    Request Received Successfully
                  </span>

                  <h3 
                    id="success-modal-title" 
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug line-clamp-2"
                  >
                    You&apos;re All Set{patientName ? `, ${patientName}` : ""}! ✨
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for choosing Aura Dental. We&apos;ve safely received your appointment request and our care coordinator is reviewing it right now.
                  </p>
                </div>
              </div>

              {/* Digital Reservation Ticket / Summary Card */}
              <div className="rounded-2xl bg-slate-50/90 border border-slate-200/90 p-3.5 sm:p-4 text-xs space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-sky-600">confirmation_number</span>
                    <span>Booking Reference:</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-sky-300 font-mono font-bold text-slate-900 text-xs transition-colors group cursor-pointer"
                    title="Copy reference code"
                  >
                    <span>#{refCode}</span>
                    <span className="material-symbols-outlined text-[13px] text-slate-400 group-hover:text-sky-600">
                      {copied ? "check" : "content_copy"}
                    </span>
                    {copied && <span className="text-[10px] text-emerald-600 font-sans font-medium">Copied!</span>}
                  </button>
                </div>

                <div className="flex items-center justify-between py-0.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[210px] sm:max-w-[260px] truncate">
                    {service || "General Dental Visit & Smile Assessment"}
                  </span>
                </div>

                {assignedDoctor && (
                  <div className="flex items-center justify-between py-0.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Specialist:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[210px] sm:max-w-[260px]">
                      {assignedDoctor}
                    </span>
                  </div>
                )}

                {preferredDate && (
                  <div className="flex items-center justify-between py-0.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Date & Time:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[210px] sm:max-w-[260px]">
                      {preferredDate}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-[11px]">
                    Priority Queue · Pending Call
                  </span>
                </div>
              </div>

              {/* What Happens Next - Compact 3 Steps */}
              <div className="rounded-2xl bg-sky-50/70 border border-sky-100 p-3.5 sm:p-4 text-xs text-slate-700 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                  <span className="material-symbols-outlined text-[16px] text-sky-700">volunteer_activism</span>
                  What happens next?
                </p>
                
                <div className="space-y-1.5 pl-0.5 text-[11px] sm:text-xs">
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      1
                    </span>
                    <p className="text-slate-600 leading-tight">
                      <strong className="text-slate-900 font-semibold">Quick Reach-Out:</strong> Front desk coordinator will call or SMS you within 15–30 minutes to confirm your time.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      2
                    </span>
                    <p className="text-slate-600 leading-tight">
                      <strong className="text-slate-900 font-semibold">Transparent Pricing:</strong> We verify your insurance or provide clear fee estimates upfront.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      3
                    </span>
                    <p className="text-slate-600 leading-tight">
                      <strong className="text-slate-900 font-semibold">Relaxing Care:</strong> Noise-canceling headphones, Netflix glasses & gentle care await you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Callout Line */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-[11px] text-slate-600 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="material-symbols-outlined text-[16px] text-amber-600 shrink-0">emergency</span>
                  <span className="truncate">Severe tooth pain? Call direct:</span>
                </div>
                <a 
                  href="tel:+15558883368" 
                  className="font-bold text-amber-900 hover:text-amber-800 underline shrink-0"
                >
                  (555) 888-3368
                </a>
              </div>

            </div>

            {/* Bottom Action Button (Sticky Footer Container) */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-100 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Got It, See You Soon! 🦷</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
