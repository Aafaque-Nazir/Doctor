"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I was nervous about getting veneers because I did not want bulky, artificial teeth. Dr. Sterling listened closely to what I wanted and made them look completely natural. I finally smile in photos without hesitating.",
    author: "Elena Rostova",
    detail: "Porcelain Veneers · 8 Units",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Had sudden tooth pain on a Friday morning. They accommodated me in a chair within an hour. The numbing procedure was completely painless, and they resolved the issue immediately. The most reassuring dental visit I've ever had.",
    author: "Marcus Chen",
    detail: "Emergency Restorative Care",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "I had avoided dental checkups for years out of anxiety. The team provided noise-canceling headphones, ceiling screens, and checked in constantly. Completed my entire Invisalign treatment smoothly and stress-free.",
    author: "Sarah Jenkins",
    detail: "Invisalign & Routine Hygiene",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-14 md:py-18 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-left max-w-lg mb-8 md:mb-10 space-y-1.5">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
            Patient Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
            Hear from people who once dreaded the dentist.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
            Honest reflections from patients who found a calm, welcoming dental home.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-300 shadow-sm hover:border-zinc-500 transition-all flex flex-col justify-between space-y-5 text-left"
            >
              <p className="text-zinc-800 text-xs sm:text-sm leading-relaxed font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-200">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-zinc-100 border border-zinc-300 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 tracking-tight leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-zinc-700 font-semibold mt-0.5">
                    {t.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
