"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Simple Elegant Wavy SVG Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] md:w-full h-[40px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary"></path>
        </svg>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetric Image Frame (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative h-[480px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.1)] border border-outline-variant/30">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
                alt="Dr. Jonathan Reynolds, MD"
                fill
                className="object-cover object-[center_15%] transition-transform duration-[1.5s] ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 40px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent mix-blend-multiply opacity-60"></div>
            </div>
            
            {/* Overlapping Glassmorphic Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 md:-right-6 bg-surface/85 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[30px]">workspace_premium</span>
                </div>
                <div>
                  <p className="font-headline font-black text-3xl text-on-surface leading-none">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1.5 font-label leading-tight">
                    Years of<br/>Clinical Leadership
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Details (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8 text-left lg:pl-10"
          >
            <div className="space-y-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-tertiary/10 text-tertiary font-label text-sm font-bold tracking-widest uppercase">
                Medical Director
              </span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tighter leading-tight">
                Dr. Jonathan <br />
                <span className="text-tertiary">Reynolds, MD</span>
              </h2>
              <p className="text-secondary font-bold uppercase tracking-widest text-xs font-label">
                Lead Physician & Founder
              </p>
            </div>

            <div className="space-y-6 text-on-surface-variant font-medium leading-relaxed text-lg">
              <p>
                With over two decades in private practice, Dr. Reynolds has built a clinic focused on highly personalized, advanced healthcare. His philosophy is simple: good medicine doesn't just treat symptoms, it treats the whole person.
              </p>
              <p>
                Trained at top medical institutions, he ensures that every patient receives a personalized care plan, combining advanced medical testing with genuine, compassionate care.
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-8 border-t border-outline-variant/60 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="font-headline text-4xl font-black text-on-surface-variant/30 italic select-none">
                J. Reynolds
              </div>
              <div className="hidden sm:block w-px h-12 bg-outline-variant"></div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div className="text-xs font-bold text-on-surface uppercase tracking-widest flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-lg">verified</span>
                  Board Certified
                </div>
                <div className="text-xs font-bold text-on-surface uppercase tracking-widest flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-lg">school</span>
                  Harvard Medicine
                </div>
                <div className="text-xs font-bold text-on-surface uppercase tracking-widest flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-lg">workspace_premium</span>
                  Internal Med Fellow
                </div>
                <div className="text-xs font-bold text-on-surface uppercase tracking-widest flex items-center gap-2 font-label">
                  <span className="material-symbols-outlined text-tertiary text-lg">clinical_notes</span>
                  Private Care Lead
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
