"use client";

import Image from "next/image";
import { useCallback } from "react";

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

  return (
    <section className="relative h-[90vh] min-h-[650px] max-h-[900px] flex flex-col justify-center overflow-hidden bg-surface-container-lowest">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Modern clinical facility"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#001f2f]/80 mix-blend-multiply"></div>
        {/* Gradient mapping for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f2f]/95 via-[#001f2f]/50 to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 pt-20 pb-20 flex flex-col justify-center h-full">
        <div className="max-w-3xl space-y-4 md:space-y-5 animate-fade-in-up mt-8">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black text-white tracking-tighter leading-[1.05]">
            Advanced Clinical Care, <br className="hidden md:block"/>
            <span className="text-white/90">
              Designed Around You.
            </span>
          </h1>
          <p className="text-sm md:text-lg text-white/80 max-w-2xl leading-relaxed font-medium">
            Experience precision diagnostics where your comfort, biology, and long-term health are our ultimate priority.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 pt-2">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto relative bg-primary text-on-primary px-5 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl font-headline font-bold text-sm md:text-base shadow-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              Book a Consultation
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl font-headline font-bold text-sm md:text-base shadow-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Discover Our Expertise
              <span className="material-symbols-outlined text-white/70 text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/10 mt-4 md:mt-6 w-full">
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-headline font-black text-white drop-shadow-md">15+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 mt-0.5">Years<br/>Experience</p>
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-headline font-black text-white drop-shadow-md">10K+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 mt-0.5">Happy<br/>Patients</p>
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-headline font-black text-white drop-shadow-md">25+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 mt-0.5">Expert<br/>Specialists</p>
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-headline font-black text-white drop-shadow-md">99%</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 mt-0.5">Diagnostic<br/>Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave bottom shape divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px] md:h-[60px] text-surface fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.84,104.22,118.82,157,118.15,213.9,117.41,273.1,106.33,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
