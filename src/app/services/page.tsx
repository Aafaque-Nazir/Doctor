"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    id: "internal-medicine",
    title: "Internal Medicine & Advanced Diagnostics",
    subtitle: "Precision healthcare, fundamentally reinvented.",
    description: "Our approach to internal medicine relies on thousands of data points rather than a few basic labs. We perform whole-body MRI, extensive genomic sequencing, and comprehensive cardiovascular baselining to identify risks years before symptoms manifest.",
    features: ["Whole-Body MRI Scans", "Comprehensive Genomic Analysis", "Advanced Cardiovascular Baselining"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
  },
  {
    id: "longevity",
    title: "Longevity & Healthspan Extension",
    subtitle: "Delaying aging at the cellular level.",
    description: "We don't just treat disease; we actively work to extend your healthy years. Through targeted metabolic optimization, hormone balancing, and advanced cellular therapeutics, we help you maintain peak physical and cognitive performance.",
    features: ["Cellular Age Testing", "Metabolic Optimization", "Bio-identical Hormone Therapy"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
  },
  {
    id: "neurology",
    title: "Cognitive & Neurological Health",
    subtitle: "Protecting your most vital asset.",
    description: "Preserving brain health requires a highly proactive approach. We utilize high-resolution neuroimaging and rigorous cognitive baselining to detect the earliest signs of neurodegeneration, allowing for immediate neuroprotective interventions.",
    features: ["High-Res Neuroimaging", "Cognitive Baselining", "Neuroprotective Strategies"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
  },
  {
    id: "concierge",
    title: "Executive Concierge Medicine",
    subtitle: "24/7 access to world-class physicians.",
    description: "Healthcare shouldn't wait. As a concierge patient, you have direct, immediate access to your dedicated physician via text, call, or same-day unhurried appointments. We handle all global medical coordination.",
    features: ["24/7 Direct Physician Access", "Same-Day Extended Appointments", "Global Medical Coordination"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  
  // Quick Inquiry Form State
  const [inquiryState, setInquiryState] = useState({
    name: "",
    email: "",
    service: "Internal Medicine & Advanced Diagnostics",
    status: "idle"
  });

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryState(prev => ({ ...prev, status: "submitting" }));
    setTimeout(() => {
      setInquiryState(prev => ({ ...prev, status: "success" }));
    }, 1200);
  };

  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden bg-surface" ref={containerRef}>
        
        <PageHeader 
          title="Clinical Expertise"
          subtitle="A comprehensive suite of proactive, highly personalized medical services designed for optimal healthspan."
          imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
        />

        {/* Editorial Layout Container */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
            
            {/* Sticky Sidebar (Visible on Desktop) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-32 space-y-12">
              <div className="space-y-4">
                <h3 className="font-headline text-3xl font-black text-on-surface">Our Disciplines</h3>
                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                  Navigate through our highly specialized medical departments designed for proactive, data-driven health optimization.
                </p>
              </div>
              
              <nav className="flex flex-col gap-2">
                {services.map((svc) => (
                  <a 
                    key={svc.id} 
                    href={`#${svc.id}`}
                    className="py-3 px-4 rounded-xl hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant transition-all font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant hover:text-primary flex items-center justify-between group"
                  >
                    {svc.title.split('&')[0]}
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">arrow_forward</span>
                  </a>
                ))}
              </nav>

              {/* Quick Inquiry Widget */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(15,23,42,0.04)] mt-12">
                <h4 className="font-headline text-xl font-black text-on-surface mb-2">Quick Inquiry</h4>
                <p className="text-xs text-on-surface-variant font-medium mb-6">Skip the wait. Request details instantly.</p>
                
                {inquiryState.status === "success" ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <p className="font-bold text-sm text-on-surface">Request Sent</p>
                    <button onClick={() => setInquiryState(prev => ({...prev, status: "idle"}))} className="text-[10px] text-tertiary uppercase font-bold tracking-widest hover:underline">Reset</button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickInquiry} className="space-y-4">
                    <input 
                      required 
                      placeholder="Your Name" 
                      value={inquiryState.name}
                      onChange={e => setInquiryState({...inquiryState, name: e.target.value})}
                      className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-sm focus:border-primary outline-none"
                    />
                    <select 
                      value={inquiryState.service}
                      onChange={e => setInquiryState({...inquiryState, service: e.target.value})}
                      className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-sm focus:border-primary outline-none"
                    >
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                    <button 
                      disabled={inquiryState.status === "submitting"}
                      className="w-full bg-primary text-white rounded-xl py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex justify-center"
                    >
                      {inquiryState.status === "submitting" ? <span className="material-symbols-outlined animate-spin text-[16px]">sync</span> : "Request Callback"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-24 md:space-y-32">
              {services.map((svc, idx) => (
                <div key={svc.id} id={svc.id} className="scroll-mt-32">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    {/* Header Section */}
                    <div className="space-y-3">
                      <span className="text-tertiary font-label text-[10px] font-bold tracking-widest uppercase">0{idx + 1} | Discipline</span>
                      <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">{svc.title}</h2>
                      <p className="text-lg md:text-xl font-medium text-on-surface-variant italic border-l-2 border-tertiary pl-4">{svc.subtitle}</p>
                    </div>

                    {/* Image Banner */}
                    <div className="relative h-[300px] md:h-[450px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-outline-variant/50">
                      <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                    </div>

                    {/* Content Block */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                      <div className="md:col-span-7">
                        <p className="text-on-surface-variant font-medium text-base md:text-lg leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                      <div className="md:col-span-5 bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-outline-variant">
                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface mb-6 border-b border-outline-variant/60 pb-3">Key Modalities</h4>
                        <ul className="space-y-4">
                          {svc.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">check_circle</span>
                              <span className="text-sm font-medium text-on-surface-variant">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          href="/contact"
                          className="mt-8 flex items-center gap-2 text-primary font-label text-[10px] font-bold tracking-widest uppercase hover:text-tertiary transition-colors"
                        >
                          Book Initial Consult <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                    
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
