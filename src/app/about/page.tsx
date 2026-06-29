import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import { DoctorsSection } from "@/components/sections/DoctorsSection";

export const metadata = {
  title: "About Us | ClinicalCurator",
  description: "Learn more about our elite precision medicine practice.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          title="Our Legacy of Excellence"
          subtitle="Redefining precision medicine through personalized, concierge-level clinical care."
          imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
        />
        
        {/* Our Story / Mission Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
                  Our Philosophy
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-tight">
                  Medicine, <br/>
                  <span className="text-primary italic font-light tracking-tight">Reimagined.</span>
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant font-medium leading-relaxed font-body">
                  <p>
                    Founded on the principles of precision and proactivity, ClinicalCurator is not just a medical practice—it is a sanctuary for those who value their most precious asset: their health.
                  </p>
                  <p>
                    We believe that healthcare should not be reactive. Our team of world-renowned specialists employs the latest in diagnostic technology and genomics to curate a highly personalized health blueprint for every patient.
                  </p>
                  <p>
                    Experience zero wait times, unhurried consultations, and a level of discretion and care that sets a new global standard.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-outline/10">
                  <div>
                    <h4 className="font-headline text-3xl font-black text-primary mb-2">25+</h4>
                    <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Expert Physicians</p>
                  </div>
                  <div>
                    <h4 className="font-headline text-3xl font-black text-primary mb-2">10k+</h4>
                    <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Patients Served</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(10,25,47,0.1)] border border-outline/10">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                    alt="State of the art medical facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white font-headline text-2xl font-black italic">
                      &ldquo;Our focus is entirely on you.&rdquo;
                    </p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tertiary/10 rounded-full blur-[40px] -z-10"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-[40px] -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Reusing DoctorsSection but with the new typography context */}
        <DoctorsSection />
      </main>
      <Footer />
    </>
  );
}
