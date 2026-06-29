"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/[0.04] rounded-full blur-[80px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl space-y-5">
            <span className="flex items-center gap-3 text-primary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-primary/50"></span>
              Medical Services
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-on-surface leading-[1.1]">
              Comprehensive Care, <br />
              <span className="text-primary italic font-light tracking-tight">Tailored For You.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-on-surface-variant font-medium text-base leading-relaxed">
              We offer a full range of medical services designed to keep you healthy, diagnose issues early, and improve your everyday well-being.
            </p>
          </div>
        </div>

        {/* Services Grid (Bento Style) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Card 1: Major Service (Immersive Dark Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 group relative rounded-[2rem] overflow-hidden flex flex-col justify-end min-h-[450px] md:min-h-[500px] shadow-[0_20px_50px_rgba(10,25,47,0.1)] transition-transform duration-700 hover:-translate-y-2"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                alt="Internal Medicine"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
            </div>
            
            <div className="absolute top-6 right-6 z-10">
              <span className="text-[10px] font-label uppercase tracking-widest text-primary font-black px-4 py-2 bg-surface rounded-full shadow-lg">
                Primary Focus
              </span>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-8">
                <span className="material-symbols-outlined text-3xl">monitor_heart</span>
              </div>
              
              <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                Internal Medicine <br className="hidden sm:block"/>& Diagnostics
              </h3>
              <p className="text-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-medium">
                Using advanced medical tests and deep checkups to catch health problems early before you even feel symptoms.
              </p>
              
              <Link
                href="/services/internal-medicine"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-variant transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              >
                Learn More
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Mini Service (Sleek White Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 p-8 md:p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col justify-between min-h-[400px] md:min-h-[500px] shadow-[0_15px_40px_rgba(10,25,47,0.06)] border border-outline-variant/30 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,25,47,0.1)]"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-2xl border border-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">neurology</span>
            </div>

            <div className="pt-12">
              <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 leading-tight tracking-tight text-on-surface">
                Brain & Memory Health
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-8">
                Specialized care focusing on keeping your brain healthy, improving memory, and keeping your mind sharp as you age.
              </p>
              <Link 
                href="/contact"
                className="text-xs font-bold font-label uppercase tracking-widest text-primary hover:text-tertiary transition-colors flex items-center gap-2 w-fit group-hover:gap-4"
              >
                Inquire Details
                <span className="material-symbols-outlined text-[14px]">east</span>
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Mini Service (Sleek White Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 p-8 md:p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col justify-between min-h-[400px] md:min-h-[420px] shadow-[0_15px_40px_rgba(10,25,47,0.06)] border border-outline-variant/30 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,25,47,0.1)]"
          >
            <div className="w-14 h-14 bg-tertiary/10 rounded-2xl border border-tertiary/20 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">nutrition</span>
            </div>

            <div className="pt-12">
              <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 leading-tight text-on-surface tracking-tight">
                Metabolism & Weight
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-8">
                Personalized diet and lifestyle plans based on your lab results to boost your energy levels and overall health.
              </p>
              <Link 
                href="/contact"
                className="text-xs font-bold font-label uppercase tracking-widest text-primary hover:text-tertiary transition-colors flex items-center gap-2 w-fit group-hover:gap-4"
              >
                Inquire Details
                <span className="material-symbols-outlined text-[14px]">east</span>
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Horizontal Card (Precision Lab) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 p-6 md:p-8 bg-primary rounded-[2rem] flex flex-col md:flex-row gap-8 items-center shadow-[0_20px_50px_rgba(10,25,47,0.2)] transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
          >
            {/* Dark background graphic */}
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="h-48 md:h-[220px] w-full md:w-[300px] relative overflow-hidden rounded-3xl shrink-0 border border-white/10">
              <Image
                alt="Laboratory analysis"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <div className="flex-grow flex flex-col justify-center py-2 relative z-10 text-left">
              <div>
                <h3 className="font-headline text-2xl lg:text-3xl font-black mb-3 text-white tracking-tight">
                  In-House Precision Lab
                </h3>
                <p className="text-white/70 text-base leading-relaxed font-medium mb-8 max-w-lg">
                  Fast and accurate blood tests done right here in our clinic, allowing us to adjust your treatment plan without delay.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-white text-primary px-8 py-3.5 rounded-xl font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-variant transition-colors duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                >
                  Schedule Lab Test
                </Link>
                <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase font-label text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                  Same-Day Results
                </span>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
