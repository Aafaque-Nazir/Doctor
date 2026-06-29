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
  hidden: { opacity: 0, y: 20 },
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
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const features = [
    {
      icon: "biotech",
      title: "Advanced Diagnostics",
      desc: "We use the latest medical technology and precise testing tools to ensure accurate diagnosis and treatment."
    },
    {
      icon: "schedule",
      title: "No Wait Times",
      desc: "Your time is valuable. We schedule your appointments carefully so you never have to sit in a waiting room."
    },
    {
      icon: "diversity_1",
      title: "Personalized Care",
      desc: "Every patient is unique. We take time to understand your personal health history to create a plan just for you."
    },
    {
      icon: "medical_services",
      title: "Always Available",
      desc: "Enjoy direct access to your doctor whenever you need them, ensuring you are always cared for."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Typography & Funnel Hook (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="flex items-center gap-3 text-primary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-primary/50"></span>
              Why Choose Us
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-tight">
              Delivering Excellence <br />
              <span className="text-primary italic font-light tracking-tight">In Healthcare.</span>
            </h2>
            <p className="text-on-surface-variant font-medium text-base leading-relaxed">
              We have removed all the usual frustrations of going to the doctor. Here, you get top-tier medical care with a patient-first approach.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-label text-xs font-bold tracking-widest uppercase shadow-[0_10px_25px_rgba(10,25,47,0.15)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
                className="bg-surface-container-lowest rounded-2xl p-8 border border-outline/10 shadow-[0_10px_35px_rgba(10,25,47,0.03)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-all duration-500 group hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
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
