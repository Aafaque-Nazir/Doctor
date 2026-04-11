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
    <section id="contact" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-surface-container-lowest rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row ghost-border">
        <div className="lg:w-1/2 p-12 md:p-20 bg-gradient-to-br from-primary to-primary-container text-on-primary">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Take the First Step to Wellness
          </h2>
          <p className="text-on-primary-container/80 mb-12 text-lg">
            Our scheduling team will reach out within 4 clinical hours to
            finalize your initial consultation time.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined p-2 bg-white/10 rounded-lg">
                verified_user
              </span>
              <div>
                <p className="font-bold">Confidential & Secure</p>
                <p className="text-sm opacity-70">
                  HIPAA compliant data processing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined p-2 bg-white/10 rounded-lg">
                event_available
              </span>
              <div>
                <p className="font-bold">Flexible Hours</p>
                <p className="text-sm opacity-70">
                  Evening and weekend sessions available.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-12 md:p-20 bg-white">
          {state?.success ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">
                Request Received
              </h3>
              <p className="text-on-surface-variant max-w-sm">
                {state.message} We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              {state?.error && (
                <div className="p-4 bg-error-container text-on-error-container rounded-xl text-sm font-medium">
                  {state.error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    required
                    className="w-full p-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    className="w-full p-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full p-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Primary Concern
                  </label>
                  <select
                    name="concern"
                    className="w-full p-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  >
                    <option>General Consultation</option>
                    <option>Neurological Assessment</option>
                    <option>Longevity & Wellness</option>
                    <option>Diagnostic Screening</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Clinical Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  className="w-full p-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none h-32"
                  placeholder="Briefly describe your medical inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary text-on-primary py-5 rounded-xl font-headline font-bold text-lg hover:bg-primary-container transition-all flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isPending ? "Submitting..." : "Confirm Request"}
                {!isPending && (
                  <span className="material-symbols-outlined">send</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
