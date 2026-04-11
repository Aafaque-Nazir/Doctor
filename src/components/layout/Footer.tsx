import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-container bg-surface-container-low mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <span className="text-lg font-black text-on-surface font-headline tracking-tighter">
            ClinicalCurator
          </span>
          <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
            © {new Date().getFullYear()} Clinical Curator. Precision in care.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest">
          <Link
            href="#"
            className="text-on-surface-variant hover:text-on-surface transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-on-surface transition-all"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-on-surface transition-all"
          >
            Accessibility
          </Link>
          <Link
            href="#contact"
            className="text-on-surface-variant hover:text-on-surface transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
