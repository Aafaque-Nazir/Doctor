"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I was super nervous about getting veneers because I didn't want bulky, fake-looking teeth. Dr. Sterling listened to exactly what I wanted and made them look completely natural. I finally smile in photos without feeling self-conscious.",
    author: "Elena Rostova",
    detail: "Porcelain Veneers",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Had terrible tooth pain early on a Friday morning. They got me into a chair within an hour. The numbing didn't hurt at all, and they fixed the issue right away. Honestly the easiest, least stressful dental visit I've ever had.",
    author: "Marcus Chen",
    detail: "Emergency Toothache Relief",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "I've hated going to the dentist my whole life. The team here put on Netflix, gave me headphones, and checked in on me every few minutes to make sure I was okay. Did my entire Invisalign treatment here without any stress.",
    author: "Sarah Jenkins",
    detail: "Invisalign & Routine Cleanings",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Hear from our patients.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real feedback from people who used to hate going to the dentist.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6"
            >
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
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
