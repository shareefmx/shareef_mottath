import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How does the AI trading bot work?",
    answer: "Our AI uses advanced machine learning algorithms to analyze market patterns, historical data, and real-time trends to make informed trading decisions. It continuously learns and adapts to changing market conditions.",
  },
  {
    question: "Is my cryptocurrency safe with Lunexa?",
    answer: "Yes, we prioritize security above all else. Your funds remain in your wallet or exchange account. We never have direct access to your assets. All connections are encrypted with bank-level security.",
  },
  {
    question: "Can I customize the trading strategy?",
    answer: "Absolutely! You have full control over your trading parameters, including risk tolerance, trading pairs, investment amounts, and stop-loss limits. The AI works within your specified boundaries.",
  },
  {
    question: "What exchanges do you support?",
    answer: "We support all major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, Bitfinex, and many others. We're constantly adding support for new exchanges.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. You'll continue to have access until the end of your billing period.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-3xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 font-light">
            Got questions? We've got answers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className="glass-card px-6 border-0">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};
