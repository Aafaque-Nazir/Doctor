"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/services" },
  { label: "Our Doctors", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header border-b border-zinc-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Typographic Minimal Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full border border-zinc-900 bg-white flex items-center justify-center text-zinc-950 group-hover:bg-zinc-950 group-hover:text-white transition-all shadow-xs">
            <span className="text-[13px] font-bold tracking-tighter">A</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold tracking-[0.16em] uppercase text-zinc-950 leading-tight">
              Aura
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-zinc-600">
              Dental Clinic · NYC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Distinct, Non-Redundant Links) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  active
                    ? "text-zinc-950 font-bold"
                    : "text-zinc-700 hover:text-zinc-950 font-medium"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-950 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Direct Phone & Single Dedicated Booking CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+15558883368"
            className="text-xs tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors font-mono font-semibold"
          >
            (555) 888-3368
          </a>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.97] transition-all duration-200 shadow-xs cursor-pointer"
          >
            Book Appointment
          </Link>
        </div>

        {/* Minimal Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[19px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Clean Architectural Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-header border-b border-zinc-300 px-6 py-8"
          >
            <div className="flex flex-col gap-4 text-left">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base tracking-wide transition-colors py-1 ${
                      active ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950 font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-zinc-300 flex flex-col gap-3">
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider text-center"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+15558883368"
                  className="text-xs text-center text-zinc-700 py-1 font-mono font-medium"
                >
                  Front Desk: (555) 888-3368
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
