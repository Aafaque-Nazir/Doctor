import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { DetailedBookingForm } from "@/components/forms/DetailedBookingForm";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata = {
  title: "Online Chair Reservation & Appointment Booking | Aura Dental Studio",
  description: "Schedule your dental visit online. Choose your treating specialist, preferred date & chair window, and submit insurance details with zero waiting.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <PageHeader 
          tag="Self-Service Portal"
          title="Reserve Your Dental Chair"
          subtitle="Select your preferred dentist, chair time window, and treatment to secure your appointment."
        />
        
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct Access Details */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
                    Online Scheduling
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Personalized Dental Care, Zero Long Waiting
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Our online booking desk allows you to customize your appointment. Select your preferred doctor, time of day, and special comfort requests before you arrive.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Prefer Booking Over the Phone?</p>
                      <a href="tel:+15558883368" className="text-base font-bold text-slate-900 hover:text-sky-700 transition-colors">
                        +1 (555) 888-3368
                      </a>
                      <p className="text-[11px] text-slate-400 mt-0.5">Mon – Thu 8am-6pm · Fri 8am-4pm · Sat 9am-2pm</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Clinic Address</p>
                      <p className="text-sm font-bold text-slate-900">
                        124 Precision Avenue, Suite 400
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Flatiron / Midtown, New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-sky-700">verified</span>
                    Zero-Surprise Financial Guarantee
                  </p>
                  <p className="leading-relaxed text-slate-600">
                    We review and verify all insurance benefits prior to your chair time so you know exactly what is covered without unexpected surprise bills.
                  </p>
                </div>
              </div>

              {/* Right Column: Multi-Step Interactive Booking Desk */}
              <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
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
