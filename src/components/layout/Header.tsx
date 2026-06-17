"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Facility", href: "#facility" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("#services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const el = document.querySelector(target);
    if (el) {
      setActiveSection(target);
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Scroll-spy: update active link based on viewport position
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_0_rgba(194,198,216,0.15)] ease-out-expo transition-all duration-500">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
            setIsMobileMenuOpen(false);
          }}
          className="text-xl font-bold tracking-tighter text-on-surface font-headline z-50 relative cursor-pointer"
        >
          ClinicalCurator
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-headline text-sm font-semibold tracking-tight">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`pb-0.5 transition-all duration-300 ${
                activeSection === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block z-50 relative">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm font-bold tracking-tight hover:bg-primary-container transition-all cursor-pointer"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 -mr-2 text-on-surface focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`absolute top-full left-0 w-full bg-surface shadow-2xl border-b border-outline-variant transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-6 py-6 space-y-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`font-headline text-lg font-bold tracking-tight transition-colors ${
                  activeSection === link.href ? "text-primary" : "text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-outline-variant">
              <button
                onClick={(e) => scrollTo(e, "#contact")}
                className="w-full bg-primary text-on-primary px-6 py-3.5 rounded-xl font-headline text-base font-bold tracking-tight hover:bg-primary-container transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
