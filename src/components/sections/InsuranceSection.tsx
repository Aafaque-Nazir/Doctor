"use client";

import { motion } from "framer-motion";

export function InsuranceSection() {
  const partners = [
    "Aetna Premium", "BlueCross BlueShield", "Cigna Global", 
    "UnitedHealthcare", "Humana Elite", "Kaiser Permanente"
  ];

  return (
    <section className="py-20 bg-primary border-y border-white/5 overflow-hidden relative">
      {/* Subtle glowing element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-tertiary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Block */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-3 shrink-0">
            <h3 className="font-headline text-2xl lg:text-3xl font-black text-white tracking-tight">
              Accepted <br className="hidden lg:block"/> 
              <span className="text-tertiary">Insurance Providers</span>
            </h3>
            <p className="text-sm font-medium text-white/50 max-w-xs mx-auto lg:mx-0 leading-relaxed">
              We coordinate with leading global insurance networks to offer seamless out-of-network claims integration.
            </p>
          </div>

          {/* Right Block: Logo Grid */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/[0.01] hover:bg-white/[0.03] py-6 px-4 rounded-2xl border border-white/5 hover:border-white/10 flex items-center justify-center text-center shadow-inner group transition-all duration-300 cursor-default"
                >
                  <span className="font-headline font-bold text-xs uppercase tracking-widest text-white/40 group-hover:text-tertiary transition-colors duration-300">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
