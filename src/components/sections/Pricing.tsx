import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "../ui/glass-card";
import { NeuroButton } from "../ui/neuro-button";
import { Check } from "@phosphor-icons/react";
import { Badge } from "../ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Basic AI trading bot",
      "Up to 3 active trades",
      "Daily market insights",
      "Email support",
      "Community access",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For serious traders",
    features: [
      "Advanced AI algorithms",
      "Unlimited active trades",
      "Real-time analytics",
      "Priority support",
      "Custom strategies",
      "Portfolio optimization",
      "Risk management tools",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions and teams",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
      "White-label options",
      "SLA guarantee",
      "Advanced compliance tools",
    ],
    recommended: false,
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Simple Pricing
          </h2>
          <p className="text-foreground/70 font-light">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}
              <GlassCard className={`h-full ${plan.recommended ? "border-primary/50" : ""}`}>
                <GlassCardHeader>
                  <GlassCardTitle className="text-2xl mb-2">{plan.name}</GlassCardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-light">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-foreground/60 font-light">/month</span>}
                  </div>
                  <GlassCardDescription>{plan.description}</GlassCardDescription>
                </GlassCardHeader>
                <GlassCardContent className="space-y-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={20} weight="bold" className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70 font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NeuroButton
                    variant={plan.recommended ? "glow" : "default"}
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </NeuroButton>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
