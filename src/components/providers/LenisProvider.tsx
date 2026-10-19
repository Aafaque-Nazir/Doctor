"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable native browser scroll restoration to prevent fighting with Lenis
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Expose lenis globally so components can trigger smooth scroll
    (window as unknown as Window & { __lenis: unknown }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as Window & { __lenis?: unknown }).__lenis;
    };
  }, []);

  // Reset scroll to top immediately on route changes
  useEffect(() => {
    const resetScroll = () => {
      // Check for anchor / hash link on navigation
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const targetElement = document.getElementById(id);
        if (targetElement) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement, { immediate: true });
          } else {
            targetElement.scrollIntoView();
          }
          return;
        }
      }

      // Default: immediately reset to top
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    // Re-verify on next animation frame after new route DOM paint
    const rafReset = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(rafReset);
  }, [pathname]);

  return <>{children}</>;
}

