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
          title="Porcelain Veneers & Smile Makeovers"
          subtitle="Custom porcelain veneers designed to fix chips, gaps, and stains—looking completely natural and lasting for years."
        />

        {/* Overview Section */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                  Natural Porcelain Veneers
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Veneers that look like your real teeth—only better.
                </h2>
                
                <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  <p>
                    The best cosmetic dentistry never looks fake. Forget thick, chalky-white veneers of the past. Modern porcelain veneers are ultra-thin shells custom-colored to reflect light just like natural enamel.
                  </p>
                  <p>
                    Dr. Marcus Sterling plans each case digitally using our quick 3D scanner. Before doing any permanent work, you get to test-drive a temporary version of your new smile right in the chair. You can see how it looks and feels, ask for tweaks, and make sure you love it first.
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What Veneers Can Fix
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Deep stains and dark discoloration",
                      "Chipped, worn, or cracked edges",
                      "Gaps and spacing between teeth",
                      "Uneven tooth lengths and slight crowding",
                      "Teeth worn down from nighttime grinding",
                      "Small or irregularly shaped teeth",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-2.5 rounded-xl"
                      >
                        <span className="material-symbols-outlined text-[14px] text-sky-600 shrink-0">check</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Book a Smile Consultation
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+15558883368"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-sky-600">call</span>
                    Questions? (555) 888-3368
                  </a>
                </div>

              </div>

              {/* Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                    alt="Patient with natural porcelain veneers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-sm text-left">
                    <p className="text-xs font-bold text-slate-900">Dr. Marcus Sterling, DDS</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">General & Cosmetic Dentistry · NYU Dental Graduate</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-20 bg-slate-50/60 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Simple, 4-step process to your new smile
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You get to see and approve your results at every step before anything permanent is placed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "3D Scan & Digital Preview",
                  desc: "We take a quick 3D digital scan of your mouth—no gooey impression putty—and design your new smile together on screen.",
                },
                {
                  step: "02",
                  title: "Test-Drive Your Smile",
                  desc: "We make a temporary version you can try on in your mouth so you can see your new look in the mirror before making any final commitment.",
                },
                {
                  step: "03",
                  title: "Custom Crafting",
                  desc: "Our expert dental lab crafts your porcelain veneers to perfectly match your natural teeth, shade, and facial features.",
                },
                {
                  step: "04",
                  title: "Gentle, Painless Fitting",
                  desc: "Dr. Sterling bonds each veneer securely in place with gentle numbing so you feel comfortable the entire time.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3 text-left"
                >
                  <span className="text-xs font-mono font-bold text-sky-600">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
