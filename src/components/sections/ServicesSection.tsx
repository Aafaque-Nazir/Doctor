"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "cosmetic-dentistry",
    title: "Porcelain Veneers & Makeovers",
    category: "Cosmetic",
    desc: "Fix chipped, discolored, or uneven teeth with custom porcelain veneers designed to look completely natural.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    features: ["Natural translucency", "Conservative prep", "Durable porcelain"],
    href: "/services/cosmetic-dentistry",
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    category: "Orthodontics",
    desc: "Straighten teeth discreetly without metal wires or brackets. Clear, removable aligners tailored to your routine.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    features: ["Virtually invisible", "No food restrictions", "3D digital scan"],
    href: "/services",
  },
  {
    id: "implants-restorative",
    title: "Dental Implants & Crowns",
    category: "Restorative",
    desc: "Permanent tooth replacements anchored into the jawbone for natural chewing strength and a lifelike look.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    features: ["Titanium implant post", "Custom ceramic crown", "Lasts for years"],
    href: "/services",
  },
  {
    id: "preventive-family",
    title: "Routine Cleanings & Exams",
    category: "Routine Care",
    desc: "Gentle plaque cleaning, low-dose digital X-rays, and thorough checks to keep your teeth and gums healthy.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    features: ["Gentle polishing", "Low-radiation scans", "Painless numbing"],
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-14 md:py-18 bg-[#fbfbf9] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10 text-left">
          <div className="space-y-1.5 max-w-lg">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              Our Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
              Dental care designed for your comfort.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:text-zinc-700 transition-colors group cursor-pointer"
          >
            <span>Explore All Treatments</span>
            <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
          </Link>
        </div>

        {/* 2x2 Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-zinc-300 overflow-hidden shadow-sm hover:border-zinc-950 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col group text-left cursor-default"
            >
              {/* Compact Image Container */}
              <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-bold uppercase tracking-wider border border-zinc-900 shadow-sm">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Features & Links */}
                <div className="space-y-3 pt-3 border-t border-zinc-200">
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-300 text-[10px] font-semibold text-zinc-800 hover:bg-zinc-200 transition-colors cursor-default"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-zinc-950 hover:text-zinc-700 transition-colors inline-flex items-center gap-1 group/link cursor-pointer"
                    >
                      <span>Treatment Guide</span>
                      <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 transition-transform duration-200">arrow_forward</span>
                    </Link>
                    <Link
                      href="/book"
                      className="text-xs font-bold text-zinc-800 hover:text-zinc-950 underline underline-offset-2 transition-colors cursor-pointer"
                    >
                      Book Visit →
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
