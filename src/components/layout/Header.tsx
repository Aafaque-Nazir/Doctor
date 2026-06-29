"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about", icon: "person" },
  { label: "Services", href: "#services", icon: "medical_services" },
  { label: "Reviews", href: "#testimonials", icon: "star" },
  { label: "Facility", href: "#facility", icon: "apartment" },
  { label: "FAQ", href: "#faq", icon: "help" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-surface/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(15,23,42,0.1)] border-b border-outline-variant/30 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
              setIsMobileMenuOpen(false);
            }}
            className={`text-xl md:text-2xl font-black tracking-tighter font-headline z-[60] relative cursor-pointer transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"}`}
          >
            ClinicalCurator<span className="text-tertiary">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 font-label text-[11px] font-bold tracking-widest uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative py-2 transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-tertiary"
                    : isScrolled ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tertiary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block z-[60] relative">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-label text-[11px] font-bold tracking-widest uppercase transition-all duration-500 cursor-pointer border ${
                isScrolled 
                  ? "bg-primary text-white border-transparent hover:bg-primary/90 shadow-[0_10px_20px_rgba(15,23,42,0.1)]"
                  : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary backdrop-blur-md shadow-lg"
              }`}
            >
              Book Consultation
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[60] p-2 -mr-2 focus:outline-none transition-colors duration-300 ${isMobileMenuOpen ? "text-white" : isScrolled ? "text-primary" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[32px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] w-full h-[100dvh] bg-[#001524]/98 backdrop-blur-3xl flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto overscroll-contain"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 fixed"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 fixed"></div>

            <div className="flex flex-col space-y-4 mt-6 relative z-10 w-full">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`flex items-center gap-5 group py-3 border-b border-white/10 ${
                      activeSection === link.href ? "text-tertiary" : "text-white"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      activeSection === link.href ? "bg-tertiary text-white" : "bg-white/5 text-white/50 group-hover:bg-tertiary/20 group-hover:text-tertiary"
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">
                        {link.icon}
                      </span>
                    </div>
                    <span className="font-headline text-[24px] font-black tracking-tight group-hover:text-tertiary transition-colors">
                      {link.label}
                    </span>
                    <span className="material-symbols-outlined ml-auto text-white/20 group-hover:text-tertiary group-hover:translate-x-2 transition-all">
                      chevron_right
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto pt-10 pb-4 relative z-10 w-full space-y-4"
            >
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 font-label mb-1">Direct Line</p>
                  <p className="font-headline font-bold text-lg text-white">1-800-CLINICAL</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </div>
              </div>

              <button
                onClick={(e) => scrollTo(e, "#contact")}
                className="w-full bg-tertiary text-white flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-label text-xs font-bold tracking-widest uppercase hover:bg-tertiary/90 transition-all shadow-[0_15px_30px_rgba(180,133,69,0.2)]"
              >
                Schedule Introduction
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

