"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DetailedBookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "", lastName: "", email: "", phone: "",
        service: "", doctor: "", date: "", time: "", symptoms: ""
      });
    }, 1500);
  };

  const inputClass = "w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary/50 rounded-xl px-5 py-4 text-on-surface placeholder-on-surface-variant/40 text-sm font-medium focus:outline-none focus:ring-0 transition-colors font-body";
  const labelClass = "block text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label mb-2";

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="booking-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8 text-left"
          >
            {/* 1. Patient Details */}
            <div className="space-y-6">
              <div className="border-b border-outline-variant/30 pb-4">
                <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">1. Patient Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" required placeholder="John" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" required placeholder="Doe" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" required placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" required placeholder="+1 (555) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={inputClass} />
                </div>
              </div>
            </div>

            {/* 2. Appointment Details */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-outline-variant/30 pb-4">
                <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">2. Appointment Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Service Requested</label>
                  <select required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className={inputClass}>
                    <option value="" disabled>Select a service...</option>
                    <option value="Internal Medicine & Advanced Diagnostics">Internal Medicine & Advanced Diagnostics</option>
                    <option value="Longevity & Healthspan Extension">Longevity & Healthspan Extension</option>
                    <option value="Cognitive & Neurological Health">Cognitive & Neurological Health</option>
                    <option value="Executive Concierge Medicine">Executive Concierge Medicine</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Doctor (Optional)</label>
                  <select value={formData.doctor} onChange={e => setFormData({...formData, doctor: e.target.value})} className={inputClass}>
                    <option value="">No Preference</option>
                    <option value="dr-reynolds">Dr. Jonathan Reynolds</option>
                    <option value="dr-chen">Dr. Sarah Chen</option>
                    <option value="dr-patel">Dr. Amit Patel</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <select required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className={inputClass}>
                    <option value="" disabled>Select time...</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Medical Information */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-outline-variant/30 pb-4">
                <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">3. Medical Information</h3>
              </div>
              <div>
                <label className={labelClass}>Reason for Visit / Symptoms (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Please provide a brief description of your symptoms or the reason for your visit..."
                  value={formData.symptoms}
                  onChange={e => setFormData({...formData, symptoms: e.target.value})}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/95 text-white py-5 rounded-xl font-label text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 mt-8 cursor-pointer shadow-[0_15px_30px_rgba(15,23,42,0.15)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                  Processing Registration...
                </>
              ) : (
                <>
                  Submit Appointment Request
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
            <p className="text-center text-xs text-on-surface-variant font-medium mt-4">
              Your information is secure and encrypted. A representative will contact you to confirm your time.
            </p>
          </motion.form>
        ) : (
          <motion.div 
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8 py-20 bg-surface-container-lowest border border-outline-variant rounded-[2.5rem]"
          >
            <div className="w-24 h-24 bg-tertiary/10 border border-tertiary/20 text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[48px]">check_circle</span>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <h3 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight">Request Received</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Thank you for choosing ClinicalCurator. Your appointment request has been securely submitted. Our conciege team will contact you shortly to confirm your booking.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-block bg-surface-container-low border border-outline-variant hover:bg-surface-container text-on-surface px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer mt-4"
            >
              Submit Another Request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
