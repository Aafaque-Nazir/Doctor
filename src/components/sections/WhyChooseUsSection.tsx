"use client";

import Link from "next/link";

const REASONS = [
  {
    icon: "devices",
    title: "Digital 3D Scans",
    desc: "No messy, gaggy impression trays. A small wand scans your teeth in seconds to create an accurate 3D model on screen.",
  },
  {
    icon: "sentiment_satisfied",
    title: "Gentle & Painless",
    desc: "We numb the area carefully before touching anything and check in with you constantly so you stay completely comfortable.",
  },
  {
    icon: "emergency",
    title: "Same-Day Emergency Slots",
    desc: "Sudden toothache or cracked tooth? Call us immediately. We save slots every day so you don't have to wait in pain.",
  },
  {
    icon: "receipt_long",
    title: "Clear, Upfront Pricing",
    desc: "No hidden charges or surprise bills. We check your dental insurance beforehand and give you clear, written estimates.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We do things a little differently here.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We take the stress out of dental care with friendly dentists, gentle treatments, and clear communication from day one.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all text-left space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-2xs">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold tracking-tight">
              Looking for a friendly dentist for you or your family?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              New patient checkups and cleanings are open this week. We accept major dental insurance.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0 shadow-xs"
          >
            Book Your First Visit
          </Link>
        </div>

      </div>
    </section>
  );
}
