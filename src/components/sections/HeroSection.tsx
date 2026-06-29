"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";
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
    
    let timer: NodeJS.Timeout;
    
    timer = setTimeout(() => {
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

  // The MedicalLoader takes ~2.8s before revealing the page. 
  // We add this base delay to hero animations so they happen *after* the loader fades out.
  const baseDelay = 2.8;

  return (
    <section className="relative w-full min-h-[100vh] lg:h-[100vh] lg:min-h-[750px] lg:max-h-[1100px] flex flex-col justify-start lg:justify-center overflow-hidden bg-primary">
      {/* Premium Deep Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Premium clinical facility"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Very dark blue overlay for high contrast text */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        {/* Soft radial and linear gradients for designer-level framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 pt-32 pb-20 lg:pt-32 lg:pb-20 mt-auto mb-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: baseDelay, ease: "easeOut" }}
                className="text-xs font-bold tracking-widest text-tertiary uppercase font-label"
              >
                Exclusive Concierge Medicine & Diagnostics
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: baseDelay + 0.1, ease: "easeOut" }}
                className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05]"
              >
                Clinical Care, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Redefined.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: baseDelay + 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-medium"
            >
              Experience a private medical practice designed around your unique biology. We combine cutting-edge science with concierge service to preserve your lifelong health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: baseDelay + 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-tertiary text-white px-8 py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase shadow-[0_10px_35px_rgba(180,133,69,0.35)] hover:bg-tertiary/90 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Appointment
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <a
                href="tel:+15558880000"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-tertiary text-[18px]">emergency</span>
                Emergency Line
              </a>
            </motion.div>

            {/* Premium Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: baseDelay + 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-xl"
            >
              <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-tertiary text-lg">verified_user</span>
                Privately Managed
              </div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-tertiary text-lg">shield</span>
                Zero-wait Policy
              </div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-tertiary text-lg">science</span>
                Advanced Diagnostics
              </div>
            </motion.div>
          </div>

          {/* Right Column: Elegant Translucent Statistics Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: baseDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.3)] space-y-8"
          >
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-tertiary uppercase font-label">Practice Overview</p>
              <h3 className="font-headline text-2xl font-black text-white leading-tight">Key Indicators of Trust</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white">
                  <Counter value={25} suffix="+" delay={baseDelay + 0.5} />
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/50 uppercase font-label leading-normal">
                  Expert Physicians
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white">
                  <Counter value={99.8} decimals={1} suffix="%" delay={baseDelay + 0.6} />
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/50 uppercase font-label leading-normal">
                  Diagnostic Accuracy
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white">
                  <Counter value={10} suffix="k+" delay={baseDelay + 0.7} />
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/50 uppercase font-label leading-normal">
                  Patients Served
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white">
                  <Counter value={100} suffix="%" delay={baseDelay + 0.8} />
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/50 uppercase font-label leading-normal">
                  Patient Discretion
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider font-label">Director Certified</p>
                <p className="text-[10px] font-medium text-white/50 mt-0.5 font-label">Harvard & Johns Hopkins Fellows</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
