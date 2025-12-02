import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-6">
          We believe that sophisticated trading strategies shouldn't be reserved for hedge funds and institutional investors. That's why we built Lunexa - to democratize access to AI-powered trading tools and level the playing field for individual traders.
        </p>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
          Our advanced algorithms analyze millions of data points every second, identifying opportunities that would be impossible for humans to spot. We're committed to continuous innovation, ensuring our users always have access to the most cutting-edge trading technology.
        </p>
      </motion.div>
    </section>
  );
};
