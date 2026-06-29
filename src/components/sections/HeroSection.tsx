"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number; // in seconds
  delay?: number; // in seconds
  decimals?: number;
  suffix?: string;
}

function Counter({ value, duration = 2, delay = 0, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    const timer: NodeJS.Timeout = setTimeout(() => {
      let startTime: number | null = null;
      const startValue = 0;
      
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Premium ease-out-expo timing
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = easedProgress * (value - startValue) + startValue;
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [value, duration, delay, isInView]);
  
  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const baseDelay = 2.8;

  return (
    <section className="relative w-full min-h-[100vh] lg:h-[100vh] lg:min-h-[800px] flex flex-col justify-center overflow-hidden bg-surface">
      {/* Background with Navy Blue Accents */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
          alt="Premium clinical facility"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15] mix-blend-luminosity grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        {/* Navy Blue Glow Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>
      </div>

      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 pt-32 pb-20 mt-auto mb-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 text-left space-y-8 lg:pr-8">
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: baseDelay, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase font-label">
                  Accepting New Patients
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.1, ease: "easeOut" }}
                className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-on-surface tracking-tighter leading-[1.05]"
              >
                Expert Medical Care, <br />
                <span className="text-primary">
                  When You Need It.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: baseDelay + 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-medium"
            >
              Experience a dedicated medical practice focused on your health and well-being. We provide comprehensive consultations, accurate diagnostics, and personalized treatment plans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: baseDelay + 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = (window as unknown as Window & { __lenis?: { scrollTo: (target: string) => void } }).__lenis;
                  if (lenis) {
                    lenis.scrollTo("#contact");
                  } else {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase shadow-[0_15px_30px_rgba(10,25,47,0.25)] hover:bg-primary-container hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Appointment
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = (window as unknown as Window & { __lenis?: { scrollTo: (target: string) => void } }).__lenis;
                  if (lenis) {
                    lenis.scrollTo("#services");
                  } else {
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto bg-surface text-primary border border-primary/20 px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </motion.div>

            {/* Premium Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: baseDelay + 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-8 max-w-xl"
            >
              <div className="flex items-center gap-2 text-on-surface-variant text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                Certified Doctors
              </div>
              <div className="w-1 h-1 rounded-full bg-outline"></div>
              <div className="flex items-center gap-2 text-on-surface-variant text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                No Wait Times
              </div>
              <div className="w-1 h-1 rounded-full bg-outline hidden sm:block"></div>
              <div className="flex items-center gap-2 text-on-surface-variant text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label w-full sm:w-auto">
                <span className="material-symbols-outlined text-primary text-lg">science</span>
                In-House Lab
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: baseDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-full min-h-[400px] hidden md:block"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-primary rounded-br-[100px] rounded-tl-[100px] opacity-5 transform rotate-3 scale-95 origin-center"></div>
            <div className="absolute inset-0 bg-primary/10 rounded-br-[100px] rounded-tl-[100px] transform -rotate-2 scale-100 origin-center"></div>

            {/* Main Floating Image */}
            <div className="absolute inset-4 rounded-br-[80px] rounded-tl-[80px] overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.15)] z-10">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                alt="Modern Medical Consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>

            {/* Floating Glass Widget 1: Rating */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: baseDelay + 0.8, duration: 0.6 }}
              className="absolute -left-12 top-20 bg-surface/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_15px_35px_rgba(10,25,47,0.1)] z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-inner">
                <span className="material-symbols-outlined text-[24px]">star</span>
              </div>
              <div>
                <p className="font-headline font-black text-xl text-on-surface leading-none">
                  <Counter value={4.9} decimals={1} delay={baseDelay + 1} /> / 5
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1 font-label">Patient Rating</p>
              </div>
            </motion.div>

            {/* Floating Glass Widget 2: Fast Response */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: baseDelay + 1, duration: 0.6 }}
              className="absolute -right-8 bottom-24 bg-primary text-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(10,25,47,0.25)] z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest font-label text-white/70">Availability</span>
              </div>
              <p className="font-headline font-bold text-lg leading-tight">Walk-ins & Same-Day Visits Welcome.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
