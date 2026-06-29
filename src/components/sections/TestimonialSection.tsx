"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function TestimonialSection() {
  const testimonials = [
    {
      text: "The diagnostic precision at ClinicalCurator is absolutely unmatched. I finally feel like my biological data is being used to build a proactive health strategy rather than just reacting to symptoms.",
      name: "Dr. Julian Vance",
      role: "Medical Researcher",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    },
    {
      text: "Quiet, meticulously organized, and exceptionally efficient. The clinical directors took the time to explain the molecular insights behind every recommendation. It is an entirely different level of care.",
      name: "Sarah Jenkins",
      role: "Lead Design Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      text: "I travel extensively for work and rely on a healthcare partner that can act globally. Their concierge team handled my emergency abroad flawlessly. True peace of mind.",
      name: "Arthur Pendelton",
      role: "Global Executive",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    },
    {
      text: "An unparalleled experience from the moment you step in. The attention to detail in the clinical facility perfectly matches the sophistication of their medical approach.",
      name: "Elena Rostova",
      role: "Philanthropist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    },
    {
      text: "Having a dedicated medical team that anticipates health risks before they become problems is invaluable. They don't just treat you; they engineer your longevity.",
      name: "Marcus Chen",
      role: "Technology Founder",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-surface-container-lowest overflow-hidden relative">
      {/* Simple Elegant Wavy SVG Transition */}
      <div className="absolute top-0 left-0 w-full overflow-visible leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] md:w-full h-[30px] md:h-[60px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#fafafa]"></path>
        </svg>
      </div>
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header / Press Marquee */}
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase mb-10">
            Endorsements & Recognition
          </span>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Marquee Wrapper */}
          <div className="overflow-hidden w-full relative group py-2 border-y border-outline-variant/30 bg-surface-container-low/40 rounded-2xl">
            {/* Fading Edges */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32 shrink-0">
                  <span className="font-headline text-lg md:text-xl font-black italic tracking-wide">HEALTHLINE</span>
                  <span className="font-headline text-lg md:text-xl font-black tracking-tighter">MedCenter</span>
                  <span className="font-headline text-lg md:text-xl font-bold">BIOTECH.</span>
                  <span className="font-headline text-lg md:text-xl font-black">NATURE</span>
                  <span className="font-headline text-lg md:text-xl font-bold uppercase tracking-widest">GLOBAL HEALTH</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infinite Reverse Scroll Carousel */}
        <div className="w-full relative overflow-hidden py-4 select-none mt-12">
          {/* Fading Mask Overlays */}
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-surface-container-lowest to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-surface-container-lowest to-transparent z-20 pointer-events-none"></div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes testimonialMarqueeReverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-testimonial-marquee {
              animation: testimonialMarqueeReverse 50s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-testimonial-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Marquee Track */}
          <div className="animate-testimonial-marquee gap-6 md:gap-8">
            {[...testimonials, ...testimonials].map((test, idx) => (
              <div 
                key={idx}
                className="w-[300px] md:w-[420px] p-6 md:p-8 bg-surface rounded-[2rem] relative group border border-outline-variant hover:border-primary/20 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.06)] transition-all duration-500 flex flex-col justify-between shrink-0"
              >
                {/* Quote Mark Overlay */}
                <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none select-none">
                  <span className="material-symbols-outlined text-[60px] leading-none text-primary">format_quote</span>
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-tertiary mb-4 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-[14px] fill-current">star</span>
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm md:text-base font-medium text-on-surface-variant mb-6 leading-relaxed tracking-tight relative z-10 flex-grow">
                  "{test.text}"
                </p>
                
                {/* Profile details */}
                <div className="flex items-center gap-3 pt-5 border-t border-outline-variant/60 relative z-10 shrink-0">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border border-outline-variant shadow-sm shrink-0">
                    <Image
                      alt={test.name}
                      className="w-full h-full object-cover"
                      src={test.avatar}
                      fill
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface font-headline leading-tight">{test.name}</h4>
                    <p className="text-[9px] text-tertiary uppercase tracking-widest font-bold mt-0.5 font-label">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
