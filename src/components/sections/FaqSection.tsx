"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQS = [
  {
    question: "Will the treatment hurt?",
    answer:
      "No. We use modern, gentle numbing techniques that kick in smoothly without the sharp pinch of old-school needles. If you ever feel any discomfort or need a breather, just raise your hand and we stop immediately.",
  },
  {
    question: "Do you take insurance? How much will it cost?",
    answer:
      "Yes, we accept all major PPO dental plans (Delta Dental, Cigna, MetLife, Aetna, Guardian, etc.) and file claims for you. We check your benefits before any work starts so you never get a surprise bill. For cosmetic treatments, we offer 0% interest monthly payment options.",
  },
  {
    question: "What should I do if I have a toothache or dental emergency?",
    answer:
      "Call us right away at (555) 888-3368. We keep slots open every day specifically for broken teeth, bad toothaches, or lost fillings so we can see you and get you out of pain the same day.",
  },
  {
    question: "How long does Invisalign take?",
    answer:
      "Most people finish in 6 to 12 months. On your first visit, we do a quick 3D scan of your teeth and show you a 3D preview on screen of what your smile will look like before you decide to start.",
  },
  {
    question: "I get really nervous at the dentist. Can you help?",
    answer:
      "Definitely. Many of our patients feel the exact same way. We have headphones, TV screens on the ceiling, warm blankets, and laughing gas to help you stay calm and comfortable the whole time.",
  },
  {
    question: "How long do veneers last, and do they look fake?",
    answer:
      "When done well, porcelain veneers last 15 to 20 years or more. We custom-color and shape each one to match your facial features and natural teeth, so they look clean and bright—never thick, chalky, or fake.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Hint */}
          <div className="lg:col-span-4 space-y-4 text-left lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Simple answers to what you might be wondering.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Have a question about insurance, pricing, or procedures? We are always happy to help.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-sky-700 transition-colors"
              >
                Ask Us a Question
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                    isOpen ? "border-slate-300 bg-slate-50/50" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[20px] text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-slate-900" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                          {faq.answer}
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
