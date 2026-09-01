import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Award, CheckCircle2, ArrowUpRight, Trophy, ChevronDown, ChevronUp } from "lucide-react";

interface BadgeItem {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  category: string;
  verifyUrl?: string;
  skills?: string[];
}

interface LeetCodeBadge {
  name: string;
  category: string;
  icon: string;
  date: string;
  description: string;
}

const professionalBadges: BadgeItem[] = [
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    date: "Aug 2023",
    category: "Cloud Architecture",
    verifyUrl: "https://www.credly.com/badges/fb6249f8-7a7d-496f-8a23-273bf7a174f8",
    description: "Architecting scalable cloud solutions, multi-cloud deployments on GCP and Azure, and cloud modernization strategies.",
    skills: ["Google Cloud Platform", "Microsoft Azure", "Cloud Architecture"],
  },
  {
    title: "Getting Started with Enterprise-grade AI",
    issuer: "IBM",
    date: "Mar 2024",
    category: "Enterprise AI",
    verifyUrl: "https://www.credly.com/badges/a91945e7-f3cf-4202-863d-55c3a9d5e604",
    description: "Enterprise AI governance, scalable machine learning lifecycle management, model evaluation, and deployment workflows.",
    skills: ["Enterprise AI", "Machine Learning", "Model Governance"],
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "Feb 2024",
    category: "Data Science",
    verifyUrl: "https://www.credly.com/badges/cd4d071d-ea47-4e3f-893e-d3424cf994af",
    description: "Data manipulation with NumPy & Pandas, exploratory statistical analysis, data visualization, and computational modeling.",
    skills: ["Python", "Data Science", "Pandas", "NumPy"],
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "Sep 2023",
    category: "Data Science",
    verifyUrl: "https://www.credly.com/badges/fb847627-d44f-4f07-a9e2-be02e476b3c0",
    description: "Foundational data science principles, data pipeline modeling, analytics methods, and algorithmic problem-solving.",
    skills: ["Data Science", "Analytics", "Algorithms"],
  },
  {
    title: "Claude 101 Certified",
    issuer: "Anthropic",
    date: "2025",
    category: "LLMs & AI",
    description: "Advanced prompt engineering, system prompt design, tool use integration, and Claude model architectures.",
    skills: ["Prompt Engineering", "Claude 3.5 Sonnet", "Tool Calling"],
  },
  {
    title: "OCI Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2024",
    category: "Cloud AI",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=155D94266652EBE45F2917A6C1D789494855C901E09A661AA2F8DDE8C9E26A71",
    description: "Cloud-native AI services, foundational machine learning algorithms, deep learning pipelines, and generative AI services.",
    skills: ["Oracle Cloud", "AI Services", "Machine Learning"],
  },
  {
    title: "n8n QS101, N8N101, N8N102, N8N103 Certified",
    issuer: "n8n",
    date: "2025",
    category: "Workflow Automation",
    verifyUrl: "https://learn.n8n.io/certificates/a109bb1d1a5c43438f69a40afe0068cb",
    description: "Enterprise workflow automation, custom node engineering, webhook orchestration, and multi-service AI integrations.",
    skills: ["n8n Workflows", "Webhooks", "API Orchestration"],
  },
  {
    title: "Generative & Agentic AI Developer",
    issuer: "IBM",
    date: "2024",
    category: "Agentic AI",
    description: "Autonomous multi-agent architectures, function routing, RAG retrieval augmentation, and generative pipeline design.",
    skills: ["AI Agents", "RAG Pipelines", "LLMs"],
  },
];

const leetcodeBadges: LeetCodeBadge[] = [
  {
    name: "100 Days Badge 2026",
    category: "Annual Streak Award",
    icon: "https://assets.leetcode.com/static_assets/others/100.gif",
    date: "Aug 2026",
    description: "Earned for solving daily algorithmic problems for 100+ consecutive days in 2026.",
  },
  {
    name: "50 Days Badge 2026",
    category: "Annual Streak Award",
    icon: "https://assets.leetcode.com/static_assets/others/50.gif",
    date: "Jun 2026",
    description: "Earned for completing 50+ consecutive daily problem-solving milestones.",
  },
  {
    name: "Top SQL 50",
    category: "Study Plan Award",
    icon: "https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif",
    date: "Jun 2026",
    description: "Completed advanced database query design, joins, aggregations, and window functions.",
  },
  {
    name: "Aug LeetCoding Challenge",
    category: "Daily Challenge Badge",
    icon: "https://assets.leetcode.com/static_assets/marketing/8.gif",
    date: "Aug 2026",
    description: "Completed August daily algorithmic problem challenges.",
  },
  {
    name: "Jul LeetCoding Challenge",
    category: "Daily Challenge Badge",
    icon: "https://assets.leetcode.com/static_assets/marketing/7.gif",
    date: "Jul 2026",
    description: "Completed July daily algorithmic problem challenges.",
  },
  {
    name: "Jun LeetCoding Challenge",
    category: "Daily Challenge Badge",
    icon: "https://assets.leetcode.com/static_assets/marketing/6.gif",
    date: "Jun 2026",
    description: "Completed June daily algorithmic problem challenges.",
  },
];

export const Badges = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllLeetCode, setShowAllLeetCode] = useState(false);

  const visibleCertifications = showAllCertifications
    ? professionalBadges
    : professionalBadges.slice(0, 8);

  const visibleLeetCode = showAllLeetCode
    ? leetcodeBadges
    : leetcodeBadges.slice(0, 6);

  return (
    <section id="badges" className="py-24 md:py-32 border-t border-border">
      {/* Section Header */}
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">03</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Certifications & Badges
          </h2>
        </div>
      </Reveal>

      {/* Professional Certifications Grid */}
      <div className="mb-16">
        <Reveal delay={0}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              // Professional & Cloud Credentials
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {professionalBadges.length} Verified Credentials
            </span>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCertifications.map((badge, index) => (
            <Reveal
              key={badge.title + index}
              delay={index * 40}
              className="group flex flex-col rounded-md border border-border bg-card/40 p-5 transition-colors hover:border-foreground/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] text-signal">{badge.category}</span>
                <Award className="h-4 w-4 text-signal/80" />
              </div>

              <h4 className="text-base font-medium tracking-tight text-foreground group-hover:text-signal transition-colors mb-1">
                {badge.title}
              </h4>

              <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground mb-3">
                <CheckCircle2 className="h-3.5 w-3.5 text-signal" />
                <span>{badge.issuer} {badge.date ? `· ${badge.date}` : ""}</span>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                {badge.description}
              </p>

              <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
                {badge.skills && (
                  <div className="flex flex-wrap gap-1">
                    {badge.skills.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-sm bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {badge.verifyUrl && (
                  <a
                    href={badge.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link ml-auto inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-signal transition-colors"
                  >
                    <span>{badge.verifyUrl.includes("credly") ? "Credly" : "Verify"}</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {professionalBadges.length > 8 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground cursor-pointer"
            >
              <span>
                {showAllCertifications
                  ? "Show Less ↑"
                  : `Show All (${professionalBadges.length}) Credentials ↓`}
              </span>
              {showAllCertifications ? (
                <ChevronUp className="h-3.5 w-3.5 text-signal transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* LeetCode Live Badges & Stats */}
      <div>
        <Reveal delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 border-t border-border pt-12">
            <div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-signal" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                  // LeetCode Problem Solving & Streak Badges
                </h3>
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                246+ Problems Solved · 109 Medium · 33 Hard · 100+ Days Streak
              </p>
            </div>

            <a
              href="https://leetcode.com/u/Muhammed_Shareef/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground"
            >
              <span className="link-underline">View LeetCode Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLeetCode.map((badge, index) => (
            <Reveal
              key={badge.name + index}
              delay={index * 50}
              className="group flex items-start gap-4 rounded-md border border-border bg-card/40 p-5 transition-colors hover:border-signal/50"
            >
              <div className="h-14 w-14 shrink-0 rounded-md bg-muted/40 p-1 flex items-center justify-center border border-border/50">
                <img
                  src={badge.icon}
                  alt={badge.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-signal">{badge.category}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{badge.date}</span>
                </div>

                <h4 className="text-base font-medium tracking-tight text-foreground group-hover:text-signal transition-colors mt-0.5">
                  {badge.name}
                </h4>

                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {leetcodeBadges.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllLeetCode(!showAllLeetCode)}
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground cursor-pointer"
            >
              <span>
                {showAllLeetCode
                  ? "Show Less ↑"
                  : `Show All (${leetcodeBadges.length}) Badges ↓`}
              </span>
              {showAllLeetCode ? (
                <ChevronUp className="h-3.5 w-3.5 text-signal transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
