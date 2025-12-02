import { motion } from "framer-motion";
import { NeuroButton } from "../ui/neuro-button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 text-glow">
          AI-Powered Crypto Trading
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto font-light">
          Automate your crypto trading with advanced AI algorithms. Trade smarter, not harder, and maximize your returns 24/7.
        </p>
        <NeuroButton variant="glow" size="lg">
          Get Started Free
        </NeuroButton>
      </motion.div>
    </section>
  );
};
