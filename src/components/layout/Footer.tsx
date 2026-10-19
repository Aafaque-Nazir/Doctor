import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-12 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pb-10 border-b border-zinc-900">
          
          {/* Brand & Philosophy */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-white">
                <span className="text-[13px] font-semibold tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-[0.16em] uppercase text-white leading-tight">
                  Aura
                </span>
                <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-zinc-400">
                  Dental Clinic · NYC
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              A calm, gentle approach to modern dental care. Dedicated to patient comfort, honest prices, and quality results.
            </p>
            <div className="pt-2 text-xs text-zinc-300 font-mono font-medium">
              <p>ADA Member · Licensed NY Practice</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Porcelain Veneers & Makeovers
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Invisalign Clear Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Dental Implants & Crowns
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Routine Cleanings & Exams
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-zinc-200 transition-colors inline-flex items-center gap-1 font-semibold underline underline-offset-4"
                >
                  Emergency Dental Care →
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Hours */}
          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Office Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex justify-between pb-1.5 border-b border-zinc-800">
                <span>Monday – Thursday</span>
                <span className="text-white font-semibold">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-zinc-800">
                <span>Friday</span>
                <span className="text-white font-semibold">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-zinc-800">
                <span>Saturday</span>
                <span className="text-white font-semibold">9:00 AM – 2:00 PM</span>
              </div>
              <div className="pt-1 text-xs text-zinc-300 font-medium">
                Same-day emergency visits available daily.
              </div>
            </div>
          </div>

          {/* Location & Telephone */}
          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Location & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <p className="leading-relaxed">
                124 Precision Avenue, Suite 400<br />
                Flatiron / Midtown, New York, NY 10001
              </p>
              <div>
                <a
                  href="tel:+15558883368"
                  className="block text-white font-bold hover:text-zinc-200 transition-colors text-base"
                >
                  (555) 888-3368
                </a>
                <a
                  href="mailto:hello@auradental.com"
                  className="block text-zinc-300 hover:text-white transition-colors mt-0.5 text-xs"
                >
                  hello@auradental.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors"
                >
                  <span>Book an Appointment</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <p suppressHydrationWarning>© {currentYear} Aura Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-300">
            <Link href="/contact" className="hover:text-white transition-colors font-medium">
              Patient Privacy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors font-medium">
              HIPAA Rights
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors font-medium">
              Insurance & Coverage
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
