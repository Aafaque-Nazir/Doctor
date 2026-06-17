import Image from "next/image";

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80", alt: "Modern Reception" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80", alt: "Consultation Room" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", alt: "Advanced Equipment" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80", alt: "Laboratory" },
  ];

  return (
    <section id="facility" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase">
              The Facility
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">
              A Healing Environment
            </h2>
          </div>
          <p className="text-on-surface-variant font-medium max-w-sm md:text-right">
            Designed to reduce clinical anxiety and promote tranquility, our state-of-the-art facility reflects our commitment to premium care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl overflow-hidden group shadow-lg ${
                i === 0 || i === 3 ? "lg:col-span-2 h-[300px] md:h-[400px]" : "h-[300px] md:h-[400px]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-headline font-bold text-lg tracking-wide drop-shadow-md">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
