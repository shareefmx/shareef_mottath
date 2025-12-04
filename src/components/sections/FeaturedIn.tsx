import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
};

const Counter = ({ value, label }: { value: number; label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="flex flex-col items-center p-6 bg-background rounded-xl hover:bg-background transition-colors duration-300"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-3 flex items-center">
        <motion.span>{rounded}</motion.span>
        <span>+</span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider text-center">{label}</span>
    </motion.div>
  );
};

export const FeaturedIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Counter value={15} label="React Projects" />
          <Counter value={30} label="Automation Workflows" />
          <Counter value={20} label="Other Projects" />
        </div>
      </motion.div>
    </section>
  );
};
