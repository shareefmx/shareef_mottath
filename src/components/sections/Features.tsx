import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "../ui/glass-card";
import { Brain, Shield, ChartLineUp, Lightning } from "@phosphor-icons/react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Algorithms",
    description: "Machine learning models trained on years of market data for optimal decision making.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your assets are protected with military-grade encryption and secure infrastructure.",
  },
  {
    icon: ChartLineUp,
    title: "Real-Time Analytics",
    description: "Track your performance with detailed insights and comprehensive reporting tools.",
  },
  {
    icon: Lightning,
    title: "Lightning Fast Execution",
    description: "Execute trades in milliseconds to capitalize on market opportunities instantly.",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 px-4 bg-background/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Powerful Features
          </h2>
          <p className="text-foreground/70 font-light">
            Everything you need for successful crypto trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <GlassCardHeader>
                  <div className="mb-4 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <GlassCardTitle className="text-xl mb-2">{feature.title}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription className="text-base">
                    {feature.description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
