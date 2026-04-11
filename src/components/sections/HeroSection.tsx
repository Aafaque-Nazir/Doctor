"use client";

import Image from "next/image";
import { useCallback } from "react";

export function HeroSection() {
  const scrollToContact = useCallback(() => {
    const el = document.querySelector("#contact");
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <section className="relative min-h-[100svh] lg:min-h-[85vh] flex items-center overflow-hidden bg-surface py-16 lg:py-0">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed-dim/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="px-8 py-20 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">
                Excellence in Diagnostics
              </span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-on-surface tracking-tighter leading-[1.05] opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.19,1,0.22,1)_forwards_100ms]">
              The Future of <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Personalized Care.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.19,1,0.22,1)_forwards_200ms]">
              A curated clinical experience merging advanced diagnostic precision
              with a human-centric approach. Expert care, evolved for your
              unique biology.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.19,1,0.22,1)_forwards_300ms] justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <button
                  onClick={scrollToContact}
                  className="relative bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-extrabold text-xl shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer"
                >                  Book a Consultation
                  <span className="material-symbols-outlined font-bold">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex -space-x-3 mb-1">
                  <Image
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYH6ZE-Zw4r1OlFf5PLe7KPrXuDmfsCJ8HAM_CU8BQ5n3Y4BojPXQqAXU-PHjejE1wVohytkY1DVWwc6PgFBXtKI3rf0qo31aCQ6nFYWC5OkAgwSQoRlEE9zjZ2DBRqDyvgjAnn124lQpKNUptUir6JXYhRbyCgLba94Yt4EKUS6JcEekeV2ZVjZb1aSTuM7E98llOVFcXFkkYs2HOwTBEQyHS9COjNl7zcM8QmfAeisB9_RVApFA8qwN8bz8IsMvhyS1qgRlVkfR"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-cK5_GEAcabF9OJTfofkSQZhrH4Zela8U_QZgDanA6JU-23fnMKLHLxtWFQwCdpYENTuAKNBsHgxOLeDBnWVFUJrk0nuxf_2y2l4aGY9djHZLtpMD0gQlkMc4lCmGIdR3xR1pBlxuauYDmqJxPWxi_fcXiUlijmuMGMZ5MmlySS9H9ahFxXV3Sj41LuNZUWpirhQWr7fpY9VlbVt0ozP4UkmEwYOmW7RQQE8hidXkQbbeTfApd5aOeUk88ESA6iNgyhw7AXhNVQAn"
                    width={32}
                    height={32}
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed z-10">
                    10k+
                  </div>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Trusted by 10,000+ Patients
                </p>
              </div>
            </div>
          </div>
          {/* Immersive Visual Composition */}
          <div className="flex-1 w-full relative perspective-[2000px] opacity-0 animate-[reveal_1.2s_cubic-bezier(0.19,1,0.22,1)_forwards_200ms]">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-[4/5] group mt-12 lg:mt-0">
              {/* Floating Decorative Card */}
              <div className="absolute -top-12 -left-8 md:-left-12 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="clinical_notes"
                    >
                      clinical_notes
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">
                      Precision Report
                    </p>
                    <p className="text-sm font-bold text-on-surface">
                      99.8% Accuracy
                    </p>
                  </div>
                </div>
              </div>
              {/* Main Image Wrapper */}
              <div className="w-full h-full relative rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] border-[8px] border-white">
                <Image
                  alt="Modern clinical professional"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Rk5_EMON-8_bTut9QOA-a4slff8ExJRsmoPS3LXXdtZCUXw478AvPvBWl8eNN3NXfpUCxQti6pEaQc96fT9oVx1uljrn8bX-1HhZLyUwG-FW0dy5jko0SST9yfcrJ8Py7AjDLy4GJymsQZdhrS7J2AQoGDlOycLwMNclGeh5U5i4mA6MuQn6Mz9tpea2HH8lihWFKeWMZITsbHqUU-LgtFHQYT6hohjPqwi7p4Lwl54SyUQDxttOZoWnvskBP9eOBQhN6ZI7dg-H"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply opacity-50"></div>
              </div>
              {/* Floating Bottom Card */}
              <div className="absolute -bottom-6 -right-4 md:-right-12 z-20 bg-primary p-6 rounded-3xl shadow-2xl animate-[float_6s_ease-in-out_infinite_500ms]">
                <div className="flex items-center gap-4 text-on-primary">
                  <span
                    className="material-symbols-outlined text-4xl"
                    data-icon="dna"
                  >
                    dna
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                      Genomic Focus
                    </p>
                    <p className="text-lg font-headline font-bold">
                      DNA-Led Care
                    </p>
                  </div>
                </div>
              </div>
              {/* Abstract Graphic Element */}
              <div className="absolute top-1/2 -right-20 w-40 h-40 bg-primary-container/20 rounded-full blur-[60px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
