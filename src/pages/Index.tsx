import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedIn } from "@/components/sections/FeaturedIn";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Testimonials";
import { Features } from "@/components/sections/Features";
import { Mission } from "@/components/sections/Mission";
import { Footer } from "@/components/sections/Footer";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <AboutMe />
      <ProductShowcase />
      <Experience />
      <Features />
      <Projects />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
