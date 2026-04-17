"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

type FormState = { success: boolean; message?: string; error?: string };

export function LeadForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContact,
    {
      success: false,
      message: "",
      error: "",
    }
  );

  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <div className="bg-surface-container-lowest rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-outline-variant/30">
        
        {/* Left Side: Information */}
        <div className="md:w-5/12 p-8 md:p-12 bg-primary relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00a3c4]/20 rounded-full blur-[60px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black mb-4 tracking-tight text-white leading-tight drop-shadow-sm">
              Your Journey to Wellness.
            </h2>
            <p className="text-white/80 mb-8 text-sm md:text-base leading-relaxed font-medium">
              We'll reach out within 4 hours to finalize your consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined p-2 bg-white/10 backdrop-blur-md rounded-xl text-white shadow-xl text-lg">
                  verified_user
                </span>
                <div>
                  <p className="font-bold font-headline text-sm text-white">100% Confidential</p>
                  <p className="text-xs text-white/70">HIPAA compliant network.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined p-2 bg-white/10 backdrop-blur-md rounded-xl text-white shadow-xl text-lg">
                  event_available
                </span>
                <div>
                  <p className="font-bold font-headline text-sm text-white">Priority Scheduling</p>
                  <p className="text-xs text-white/70">Evening & weekend slots.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-7/12 p-8 md:p-12 bg-surface-container-lowest">
          {state?.success ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up py-10">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 mb-2">
                <span className="material-symbols-outlined text-4xl">
                  check_circle
                </span>
              </div>
              <h3 className="text-3xl font-headline font-black text-on-surface">
                Request Placed
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {state.message} Our concierges will be in touch shortly.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5 h-full flex flex-col justify-center">
              {state?.error && (
                <div className="p-3 bg-error-container text-on-error-container rounded-lg text-sm font-medium">
                  {state.error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 group">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    required
                    className="w-full p-3.5 bg-surface rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40"
                    placeholder="Julian Vance"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5 group">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    className="w-full p-3.5 bg-surface rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40"
                    placeholder="julian@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 group">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full p-3.5 bg-surface rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-1.5 relative group">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Objective
                  </label>
                  <select
                    name="concern"
                    className="w-full p-3.5 bg-surface rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm font-medium text-on-surface appearance-none cursor-pointer"
                  >
                    <option>Health Assessment</option>
                    <option>Neurological Screening</option>
                    <option>Longevity Protocol</option>
                    <option>Blood Panel</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-[32px] pointer-events-none text-on-surface-variant text-lg">expand_more</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-on-surface text-surface py-4 rounded-xl font-headline font-bold text-sm md:text-base hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isPending ? "Submitting..." : "Schedule Securely"}
                  {!isPending && (
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
