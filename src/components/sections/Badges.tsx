import { Reveal } from "@/components/Reveal";
import { Award, CheckCircle2 } from "lucide-react";

interface BadgeItem {
  title: string;
  issuer: string;
  description: string;
  category: string;
}

const badges: BadgeItem[] = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description: "Advanced prompt engineering, system instructions, and Claude model integrations.",
    category: "AI & LLMs",
  },
  {
    title: "OCI Certified AI Foundations Associate",
    issuer: "Oracle",
    description: "Cloud-native AI architectures, machine learning foundation, and automated pipelines.",
    category: "Cloud AI",
  },
  {
    title: "n8n QS101, N8N101, N8N102, N8N103 Certified",
    issuer: "n8n",
    description: "Enterprise workflow automation, custom node integrations, and webhook orchestration.",
    category: "Automation",
  },
  {
    title: "Generative & Agentic AI Developer",
    issuer: "IBM",
    description: "Autonomous agentic workflows, multi-step LLM chains, and generative systems.",
    category: "Agentic AI",
  },
];

export const Badges = () => {
  return (
    <section id="badges" className="py-24 md:py-32 border-t border-border">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">03</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Certifications & Badges
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge, index) => (
          <Reveal
            key={badge.title}
            delay={index * 50}
            className="group flex flex-col rounded-md border border-border bg-card/40 p-6 transition-colors hover:border-signal/50"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-signal">{badge.category}</span>
              <Award className="h-4 w-4 text-signal/80" />
            </div>

            <h3 className="text-lg font-medium tracking-tight text-foreground group-hover:text-signal transition-colors mb-1">
              {badge.title}
            </h3>

            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground mb-3">
              <CheckCircle2 className="h-3.5 w-3.5 text-signal" />
              <span>Issued by {badge.issuer}</span>
            </div>

            <p className="mt-auto text-xs leading-relaxed text-muted-foreground pt-2 border-t border-border/40">
              {badge.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

