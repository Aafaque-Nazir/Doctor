import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactInquiryForm } from "@/components/forms/ContactInquiryForm";
import { FaqSection } from "@/components/sections/FaqSection";
import Link from "next/link";

export const metadata = {
  title: "Contact & Location | Aura Dental NYC",
  description: "Find our Midtown Manhattan clinic address, office hours, and contact desk. Send us a direct note or inquire about dental insurance.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          tag="Contact Us"
          title="Contact & Location"
          subtitle="Call our front desk, get subway directions, or send us a question about your dental care."
        />
        
        <section className="py-10 md:py-14 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Direct Access Details */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                    Get In Touch
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    We are here to help.
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    Have questions about dental insurance, treatment costs, or your upcoming visit? Our friendly team is here to give you clear, honest answers.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Phone */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-sm space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Phone Number</p>
                    <a href="tel:+15558883368" className="text-base font-extrabold text-zinc-950 hover:text-zinc-700 transition-colors block">
                      (555) 888-3368
                    </a>
                    <p className="text-[11px] text-zinc-700 font-medium pt-0.5">Mon–Thu 8am–6pm · Fri 8am–4pm · Sat 9am–2pm</p>
                  </div>

                  {/* Location & Subway */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-sm space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Clinic Address</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950">
                      124 Precision Avenue, Suite 400
                    </p>
                    <p className="text-[11px] text-zinc-700 font-medium">
                      Flatiron / Midtown, New York, NY 10001
                    </p>
                    <p className="text-[10px] text-zinc-700 font-medium pt-0.5">
                      Subway: 23rd St Station (N, Q, R, W, 1, 2)
                    </p>
                  </div>

                  {/* Booking Portal Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white space-y-1.5 shadow-sm">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                      Looking to book an appointment?
                    </p>
                    <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">
                      Use our quick step-by-step booking form to pick your treatment, date, and doctor in under 1 minute.
                    </p>
                    <div className="pt-1">
                      <Link
                        href="/book"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white underline hover:text-zinc-200"
                      >
                        Open Online Booking →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Simple Contact Inquiry Form */}
              <div className="lg:col-span-7 p-5 sm:p-8 rounded-3xl bg-white border border-zinc-300 shadow-sm">
                <ContactInquiryForm />
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
