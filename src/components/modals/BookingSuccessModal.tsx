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

export function BookingSuccessModal({
  isOpen,
  onClose,
  patientName,
  service,
  preferredDate,
  doctor,
}: BookingSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  const [refCode] = useState(() => `AUR-${Math.floor(1000 + Math.random() * 9000)}`);

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
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain p-4 sm:p-6 flex min-h-full items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          {/* Minimalist Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container: Architectural Appointment Receipt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ 
              type: "spring", 
              damping: 28, 
              stiffness: 350, 
              mass: 0.7 
            }}
            className="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] flex flex-col rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-300 z-10 my-auto overflow-hidden text-left"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[17px]">close</span>
            </button>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto px-6 py-8 sm:px-8 space-y-6 flex-1 overscroll-contain">
              
              {/* Header with Minimalist Checkmark */}
              <div className="space-y-3 pt-1">
                <div className="w-10 h-10 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px] font-bold">check</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-700">
                    Appointment Request Received
                  </span>
                  <h3 
                    id="success-modal-title" 
                    className="text-2xl font-extrabold text-zinc-950 tracking-tight"
                  >
                    Confirmation for {patientName || "Your Visit"}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                    We have received your booking request. Our team will review our schedule and call or text you shortly to confirm.
                  </p>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="rounded-2xl bg-[#fcfcfb] border border-zinc-300 p-5 text-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-300">
                  <span className="text-zinc-700 font-bold">Reference Code:</span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-zinc-300 font-mono text-xs font-bold text-zinc-950 hover:border-zinc-950 transition-colors cursor-pointer"
                  >
                    <span>#{refCode}</span>
                    <span className="material-symbols-outlined text-[13px] text-zinc-700">
                      {copied ? "check" : "content_copy"}
                    </span>
                    {copied && <span className="text-[10px] text-zinc-700 font-sans font-semibold">Copied</span>}
                  </button>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-700 font-bold">Treatment / Visit:</span>
                  <span className="font-bold text-zinc-950 text-right max-w-[240px] truncate">
                    {service || "Consultation & Checkup"}
                  </span>
                </div>

                {assignedDoctor && (
                  <div className="flex items-center justify-between py-1 border-b border-zinc-200">
                    <span className="text-zinc-700 font-bold">Doctor:</span>
                    <span className="font-bold text-zinc-950 truncate max-w-[240px]">
                      {assignedDoctor}
                    </span>
                  </div>
                )}

                {preferredDate && (
                  <div className="flex items-center justify-between py-1 border-b border-zinc-200">
                    <span className="text-zinc-700 font-bold">Requested Time:</span>
                    <span className="font-bold text-zinc-950 truncate max-w-[240px]">
                      {preferredDate}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-700 font-bold">Status:</span>
                  <span className="text-[11px] font-bold text-zinc-950">
                    Confirmed & Queued
                  </span>
                </div>
              </div>

              {/* What to Expect Next - Clean Minimalist Protocol */}
              <div className="space-y-3 text-xs text-zinc-800">
                <p className="font-bold text-zinc-950 uppercase tracking-wider text-[11px]">
                  Next Steps
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-950 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      1
                    </span>
                    <p>
                      <strong className="text-zinc-950 font-bold">Verification:</strong> Our team checks your dental insurance network benefits in advance.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-950 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      2
                    </span>
                    <p>
                      <strong className="text-zinc-950 font-bold">Confirmation:</strong> You will receive a direct call or text with your confirmed arrival window.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-950 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      3
                    </span>
                    <p>
                      <strong className="text-zinc-950 font-bold">Arrival:</strong> Suite 400, 124 Precision Ave. Noise-canceling headphones & calm care await.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Action Button (Clean Pill) */}
            <div className="p-5 bg-white border-t border-zinc-200 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm cursor-pointer text-center"
              >
                Close Confirmation
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
