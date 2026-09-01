import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GitFork, Star, ArrowUpRight, FolderGit2, ChevronDown, ChevronUp } from "lucide-react";

interface RepoItem {
  name: string;
  description: string;
  language: string;
  url: string;
  tags: string[];
  stars?: number;
  featured?: boolean;
}

const repositories: RepoItem[] = [
  {
    name: "minomeet",
    description:
      "Modern AI Minutes of Meeting (MOM) assistant built with React, TypeScript, and Node.js. Captures system and mic audio, provides live real-time transcription, and synthesizes structured Executive Summaries, Key Decisions, and Action Items.",
    language: "TypeScript",
    url: "https://github.com/shareefmx/minomeet",
    tags: ["React", "TypeScript", "Node.js", "AI Transcription", "LLM APIs"],
    stars: 3,
    featured: true,
  },
  {
    name: "QueryDoc-AI",
    description:
      "Contextual RAG Q&A platform. Upload knowledge documents (PDF/TXT), generate vector embeddings, and chat with your enterprise data with precise citations and source provenance.",
    language: "TypeScript",
    url: "https://github.com/shareefmx/QueryDoc-AI",
    tags: ["RAG Pipeline", "Vector Embeddings", "TypeScript", "FastAPI"],
    stars: 2,
    featured: true,
  },
  {
    name: "jiobase",
    description:
      "High-availability reverse proxy routing Supabase backend traffic through Cloudflare's edge network, bypassing regional ISP DNS throttling for seamless connectivity.",
    language: "JavaScript",
    url: "https://github.com/shareefmx/jiobase",
    tags: ["Cloudflare Workers", "Supabase", "Reverse Proxy", "Edge Network"],
    stars: 1,
  },
  {
    name: "system-prompts-and-models-of-ai-tools",
    description:
      "Curated research archive and analysis of system instructions, internal tools, agentic loops, and model parameters powering state-of-the-art AI developer assistants.",
    language: "Markdown / AI",
    url: "https://github.com/shareefmx/system-prompts-and-models-of-ai-tools",
    tags: ["Agentic AI", "Prompt Architecture", "AI Models", "System Prompts"],
    stars: 1,
  },
  {
    name: "leetcode",
    description:
      "Automated repository synchronizing 246+ solved algorithmic coding challenges covering Graphs, Dynamic Programming, Trees, Binary Search, and Advanced SQL.",
    language: "Python",
    url: "https://github.com/shareefmx/leetcode",
    tags: ["Python", "Algorithms", "Data Structures", "LeetCode"],
    stars: 1,
  },
  {
    name: "Python-automation-code",
    description:
      "Collection of production automation utilities, scheduled jobs, document parsing scripts, and multi-service webhook event dispatchers.",
    language: "Python",
    url: "https://github.com/shareefmx/Python-automation-code",
    tags: ["Python", "Automation", "Webhooks", "ETL Pipelines"],
    stars: 1,
  },
  {
    name: "devb.io",
    description:
      "AI-powered developer profile generator that transforms GitHub event activity and repository metadata into clean, dynamic developer portfolios.",
    language: "TypeScript",
    url: "https://github.com/shareefmx/devb.io",
    tags: ["AI Portfolio", "GitHub API", "TypeScript"],
    stars: 1,
  },
  {
    name: "Hacktoberfest2026",
    description:
      "Open source community contributions and pull request repository for the annual global open source celebration.",
    language: "JavaScript",
    url: "https://github.com/shareefmx/Hacktoberfest2026",
    tags: ["Open Source", "JavaScript", "Community"],
    stars: 1,
  },
];

export const GitHubRepos = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleRepos = showAll ? repositories : repositories.slice(0, 6);

  return (
    <section id="repositories" className="py-24 md:py-32 border-t border-border">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">04</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Open Source & GitHub Activity
          </h2>
        </div>
      </Reveal>

      {/* GitHub Profile Callout Header */}
      <Reveal delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                // Public Repositories & Engineering Labs
              </h3>
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              35+ Public Repositories · AI Systems, RAG Pipelines, Cloud Utilities & Scripts
            </p>
          </div>

          <a
            href="https://github.com/shareefmx"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground"
          >
            <span className="link-underline">github.com/shareefmx</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>

      {/* Repositories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleRepos.map((repo, index) => (
          <Reveal
            key={repo.name}
            delay={index * 40}
            className="group flex flex-col rounded-md border border-border bg-card/40 p-5 transition-colors hover:border-foreground/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-signal">{repo.language}</span>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name}`}
                className="text-muted-foreground hover:text-signal transition-colors"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <h4 className="text-base font-medium tracking-tight text-foreground group-hover:text-signal transition-colors mb-2">
              <a href={repo.url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </h4>

            <p className="text-xs leading-relaxed text-muted-foreground mb-4 line-clamp-3">
              {repo.description}
            </p>

            <div className="mt-auto pt-3 border-t border-border/40 flex flex-wrap gap-1">
              {repo.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {repositories.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground cursor-pointer"
          >
            <span>
              {showAll ? "Show Less ↑" : `Show All (${repositories.length}) Repositories ↓`}
            </span>
            {showAll ? (
              <ChevronUp className="h-3.5 w-3.5 text-signal transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
};
