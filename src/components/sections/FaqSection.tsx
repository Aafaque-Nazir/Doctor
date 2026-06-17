"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer: "We are an out-of-network provider for most major PPO plans. We provide detailed superbills that you can submit to your insurance company for reimbursement. We do not accept HMOs or Medicaid."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your insurance card (if applicable for out-of-network claims), and any relevant previous medical records or test results."
  },
  {
    question: "Do you offer telemedicine consultations?",
    answer: "Yes, we offer secure, HIPAA-compliant virtual consultations for follow-ups, minor acute issues, and test result reviews. Initial comprehensive assessments must be done in person."
  },
  {
    question: "How do I access the Patient Portal?",
    answer: "Upon registration, you will receive an email with a secure link to set up your Patient Portal account. There, you can view lab results, message your care team, and request refills."
  },
  {
    question: "What happens in a medical emergency?",
    answer: "If you are experiencing a life-threatening emergency, please dial 911 immediately or go to the nearest emergency room. For urgent but non-life-threatening issues, our concierge patients have access to our 24/7 on-call provider line."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
            Clear Answers
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant font-medium">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-primary/50 bg-primary/5 shadow-md" : "border-outline-variant bg-surface"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-headline font-bold text-lg tracking-tight ${isOpen ? "text-primary" : "text-on-surface"}`}>
                    {faq.question}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-on-surface-variant"}`}>
                    keyboard_arrow_down
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-on-surface-variant font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
