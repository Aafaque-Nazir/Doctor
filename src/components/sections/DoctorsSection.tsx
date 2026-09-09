"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Marcus Sterling, DDS",
    role: "General & Cosmetic Dentist",
    specialty: "Porcelain Veneers, Bonding & Smile Makeovers",
    education: "NYU College of Dentistry · 18+ Years Experience",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Dr. Elena Vance, DMD",
    role: "Orthodontist",
    specialty: "Invisalign® Clear Aligners & Teeth Straightening",
    education: "Columbia Dental Medicine · Invisalign Diamond Provider",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Dr. Julian Ross, DDS",
    role: "Implant & Restorative Dentist",
    specialty: "Dental Implants, Crowns & Gentle Extractions",
    education: "Penn Dental Medicine · Board Certified",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              Meet Our Dentists
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Experienced, gentle doctors who listen first.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-sm leading-relaxed text-left">
            No lecturing, no rushing. Just honest advice and gentle dental care from doctors who take the time to get to know you.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Physician Info */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-sky-700">
                      {doc.role}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {doc.specialty}
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    {doc.education}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white text-xs font-semibold tracking-wide transition-colors"
                  >
                    Request Consultation
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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
