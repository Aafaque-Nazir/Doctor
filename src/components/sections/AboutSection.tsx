"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-18 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Natural Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/4] sm:aspect-[4/5] max-h-[380px] w-full rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
                alt="Dr. Marcus Sterling, DDS"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-2.5 flex items-baseline justify-between text-xs text-zinc-700">
              <span className="font-bold text-zinc-950">Dr. Marcus Sterling, DDS</span>
              <span className="text-zinc-700 font-semibold text-[11px]">Lead Dentist · NYU</span>
            </div>
          </motion.div>

          {/* Right Column: Grounded Editorial Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                About Our Doctor
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
                Dentistry should be simple, gentle, and honest.
              </h2>
            </div>

            <div className="space-y-3 text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Aura Dental was founded on a simple principle: receiving healthcare should never feel stressful, rushed, or intimidating. Many individuals postpone care for years solely because of a past painful experience.
              </p>
              <p>
                In our clinic, you remain entirely in control. We review 3D imaging together on screen, answer every question candidly, and confirm you are completely numb before any procedure begins.
              </p>
            </div>

            {/* Clean Credentials Grid */}
            <div className="pt-4 border-t border-zinc-300 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Affiliation</p>
                <p className="text-xs font-bold text-zinc-950 mt-0.5">ADA Member</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Education</p>
                <p className="text-xs font-bold text-zinc-950 mt-0.5">NYU Dentistry</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Focus</p>
                <p className="text-xs font-bold text-zinc-950 mt-0.5">Veneers & Aligners</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Experience</p>
                <p className="text-xs font-bold text-zinc-950 mt-0.5">18+ Years In Practice</p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:text-zinc-700 transition-colors"
              >
                <span>Meet Our Dental Team</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
