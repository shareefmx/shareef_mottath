import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card";
import { Link } from "react-router-dom";
import { CalendarBlank, Clock } from "@phosphor-icons/react";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Cryptocurrency Trading",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we trade digital assets and what it means for the future of finance.",
    date: "December 1, 2024",
    readTime: "5 min read",
    slug: "future-ai-crypto-trading",
  },
  {
    id: 2,
    title: "Understanding Market Volatility: A Beginner's Guide",
    excerpt: "Learn the fundamentals of cryptocurrency market volatility and how to protect your investments during turbulent times.",
    date: "November 28, 2024",
    readTime: "7 min read",
    slug: "understanding-market-volatility",
  },
  {
    id: 3,
    title: "5 Essential Risk Management Strategies for Crypto Traders",
    excerpt: "Discover proven risk management techniques that professional traders use to protect their capital and maximize returns.",
    date: "November 25, 2024",
    readTime: "6 min read",
    slug: "risk-management-strategies",
  },
  {
    id: 4,
    title: "How Machine Learning Predicts Market Trends",
    excerpt: "Dive deep into the algorithms and techniques that power our AI trading platform and learn how they identify profitable opportunities.",
    date: "November 22, 2024",
    readTime: "8 min read",
    slug: "machine-learning-market-trends",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-4 text-center">
            Blog
          </h1>
          <p className="text-foreground/70 font-light text-center mb-12">
            Insights, tips, and news from the world of AI-powered trading
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${article.slug}`}>
                  <GlassCard className="h-full hover:border-primary/30 transition-all">
                    <GlassCardHeader>
                      <GlassCardTitle className="mb-3">{article.title}</GlassCardTitle>
                      <GlassCardDescription className="text-base mb-4">
                        {article.excerpt}
                      </GlassCardDescription>
                    </GlassCardHeader>
                    <GlassCardContent>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 font-light">
                        <div className="flex items-center gap-1">
                          <CalendarBlank size={16} weight="light" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} weight="light" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </GlassCardContent>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
