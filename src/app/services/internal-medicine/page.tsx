import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";
import Image from "next/image";

export const metadata = {
  title: "Internal Medicine | ClinicalCurator",
  description: "Advanced internal medicine and diagnostic testing.",
};

export default function InternalMedicinePage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden pt-24">
        <Breadcrumbs />
        
        {/* Service Hero */}
        <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
                Primary Care Focus
              </span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-on-surface leading-tight">
                Internal Medicine & <br />
                <span className="text-primary italic font-light tracking-tight">Diagnostic Testing.</span>
              </h1>
              <p className="text-on-surface-variant font-medium text-lg leading-relaxed max-w-xl">
                We utilize cutting-edge screening and medical testing to identify potential health issues long before they manifest as symptoms. Our highly personalized approach ensures you stay ahead of your health.
              </p>
              
              <ul className="space-y-4 pt-4">
                {['Comprehensive Blood Panels', 'Preventative Screenings', 'Chronic Disease Management', 'Personalized Health Plans'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-outline/10">
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
              <Image 
                src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80" 
                alt="Internal Medicine" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
