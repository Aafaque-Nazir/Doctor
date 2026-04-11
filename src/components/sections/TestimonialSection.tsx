import Image from "next/image";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-on-surface-variant font-bold mb-12">
            Global Recognition
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            <span className="font-headline text-2xl font-black italic">
              HEALTHLINE
            </span>
            <span className="font-headline text-2xl font-black tracking-tighter">
              MedCenter
            </span>
            <span className="font-headline text-2xl font-bold">BIOTECH.</span>
            <span className="font-headline text-2xl font-black">NATURE</span>
            <span className="font-headline text-2xl font-bold uppercase tracking-widest">
              Global
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* Testimonial 1 */}
          <div className="p-12 bg-surface-container-low rounded-[2rem] relative">
            <span className="absolute top-8 right-12 text-primary/10 text-8xl font-black">
              &quot;
            </span>
            <p className="text-xl font-medium text-on-surface mb-8 leading-relaxed">
              &quot;The precision at ClinicalCurator is unmatched. I finally feel
              like my health data is being used to build a future, not just fix
              a problem.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-slate-200">
                <Image
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYH6ZE-Zw4r1OlFf5PLe7KPrXuDmfsCJ8HAM_CU8BQ5n3Y4BojPXQqAXU-PHjejE1wVohytkY1DVWwc6PgFBXtKI3rf0qo31aCQ6nFYWC5OkAgwSQoRlEE9zjZ2DBRqDyvgjAnn124lQpKNUptUir6JXYhRbyCgLba94Yt4EKUS6JcEekeV2ZVjZb1aSTuM7E98llOVFcXFkkYs2HOwTBEQyHS9COjNl7zcM8QmfAeisB9_RVApFA8qwN8bz8IsMvhyS1qgRlVkfR"
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Dr. Julian Vance</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Medical Researcher
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="p-12 bg-surface-container-low rounded-[2rem] relative">
            <span className="absolute top-8 right-12 text-primary/10 text-8xl font-black">
              &quot;
            </span>
            <p className="text-xl font-medium text-on-surface mb-8 leading-relaxed">
              &quot;Modern, quiet, and incredibly efficient. The doctors here
              take the time to explain the &apos;why&apos; behind every
              recommendation.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-slate-200">
                <Image
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-cK5_GEAcabF9OJTfofkSQZhrH4Zela8U_QZgDanA6JU-23fnMKLHLxtWFQwCdpYENTuAKNBsHgxOLeDBnWVFUJrk0nuxf_2y2l4aGY9djHZLtpMD0gQlkMc4lCmGIdR3xR1pBlxuauYDmqJxPWxi_fcXiUlijmuMGMZ5MmlySS9H9ahFxXV3Sj41LuNZUWpirhQWr7fpY9VlbVt0ozP4UkmEwYOmW7RQQE8hidXkQbbeTfApd5aOeUk88ESA6iNgyhw7AXhNVQAn"
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Sarah Jenkins</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
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
