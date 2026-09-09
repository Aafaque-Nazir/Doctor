"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clear, Human Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                Aura Dental & Smile Studio • Midtown Manhattan
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                A dentist you will actually <br className="hidden sm:block" />
                <span className="text-sky-700">feel comfortable visiting.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                We know most people dread dental visits. We take the time to listen, explain everything in plain English, and keep you comfortable — from simple cleanings to complete smile makeovers.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold tracking-wide hover:bg-slate-800 transition-colors shadow-xs"
              >
                Book an Appointment
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a
                href="tel:+15558883368"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-semibold tracking-wide hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-slate-500">call</span>
                <span>Call Us: (555) 888-3368</span>
              </a>
            </div>

            {/* Honest, Real Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">4.9</span>
                  <span className="text-amber-500 text-xs">★★★★★</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">850+ Google reviews</p>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Gentle Care</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Painless numbing</p>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Fair Costs</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">No surprise bills</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Authentic Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                alt="Patient with a healthy, confident smile"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

              {/* Clean bottom note without AI buzzwords */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">dentistry</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                      Aura Dental & Smile Studio
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      124 Precision Ave, New York • Relaxed, friendly dental visits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
