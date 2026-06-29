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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DoctorsSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-surface relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24 space-y-5 text-left">
          <span className="flex items-center gap-3 text-primary font-label text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <span className="w-8 h-px bg-primary/50"></span>
            Medical Excellence
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-on-surface tracking-tighter leading-tight">
            Our World-Class <br />
            <span className="text-primary italic font-light tracking-tight">Specialists.</span>
          </h2>
          <p className="text-on-surface-variant font-medium text-base sm:text-lg leading-relaxed max-w-xl">
            Led by highly experienced experts, our medical team combines top-tier academic knowledge with caring, personalized attention for every patient.
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
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(10,25,47,0.03)] border border-outline/10 hover:shadow-[0_20px_50px_rgba(10,25,47,0.07)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col min-h-[480px] md:min-h-[550px]"
            >
              {/* Image Container */}
              <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-[1s] ease-out group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-85 mix-blend-multiply"></div>
                
                {/* Overlay Credentials */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2 flex-wrap opacity-90">
                  {doc.credentials.map((cred, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-primary/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold tracking-widest uppercase rounded">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1 relative">
                <p className="text-tertiary font-bold text-xs tracking-wider uppercase mb-2">
                  {doc.specialty}
                </p>
                <h3 className="font-headline text-2xl font-black text-on-surface mb-1">
                  {doc.name}
                </h3>
                <p className="text-on-surface-variant text-sm font-medium">
                  {doc.role}
                </p>
                
                {/* Profile Link */}
                <div className="mt-auto pt-6 border-t border-outline/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest group-hover:text-tertiary transition-colors">
                    View Full Profile
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px]">east</span>
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
