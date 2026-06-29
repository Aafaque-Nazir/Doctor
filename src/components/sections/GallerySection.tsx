"use client";

import Image from "next/image";

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80", alt: "Executive Reception" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80", alt: "Consultation Suite" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", alt: "Advanced Imaging" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80", alt: "Molecular Diagnostics Lab" },
    { src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80", alt: "Patient Recovery Suite" },
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80", alt: "VIP Consultation Office" },
  ];

  // Duplicate images for infinite seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section id="facility" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Simple Elegant Wavy SVG Transition */}
      <div className="absolute top-0 left-0 w-full overflow-visible leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] md:w-full h-[30px] md:h-[60px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#ffffff]"></path>
        </svg>
      </div>
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 mb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-tertiary/10 text-tertiary font-label text-sm font-bold tracking-widest uppercase">
              The Environment
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-tight">
              A Harmonious <br className="hidden md:block"/>
              Healing Space
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg font-medium max-w-md md:text-right leading-relaxed">
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
              className="relative w-[220px] md:w-[360px] h-[160px] md:h-[250px] rounded-[1.5rem] overflow-hidden group shadow-[0_15px_40px_rgba(15,23,42,0.04)] border border-outline-variant/65 flex-shrink-0"
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
