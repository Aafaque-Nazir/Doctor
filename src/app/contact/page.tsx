import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { DetailedBookingForm } from "@/components/forms/DetailedBookingForm";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata = {
  title: "Contact Us & Booking | ClinicalCurator",
  description: "Schedule your premium concierge medical consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          title="Begin Your Journey"
          subtitle="Reach out to our dedicated concierge team to schedule a highly personalized consultation."
          imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
        />
        
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Contact Details */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase mb-6">
                    Connect With Us
                  </span>
                  <h2 className="font-headline text-4xl font-black text-on-surface tracking-tight mb-6">
                    Concierge <br/> Patient Support
                  </h2>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed max-w-sm">
                    Our team is available to assist you with registration, scheduling, and answering any questions regarding our premium medical services.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">call</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label mb-1">Direct Line</p>
                      <p className="font-headline text-xl font-black text-on-surface">+1 (800) CLINICAL</p>
                      <p className="text-xs font-medium text-on-surface-variant mt-1">Available 24/7 for existing patients</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">mail</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label mb-1">Email Inquiry</p>
                      <p className="font-headline text-xl font-black text-on-surface">concierge@clinicalcurator.com</p>
                      <p className="text-xs font-medium text-on-surface-variant mt-1">We typically reply within 1 hour</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase font-label mb-1">Main Facility</p>
                      <p className="font-headline text-xl font-black text-on-surface">124 Precision Ave, Suite 400</p>
                      <p className="text-xs font-medium text-on-surface-variant mt-1">Clinical District, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Form */}
              <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.03)] relative overflow-hidden">
                <DetailedBookingForm />
              </div>

            </div>
          </div>
        </section>
        
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
