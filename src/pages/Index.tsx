import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Principle } from "@/components/sections/Principle";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { Writing } from "@/components/sections/Writing";
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
        <AboutMe />
        <Experience />
        <Writing />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
