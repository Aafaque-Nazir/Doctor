import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Porcelain Veneers & Smile Design | Aura Dental",
  description: "Custom handcrafted porcelain veneers and cosmetic smile makeovers in New York. Natural translucency, conservative tooth preservation, and 0% financing.",
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader
          tag="Cosmetic Dentistry"
          title="Porcelain Veneers & Makeovers"
          subtitle="Custom porcelain veneers designed to fix chipped, gapped, or stained teeth—made to look completely natural."
        />

        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  Natural Porcelain Veneers
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
                  Veneers that mirror natural enamel—never chalky or artificial.
                </h2>
                
                <div className="space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  <p>
                    Great cosmetic dentistry looks completely natural. Instead of the bulky, fake-looking white teeth of the past, our porcelain veneers are custom-made from thin ceramic that shines and reflects light just like real healthy enamel.
                  </p>
                  <p>
                    Dr. Marcus Sterling plans every case using quick 3D digital scans—no messy putty. Before anything is placed permanently, you try on a temporary preview in your mouth so you can check your new smile in the mirror.
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">
                    Common Problems Veneers Fix:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Deeply stained or discolored teeth",
                      "Chipped, cracked, or uneven edges",
                      "Gaps between front teeth",
                      "Slightly crooked or uneven teeth",
                      "Worn teeth from teeth grinding",
                      "Small or irregularly shaped teeth",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-zinc-800 bg-white border border-zinc-300 px-3 py-2 rounded-xl font-medium shadow-xs"
                      >
                        <span className="material-symbols-outlined text-[14px] text-zinc-900 font-bold shrink-0">check</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 transition-all shadow-sm"
                  >
                    <span>Schedule Consultation</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+15558883368"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:text-zinc-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px] text-zinc-800">call</span>
                    <span>Direct: (555) 888-3368</span>
                  </a>
                </div>

              </div>

              {/* Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/4] sm:aspect-[4/5] max-h-[380px] w-full rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                    alt="Patient with natural porcelain veneers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-bold tracking-wider uppercase border border-zinc-800 shadow-sm">
                      Dr. Marcus Sterling, DDS · Cosmetic Dentist
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-12 md:py-16 bg-[#fbfbf9] border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-left max-w-xl mb-10 space-y-2">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                How It Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 leading-snug">
                Our Simple 4-Step Process
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                You review and approve everything in the mirror before your veneers are placed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Quick 3D Scan",
                  desc: "We take a fast digital scan of your teeth in minutes—no messy, gaggy putty trays—and plan your new smile on screen.",
                },
                {
                  step: "02",
                  title: "Try-On Smile Preview",
                  desc: "We place a temporary preview on your teeth so you can see your new smile in the mirror before making any final decisions.",
                },
                {
                  step: "03",
                  title: "Custom Lab Crafting",
                  desc: "Experienced dental ceramists handcraft each veneer with natural translucency so they blend perfectly with your teeth.",
                },
                {
                  step: "04",
                  title: "Gentle Fitting & Placement",
                  desc: "Dr. Sterling places each veneer securely using gentle, painless numbing so you stay completely comfortable the whole time.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-3 pt-4 border-t-2 border-zinc-300 text-left"
                >
                  <span className="text-[11px] font-mono font-bold text-zinc-900">
                    Step {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-zinc-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Booking Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
