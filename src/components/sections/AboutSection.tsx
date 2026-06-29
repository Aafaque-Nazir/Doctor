"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/[0.02] rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Asymmetric Image Frame (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative h-[380px] sm:h-[480px] md:h-[580px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.08)] border border-outline/10">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
                alt="Dr. Jonathan Reynolds, MD"
                fill
                className="object-cover object-[center_15%] transition-transform duration-[1.5s] ease-out group-hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Overlapping Glassmorphic Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-2 sm:-right-4 bg-surface/95 backdrop-blur-md shadow-[0_15px_35px_rgba(10,25,47,0.1)] rounded-2xl p-5 border border-outline/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
                </div>
                <div>
                  <p className="font-headline font-black text-2xl text-primary leading-none">25+</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mt-1 font-label leading-tight">
                    Years of Clinical<br/>Leadership
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Details (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8 text-left lg:pl-8"
          >
            <div className="space-y-4">
              <span className="flex items-center gap-3 text-primary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-primary/50"></span>
                Medical Director
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tighter leading-tight">
                Dr. Jonathan <br />
                <span className="text-primary italic font-light tracking-tight">Reynolds, MD</span>
              </h2>
              <p className="text-tertiary font-bold uppercase tracking-widest text-xs font-label">
                Lead Physician & Founder
              </p>
            </div>

            <div className="space-y-6 text-on-surface-variant font-medium leading-relaxed text-base sm:text-lg">
              <p>
                Dr. Reynolds founded ClinicalCurator with one simple goal: giving you the time and attention you deserve. We believe good medicine isn&apos;t one-size-fits-all; it should be based on your unique health needs.
              </p>
              <p>
                Trained at the nation&apos;s top hospitals, he uses the best medical tests available while providing the care and attention of a personal family doctor.
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-8 border-t border-outline/10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="font-headline text-4xl font-black text-primary/20 italic select-none">
                J. Reynolds
              </div>
              <div className="hidden sm:block w-px h-12 bg-outline/10"></div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-base">verified</span>
                  Board Certified
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-base">school</span>
                  Harvard Alumni
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-base">workspace_premium</span>
                  Fellowship Trained
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-base">clinical_notes</span>
                  Concierge Medicine
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
