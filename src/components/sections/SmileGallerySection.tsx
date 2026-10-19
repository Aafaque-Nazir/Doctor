"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  treatment: string;
  duration: string;
  desc: string;
  beforeImg: string;
  afterImg: string;
  beforeNote: string;
  afterNote: string;
}

const CASES: CaseStudy[] = [
  {
    id: "veneers",
    title: "Chipped & Worn Teeth to Natural Porcelain Veneers",
    category: "Porcelain Veneers",
    treatment: "8 Custom Porcelain Veneers",
    duration: "2 Visits · 2 Weeks",
    desc: "Fixed chipped edges, gaps, and dark staining with 8 natural porcelain veneers matched to natural facial features.",
    beforeImg: "/images/gallery/veneers-before.jpg",
    afterImg: "/images/gallery/veneers-after.jpg",
    beforeNote: "Chipped, worn front teeth",
    afterNote: "Natural white veneers",
  },
  {
    id: "invisalign",
    title: "Crowded Teeth to Straight, Balanced Smile",
    category: "Clear Aligners",
    treatment: "Invisalign® Clear Aligners",
    duration: "9 Months",
    desc: "Straightened crowded overlapping teeth smoothly using clear, removable Invisalign aligners without metal wires.",
    beforeImg: "/images/gallery/invisalign-before.jpg",
    afterImg: "/images/gallery/invisalign-after.jpg",
    beforeNote: "Crowded front teeth",
    afterNote: "Straight, even smile",
  },
  {
    id: "whitening",
    title: "Lifting Coffee Stains (7 Shades Brighter)",
    category: "Teeth Whitening",
    treatment: "In-Office Whitening",
    duration: "Single 60-Min Visit",
    desc: "Removed years of tea, coffee, and everyday staining in a gentle 60-minute in-office whitening session.",
    beforeImg: "/images/gallery/whitening-before.jpg",
    afterImg: "/images/gallery/whitening-after.jpg",
    beforeNote: "Yellow tea & coffee stains",
    afterNote: "Bright, clean white smile",
  },
  {
    id: "implant",
    title: "Replacing Missing Front Tooth with Permanent Crown",
    category: "Dental Implant",
    treatment: "Implant + Custom Crown",
    duration: "2 Visits",
    desc: "Replaced a missing front tooth with a permanent implant and natural-looking crown that blends with the other teeth.",
    beforeImg: "/images/gallery/implant-before.jpg",
    afterImg: "/images/gallery/implant-after.jpg",
    beforeNote: "Missing front tooth",
    afterNote: "Permanent natural crown",
  },
];

export function SmileGallerySection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeTab];

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const clampedPercent = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(Math.round(clampedPercent));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="gallery" className="py-14 md:py-18 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 text-left">
          <div className="space-y-1.5 max-w-lg">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              Patient Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-zinc-950 leading-snug">
              Before & After Transformations
            </h2>
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal">
              Real results from our Midtown clinic. Drag the slider to compare before and after.
            </p>
          </div>

          {/* Minimalist Segmented Presets */}
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-full bg-zinc-200 border border-zinc-300 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer text-xs ${
                  sliderPos === 100
                    ? "bg-zinc-950 text-white shadow-xs font-bold"
                    : "text-zinc-800 hover:text-zinc-950 font-semibold"
                }`}
              >
                Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer text-xs ${
                  sliderPos === 50
                    ? "bg-zinc-950 text-white shadow-xs font-bold"
                    : "text-zinc-800 hover:text-zinc-950 font-semibold"
                }`}
              >
                Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer text-xs ${
                  sliderPos === 0
                    ? "bg-zinc-950 text-white shadow-xs font-bold"
                    : "text-zinc-800 hover:text-zinc-950 font-semibold"
                }`}
              >
                After
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Pill Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-zinc-950 text-white shadow-xs font-bold"
                  : "bg-white text-zinc-800 hover:text-zinc-950 border border-zinc-300 hover:border-zinc-500 font-semibold"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Featured Interactive Comparison Card */}
        <div className="bg-[#fbfbf9] rounded-2xl border border-zinc-300 overflow-hidden p-5 sm:p-7 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Interactive Slider */}
            <div className="lg:col-span-7">
              <div 
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative aspect-[16/10] sm:aspect-[16/11] max-h-[360px] w-full rounded-xl overflow-hidden border-2 border-zinc-300 bg-zinc-900 select-none cursor-ew-resize touch-none group"
              >
                {/* AFTER IMAGE (Base Layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={activeCase.afterImg}
                    alt={`${activeCase.title} - After Result`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover pointer-events-none"
                    priority
                  />
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-zinc-950 text-white border border-white/30 shadow-sm">
                      Result
                    </span>
                  </div>
                </div>

                {/* BEFORE IMAGE (Clipped Overlay Layer) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  <Image
                    src={activeCase.beforeImg}
                    alt={`${activeCase.title} - Before Condition`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-zinc-950 text-white border border-white/30 shadow-sm">
                      Initial
                    </span>
                  </div>
                </div>

                {/* Hairline Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] pointer-events-none z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Clean Minimalist Grab Thumb */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 text-white shadow-lg border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[15px]">
                      code
                    </span>
                  </div>
                </div>

                {/* Subtle Drag Instruction */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[9px] font-semibold tracking-wide border border-white/20">
                    Drag line to compare
                  </span>
                </div>
              </div>

              {/* Sub-label indicators */}
              <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-zinc-700">
                <span className="text-[11px] font-medium text-zinc-700">Before: <strong className="text-zinc-900">{activeCase.beforeNote}</strong></span>
                <span className="text-zinc-950 font-bold text-[11px]">After: <strong className="text-zinc-950">{activeCase.afterNote}</strong></span>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-700">
                  {activeCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  {activeCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {activeCase.desc}
                </p>
              </div>

              {/* Clinical Details */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-zinc-300 text-xs">
                <div>
                  <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Treatment</p>
                  <p className="text-xs font-bold text-zinc-950 mt-0.5">{activeCase.treatment}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Timeline</p>
                  <p className="text-xs font-bold text-zinc-950 mt-0.5">{activeCase.duration}</p>
                </div>
              </div>

              {/* Action Buttons: Minimalist Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 transition-all shadow-sm"
                >
                  <span>Book Consultation</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white border-2 border-zinc-900 text-zinc-950 text-xs font-bold tracking-wider uppercase hover:bg-zinc-950 hover:text-white transition-all shadow-xs"
                >
                  <span>Case Details</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Case Clean Cards Strip */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-white border-2 border-zinc-950 ring-2 ring-zinc-950/10 shadow-sm"
                  : "bg-white border border-zinc-300 hover:border-zinc-500"
              }`}
            >
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 mb-1.5">
                <Image
                  src={item.afterImg}
                  alt={item.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs font-bold text-zinc-950 truncate">{item.category}</p>
              <p className="text-[10px] text-zinc-700 font-medium truncate">{item.treatment}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
