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
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-surface-container-lowest overflow-hidden relative">
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

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left"
        >
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="p-8 md:p-12 bg-surface rounded-[2.5rem] relative group border border-outline-variant hover:border-primary/20 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[380px]"
            >
              {/* Quote Mark Overlay */}
              <div className="absolute top-6 right-8 opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none select-none">
                <span className="material-symbols-outlined text-[100px] leading-none text-primary">format_quote</span>
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1.5 text-tertiary mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] fill-current">star</span>
                ))}
              </div>

              {/* Message */}
              <p className="text-lg md:text-xl font-medium text-on-surface-variant mb-8 leading-relaxed tracking-tight relative z-10 flex-grow">
                "{test.text}"
              </p>
              
              {/* Profile details */}
              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/60 relative z-10 shrink-0">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border border-outline-variant shadow-sm shrink-0">
                  <Image
                    alt={test.name}
                    className="w-full h-full object-cover"
                    src={test.avatar}
                    fill
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-on-surface font-headline leading-tight">{test.name}</h4>
                  <p className="text-[10px] text-tertiary uppercase tracking-widest font-bold mt-1 font-label">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
