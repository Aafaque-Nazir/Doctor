"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("#services");

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
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
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          ClinicalCurator
        </div>
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
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm font-bold tracking-tight hover:bg-primary-container transition-all cursor-pointer"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
}
