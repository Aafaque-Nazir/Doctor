import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialSection />
        <FaqSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
