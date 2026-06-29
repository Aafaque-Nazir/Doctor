"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose lenis globally so anchor clicks can use it
    (window as unknown as Window & { __lenis: unknown }).__lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as unknown as Window & { __lenis?: unknown }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
