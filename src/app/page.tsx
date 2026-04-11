import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
