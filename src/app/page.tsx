import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SmileGallerySection } from "@/components/sections/SmileGallerySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <SmileGallerySection />
        <AboutSection />
        <DoctorsSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
