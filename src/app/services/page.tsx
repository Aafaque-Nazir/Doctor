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
    subtitle: "Custom-made veneers, tooth bonding, and professional whitening.",
    description:
      "Fix chipped, spaced, or deeply stained teeth with thin porcelain veneers. We design each one to match your facial features and natural enamel, giving you a clean, bright smile that looks completely real.",
    includes: [
      "Custom Porcelain Veneers",
      "Gentle In-Office Whitening",
      "Tooth-Colored Bonding",
      "Digital Previews Before Work Begins",
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    linkText: "Treatment Guide & Details",
    href: "/services/cosmetic-dentistry",
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    subtitle: "Straighten teeth comfortably without metal brackets or wires.",
    description:
      "Straighten crooked teeth, close gaps, and improve your bite using clear, removable trays. With our quick 3D digital scans, you can see exactly what your teeth will look like before you start.",
    includes: [
      "Quick 3D Scans (No Messy Putty)",
      "Digital Smile Preview on Screen",
      "Clear, Removable & Comfortable",
      "Flexible Check-in Options",
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    linkText: "Schedule Consultation",
    href: "/book",
  },
  {
    id: "dental-implants",
    title: "Dental Implants & Crowns",
    subtitle: "Permanent replacements for missing or badly damaged teeth.",
    description:
      "A missing or broken tooth makes chewing difficult and affects your confidence. Our dental implants and custom crowns look, feel, and function just like your natural teeth—built to last for life.",
    includes: [
      "Precise 3D Digital Planning",
      "Natural-Looking Durable Crowns",
      "Single Tooth & Multi-Tooth Options",
      "Gentle, Pain-Free Numbing",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    linkText: "Book Implant Evaluation",
    href: "/book",
  },
  {
    id: "preventive-care",
    title: "Gentle Cleanings & Routine Care",
    subtitle: "Thorough, comfortable cleanings and exams to keep your mouth healthy.",
    description:
      "Healthy teeth and gums start with regular care. We provide gentle cleanings, low-radiation digital X-rays, and thorough checkups in a calm, stress-free setting where you never feel rushed.",
    includes: [
      "Painless Ultrasonic Plaque Cleaning",
      "Low-Radiation Digital X-Rays",
      "Gum Health & Prevention",
      "Welcoming & Gentle for Nervous Patients",
    ],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    linkText: "Book Cleaning Visit",
    href: "/book",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader
          tag="Treatments & Services"
          title="Gentle Dental Care for Everyone"
          subtitle="Comfortable, painless care for routine cleanings, teeth straightening, and full smile makeovers."
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="space-y-12 md:space-y-14">
              {SERVICES.map((svc, idx) => (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-24 pb-12 md:pb-14 border-b border-zinc-300 last:border-0 last:pb-0"
                >
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-5 ${
                      idx % 2 === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] max-h-[280px] lg:max-h-[300px] w-full rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-sm">
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
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-zinc-900">
                        Treatment 0{idx + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
                        {svc.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-zinc-800">
                        {svc.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.includes.map((item, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center gap-2 text-xs text-zinc-800 bg-white border border-zinc-300 px-3 py-2 rounded-xl font-medium shadow-xs"
                          >
                            <span className="material-symbols-outlined text-[14px] text-zinc-900 font-bold shrink-0">check</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-sm"
                      >
                        <span>{svc.linkText}</span>
                        <span className="material-symbols-outlined text-[14px]">
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
