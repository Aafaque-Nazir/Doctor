"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer: "We operate as an out-of-network provider for most major PPO plans. Our concierge team provides detailed, codified medical receipts (superbills) that you can submit directly to your insurance carrier for reimbursement. HMOs, Medicare, and Medicaid are not accepted for concierge services."
  },
  {
    question: "What exactly is included in the Concierge Membership?",
    answer: "Membership includes 24/7 direct cellular access to your dedicated physician, unhurried same-day or next-day appointments, comprehensive annual cardiovascular and neurocognitive baselining, and complete coordination of specialist care globally."
  },
  {
    question: "What should I bring to my initial consultation?",
    answer: "Please bring a government-issued photo ID, your active insurance card (for out-of-network claims), and copies of any recent medical records, genomic data, lab assays, or imaging reports from the last 24 months."
  },
  {
    question: "Are telehealth consultations available?",
    answer: "Yes, we offer secure, military-grade encrypted virtual consultations for diagnostic reviews, routine follow-ups, and minor inquiries. However, the initial comprehensive physical examination and baseline testing must be completed in-person at our clinic."
  },
  {
    question: "How do you approach preventative care?",
    answer: "Our preventative model is strictly data-driven. We utilize whole-body MRI, extensive multi-cancer early detection (MCED) blood testing, metabolic profiling, and advanced lipidology to identify disease markers years before clinical symptoms manifest."
  },
  {
    question: "How do I access the Patient Portal and my results?",
    answer: "Upon registration, you will receive an encrypted biometric-enabled link to establish your credentials. The proprietary portal gives you 24/7 access to your longitudinal lab results, high-resolution imaging, and direct secure messaging with your medical team."
  },
  {
    question: "Do you coordinate care when I am traveling internationally?",
    answer: "Absolutely. Our concierge team handles all global medical coordination. Should you require medical attention abroad, we liaise directly with vetted international specialists and arrange emergency medical evacuation if necessary."
  },
  {
    question: "What is your emergency medical protocol?",
    answer: "For immediate, life-threatening emergencies, dial 911 or visit the nearest emergency room. For urgent but non-life-threatening clinical issues, our concierge patients have direct access to our 24/7 on-call physician for immediate medical guidance and triage."
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
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-outline/10"></div>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Support (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-32">
            <span className="flex items-center gap-3 text-tertiary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-tertiary/50"></span>
              Frequently Asked
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl font-black text-on-surface tracking-tighter leading-tight">
              Answering Your <br />
              <span className="text-primary italic font-light tracking-tight">Questions.</span>
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
                Contact Support
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
                    isOpen ? "border-tertiary/40 bg-surface-container-lowest shadow-[0_10px_30px_rgba(10,25,47,0.03)]" : "border-outline/10 bg-surface-container-lowest"
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
