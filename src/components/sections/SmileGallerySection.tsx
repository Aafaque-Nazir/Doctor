"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Chipped & Worn Teeth to Natural Translucent Veneers",
    category: "Porcelain Veneers",
    treatment: "8 Custom Porcelain Veneers",
    duration: "2 Visits (2 Weeks Total)",
    desc: "This patient struggled with chipped, worn enamel edges and mild yellowing. We placed 8 handcrafted porcelain veneers customized to their facial symmetry with lifelike translucency and natural shine.",
    beforeImg: "/images/gallery/veneers-before.jpg",
    afterImg: "/images/gallery/veneers-after.jpg",
    beforeNote: "Chipped edges & uneven wear",
    afterNote: "Seamless porcelain veneers",
  },
  {
    id: "invisalign",
    title: "Crowded Overlapping Teeth to Straight Dental Arch",
    category: "Invisalign Aligners",
    treatment: "Clear Aligners (No Metal Braces)",
    duration: "9 Months Total",
    desc: "Corrected overlapping central incisors and rotational crowding without unsightly metal brackets. Clear removable aligners gently aligned the bite into a smooth, aesthetic smile arch.",
    beforeImg: "/images/gallery/invisalign-before.jpg",
    afterImg: "/images/gallery/invisalign-after.jpg",
    beforeNote: "Crowded & overlapping incisors",
    afterNote: "Even, symmetrical arch alignment",
  },
  {
    id: "whitening",
    title: "Lifting Deep Coffee & Tea Stains (7 Shades Brighter)",
    category: "Teeth Whitening",
    treatment: "1-Hour In-Office Laser Whitening",
    duration: "Single 60-Minute Visit",
    desc: "Removed stubborn years of coffee, espresso, and tea stains in a single 60-minute session using medical-grade LED activation and soothing desensitizing enamel serum.",
    beforeImg: "/images/gallery/whitening-before.jpg",
    afterImg: "/images/gallery/whitening-after.jpg",
    beforeNote: "Dark yellowing & tea stains",
    afterNote: "Pearly white & 7 shades brighter",
  },
  {
    id: "implant",
    title: "Replacing Missing Tooth with Seamless Ceramic Implant",
    category: "Dental Implant",
    treatment: "Titanium Post + Custom Porcelain Crown",
    duration: "Gentle Outpatient Care",
    desc: "Permanently restored a missing lateral incisor gap with an implant and custom-shaded porcelain crown that matches neighboring natural teeth in contour, shade, and gumline integration.",
    beforeImg: "/images/gallery/implant-before.jpg",
    afterImg: "/images/gallery/implant-after.jpg",
    beforeNote: "Noticeable missing tooth gap",
    afterNote: "Undetectable permanent crown",
  },
];

export function SmileGallerySection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100 percentage
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

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <section id="smile-gallery" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              Clinical Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Real Patients. Real Results.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Drag the interactive slider across each case to see the exact before and after transformation from our studio.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sliderPos === 100
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                100% Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sliderPos === 50
                    ? "bg-white text-sky-700 shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                50/50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sliderPos === 0
                    ? "bg-sky-600 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                100% After
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Featured Transformation Showcase Card */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 overflow-hidden p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Interactive Before/After Visual Slider */}
            <div className="lg:col-span-7">
              <div 
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-lg select-none cursor-ew-resize touch-none group"
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
                  {/* After Label */}
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-wider uppercase bg-emerald-600/95 text-white shadow-md backdrop-blur-xs">
                      After Result
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
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-wider uppercase bg-slate-900/90 text-white shadow-md backdrop-blur-xs">
                      Initial Condition
                    </span>
                  </div>
                </div>

                {/* Vertical Divider Handle Line */}
                <div 
                  className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none z-20 transition-opacity"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Circular Grab Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl border-2 border-sky-600 flex items-center justify-center font-bold text-xs">
                    <span className="material-symbols-outlined text-[20px] text-slate-800">
                      drag_indicator
                    </span>
                  </div>
                </div>

                {/* Hover / Instruction Hint Banner */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-sky-400">touch_app</span>
                    Drag slider to compare before & after
                  </span>
                </div>
              </div>

              {/* Sub-label indicators */}
              <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-slate-500">
                <span className="font-medium text-slate-600">
                  Before: {activeCase.beforeNote}
                </span>
                <span className="font-medium text-emerald-700">
                  After: {activeCase.afterNote}
                </span>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-label">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  {activeCase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {activeCase.desc}
                </p>
              </div>

              {/* Clinical Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-200">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Treatment Performed</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{activeCase.treatment}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Clinical Timeline</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{activeCase.duration}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Book 3D Smile Simulation
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
                >
                  Procedure Details
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Case Quick Thumbnails Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-sky-50/70 border-sky-300 ring-2 ring-sky-500/20 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 mb-2">
                <Image
                  src={item.afterImg}
                  alt={item.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-white uppercase">
                  {item.duration}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900 truncate">{item.category}</p>
              <p className="text-[11px] text-slate-500 truncate mt-0.5">{item.treatment}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
