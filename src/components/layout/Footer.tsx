import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-12 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-zinc-900">
          
          {/* Brand */}
          <div className="space-y-3 text-left">
            <Link href="/" className="inline-block group focus:outline-hidden" aria-label="Aura Dental Clinic Home">
              <Logo size="sm" variant="light" />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Gentle, modern dental care in Flatiron, New York. Focused on your comfort and honest pricing.
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              ADA Member · Licensed NY Clinic
            </p>
          </div>

          {/* Treatments */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/root-canal-treatment"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Root Canal (RCT)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/teeth-cleaning-scaling"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Teeth Cleaning & Scaling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-implants"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/services/teeth-straightening-aligners"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Clear Aligners & Braces
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wisdom-tooth-removal"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Wisdom Tooth Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency-dental-care"
                  className="text-white hover:text-zinc-200 transition-colors inline-flex items-center gap-1 font-semibold underline underline-offset-4"
                >
                  Emergency Pain Relief →
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Clinic Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex justify-between pb-1.5 border-b border-zinc-900">
                <span>Mon – Thu</span>
                <span className="text-white font-semibold">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-zinc-900">
                <span>Friday</span>
                <span className="text-white font-semibold">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-zinc-900">
                <span>Saturday</span>
                <span className="text-white font-semibold">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-zinc-900">
                <span>Sunday</span>
                <span className="text-zinc-400 font-medium">Closed</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <p className="leading-relaxed">
                124 Precision Ave, Suite 400<br />
                Flatiron, New York, NY 10001
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
                  className="block text-zinc-400 hover:text-white transition-colors mt-0.5 text-xs"
                >
                  hello@auradental.com
                </a>
              </div>
              <div className="pt-1">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors"
                >
                  <span>Book Appointment</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p suppressHydrationWarning>© {currentYear} Aura Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Insurance & Billing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
