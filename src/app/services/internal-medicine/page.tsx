import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InternalMedicinePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 bg-surface">
        {/* Page Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center pt-24 pb-12 overflow-hidden bg-[#001524]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              alt="Medical laboratory showing precision diagnostics"
              fill
              className="object-cover opacity-30 mix-blend-luminosity"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001524] via-[#001524]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-6 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm text-primary">monitor_heart</span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">
                Specialized Service
              </span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 max-w-4xl">
              Internal Medicine <br className="hidden md:block"/>
              <span className="text-primary">&amp; Advanced Diagnostics</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-medium">
              We move beyond symptom management. Experience proactive, hyper-personalized diagnostics that decode your unique biological blueprint.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Primary Details */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tight text-on-surface">
                  The ClinicalCurator Standard
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Traditional medicine waits for illness to happen. We use <strong className="text-primary">state-of-the-art AI-assisted screenings</strong> and advanced molecular biomarkers to detect risks months, or even years, before they manifest clinically.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our internal medicine protocol is a comprehensive audit of your biology. We analyze your genetic predispositions, cellular health, metabolic function, and hormonal baselines to construct a predictive and preventative roadmap for your optimal longevity.
                </p>
              </div>

              <div className="border border-outline-variant/30 rounded-3xl p-8 md:p-12 bg-surface-container-lowest shadow-[0_12px_45px_rgb(0,0,0,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
                <h3 className="font-headline text-2xl font-black mb-8">What this protocol includes:</h3>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
                    <div>
                      <h4 className="font-headline font-bold text-lg">Full-Spectrum Blood Panels</h4>
                      <p className="text-on-surface-variant mt-1 leading-relaxed">Going far beyond the standard physical. We test over 80 specific biomarkers including inflammatory markers, oxidative stress, and comprehensive hormones.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">genetics</span>
                    <div>
                      <h4 className="font-headline font-bold text-lg">Genomic Deep Sequencing</h4>
                      <p className="text-on-surface-variant mt-1 leading-relaxed">Understanding how your DNA interacts with your environment, diet, and lifestyle to predict vulnerabilities.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">ecg</span>
                    <div>
                      <h4 className="font-headline font-bold text-lg">Cardiometabolic Mapping</h4>
                      <p className="text-on-surface-variant mt-1 leading-relaxed">Advanced arterial imaging and continuous monitoring of metabolic thresholds.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 md:p-10 bg-primary text-on-primary rounded-3xl shadow-[0_12px_45px_rgba(0,98,121,0.2)]">
                <span className="material-symbols-outlined text-4xl mb-6 opacity-80">book_online</span>
                <h3 className="font-headline text-2xl font-black mb-4 leading-snug">
                  Securing Your Initial Diagnostic Strategy
                </h3>
                <p className="text-primary-fixed-dim text-sm leading-relaxed mb-8">
                  Scheduling an Internal Medicine consultation grants you priority access to our clinical suite and a dedicated concierge physician.
                </p>
                
                <Link
                  href="/#contact"
                  className="w-full bg-white text-primary text-center py-4 rounded-xl font-headline font-bold hover:bg-surface-container-lowest transition-colors flex justify-center items-center gap-2 group"
                >
                  Book Assessment
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>

                <p className="text-center text-xs mt-6 text-white/50 uppercase tracking-widest font-bold">
                  Strictly Confidential
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
