import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Treatment Not Found | Aura Dental NYC",
    };
  }

  return {
    title: `${service.title} | Aura Dental NYC`,
    description: `${service.subtitle} Explained clearly with procedure steps, common myths, and FAQs.`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((rSlug) => getServiceBySlug(rSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-[#fcfcfb] text-zinc-950 pt-20">
        
        {/* Top Breadcrumb & Tagline Bar */}
        <div className="bg-white border-b border-zinc-300 py-3.5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <Breadcrumbs />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-700">
              Dental Treatments · Midtown NYC
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtitle & Quick Stats */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider">
                      {service.categoryBadge}
                    </span>
                    <span className="text-xs font-semibold text-zinc-700">
                      {service.category}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
                    {service.title}
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-800 font-semibold leading-snug">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {service.heroDesc}
                </p>

                {/* Quick Clinical Indicators Pill Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-[#fbfbf9] border border-zinc-300">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5">{service.duration}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#fbfbf9] border border-zinc-300">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Comfort</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5">{service.painLevel}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#fbfbf9] border border-zinc-300">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Recovery</p>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5">{service.healingTime}</p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/book?service=${encodeURIComponent(service.shortTitle)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    <span>Book This Treatment</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+15558883368"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border-2 border-zinc-900 text-zinc-950 text-xs font-bold tracking-wider uppercase hover:bg-zinc-950 hover:text-white active:scale-[0.98] transition-all shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">call</span>
                    <span>(555) 888-3368</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Photography Frame */}
              <div className="lg:col-span-5 group cursor-default">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] max-h-[380px] w-full rounded-3xl overflow-hidden border border-zinc-300 bg-zinc-100 shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-bold tracking-wider uppercase border border-zinc-800 shadow-sm">
                      Aura Dental Clinic
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Symptoms Section: When Do You Need This? */}
        <section className="py-12 md:py-16 bg-[#fbfbf9] border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="max-w-xl mb-8 space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                Symptom Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                When do you need this treatment?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 font-normal">
                If you are experiencing any of these common signs, schedule a visit so our doctors can evaluate the issue early.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {service.idealFor.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-zinc-300 shadow-xs flex items-start gap-3 hover:border-zinc-950 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-950 shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Procedure */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="max-w-xl mb-10 space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                Treatment Procedure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                How the treatment is done
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 font-normal">
                Clear, straightforward clinical steps with gentle numbing and zero guesswork.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.procedureSteps.map((step) => (
                <div
                  key={step.step}
                  className="space-y-3 pt-4 border-t-2 border-zinc-300 hover:border-zinc-950 transition-colors duration-300 group cursor-default"
                >
                  <span className="text-[12px] font-mono font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors block">
                    Step {step.step}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="py-12 md:py-16 bg-[#fbfbf9] border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="max-w-xl mb-8 space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                Why Patients Choose This
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                Key benefits for your health & comfort
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-zinc-300 shadow-xs space-y-2"
                >
                  <h3 className="text-sm font-bold text-zinc-950 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor's Advice: Myths vs Facts */}
        {service.mythsAndFacts.length > 0 && (
          <section className="py-12 md:py-16 bg-white border-b border-zinc-300">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
              <div className="max-w-xl mb-10 space-y-1.5">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  Doctor&apos;s Advice
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                  Common myths vs medical facts
                </h2>
                <p className="text-xs sm:text-sm text-zinc-700 font-normal">
                  Patients often delay care because of widespread misconceptions. Here is the real clinical truth.
                </p>
              </div>

              <div className="space-y-4">
                {service.mythsAndFacts.map((mf, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#fbfbf9] border border-zinc-300 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                  >
                    <div className="md:col-span-5 space-y-1">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-200 text-[10px] font-bold uppercase tracking-wider">
                        Common Myth
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-zinc-950 pt-1 leading-snug">
                        &ldquo;{mf.myth}&rdquo;
                      </p>
                    </div>

                    <div className="md:col-span-7 space-y-1 md:border-l md:border-zinc-300 md:pl-5">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                        The Medical Fact
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-800 font-normal pt-1 leading-relaxed">
                        {mf.fact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Treatment Specific FAQs */}
        <section className="py-12 md:py-16 bg-[#fbfbf9] border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  Questions Answered
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                  Frequently asked about {service.shortTitle}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  Have a different question? Call our front desk at (555) 888-3368 anytime.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-3">
                {service.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-2xl bg-white border border-zinc-300 shadow-xs space-y-2"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Bottom Booking Invitation Card */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white text-left shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Get Started Today
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to consult a doctor for {service.shortTitle}?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  Book online in 3 quick steps or call our friendly front desk team to ask any questions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href={`/book?service=${encodeURIComponent(service.shortTitle)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 text-xs font-bold tracking-wider uppercase hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>
                <a
                  href="tel:+15558883368"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-zinc-700 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-900 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>(555) 888-3368</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Treatments Carousel/Grid */}
        {relatedServices.length > 0 && (
          <section className="py-12 md:py-16 bg-[#fbfbf9]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
              <div className="mb-8 space-y-1">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
                  Related Care
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950">
                  Other common treatments
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-zinc-300 shadow-xs hover:border-zinc-950 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between gap-4 group"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold tracking-wider uppercase text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                        {rel.categoryBadge}
                      </span>
                      <h4 className="text-base font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors tracking-tight pt-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-zinc-700 line-clamp-2 leading-relaxed">
                        {rel.subtitle}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-bold text-zinc-950 group-hover:underline">
                      <span>View Procedure Details</span>
                      <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
