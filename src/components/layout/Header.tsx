"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      {/* Top Emergency & Trust Micro-Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium">
              Accepting New Patients & Walk-Ins
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 hidden md:inline">Gentle, stress-free dental care</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Emergency Line:</span>
            <a href="tel:+15558883368" className="font-semibold text-white hover:text-sky-300 transition-colors">
              (555) 888-3368
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-700 to-cyan-500 flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-xs">
            <span className="material-symbols-outlined text-[20px]">dentistry</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 leading-tight">
              Aura Dental
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-sky-700">
              Dental Clinic & Smile Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? "text-slate-900 bg-slate-100/80 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+15558883368"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-sky-600">call</span>
            (555) 888-3368
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold tracking-wide hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+15558883368"
                  className="flex items-center gap-2 text-sm text-slate-800 font-medium py-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-sky-600">call</span>
                  (555) 888-3368 (Emergency Line)
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
