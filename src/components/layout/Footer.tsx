import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#001524] text-white pt-24 pb-8 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <span className="text-3xl lg:text-4xl font-black font-headline tracking-tighter block text-white drop-shadow-md">
              ClinicalCurator<span className="text-primary">.</span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              Precision medicine designed for the modern individual. Setting the benchmark for advanced, highly-personalized clinical care.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 text-white/80 hover:text-white hover:-translate-y-1 group">
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">language</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 text-white/80 hover:text-white hover:-translate-y-1 group">
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">mail</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 text-white/80 hover:text-white hover:-translate-y-1 group">
                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">location_on</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 lg:pl-10">
            <h4 className="font-headline font-bold text-lg tracking-wide uppercase text-white/90">Patient Portal</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><Link href="#services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Specialized Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Global Recognition</Link></li>
              <li><Link href="#contact" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Book Consultation</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Telehealth Login</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-8">
            <h4 className="font-headline font-bold text-lg tracking-wide uppercase text-white/90">Clinical Hours</h4>
            <div className="space-y-4 text-sm text-white/60 font-medium">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span>Mon - Fri</span>
                <span className="font-bold text-white/90 tracking-wide">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span>Saturday</span>
                <span className="font-bold text-white/90 tracking-wide">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center pb-3 text-primary">
                <span>Sunday</span>
                <span className="font-bold tracking-wide">Priority Only</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 lg:pl-4">
            <h4 className="font-headline font-bold text-lg tracking-wide uppercase text-white/90">Reach Us</h4>
            <ul className="space-y-5 text-sm text-white/60 font-medium">
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary text-xl drop-shadow-md">location_on</span>
                <span className="leading-relaxed">124 Precision Ave, Suite 400<br/>Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary text-xl drop-shadow-md">call</span>
                <span className="tracking-wide">+1 (555) 888-0000</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary text-xl drop-shadow-md">mail</span>
                <span>concierge@clinicalcurator.md</span>
              </li>
</ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-widest font-label font-bold">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Clinical Curator. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <Link href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
