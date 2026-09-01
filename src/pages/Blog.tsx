import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const articles = [
  {
    id: 1,
    title: "Building Production AI Agents with Gemini 1.5 Flash",
    excerpt:
      "A deep dive into prompt architecture, structured schema extraction, and sub-second latency optimizations for clinical triage agents.",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    tag: "AI Engineering",
    slug: "gemini-ai-agents-production",
    content: [
      "Deploying AI agents into real customer-facing environments requires far more than chaining prompts together. When we built the automated triage agent for GetBeds Tech, our primary constraints were latency, deterministic formatting, and factual grounding.",
      "By leveraging Gemini 1.5 Flash with structured output schemas (JSON modes and Pydantic validation), we reduced triage response latency to under 600ms while maintaining strict business rule compliance.",
      "The critical pattern that emerged was separating intent classification from schema generation. A lightweight router determines if the query requires hospital bed lookup, general triage, or human escalation, ensuring our agent only invokes expensive tools when necessary.",
      "The outcome was a ~40% reduction in manual operator load and an ~85% accuracy benchmark across 500+ simulated hospital admission inquiries.",
    ],
  },
  {
    id: 2,
    title: "Architecting 30+ Enterprise Workflows with n8n and LLMs",
    excerpt:
      "Lessons learned from designing resilient, multi-step automated pipelines connecting Google Cloud, Azure, and LLM APIs.",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    tag: "Automation",
    slug: "architecting-n8n-workflows",
    content: [
      "Automation platforms like n8n bridge the gap between deterministic software and probabilistic AI models. Having architected over 30 production workflows, the hardest challenge is never creating the initial flow—it is handling API rate limits, error fallbacks, and schema drifting.",
      "In our workflows connecting Gmail, Telegram, Notion, Slack, and Google Cloud, every LLM node is wrapped in a validation sandbox. If an LLM output fails schema parsing, a secondary correction pass is triggered or routed to a human-in-the-loop review queue.",
      "We utilized custom JavaScript function nodes inside n8n to pre-process tabular data and compress token context before sending requests to Gemini and OpenAI, cutting API costs by over 50%.",
      "Resilient automation systems don't just execute tasks; they provide full observability into state transitions and recover seamlessly from webhook dropped connections.",
    ],
  },
  {
    id: 3,
    title: "Real-Time Object Detection at the Edge with YOLOv5 and IoT",
    excerpt:
      "Technical insights from publishing IEEE research on computer vision systems for human-wildlife conflict mitigation.",
    date: "Oct 12, 2024",
    readTime: "7 min read",
    tag: "Machine Learning",
    slug: "yolov5-iot-wildlife-detection",
    content: [
      "Human-wildlife conflict along forest perimeters demands detection systems that operate reliably without high-bandwidth internet connectivity. In our IEEE-published research, we built a hybrid edge architecture pairing YOLOv5 for rapid localization with CNN classifiers for species verification.",
      "Achieving ~85% detection accuracy under varying lighting conditions and occlusions required data augmentation techniques tailored to forest camera traps, including synthetic fog, motion blur, and low-light histogram equalization.",
      "The edge inference pipeline runs in real time, dispatching localized audio-visual deterrents and GSM alerts to forest wardens within seconds of a perimeter breach.",
      "This project demonstrated that combining lightweight computer vision models with robust edge hardware can solve critical real-world conservation and safety challenges.",
    ],
  },
  {
    id: 4,
    title: "Scaling React & TypeScript Frontends for High-Throughput Dashboards",
    excerpt:
      "Techniques for delivering 20+ responsive pages in ~40 days while improving UI load performance by ~25%.",
    date: "Sep 05, 2025",
    readTime: "5 min read",
    tag: "Frontend Architecture",
    slug: "scaling-react-typescript-frontends",
    content: [
      "Building high-performance administrative web applications requires meticulous attention to component re-renders, layout shifts, and bundle partitioning.",
      "By designing a library of 40+ atomic, composable React components with TypeScript and Tailwind CSS, we decoupled feature development from layout styling, accelerating delivery across 20+ pages.",
      "Optimizing data fetching with TanStack Query and virtualization for large patient/bed tables enabled 60 FPS scrolling and reduced first-contentful-paint by ~25%.",
      "A disciplined component architecture pays compound dividends throughout the product lifecycle.",
    ],
  },
];

const Blog = () => {
  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <Reveal delay={0}>
          <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
            <span className="font-mono text-xs text-signal">04</span>
            <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Blog & Articles
            </h1>
          </div>

          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl mb-4">
            Notes on AI, automation, and system design.
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground mb-16">
            Technical write-ups and architectural deep dives from shipping production AI models and full-stack systems.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.id} as="article" delay={index * 60}>
              <Link
                to={`/blog/${article.slug}`}
                className="group flex h-full flex-col rounded-md border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
              >
                <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="text-signal">{article.tag}</span>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-signal">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs text-muted-foreground">
                  <span>Read full post</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Blog;
