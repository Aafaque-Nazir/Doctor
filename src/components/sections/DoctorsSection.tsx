"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const doctors = [
  {
    id: 1,
    name: "Dr. Jonathan Reynolds, MD",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine & Diagnostics",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
    credentials: ["Harvard Medical School", "Board Certified"],
  },
  {
    id: 2,
    name: "Dr. Sarah Chen, DO",
    role: "Lead Neurologist",
    specialty: "Neurological Health",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80",
    credentials: ["Johns Hopkins", "Fellowship Trained"],
  },
  {
    id: 3,
    name: "Dr. Marcus Thorne, MD",
    role: "Head of Cardiology",
    specialty: "Advanced Cardiovascular Care",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    credentials: ["Stanford Medicine", "Board Certified"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DoctorsSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
            Medical Excellence
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-tight">
            Our World-Class <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Specialists</span>
          </h2>
          <p className="text-on-surface-variant font-medium text-lg leading-relaxed pt-2">
            Led by globally recognized experts, our clinical team combines profound academic knowledge with deep, personalized patient care.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doc) => (
            <motion.div 
              key={doc.id}
              variants={cardVariants}
              className="group relative bg-surface rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-outline-variant hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col min-h-[580px]"
            >
              {/* Image Container */}
              <div className="relative h-[340px] w-full overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 mix-blend-multiply"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-2 flex-wrap">
                    {doc.credentials.map((cred, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1 bg-surface z-20 relative">
                <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-2">
                  {doc.specialty}
                </p>
                <h3 className="font-headline text-2xl font-black text-on-surface mb-1">
                  {doc.name}
                </h3>
                <p className="text-on-surface-variant font-medium">
                  {doc.role}
                </p>
                
                {/* Hover Divider & Link */}
                <div className="mt-auto pt-6 border-t border-outline-variant flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface uppercase tracking-widest group-hover:text-primary transition-colors">
                    View Profile
                  </span>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
