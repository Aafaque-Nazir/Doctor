"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { DENTAL_SERVICES, DentalService } from "@/data/servicesData";

const CATEGORIES = [
  "All Treatments",
  "Pain & Root Canal",
  "Routine & Cleanings",
  "Missing Teeth & Implants",
  "Aligners & Braces",
  "Oral Surgery",
  "Cosmetic & Whitening",
  "Kids & Seniors",
] as const;

export default function ServicesHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Treatments");

  const filteredServices = selectedCategory === "All Treatments"
    ? DENTAL_SERVICES
    : DENTAL_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#fcfcfb] text-zinc-950 overflow-hidden pt-20">
        
        {/* Compact Architectural Header */}
        <section className="bg-white border-b border-zinc-300 pt-6 pb-6 md:pt-8 md:pb-8">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
              <Breadcrumbs />
              <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-600">
                12 Comprehensive Clinical Treatments
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-1.5">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  All Dental Treatments
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                  Complete Dental Care Under One Roof
                </h1>
              </div>

              <div className="lg:col-span-5">
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  From everyday cleanings and cavity fillings to painless root canals, implants, and aligners. Clearly explained with gentle numbing and upfront pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Category Filter Tabs (Zero Browser Scrollbar Jitter) */}
        <section className="bg-white border-b border-zinc-200 sticky top-20 z-30 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-2.5">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all duration-150 shrink-0 cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200 border border-zinc-200/80"
                    }`}
                  >
                    <span>{cat}</span>
                    {cat === "All Treatments" && (
                      <span className="ml-1 opacity-70 font-mono text-[11px]">
                        ({DENTAL_SERVICES.length})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Treatment Cards Grid (Positioned Comfortably Above The Fold) */}
        <section className="pt-6 pb-14 md:pt-8 md:pb-16 bg-[#fcfcfb]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              <AnimatePresence>
                {filteredServices.map((svc: DentalService) => (
                  <motion.div
                    key={svc.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl border border-zinc-300 shadow-xs hover:border-zinc-950 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group cursor-default"
                  >
                    <div>
                      {/* Compact Image Container with Badges */}
                      <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-zinc-100 border-b border-zinc-200">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                            {svc.categoryBadge}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 sm:p-5 space-y-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-600 block">
                            {svc.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight leading-snug">
                            {svc.title}
                          </h3>
                          <p className="text-xs text-zinc-700 leading-relaxed font-normal line-clamp-2">
                            {svc.subtitle}
                          </p>
                        </div>

                        {/* Quick Clinical Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          <span className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-[10px] font-semibold text-zinc-800">
                            ⏱ {svc.duration.split(" ")[0]} {svc.duration.split(" ")[1]}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-[10px] font-semibold text-zinc-800">
                            🛡 {svc.painLevel.includes("Painless") ? "Painless" : "Gentle"}
                          </span>
                        </div>

                        {/* Common Symptoms Checklist */}
                        <div className="space-y-1 pt-2 border-t border-zinc-200">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">
                            When Needed:
                          </p>
                          <ul className="space-y-1 text-xs text-zinc-700 font-medium">
                            {svc.idealFor.slice(0, 2).map((symptom, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-zinc-950 font-bold shrink-0">•</span>
                                <span className="line-clamp-1">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="p-4 sm:p-5 pt-0 space-y-2">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-xs cursor-pointer"
                      >
                        <span>View Procedure & Details</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>

                      <Link
                        href={`/book?service=${encodeURIComponent(svc.shortTitle)}`}
                        className="w-full inline-flex items-center justify-center py-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        Book Appointment →
                      </Link>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Triage: Quick Symptom Matcher */}
        <section className="py-12 md:py-16 bg-white border-t border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="max-w-xl mb-8 space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                Quick Symptom Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                Not sure what treatment you need?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 font-normal">
                Click your primary dental concern to jump straight to the right clinical procedure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  concern: "Severe or throbbing toothache",
                  hint: "Pain that worsens at night or while drinking hot tea.",
                  slug: "root-canal-treatment",
                  action: "Root Canal Treatment →",
                },
                {
                  concern: "Bleeding gums or tartar stains",
                  hint: "Gums bleed while brushing; yellow deposits on teeth.",
                  slug: "teeth-cleaning-scaling",
                  action: "Teeth Cleaning & Scaling →",
                },
                {
                  concern: "Missing one or more teeth",
                  hint: "Difficulty chewing food; wanting permanent fixed teeth.",
                  slug: "dental-implants",
                  action: "Dental Implants →",
                },
                {
                  concern: "Pain in back jaw or wisdom tooth",
                  hint: "Swelling in the very back of the jaw or cheek bite.",
                  slug: "wisdom-tooth-removal",
                  action: "Wisdom Tooth Removal →",
                },
                {
                  concern: "Crooked teeth or noticeable gaps",
                  hint: "Wanting straight teeth without metal wires or brackets.",
                  slug: "teeth-straightening-aligners",
                  action: "Invisible Clear Aligners →",
                },
                {
                  concern: "Food getting stuck in tooth",
                  hint: "Early black or brown cavity spot on chewing surface.",
                  slug: "cavity-fillings",
                  action: "Cavity Fillings & Repair →",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/services/${item.slug}`}
                  className="p-5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-xs hover:border-zinc-950 hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                      {item.concern}
                    </p>
                    <p className="text-xs text-zinc-700 leading-relaxed">
                      {item.hint}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-zinc-950 underline underline-offset-2">
                    {item.action}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
