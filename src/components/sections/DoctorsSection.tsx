"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Marcus Sterling, DDS",
    role: "Cosmetic & General Dentistry",
    specialty: "Porcelain Veneers & Tooth Bonding",
    education: "NYU Dentistry · 18+ Years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Dr. Elena Vance, DMD",
    role: "Orthodontics & Aligners",
    specialty: "Invisalign® Clear Aligners & Straightening",
    education: "Columbia Dental Medicine · Diamond Provider",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Dr. Julian Ross, DDS",
    role: "Restorative Dentistry",
    specialty: "Dental Implants & Crowns",
    education: "Penn Dental Medicine · Board Certified",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-14 md:py-18 bg-[#fbfbf9] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10 text-left">
          <div className="space-y-1.5 max-w-lg">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              The Dental Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
              Experienced doctors who listen first.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700 max-w-sm leading-relaxed font-normal">
            No lectures, no rushed appointments. Honest, gentle dental guidance from doctors who put your comfort first.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-zinc-300 overflow-hidden shadow-sm hover:border-zinc-950 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col group text-left cursor-default"
            >
              {/* Compact Image Frame */}
              <div className="relative h-56 md:h-60 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Physician Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-700">
                    {doc.role}
                  </span>
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-800">
                    {doc.specialty}
                  </p>
                  <p className="text-[11px] text-zinc-600 font-medium pt-0.5">
                    {doc.education}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200">
                  <Link
                    href="/book"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-950 text-xs font-bold tracking-wider uppercase hover:border-zinc-950 hover:bg-zinc-950 hover:text-white active:scale-[0.98] transition-all shadow-xs cursor-pointer"
                  >
                    <span>Book With {doc.name.split(" ")[1]}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
