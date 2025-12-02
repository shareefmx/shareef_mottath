import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  "TechCrunch",
  "Forbes",
  "Bloomberg",
  "CoinDesk",
  "The Verge",
  "Wired",
];

export const FeaturedIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <p className="text-center text-sm text-foreground/50 mb-12 font-light tracking-wide uppercase">
          Featured In
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {publications.map((pub, index) => (
            <motion.div
              key={pub}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-foreground/60 font-light text-lg hover:text-foreground transition-colors"
            >
              {pub}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
