import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard, GlassCardContent } from "../ui/glass-card";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Crypto Investor",
    content: "Lunexa transformed my trading strategy. The AI algorithms are incredibly accurate.",
    result: "312% ROI in 6 months",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Day Trader",
    content: "Best trading bot I've used. It's like having a professional trader working 24/7.",
    result: "$50k profit monthly",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Portfolio Manager",
    content: "The automation features saved me countless hours while improving performance.",
    result: "85% win rate",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Crypto Enthusiast",
    content: "Simple to use yet powerful. Perfect for both beginners and experienced traders.",
    result: "200% portfolio growth",
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-foreground/70 font-light">
            See what our users are saying about their results
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 w-max animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
              >
                <GlassCard className="w-80 h-full">
                  <GlassCardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} weight="fill" className="text-primary" size={16} />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 font-light">
                      "{testimonial.content}"
                    </p>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-primary font-light text-sm">
                        Result: {testimonial.result}
                      </p>
                    </div>
                    <div>
                      <p className="font-light">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60 font-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
