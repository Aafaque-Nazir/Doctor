import Image from "next/image";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-surface overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="font-headline text-xs md:text-sm uppercase tracking-[0.3em] text-on-surface-variant font-bold mb-12">
            Global Recognition & Trust
          </h2>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Marquee Wrapper */}
          <div className="overflow-hidden w-full relative group py-4">
            {/* Fading Edges */}
            <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee opacity-40 group-hover:opacity-70 transition-opacity duration-700 grayscale">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24 shrink-0">
                  <span className="font-headline text-2xl font-black italic">HEALTHLINE</span>
                  <span className="font-headline text-2xl font-black tracking-tighter">MedCenter</span>
                  <span className="font-headline text-2xl font-bold">BIOTECH.</span>
                  <span className="font-headline text-2xl font-black">NATURE</span>
                  <span className="font-headline text-2xl font-bold uppercase tracking-widest">Global</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24">
          {/* Testimonial 1 */}
          <div className="p-10 md:p-14 bg-surface-container-lowest rounded-[2.5rem] relative group border border-outline-variant/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="absolute -top-10 right-10 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700">
              <span className="material-symbols-outlined text-[120px] leading-none text-primary">format_quote</span>
            </div>
            
            <div className="flex items-center gap-2 text-yellow-500 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-lg" data-icon="star">star</span>
              ))}
            </div>

            <p className="text-xl md:text-2xl font-headline font-medium text-on-surface mb-12 leading-relaxed tracking-tight relative z-10">
              "The precision at ClinicalCurator is unmatched. I finally feel
              like my health data is being used to build a future, not just fix
              a problem."
            </p>
            
            <div className="flex items-center gap-5 mt-auto pt-8 border-t border-outline-variant/20 relative z-10">
              <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                  fill
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface font-headline">Dr. Julian Vance</h4>
                <p className="text-xs text-primary-fixed-variant uppercase tracking-widest font-bold mt-1">
                  Medical Researcher
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-10 md:p-14 bg-surface-container-lowest rounded-[2.5rem] relative group border border-outline-variant/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:mt-12">
            <div className="absolute -top-10 right-10 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700">
              <span className="material-symbols-outlined text-[120px] leading-none text-primary">format_quote</span>
            </div>

            <div className="flex items-center gap-2 text-yellow-500 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-lg" data-icon="star">star</span>
              ))}
            </div>

            <p className="text-xl md:text-2xl font-headline font-medium text-on-surface mb-12 leading-relaxed tracking-tight relative z-10">
              "Modern, quiet, and incredibly efficient. The doctors here
              take the time to meticulously explain the 'why' behind every
              single recommendation."
            </p>
            
            <div className="flex items-center gap-5 mt-auto pt-8 border-t border-outline-variant/20 relative z-10">
              <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  fill
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface font-headline">Sarah Jenkins</h4>
                <p className="text-xs text-primary-fixed-variant uppercase tracking-widest font-bold mt-1">
                  Design Architect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
