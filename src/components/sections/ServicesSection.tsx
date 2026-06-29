"use client";

import Image from "next/image";
import { useCallback } from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function ServicesSection() {
  const scrollToContact = useCallback(() => {
    const el = document.querySelector("#contact");
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="services" className="bg-surface py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Simple Elegant Wavy SVG Transition */}
      <div className="absolute top-0 left-0 w-full overflow-visible leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] md:w-full h-[30px] md:h-[60px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#ffffff]"></path>
        </svg>
      </div>
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4 text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
            Clinical Specializations
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-on-surface leading-tight">
            Precision Care, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scientifically Tailored</span>
          </h2>
          <p className="text-on-surface-variant font-medium text-lg leading-relaxed pt-2">
            A comprehensive spectrum of private medical practices focused on biological optimization, preventative screening, and custom longevity pathways.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Card 1: Major Service (Internal Medicine) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 group p-8 md:p-12 bg-surface-container-lowest rounded-[2.5rem] flex flex-col justify-between min-h-[480px] shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] border border-outline-variant/40 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-bl-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/10 text-primary">
                <span className="material-symbols-outlined text-4xl">monitor_heart</span>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold px-4 py-2 bg-surface shadow-sm rounded-full border border-outline-variant/30">
                Primary Focus
              </span>
            </div>

            <div className="relative z-10 pt-12 md:pt-16">
              <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight text-on-surface">
                Internal Medicine & Diagnostics
              </h3>
              <p className="text-on-surface-variant text-base md:text-lg max-w-xl mb-8 leading-relaxed font-medium">
                Utilizing state-of-the-art AI-assisted screenings and biological markers to identify metabolic, genomic, and cardiac profiles before clinical symptoms present.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase hover:bg-primary/95 transition-all duration-300 shadow-[0_4px_15px_rgba(15,23,42,0.15)] cursor-pointer"
              >
                Book Diagnostic Consultation
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Mini Service (Neurology) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 p-8 md:p-10 bg-primary text-white rounded-[2.5rem] flex flex-col justify-between min-h-[480px] shadow-[0_15px_40px_rgba(15,23,42,0.25)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.35)] relative overflow-hidden group transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="p-4 bg-white/10 border border-white/20 rounded-2xl w-fit text-tertiary">
              <span className="material-symbols-outlined text-4xl">neurology</span>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 leading-tight tracking-tight">
                Neurological Health
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-medium mb-8">
                Comprehensive cognitive mapping, memory preservation, and preventative neural health strategies engineered for peak cerebral longevity.
              </p>
              <button 
                onClick={scrollToContact}
                className="text-xs font-bold font-label uppercase tracking-widest text-tertiary border-b border-tertiary/40 pb-1 hover:text-white hover:border-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                Inquire Details
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Card 3: Mini Service (Wellness & Longevity) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 p-8 md:p-10 bg-surface-container-lowest border border-outline-variant/40 rounded-[2.5rem] flex flex-col justify-between min-h-[420px] shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="p-4 bg-tertiary/10 rounded-2xl w-fit border border-tertiary/10 text-tertiary">
              <span className="material-symbols-outlined text-4xl">nutrition</span>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 leading-tight text-on-surface tracking-tight">
                Wellness & Longevity
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-8">
                Bio-identical cellular optimization, executive fitness mapping, and personalized dietary engineering to sustain high performance.
              </p>
              <button 
                onClick={scrollToContact}
                className="text-xs font-bold font-label uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:text-tertiary hover:border-tertiary transition-colors flex items-center gap-2 cursor-pointer"
              >
                Inquire Details
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Card 4: Horizontal Card (Precision Lab) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 p-6 md:p-8 bg-surface-container-lowest border border-outline-variant/40 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="h-64 w-full md:w-80 relative overflow-hidden rounded-[2rem] shadow-inner shrink-0">
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <Image
                alt="Laboratory analysis"
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            
            <div className="flex-grow flex flex-col justify-between h-full py-2 pr-4 text-left">
              <div>
                <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 text-on-surface tracking-tight">
                  Precision Lab Diagnostics
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-6">
                  On-site molecular analysis, genetic panels, and blood chemistry telemetry providing immediate data points for precise treatment path adjustment.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={scrollToContact}
                  className="bg-primary/5 hover:bg-primary/10 border border-primary/10 text-primary px-6 py-3 rounded-xl font-label text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  Schedule Lab Test
                </button>
                <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase font-label text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Daily Panels Open
                </span>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
