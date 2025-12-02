import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedIn } from "@/components/sections/FeaturedIn";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Mission } from "@/components/sections/Mission";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
