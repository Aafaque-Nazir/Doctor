"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SPACES = [
  {
    title: "Private Consultation Rooms",
    category: "Treatment Rooms",
    desc: "Quiet rooms for complete privacy and unhurried conversations with your doctor.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80",
  },
  {
    title: "3D Digital Imaging Room",
    category: "Modern Technology",
    desc: "High-resolution digital mapping enabling instant smile previews on screen.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  {
    title: "Ceramic Dental Lab",
    category: "In-House Lab",
    desc: "In-house lab for custom tooth shading, polishing, and exact veneer fittings.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
  },
  {
    title: "Relaxing Reception Lounge",
    category: "Comfortable Environment",
    desc: "A quiet, calm reception area designed to remove the typical stress of dental visits.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
  },
];

export function GallerySection() {
  return (
    <section id="facility" className="py-24 md:py-32 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800">
              Our Clinic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              A calm, comfortable clinic designed to put you at ease.
            </h2>
          </div>
          <p className="text-sm text-zinc-700 max-w-sm leading-relaxed font-normal">
            Every room is thoughtfully designed to ensure clean care, quiet privacy, and total peace of mind.
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
              className="group flex flex-col space-y-3 text-left"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-sm">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
                  {space.category}
                </span>
                <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                  {space.title}
                </h3>
                <p className="text-xs text-zinc-700 leading-relaxed font-normal">
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
