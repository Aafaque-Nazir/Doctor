"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    id: "cosmetic-dentistry",
    title: "Porcelain Veneers & Smile Makeovers",
    category: "Cosmetic",
    desc: "Fix chipped, stained, or uneven teeth with thin porcelain covers that look and feel just like clean, natural enamel.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    features: ["Fix chipped edges", "Close small gaps", "Bright, natural color"],
    href: "/services/cosmetic-dentistry",
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    category: "Teeth Straightening",
    desc: "Straighten your teeth without metal wires or brackets. Clear, comfortable plastic trays you take out when eating or brushing.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    features: ["Nearly invisible", "Eat normally", "See 3D results first"],
    href: "/services",
  },
  {
    id: "implants-restorative",
    title: "Dental Implants & Crowns",
    category: "Tooth Replacement",
    desc: "A permanent fix for missing or badly damaged teeth. Implants let you smile and chew normally without worrying.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    features: ["Permanent replacement", "Strong bite", "Looks completely real"],
    href: "/services",
  },
  {
    id: "preventive-family",
    title: "Checkups & Gentle Cleanings",
    category: "Everyday Care",
    desc: "Gentle plaque cleanings and digital X-rays to protect your gums, keep your breath fresh, and stop cavities early.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    features: ["Painless cleaning", "Low-dose digital X-rays", "Adults & kids welcome"],
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Dental care made simple.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-sky-700 transition-colors"
          >
            View All Services
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col group text-left"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-white/95 text-[11px] font-bold text-slate-800 shadow-2xs">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-7 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-700"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={service.href}
                      className="text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      Learn more
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                    >
                      Book this visit
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
