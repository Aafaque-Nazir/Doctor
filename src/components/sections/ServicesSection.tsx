import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">
                Our Specialties
              </span>
            </div>
            <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tight mb-6 text-on-surface leading-[1.1]">
              Comprehensive <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00a3c4]">Clinical Services</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Precision medicine designed for the modern individual. We cover
              everything from preventative screenings to specialized therapies with utmost care.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Major Service */}
          <div className="md:col-span-8 group p-10 md:p-14 bg-surface-container-lowest rounded-[2.5rem] flex flex-col justify-between min-h-[450px] shadow-[0_12px_45px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-outline-variant/40 relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-bl-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/10">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="monitor_heart">
                  monitor_heart
                </span>
              </div>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold px-4 py-2 bg-surface shadow-sm rounded-full border border-outline-variant/20">
                Advanced Diagnostic
              </span>
            </div>
            <div className="relative z-10 pt-16">
              <h3 className="font-headline text-3xl md:text-4xl font-black mb-4 tracking-tight">
                Internal Medicine & Diagnostics
              </h3>
              <p className="text-on-surface-variant text-lg max-w-lg mb-8 leading-relaxed">
                Utilizing state-of-the-art AI-assisted screenings and biological
                markers to detect risks before they become issues. Experience healthcare that focuses on deeply knowing your biology.
              </p>
              <Link
                href="/services/internal-medicine"
                className="inline-flex items-center gap-3 bg-on-surface text-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-primary transition-colors group/btn shadow-md hover:shadow-lg"
              >
                Learn More <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Mini Service 1 */}
          <div className="md:col-span-4 p-10 md:p-12 bg-primary text-on-primary rounded-[2.5rem] flex flex-col justify-between shadow-[0_12px_45px_rgba(0,98,121,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,98,121,0.5)] relative overflow-hidden group transition-all duration-500">
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-5xl mb-12" data-icon="neurology">
              neurology
            </span>
            <div className="relative z-10">
              <h3 className="font-headline text-2xl md:text-3xl font-black mb-3 leading-snug tracking-tight">
                Neurological Health
              </h3>
              <p className="text-primary-fixed-dim text-base leading-relaxed">
                Comprehensive cognitive assessments and tailored treatment plans designed to preserve brain vitality.
              </p>
            </div>
          </div>

          {/* Mini Service 2 */}
          <div className="md:col-span-4 p-10 md:p-12 bg-surface-container-lowest border border-outline-variant/40 rounded-[2.5rem] flex flex-col justify-between shadow-[0_12px_45px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group">
            <div className="p-4 bg-tertiary/10 rounded-2xl w-fit mb-12 relative z-10 border border-tertiary/10">
              <span className="material-symbols-outlined text-4xl text-tertiary" data-icon="nutrition">
                nutrition
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline text-2xl md:text-3xl font-black mb-3 leading-snug text-on-surface tracking-tight">
                Wellness & Longevity
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Bio-optimized nutrition, regenerative protocols, and hormone replacement strategies for peak performance.
              </p>
            </div>
          </div>

          {/* Mini Service 3 */}
          <div className="md:col-span-8 p-6 bg-surface-container-lowest border border-outline-variant/40 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-[0_12px_45px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group">
            <div className="h-64 w-full md:w-80 relative overflow-hidden rounded-[2rem] shadow-inner">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <Image
                alt="Laboratory analysis"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="flex-1 pr-6 pb-6 md:pb-0">
              <h3 className="font-headline text-3xl font-black mb-4 text-on-surface tracking-tight">
                Precision Lab Testing
              </h3>
              <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
                On-site advanced diagnostics providing real-time molecular data for immediate, hyper-personalized care decisions.
              </p>
              <span className="inline-flex items-center px-4 py-2 bg-secondary-container/50 text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase shadow-sm border border-secondary-container/50">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available Daily
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
