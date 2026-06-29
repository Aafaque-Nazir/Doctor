"use client";

import { useCallback } from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function WhyChooseUsSection() {
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

  const features = [
    {
      icon: "biotech",
      title: "Advanced Biotech",
      desc: "We integrate state-of-the-art diagnostic platforms and molecular sequencing tools for pinpoint biological precision."
    },
    {
      icon: "schedule",
      title: "Zero Waiting Policy",
      desc: "Your time is treated with absolute priority. All consultations are meticulously timed to avoid waiting room friction."
    },
    {
      icon: "diversity_1",
      title: "Bio-Individual Focus",
      desc: "We reject the generic. We map your unique baseline biological telemetry to engineer tailored preventative pathways."
    },
    {
      icon: "medical_services",
      title: "Concierge Availability",
      desc: "Experience 24/7 direct encrypted access to your dedicated physician for total healthcare oversight."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Typography & Funnel Hook (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
              The Advantage
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Prestige Health</span>
            </h2>
            <p className="text-on-surface-variant font-medium text-base leading-relaxed">
              We have designed every single point of patient friction out of the clinical equation. Here, elite healthcare is combined with effortless concierge hospitality.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/95 text-white px-6 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase shadow-[0_10px_25px_rgba(15,23,42,0.1)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule Introduction
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid (8 Cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-surface rounded-3xl p-8 border border-outline-variant hover:border-primary/30 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant/80 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
