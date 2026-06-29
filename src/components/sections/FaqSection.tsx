"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer: "We operate as an out-of-network provider for most major PPO plans. We compile and issue detailed medical superbills for direct submission to your insurance carrier for reimbursement. HMOs and Medicaid are not accepted."
  },
  {
    question: "What should I bring to my initial consultation?",
    answer: "Please bring a government-issued photo ID, your active insurance card, and copies of any recent medical records, lab assays, or imaging reports from the last 12 months."
  },
  {
    question: "Are telehealth consultations available?",
    answer: "Yes. We offer secure, HIPAA-compliant virtual consultations for diagnostic reviews, routine follow-ups, and minor acute inquiries. The initial comprehensive physiological assessment must be completed on-site."
  },
  {
    question: "How do I access the Concierge Patient Portal?",
    answer: "Upon registration, you will receive an encrypted email link to establish your credentials. The portal enables 24/7 access to lab telemetry, direct physician messaging, and prescription refill requests."
  },
  {
    question: "What is your emergency medical protocol?",
    answer: "For life-threatening emergencies, dial 911 or visit the nearest emergency room immediately. Concierge patients have direct access to our 24/7 clinical provider hotline for urgent, non-life-threatening medical guidance."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Support (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-32">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
              Frequently Asked
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              Answering Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
            </h2>
            <p className="text-on-surface-variant font-medium text-base leading-relaxed">
              If your query is not detailed here, please feel free to reach out to our concierge relations team directly for immediate assistance.
            </p>
            <div className="pt-4 border-t border-outline-variant/60">
              <p className="text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant mb-3">Still have questions?</p>
              <button 
                onClick={scrollToContact}
                className="text-xs font-bold font-label uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:text-tertiary hover:border-tertiary transition-colors flex items-center gap-2 cursor-pointer"
              >
                Contact Care Desk
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion System (7 Cols) */}
          <div className="lg:col-span-7 w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden text-left ${
                    isOpen ? "border-tertiary/40 bg-surface shadow-[0_10px_30px_rgba(15,23,42,0.02)]" : "border-outline-variant bg-surface"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-headline font-bold text-base md:text-lg tracking-tight ${isOpen ? "text-tertiary" : "text-on-surface"}`}>
                      {faq.question}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-tertiary" : "text-on-surface-variant"}`}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 border-t border-outline-variant/30 pt-4">
                          <p className="text-on-surface-variant font-medium leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
