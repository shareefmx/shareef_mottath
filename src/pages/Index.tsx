import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Principle } from "@/components/sections/Principle";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { Badges } from "@/components/sections/Badges";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Principle />
        <SelectedWork />
        <TechnicalSkills />
        <Badges />
        <AboutMe />
        <Experience />
        <Education />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
