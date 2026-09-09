import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import { DoctorsSection } from "@/components/sections/DoctorsSection";

export const metadata = {
  title: "About Aura Dental & Smile Studio | Modern, Gentle Dentistry",
  description: "Learn about Aura Dental's commitment to anxiety-free patient comfort, zero-goo 3D digital dentistry, and artistic smile makeovers.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          tag="About Our Practice"
          title="Gentle, Honest Dental Care"
          subtitle="Painless numbing, quick 3D digital scans, and dentists who take the time to listen to you."
        />
        
        {/* Core Narrative */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  A dental clinic designed around your comfort.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  <p>
                    Aura Dental was started to change how people feel about visiting the dentist. Too many clinics feel cold, rushed, and intimidating. We built a practice where you are welcomed warmly, never judged, and given the gentle care you deserve.
                  </p>
                  <p>
                    We use modern 3D scans instead of messy impression putty, painless numbing so you stay comfortable, and ceiling TVs with headphones so you can relax while we work.
                  </p>
                  <p>
                    Whether you just need a regular cleaning or want to fix chipped or stained teeth, we explain everything clearly upfront—with no hidden costs or unnecessary treatments.
                  </p>
                </div>

                {/* Key Practice Indicators */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <p className="text-2xl font-bold text-slate-900 tracking-tight">100%</p>
                    <p className="text-xs text-slate-500 mt-0.5">Gentle Care Focus</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 tracking-tight">Zero</p>
                    <p className="text-xs text-slate-500 mt-0.5">Messy Impression Putty</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 tracking-tight">4.9 ★</p>
                    <p className="text-xs text-slate-500 mt-0.5">850+ Patient Reviews</p>
                  </div>
                </div>
              </div>

              {/* Clinic Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                    alt="Modern dental clinic lounge"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs text-xs font-semibold text-slate-800 shadow-xs">
                    Comfortable, modern dental rooms in Midtown NYC
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
