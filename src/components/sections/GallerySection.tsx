"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SPACES = [
  {
    title: "Consultation Suites",
    category: "Private Medical Spaces",
    desc: "Acoustically designed for complete privacy and unhurried clinical conversations.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80",
  },
  {
    title: "Diagnostic Imaging Center",
    category: "In-House Technology",
    desc: "High-resolution screening and ultrasound suites enabling prompt, on-site evaluations.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  {
    title: "Precision Diagnostics Lab",
    category: "Clinical Laboratory",
    desc: "Certified on-site laboratory for swift blood chemistry and specialized diagnostic panels.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
  },
  {
    title: "Patient Reception & Library",
    category: "Tranquil Environment",
    desc: "A quiet, calm reception area designed to remove the typical stress of clinical visits.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
  },
];

export function GallerySection() {
  return (
    <section id="facility" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              Our Facility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              A serene clinical environment designed for comfort.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
            Every room has been intentionally organized to ensure discretion, medical efficiency, and peace of mind.
          </p>
        </div>

        {/* 4 Architectural Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPACES.map((space, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col space-y-3"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
                  {space.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {space.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {space.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
