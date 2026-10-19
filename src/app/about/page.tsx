import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import { DoctorsSection } from "@/components/sections/DoctorsSection";

export const metadata = {
  title: "About Our Practice | Aura Dental Suite NYC",
  description: "Learn about Aura Dental's commitment to gentle, stress-free dental care, modern 3D digital scans, and natural results.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          tag="About Us"
          title="Friendly, Honest Dental Care"
          subtitle="Painless numbing, quick 3D digital scans, and doctors who truly listen without rushing."
        />
        
        {/* Core Narrative */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  Our Story
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
                  A dental clinic designed around your comfort.
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  <p>
                    We started Aura Dental because visiting the dentist shouldn't feel stressful, cold, or intimidating. We created a welcoming clinic where patients are greeted warmly, treated with kindness, and never judged or rushed.
                  </p>
                  <p>
                    We replaced gaggy putty molds with fast, comfortable 3D scans. We use gentle numbing so you feel zero pain, and our treatment rooms have streaming TV and noise-canceling headphones so you can relax.
                  </p>
                  <p>
                    Whether you are coming in for a simple routine cleaning or getting brand new porcelain veneers, we always explain every step and provide clear, upfront prices before we begin.
                  </p>
                </div>

                {/* Key Practice Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-300">
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">100%</p>
                    <p className="text-[11px] text-zinc-700 font-semibold mt-0.5">Painless Care</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">Zero</p>
                    <p className="text-[11px] text-zinc-700 font-semibold mt-0.5">Messy Putty</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">4.9 ★</p>
                    <p className="text-[11px] text-zinc-700 font-semibold mt-0.5">850+ Reviews</p>
                  </div>
                </div>
              </div>

              {/* Clinic Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/4] sm:aspect-[4/5] max-h-[380px] w-full rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                    alt="Modern dental clinic lounge"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-bold tracking-wider uppercase border border-zinc-800 shadow-sm">
                      Midtown Clinic Lounge
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <DoctorsSection />
      </main>
      <Footer />
    </>
  );
}
