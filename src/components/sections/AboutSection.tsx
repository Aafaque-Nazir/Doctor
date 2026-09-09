"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Natural Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
                alt="Dr. Marcus Sterling, DDS"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="font-bold text-slate-900">Dr. Marcus Sterling, DDS</span>
              <span className="text-sky-700 font-semibold">Lead Dentist & Practice Founder</span>
            </div>
          </motion.div>

          {/* Right Column: Grounded Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                How We Treat You
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Dentistry should be simple, gentle, and honest.
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Aura Dental was started because going to the dentist shouldn&apos;t feel stressful or scary. So many people put off dental care for years simply because they had a bad, painful experience in the past.
              </p>
              <p>
                Here, you are always in control. We take the time to walk you through your 3D digital scans, answer all your questions without rushing, and make sure you are completely numb and comfortable before doing any work. No judgment, no surprise fees—just honest care.
              </p>
            </div>

            {/* Clean Credentials Grid */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-xs font-semibold text-slate-900">Member</p>
                <p className="text-xs text-slate-500 mt-0.5">American Dental Association (ADA)</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Education</p>
                <p className="text-xs text-slate-500 mt-0.5">NYU College of Dentistry</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Focus</p>
                <p className="text-xs text-slate-500 mt-0.5">Veneers, Aligners & Cleanings</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Experience</p>
                <p className="text-xs text-slate-500 mt-0.5">18+ Years Caring for Patients</p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-sky-700 transition-colors"
              >
                Learn More About Our Team
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
