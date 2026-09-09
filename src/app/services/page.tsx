"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "cosmetic-dentistry",
    title: "Porcelain Veneers & Smile Makeovers",
    subtitle: "Custom-made veneers, cosmetic bonding, and professional whitening.",
    description:
      "Fix chipped, spaced, or deeply stained teeth with ultra-thin porcelain veneers. We design each one to match your facial features and natural enamel, giving you a clean, bright smile that never looks fake.",
    modalities: [
      "Custom Porcelain Veneers",
      "In-Office Teeth Whitening",
      "Tooth-Colored Cosmetic Bonding",
      "3D Smile Previews Before Work Begins",
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    linkText: "Learn More About Veneers",
    href: "/services/cosmetic-dentistry",
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    subtitle: "Straighten teeth comfortably without metal brackets or wires.",
    description:
      "Straighten crooked teeth, close gaps, and improve your bite using clear, removable trays. With our quick 3D digital scans, you can see exactly what your teeth will look like before you start.",
    modalities: [
      "Quick 3D Digital Scans (No Putty)",
      "Outcome Simulator (See your final smile)",
      "Clear, Removable & Comfortable",
      "Flexible Check-in Options",
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    linkText: "Book an Invisalign Consultation",
    href: "/contact",
  },
  {
    id: "dental-implants",
    title: "Dental Implants & Crowns",
    subtitle: "Permanent replacements for missing or badly damaged teeth.",
    description:
      "A missing or broken tooth makes chewing difficult and affects your confidence. Our dental implants and custom crowns look, feel, and function just like your natural teeth—built to last for life.",
    modalities: [
      "3D Computer-Guided Placement",
      "Natural-Looking Durable Crowns",
      "Single Tooth & Multi-Tooth Options",
      "Gentle, Pain-Free Numbing",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    linkText: "Schedule an Implant Consultation",
    href: "/contact",
  },
  {
    id: "preventive-care",
    title: "Gentle Cleanings & Routine Care",
    subtitle: "Thorough, comfortable cleanings and exams to keep your mouth healthy.",
    description:
      "Healthy teeth and gums start with regular care. We provide gentle cleanings, low-radiation digital X-rays, and thorough checkups in a calm, stress-free setting where you never feel rushed.",
    modalities: [
      "Painless Ultrasonic Plaque Cleaning",
      "Low-Radiation Digital X-Rays",
      "Gum Health & Prevention",
      "Welcoming & Gentle for Nervous Patients",
    ],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    linkText: "Book a Dental Cleaning",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader
          tag="Dental Treatments"
          title="Dental Care Made Simple"
          subtitle="Gentle, comfortable care for everything from routine cleanings to complete smile makeovers."
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {SERVICES.map((svc, idx) => (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28 pb-16 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-5 ${
                      idx % 2 === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        Service 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        {svc.title}
                      </h2>
                      <p className="text-sm font-medium text-sky-700">
                        {svc.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.modalities.map((item, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-2 rounded-lg"
                          >
                            <span className="material-symbols-outlined text-[14px] text-sky-600 shrink-0">check</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        {svc.linkText}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
