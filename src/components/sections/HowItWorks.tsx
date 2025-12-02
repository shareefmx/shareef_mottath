import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "../ui/glass-card";
import { Wallet, Robot, ChartLine } from "@phosphor-icons/react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Wallet",
    description: "Securely link your crypto wallet in seconds. We support all major wallets and exchanges.",
  },
  {
    icon: Robot,
    title: "Set Up Your AI Assistant",
    description: "Configure your trading preferences and risk tolerance. Our AI learns from your strategy.",
  },
  {
    icon: ChartLine,
    title: "Automate Your Trading",
    description: "Sit back and watch as our AI executes trades 24/7, optimizing for maximum returns.",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            How It Works
          </h2>
          <p className="text-foreground/70 font-light">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlassCard className="h-full text-center">
                <GlassCardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <step.icon size={32} weight="light" className="text-primary" />
                  </div>
                  <GlassCardTitle className="mb-3">{step.title}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <p className="text-foreground/70 font-light">
                    {step.description}
                  </p>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
