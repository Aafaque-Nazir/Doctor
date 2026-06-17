export function WhyChooseUsSection() {
  const features = [
    {
      icon: "biotech",
      title: "Advanced Technology",
      desc: "We utilize next-generation diagnostic equipment to ensure pinpoint accuracy."
    },
    {
      icon: "schedule",
      title: "Zero Wait Times",
      desc: "Your time is invaluable. Our scheduling system guarantees you are seen immediately upon arrival."
    },
    {
      icon: "diversity_1",
      title: "Holistic Approach",
      desc: "We treat the patient, not just the disease, focusing on long-term wellness and prevention."
    },
    {
      icon: "medical_services",
      title: "Concierge Care",
      desc: "Experience 24/7 direct access to your dedicated medical team for unprecedented peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
            The Clinical Advantage
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-on-surface-variant md:text-lg font-medium leading-relaxed">
            We have engineered every aspect of the patient experience to be flawless, combining world-class expertise with unmatched hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface rounded-2xl p-8 border border-outline-variant hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant/80 text-sm font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
