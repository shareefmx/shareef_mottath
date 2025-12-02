import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 text-center">
            About Lunexa
          </h1>
          
          <div className="space-y-8">
            <GlassCard>
              <GlassCardContent className="p-8">
                <h2 className="text-2xl font-light tracking-tight mb-4">Our Story</h2>
                <p className="text-foreground/70 font-light leading-relaxed mb-4">
                  Lunexa was founded in 2022 by a team of financial technologists and AI researchers who saw an opportunity to democratize sophisticated trading strategies. We witnessed how institutional investors leveraged advanced algorithms to gain market advantages, while individual traders were left behind.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We set out to change that by creating an AI-powered platform that puts institutional-grade trading tools in the hands of everyday traders. Today, Lunexa serves thousands of users worldwide, helping them achieve their financial goals through intelligent automation.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-8">
                <h2 className="text-2xl font-light tracking-tight mb-4">Our Technology</h2>
                <p className="text-foreground/70 font-light leading-relaxed mb-4">
                  At the heart of Lunexa is a sophisticated AI engine that processes millions of data points every second. Our machine learning models are trained on years of historical market data and continuously adapt to changing conditions.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We employ cutting-edge techniques including neural networks, sentiment analysis, and predictive modeling to identify profitable opportunities that would be impossible for humans to spot manually.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-8">
                <h2 className="text-2xl font-light tracking-tight mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="text-foreground/70 font-light leading-relaxed">
                    <strong className="text-foreground">Transparency:</strong> We believe in clear communication about how our algorithms work and the risks involved in crypto trading.
                  </li>
                  <li className="text-foreground/70 font-light leading-relaxed">
                    <strong className="text-foreground">Security:</strong> Your assets and data are protected with industry-leading security measures.
                  </li>
                  <li className="text-foreground/70 font-light leading-relaxed">
                    <strong className="text-foreground">Innovation:</strong> We continuously research and implement the latest advancements in AI and blockchain technology.
                  </li>
                  <li className="text-foreground/70 font-light leading-relaxed">
                    <strong className="text-foreground">Accessibility:</strong> We're committed to making sophisticated trading tools available to everyone, regardless of their background.
                  </li>
                </ul>
              </GlassCardContent>
            </GlassCard>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
