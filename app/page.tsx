import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import HeroScene from "@/components/HeroScene";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseOverlay } from "@/components/noise-overlay";

export default function Home() {
  return (
    <main id="main-wrapper" className="relative min-h-screen bg-[#020203] cursor-none md:cursor-auto">
      {/* Özel İmleç ve Sinematik Grain Efekti */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <NoiseOverlay />

      {/* 3D Arka Plan Katmanı */}
      <HeroScene />

      {/* Ön Katman (İçerikler) */}
      <div className="relative z-10 w-full bg-transparent overflow-x-hidden">
        <SiteHeader />
        
        <section className="bg-transparent">
          <HeroSection />
        </section>

        <section className="bg-transparent">
          <AboutSection />
        </section>

        <section className="bg-transparent">
          <SkillsSection />
        </section>

        <section className="bg-transparent">
          <ProjectsSection />
        </section>

        <section className="bg-transparent">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}