import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
              Comprehensive Clinical Services
            </h2>
            <p className="text-on-surface-variant">
              Precision medicine designed for the modern individual. We cover
              everything from preventative screenings to specialized therapies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Major Service */}
          <div className="md:col-span-8 group p-10 bg-surface-container-lowest rounded-[2rem] flex flex-col justify-between min-h-[400px] transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="flex justify-between items-start">
              <span
                className="material-symbols-outlined text-primary text-5xl"
                data-icon="monitor_heart"
              >
                monitor_heart
              </span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60 font-bold">
                Advanced Diagnostic
              </span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">
                Internal Medicine & Diagnostics
              </h3>
              <p className="text-on-surface-variant max-w-lg mb-8">
                Utilizing state-of-the-art AI-assisted screenings and biological
                markers to detect risks before they become issues.
              </p>
              <Link
                href="#"
                className="text-primary font-headline font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Mini Service 1 */}
          <div className="md:col-span-4 p-8 bg-primary text-on-primary rounded-[2rem] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl">
            <span
              className="material-symbols-outlined text-4xl"
              data-icon="neurology"
            >
              neurology
            </span>
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                Neurological Health
              </h3>
              <p className="text-primary-fixed/80 text-sm">
                Comprehensive cognitive assessments and treatment plans.
              </p>
            </div>
          </div>
          {/* Mini Service 2 */}
          <div className="md:col-span-4 p-8 bg-surface-container-lowest rounded-[2rem] flex flex-col justify-between ghost-border transition-all hover:-translate-y-1 hover:shadow-xl">
            <span
              className="material-symbols-outlined text-4xl text-tertiary"
              data-icon="nutrition"
            >
              nutrition
            </span>
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">
                Wellness & Longevity
              </h3>
              <p className="text-on-surface-variant text-sm">
                Bio-optimized nutrition and hormone replacement strategies.
              </p>
            </div>
          </div>
          {/* Mini Service 3 */}
          <div className="md:col-span-8 p-8 bg-surface-container-lowest rounded-[2rem] flex flex-col md:flex-row gap-8 items-center ghost-border transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="h-48 w-full md:w-64 relative overflow-hidden rounded-xl">
              <Image
                alt="Laboratory analysis"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0rOnRlb0Sc73edY_aalfOHPaspm5b3rwmnpdYudYgNFUYp0qU1w6X-iPhYrVPFhDiFUonSFY7VJk1WeqmJdQFAci5XgF8lff5KGy9dYMgf8lJVhSylEs8fSlnCEGb2HJUDsYK0WI5A6yaZBD92Mk67S8cSlYrqCaWqrOjT7_qOFsKTMozv_Jc8iOf06oUC7_4uTjCeftix0CiZZkcYAFl9ryNI86X4iA1p6dkDPhLPq7TVtRvk8eCshjs_go69qkjKD_PbHC1oy6_"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">
                Precision Lab Testing
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                On-site rapid diagnostics providing real-time data for immediate care decisions.
              </p>
              <span className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase">
                Available Daily
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
