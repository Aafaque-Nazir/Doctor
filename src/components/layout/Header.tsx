"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
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
    <>
      {/* Floating Capsule Wrapper */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-8 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto w-full pointer-events-auto"
        >
          <nav
            className={`transition-all duration-500 rounded-full border border-outline/10 ${
              isScrolled
                ? "bg-surface/80 backdrop-blur-lg py-3 px-6 shadow-[0_20px_50px_rgba(10,25,47,0.06)]"
                : "bg-surface/50 backdrop-blur-md py-4 px-8 shadow-[0_10px_30px_rgba(10,25,47,0.02)]"
            } flex items-center justify-between`}
          >
            {/* Logo Brand Mark */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 font-headline text-lg md:text-xl font-black tracking-tight text-primary cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-black shadow-md group-hover:bg-tertiary transition-colors duration-300">
                C
              </div>
              <span className="group-hover:text-tertiary transition-colors duration-300">
                ClinicalCurator<span className="text-tertiary">.</span>
              </span>
            </Link>

            {/* Desktop Center Links with Magnetic Hover Slider */}
            <div className="hidden md:flex items-center gap-2 relative bg-primary/5 rounded-full p-1 border border-primary/[0.03]">
              {NAV_LINKS.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-5 py-2 text-[10px] font-bold tracking-widest uppercase font-label rounded-full transition-colors duration-300 z-10 ${
                      active
                        ? "text-white"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {/* Magnetic slider pill */}
                    {hoveredIndex === idx && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Active Link Pill */}
                    {active && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 bg-primary rounded-full -z-20"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-white font-label text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(10,25,47,0.15)] border border-transparent hover:-translate-y-0.5 cursor-pointer"
              >
                Inquire Consultation
                <span className="material-symbols-outlined text-[12px]">east</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-primary focus:outline-none transition-transform duration-300"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[28px] block">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </nav>
        </motion.div>
      </div>

      {/* Modern Slide-In Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[90] w-full h-[100dvh] bg-surface flex flex-col pt-32 pb-8 px-6 md:hidden overflow-y-auto text-left"
          >
            {/* Subtle Navy Graphic Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 mt-6 relative z-10 w-full">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-primary/5 ${
                        active ? "text-primary font-black" : "text-primary/70"
                      }`}
                    >
                      <span className="font-headline text-2xl tracking-tight">
                        {link.label}
                      </span>
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      ) : (
                        <span className="material-symbols-outlined text-[18px] text-primary/30">
                          east
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto pt-10 pb-4 relative z-10 w-full space-y-4"
            >
              <div className="bg-white rounded-2xl p-6 border border-outline/10 flex items-center justify-between shadow-[0_10px_30px_rgba(10,25,47,0.02)]">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 font-label mb-1">
                    Direct Line
                  </p>
                  <p className="font-headline font-bold text-lg text-primary">
                    1-800-CLINICAL
                  </p>
                </div>
                <a
                  href="tel:1-800-CLINICAL"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary text-white flex items-center justify-center gap-3 px-6 py-5 rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-primary-container transition-colors shadow-[0_15px_30px_rgba(10,25,47,0.15)]"
              >
                Schedule Introduction
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

