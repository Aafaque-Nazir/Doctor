"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-12 md:pt-24 md:pb-12 bg-[#fcfcfb] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Compact Architectural Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                Dental Clinic · Midtown Manhattan
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.14]">
                A calm, thoughtful approach to dental care.
              </h1>

              <p className="text-sm sm:text-base text-zinc-700 max-w-lg leading-relaxed font-normal">
                We take time to listen, explain everything in plain English, and ensure you feel calm, respected, and completely comfortable—every step of the way.
              </p>
            </motion.div>

            {/* Action Buttons: Minimalist Tactile Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <span>Book an Appointment</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
              <a
                href="tel:+15558883368"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border-2 border-zinc-900 text-zinc-950 text-xs font-bold tracking-wider uppercase hover:bg-zinc-950 hover:text-white active:scale-[0.98] transition-all shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>(555) 888-3368</span>
              </a>
            </motion.div>

            {/* Architectural Trust Points: Clean Hairline Dividers */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-5 border-t border-zinc-300 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-zinc-950 tracking-tight">4.9</span>
                  <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Rating</span>
                </div>
                <p className="text-[11px] text-zinc-600 font-medium mt-0.5">850+ verified patient reviews</p>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-zinc-300 pt-3 sm:pt-0 sm:pl-4">
                <p className="text-xs font-bold text-zinc-950 tracking-tight">Gentle Care</p>
                <p className="text-[11px] text-zinc-600 font-medium mt-0.5">Stress-free numbing</p>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-zinc-300 pt-3 sm:pt-0 sm:pl-4">
                <p className="text-xs font-bold text-zinc-950 tracking-tight">Clear Pricing</p>
                <p className="text-[11px] text-zinc-600 font-medium mt-0.5">Insurance checked upfront</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Compact Architectural Photography Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[420px] w-full rounded-2xl overflow-hidden border border-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                alt="Patient smiling in modern dental clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-bold tracking-wider uppercase border border-zinc-800 shadow-sm">
                  Room 04 · Natural Light
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
