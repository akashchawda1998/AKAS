import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Technologies } from "@/components/sections/Technologies";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Portfolio } from "@/components/sections/Portfolio";
import { Careers } from "@/components/sections/Careers";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Particles Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-50 rounded-full blur-[100px] opacity-50" />
      </div>

      <Hero />
      <Partners />
      <AboutSection />
      <Services />
      <Skills />
      <Technologies />
      <StatsCounter />
      <Portfolio />
      <Testimonials />
      <Careers />
      <ProjectEstimator />
      <ContactSection />
    </div>
  );
}