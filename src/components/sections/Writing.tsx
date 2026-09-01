import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleItem {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  link: string;
  isExternal?: boolean;
}

const articles: ArticleItem[] = [
  {
    id: "ieee-paper",
    title: "Technologies for Alleviating Human-Wildlife Conflict",
    description:
      "Published research paper in IEEE detailing an IoT-based edge monitoring system with YOLOv5 and CNN models to detect human and wildlife movement in real time with ~85% accuracy.",
    date: "IEEE Published",
    tag: "Research Paper",
    link: "https://ieeexplore.ieee.org/document/10568876",
    isExternal: true,
  },
  {
    id: "n8n-workflows",
    title: "Architecting Resilient Automation Workflows in n8n",
    description:
      "How to orchestrate 30+ production workflows connecting LLM reasoning, webhook event routing, and multi-cloud sync across Google Cloud and Azure.",
    date: "Dec 2025",
    tag: "System Design",
    link: "/blog/future-ai-crypto-trading",
    isExternal: false,
  },
  {
    id: "gemini-agents",
    title: "Deploying Custom AI Agents with Gemini 1.5 Flash",
    description:
      "Practical techniques for integrating Gemini models into web platforms, enforcing strict JSON output schemas, and automating clinical triage workflows.",
    date: "Nov 2025",
    tag: "AI Engineering",
    link: "/blog/understanding-market-volatility",
    isExternal: false,
  },
];

export const Writing = () => {
  return (
    <section id="writing" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">06</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Research & Writing
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Reveal key={article.id} as="article" delay={index * 60}>
            {article.isExternal ? (
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-md border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
              >
                <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="text-signal">{article.tag}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-signal">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs text-muted-foreground">
                  <span>View research</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ) : (
              <Link
                to={article.link}
                className="group flex h-full flex-col rounded-md border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
              >
                <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="text-signal">{article.tag}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-signal">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs text-muted-foreground">
                  <span>Read article</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0}>
        <div className="mt-12">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
          >
            <span className="link-underline">Read more on Blog</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

