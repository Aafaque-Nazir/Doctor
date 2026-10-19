import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { StepwiseBookingForm } from "@/components/forms/StepwiseBookingForm";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata = {
  title: "Book an Appointment | Aura Dental Suite NYC",
  description: "Schedule your dental visit online. Choose your service, date, and preferred time window in 3 effortless steps with upfront insurance verification.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          tag="Online Booking"
          title="Book Your Dental Visit"
          subtitle="Book your appointment in 3 easy steps—no long phone waits, no confusing paperwork."
        />
        
        <section className="py-10 md:py-14 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Direct Access Details */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                    Online Booking
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    Book an appointment in under 1 minute.
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    Select your treatment, choose your preferred day and time, and enter your details. We confirm your insurance before you arrive so you have zero surprises.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Phone */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-sm space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Prefer to Book by Phone?</p>
                    <a href="tel:+15558883368" className="text-base font-extrabold text-zinc-950 hover:text-zinc-700 transition-colors block">
                      (555) 888-3368
                    </a>
                    <p className="text-[11px] text-zinc-700 font-medium pt-0.5">Our front desk team is available Monday to Saturday</p>
                  </div>

                  {/* Location */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-sm space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">Clinic Address</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950">
                      124 Precision Avenue, Suite 400
                    </p>
                    <p className="text-[11px] text-zinc-700 font-medium">
                      Flatiron / Midtown, New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-100 border border-zinc-300 text-xs text-zinc-800 space-y-1">
                  <p className="font-bold text-zinc-950 text-xs tracking-tight">
                    What happens next?
                  </p>
                  <p className="leading-relaxed font-medium text-[11px] text-zinc-700">
                    We verify your insurance benefits, hold your appointment slot, and text you a friendly confirmation with directions.
                  </p>
                </div>
              </div>

              {/* Right Column: Step-by-Step Progressive Booking Flow */}
              <div className="lg:col-span-7 p-5 sm:p-8 rounded-3xl bg-white border border-zinc-300 shadow-sm">
                <StepwiseBookingForm />
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
