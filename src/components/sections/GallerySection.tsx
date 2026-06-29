"use client";

import Image from "next/image";

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80", alt: "Executive Reception" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80", alt: "Consultation Suite" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", alt: "Advanced Imaging Center" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869043e561?auto=format&fit=crop&q=80", alt: "Molecular Diagnostics Lab" },
    { src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80", alt: "Patient Recovery Suite" },
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80", alt: "VIP Consultation Office" },
    { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80", alt: "Private Phlebotomy Suite" },
    { src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80", alt: "Neurology Department" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", alt: "MRI Scanning Facility" },
    { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80", alt: "Wellness & Longevity Center" }
  ];

  // Duplicate images for infinite seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section id="facility" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-outline/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 mb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="flex items-center gap-3 text-tertiary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-tertiary/50"></span>
              The Environment
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-on-surface tracking-tighter leading-tight">
              A Harmonious <br />
              <span className="text-primary italic font-light tracking-tight">Healing Space.</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-base sm:text-lg font-medium max-w-md leading-relaxed">
            Designed to eliminate clinical stress. Our facility combines high-end architectural acoustics and natural textures to foster cognitive comfort.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes galleryMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-gallery-marquee {
          animation: galleryMarquee 60s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-gallery-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Infinite Horizontal Scroll Carousel */}
      <div className="w-full relative overflow-hidden py-4 select-none">
        {/* Fading Mask Overlays */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>
        
        {/* Marquee Track */}
        <div className="animate-gallery-marquee flex gap-6">
          {duplicatedImages.map((img, i) => (
            <div 
              key={i} 
              className="relative w-[220px] md:w-[360px] h-[160px] md:h-[250px] rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(10,25,47,0.03)] border border-outline/10 flex-shrink-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                sizes="(max-width: 768px) 220px, 360px"
              />
              
              {/* Overlay styling for ultra premium editorial shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700 mix-blend-multiply"></div>
              
              {/* Text Hover block reveal */}
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 text-left">
                <div className="w-7 h-7 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  <span className="material-symbols-outlined text-white text-[14px]">add</span>
                </div>
                <p className="text-white font-headline font-black text-lg md:text-xl tracking-tight drop-shadow-md">
                  {img.alt}
                </p>
                <p className="text-tertiary text-[9px] font-bold font-label uppercase tracking-widest mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  Concierge Facility
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
