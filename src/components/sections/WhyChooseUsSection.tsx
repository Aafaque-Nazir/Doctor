"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const REASONS = [
  {
    num: "01",
    title: "Digital 3D Scans",
    desc: "No messy, uncomfortable impression trays. A discreet handheld scanner maps teeth in seconds with high precision.",
  },
  {
    num: "02",
    title: "Gentle & Considerate",
    desc: "We numb the area thoroughly and check in frequently so you stay completely relaxed and in control.",
  },
  {
    num: "03",
    title: "Same-Day Emergency Care",
    desc: "Sudden tooth pain or chipped tooth? We keep open slots each day so you never have to wait in pain.",
  },
  {
    num: "04",
    title: "Clear, Upfront Pricing",
    desc: "No surprises or hidden fees. We verify insurance upfront and provide clear written costs before treatment.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-14 md:py-18 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Compact Minimal Editorial Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-xl space-y-2">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              Why Choose Aura
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
              A dental clinic designed around your comfort.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal">
              We combine modern dental technology with a calm, patient-first approach. Every appointment is relaxed, never rushed, and clearly explained.
            </p>
          </div>
        </div>

        {/* 4 Architectural Columns with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {REASONS.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-left space-y-3 pt-4 border-t-2 border-zinc-300 group hover:border-zinc-950 transition-colors duration-300 cursor-default"
            >
              <span className="text-[12px] font-mono font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors block">
                {item.num}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Invitation Row */}
        <div className="mt-10 pt-6 border-t border-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-950 tracking-tight">
              Welcoming new patients and families this month.
            </h4>
            <p className="text-xs text-zinc-700 font-medium">
              Accepting major PPO dental plans and private consultations.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-950 text-xs font-bold tracking-wider uppercase hover:border-zinc-950 hover:bg-zinc-950 hover:text-white active:scale-[0.98] transition-all shrink-0 shadow-xs cursor-pointer"
          >
            <span>Book an Appointment</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
