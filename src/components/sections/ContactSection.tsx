"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) return;
    
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 text-left">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
              VIP Care Intake
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-tight">
              Begin Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clinical Journey</span>
            </h2>
          </div>
          <p className="text-on-surface-variant font-medium max-w-sm md:text-right leading-relaxed text-base">
            Initiate connection with our concierge board. We provide discrete consultations and structured care management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Practice Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.12)] relative overflow-hidden flex flex-col justify-between text-left"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
              
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                  <span className="material-symbols-outlined text-[28px] text-tertiary">location_on</span>
                </div>
                
                <h3 className="font-headline text-2xl lg:text-3xl font-black mb-4 tracking-tight">Main Facility</h3>
                <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed font-medium">
                  124 Precision Ave, Suite 400<br />
                  Clinical District, NY 10001
                </p>
              </div>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-tertiary hover:text-white transition-colors group mt-4 font-label"
              >
                Open Google Maps
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </motion.div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant shadow-[0_8px_30px_rgba(15,23,42,0.02)]"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/5">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 font-label">Concierge Desk</p>
                <p className="font-headline text-xl font-black text-on-surface">+1 (555) 888-0000</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-1 font-label">Direct Patient Line</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant shadow-[0_8px_30px_rgba(15,23,42,0.02)]"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/5">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 font-label">Operating Hours</p>
                <p className="font-headline text-xl font-black text-on-surface">8AM - 6PM</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-1 font-label">Monday - Saturday</p>
              </motion.div>
            </div>
            
          </div>

          {/* Right Column: Premium Concierge Booking Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.03)] flex flex-col justify-center relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 text-left"
                >
                  <div className="space-y-1">
                    <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">Request Private Appointment</h3>
                    <p className="text-xs text-on-surface-variant font-medium font-label">Please complete the metrics below. Our medical registrar will contact you within 2 hours.</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Johnathan Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary/50 rounded-xl px-5 py-3.5 text-on-surface placeholder-on-surface-variant/40 text-sm font-medium focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary/50 rounded-xl px-5 py-3.5 text-on-surface placeholder-on-surface-variant/40 text-sm font-medium focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label">Preferred Care Specialty</label>
                      <select 
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary/50 rounded-xl px-5 py-3.5 text-on-surface text-sm font-medium focus:outline-none focus:ring-0 transition-colors"
                      >
                        <option value="" disabled>Select specialization...</option>
                        <option value="Diagnostics">Executive Medical & Diagnostics</option>
                        <option value="Neurology">Advanced Neurological Care</option>
                        <option value="Longevity">Longevity & Hormone Optimization</option>
                        <option value="Lab">Precision Lab Assay Panels</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label">Clinical Notes / Message (Optional)</label>
                      <textarea 
                        rows={4}
                        placeholder="Provide details of your symptoms or request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary/50 rounded-xl px-5 py-3.5 text-on-surface placeholder-on-surface-variant/40 text-sm font-medium focus:outline-none focus:ring-0 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 mt-6 cursor-pointer shadow-[0_10px_25px_rgba(15,23,42,0.15)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        Processing Booking...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[40px]">check_circle</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-3xl font-black text-on-surface tracking-tight">Intake Registered</h3>
                    <p className="text-on-surface-variant font-medium text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you. Your request is registered in our concierge registry. Our clinical registrar will contact you shortly on your provided coordinates.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary/5 border border-primary/10 hover:bg-primary/10 text-primary px-6 py-3 rounded-xl font-label text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
