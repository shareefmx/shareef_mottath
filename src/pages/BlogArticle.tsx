import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { useParams, Navigate } from "react-router-dom";
import { CalendarBlank, Clock, ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const articles: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "future-ai-crypto-trading": {
    title: "The Future of AI in Cryptocurrency Trading",
    date: "December 1, 2024",
    readTime: "5 min read",
    content: [
      "Artificial intelligence is fundamentally transforming the cryptocurrency trading landscape. What once required teams of analysts and traders can now be accomplished by sophisticated algorithms that never sleep, never miss an opportunity, and continuously learn from market dynamics.",
      "The integration of AI in crypto trading represents more than just automation—it's a paradigm shift in how we approach financial markets. Machine learning models can process vast amounts of data instantaneously, identifying patterns and correlations that would be impossible for human traders to detect.",
      "Looking ahead, we're seeing several key trends emerge. Natural language processing is being used to analyze sentiment across social media and news sources, providing early indicators of market movements. Deep learning networks are becoming more adept at predicting price movements by analyzing complex market microstructures.",
      "The democratization of these tools through platforms like Lunexa means that individual traders can now access the same sophisticated strategies that were once exclusive to hedge funds and institutional investors. This levels the playing field and opens up new possibilities for wealth creation.",
      "As we move forward, the role of AI in crypto trading will only grow more significant. We're entering an era where human intuition and artificial intelligence work in tandem, each complementing the other's strengths to create more robust and profitable trading strategies.",
    ],
  },
  "understanding-market-volatility": {
    title: "Understanding Market Volatility: A Beginner's Guide",
    date: "November 28, 2024",
    readTime: "7 min read",
    content: [
      "Market volatility in cryptocurrency can be both exhilarating and terrifying. Understanding what drives these price swings is essential for anyone looking to participate in crypto markets successfully.",
      "Volatility refers to the degree of variation in trading prices over time. In crypto markets, this variation can be extreme—assets can gain or lose 20% or more in a single day. This happens due to several factors including limited liquidity, regulatory news, technological developments, and market sentiment.",
      "For new traders, volatility often triggers emotional responses. The fear of missing out (FOMO) during rallies and panic selling during corrections can lead to poor decision-making. This is where having a systematic approach becomes crucial.",
      "One of the most effective ways to manage volatility is through position sizing. Never invest more than you can afford to lose, and consider spreading your investments across multiple assets to reduce risk. Dollar-cost averaging—investing fixed amounts at regular intervals—can also help smooth out the impact of volatility.",
      "Tools like stop-loss orders, which automatically sell an asset when it reaches a certain price, can protect you from significant losses. Similarly, take-profit orders can help you lock in gains during upswings.",
      "Remember, volatility isn't inherently bad—it creates opportunities. With proper risk management and an understanding of market dynamics, you can navigate volatile markets successfully and even profit from price swings.",
    ],
  },
  "risk-management-strategies": {
    title: "5 Essential Risk Management Strategies for Crypto Traders",
    date: "November 25, 2024",
    readTime: "6 min read",
    content: [
      "Risk management is the cornerstone of successful trading. While it's tempting to focus solely on potential profits, protecting your capital should always be your first priority.",
      "Strategy #1: Never Risk More Than 1-2% Per Trade. Professional traders know that protecting capital is paramount. By limiting each trade to a small percentage of your portfolio, you ensure that even a string of losses won't devastate your account.",
      "Strategy #2: Use Stop-Loss Orders Religiously. A stop-loss order automatically closes your position when the price moves against you by a predetermined amount. This removes emotion from the equation and enforces discipline.",
      "Strategy #3: Diversify Your Portfolio. Don't put all your eggs in one basket. Spread your investments across different cryptocurrencies and even different types of assets. When one position underperforms, others may compensate.",
      "Strategy #4: Maintain a Trading Journal. Document every trade—your reasoning, emotions, and outcomes. This creates a valuable resource for identifying patterns in your decision-making and improving over time.",
      "Strategy #5: Set Realistic Profit Targets. Greed can be as destructive as fear. Set clear profit targets before entering trades and stick to them. Taking consistent, modest profits is better than holding out for massive gains that may never materialize.",
      "Implementing these strategies requires discipline and patience, but they're essential for long-term success in crypto trading. Remember, the goal isn't just to make money—it's to keep the money you make.",
    ],
  },
  "machine-learning-market-trends": {
    title: "How Machine Learning Predicts Market Trends",
    date: "November 22, 2024",
    readTime: "8 min read",
    content: [
      "Machine learning has revolutionized market prediction by enabling computers to identify patterns in vast datasets that would be impossible for humans to process manually.",
      "At its core, machine learning in trading involves training algorithms on historical market data. These algorithms learn to recognize patterns that preceded significant price movements, then apply this knowledge to current market conditions to make predictions.",
      "One powerful technique is recurrent neural networks (RNNs), particularly Long Short-Term Memory (LSTM) networks. These are specifically designed to work with sequential data like time series, making them ideal for analyzing price movements over time.",
      "Sentiment analysis is another crucial component. By processing news articles, social media posts, and other textual data, algorithms can gauge market sentiment and predict how it might influence prices. Natural language processing techniques can identify positive or negative sentiment and quantify its intensity.",
      "Feature engineering plays a vital role in improving prediction accuracy. This involves creating new data points from raw data—for example, calculating moving averages, volatility indicators, or momentum oscillators. The algorithm can then identify which features are most predictive of future price movements.",
      "Ensemble methods combine multiple models to produce better predictions than any single model could achieve. By aggregating predictions from various algorithms, we can reduce errors and improve reliability.",
      "It's important to note that no prediction system is perfect. Markets are influenced by countless factors, including unpredictable events. However, machine learning significantly improves our ability to make informed trading decisions by processing information at a scale and speed that humans simply cannot match.",
      "At Lunexa, we continuously refine our models, incorporating new data and adapting to changing market conditions. This ongoing evolution ensures that our users always have access to the most sophisticated and effective trading algorithms available.",
    ],
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-3xl"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 font-light"
          >
            <ArrowLeft size={20} weight="light" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-foreground/60 font-light mb-12">
            <div className="flex items-center gap-1">
              <CalendarBlank size={16} weight="light" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} weight="light" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <GlassCard>
            <GlassCardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-foreground/70 font-light leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
