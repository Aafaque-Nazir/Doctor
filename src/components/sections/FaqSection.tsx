"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    question: "Will my dental treatment hurt?",
    answer:
      "No. We use modern, gentle numbing techniques that take effect smoothly without uncomfortable needle pinches. If you ever feel sensation or need a pause, simply raise your hand and we stop immediately.",
  },
  {
    question: "Do you accept dental insurance? How are fees calculated?",
    answer:
      "Yes, we accept all major PPO dental plans (Delta Dental, Cigna, MetLife, Aetna, Guardian, etc.) and file claims on your behalf. We check your benefits before any work starts so you never receive an unexpected bill. For elective cosmetic care, we provide interest-free monthly financing.",
  },
  {
    question: "What should I do if I experience sudden toothache or an emergency?",
    answer:
      "Call us directly at (555) 888-3368. We keep open emergency appointments each day specifically for broken teeth, acute toothaches, or lost fillings so we can relieve your pain promptly.",
  },
  {
    question: "What is the typical timeframe for Invisalign® aligners?",
    answer:
      "Most patients complete treatment in 6 to 12 months. On your first visit, we take a 3D digital scan of your bite and review a simulation of your future smile on screen before making any decisions.",
  },
  {
    question: "I experience severe dental anxiety. How can you accommodate me?",
    answer:
      "Dental anxiety is very common, and we design your entire experience around it. We offer noise-canceling headphones, ceiling screens with streaming entertainment, warm blankets, and nitrous oxide to help you feel peaceful throughout.",
  },
  {
    question: "How long do porcelain veneers last, and do they look artificial?",
    answer:
      "With routine oral hygiene, custom ceramic veneers last 15 to 20 years or longer. Each veneer is hand-layered to mirror the natural translucency, texture, and contours of healthy enamel—never thick or chalky.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-18 bg-[#fbfbf9] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Contact Hint */}
          <div className="lg:col-span-4 space-y-3 text-left lg:sticky lg:top-24">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              Frequently Asked
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold tracking-tight text-zinc-950 leading-snug">
              Clear answers to common questions.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Wondering about insurance coverage, dental procedures, or visit timelines? We are here to help.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:text-zinc-700 transition-colors"
              >
                <span>Direct Inquiries</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Minimal Compact Accordion Items */}
          <div className="lg:col-span-8 space-y-2.5">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-2 border-zinc-950 bg-white shadow-sm" : "border border-zinc-300 bg-white hover:border-zinc-500 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-zinc-950 pr-3">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[20px] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-zinc-950 font-bold" : "text-zinc-700"
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal border-t border-zinc-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
