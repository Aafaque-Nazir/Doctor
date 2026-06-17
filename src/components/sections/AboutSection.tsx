import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
                alt="Head Doctor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-surface-container shadow-xl rounded-2xl p-6 border border-outline-variant animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
                </div>
                <div>
                  <p className="font-headline font-black text-3xl text-on-surface">20+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Years of<br/>Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 mt-8 lg:mt-0">
            <div className="space-y-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
                Meet The Director
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                Dr. Jonathan <br className="hidden md:block"/>
                <span className="text-primary">Reynolds, MD</span>
              </h2>
              <p className="text-on-surface-variant font-medium uppercase tracking-widest text-xs">
                Chief Medical Officer & Lead Diagnostician
              </p>
            </div>

            <div className="space-y-5 text-on-surface-variant/80 font-medium leading-relaxed">
              <p>
                With over two decades of dedicated medical practice, Dr. Reynolds has established ClinicalCurator as the premier destination for highly personalized, advanced healthcare. His philosophy is rooted in the belief that true medicine goes beyond treating symptoms—it’s about understanding the complete biological ecosystem of the individual.
              </p>
              <p>
                Trained at the world's most prestigious institutions, his multi-disciplinary approach ensures that every patient receives a tailored strategy, blending cutting-edge diagnostics with profound empathetic care.
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="font-headline text-3xl font-black text-on-surface/40 italic">
                J. Reynolds
              </div>
              <div className="hidden sm:block w-px h-12 bg-outline-variant"></div>
              <div className="flex gap-4">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  Board Certified
                </div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">school</span>
                  Harvard Med
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
