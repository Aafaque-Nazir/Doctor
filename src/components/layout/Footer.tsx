import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-xs">
                <span className="material-symbols-outlined text-[20px]">dentistry</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  Aura Dental
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-sky-400 mt-0.5">
                  Dental Clinic & Smile Studio
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Gentle, stress-free dental care in Midtown NYC. We focus on patient comfort, honest treatment advice, and natural-looking smiles.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <p>ADA Member · Licensed NY Dental Practice</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-label">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Porcelain Veneers & Makeovers
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Invisalign Clear Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Dental Implants & Crowns
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Routine Cleanings & Checkups
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Same-Day Emergency Relief →
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-label">
              Studio Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex justify-between pb-1.5 border-b border-slate-800/60">
                <span>Monday – Thursday</span>
                <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800/60">
                <span>Friday</span>
                <span className="text-white font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800/60">
                <span>Saturday</span>
                <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400 pt-1">
                <span className="text-emerald-400 font-medium">Emergency Dental</span>
                <span className="text-white">Same-Day Emergency Care</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-label">
              Location & Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[18px] text-sky-400 mt-0.5">location_on</span>
                <span>
                  124 Precision Avenue, Suite 400<br />
                  Flatiron / Midtown, New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-sky-400">call</span>
                <a href="tel:+15558883368" className="hover:text-white font-semibold text-white transition-colors">
                  (555) 888-3368
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-sky-400">mail</span>
                <a href="mailto:hello@auradental.com" className="hover:text-white transition-colors">
                  hello@auradental.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Book an Appointment
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p suppressHydrationWarning>© {currentYear} Aura Dental & Smile Studio. All rights reserved. Gentle, Aesthetic Dentistry.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              HIPAA & Patient Rights
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              0% Financing & Insurance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
