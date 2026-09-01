import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { GitFork, Star, ArrowUpRight, FolderGit2, ChevronDown, ChevronUp, Radio, RefreshCw } from "lucide-react";

interface RepoItem {
  id?: number;
  name: string;
  description: string;
  language: string;
  url: string;
  tags: string[];
  stars: number;
  forks: number;
  updatedAt?: string;
  featured?: boolean;
}

const fallbackRepositories: RepoItem[] = [
  {
    name: "minomeet",
    description:
      "Modern AI Minutes of Meeting (MOM) assistant built with React, TypeScript, and Node.js. Captures system and mic audio, provides live real-time transcription, and synthesizes structured Executive Summaries, Key Decisions, and Action Items.",
    language: "TypeScript",
    url: "https://github.com/shareefmx/minomeet",
    tags: ["React", "TypeScript", "Node.js", "AI Transcription", "LLM APIs"],
    stars: 3,
    forks: 0,
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
    forks: 0,
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
    forks: 0,
  },
  {
    name: "system-prompts-and-models-of-ai-tools",
    description:
      "Curated research archive and analysis of system instructions, internal tools, agentic loops, and model parameters powering state-of-the-art AI developer assistants.",
    language: "AI / Prompts",
    url: "https://github.com/shareefmx/system-prompts-and-models-of-ai-tools",
    tags: ["Agentic AI", "Prompt Architecture", "AI Models", "System Prompts"],
    stars: 1,
    forks: 0,
  },
  {
    name: "leetcode",
    description:
      "Automated repository synchronizing 246+ solved algorithmic coding challenges covering Graphs, Dynamic Programming, Trees, Binary Search, and Advanced SQL.",
    language: "Python",
    url: "https://github.com/shareefmx/leetcode",
    tags: ["Python", "Algorithms", "Data Structures", "LeetCode"],
    stars: 1,
    forks: 0,
  },
  {
    name: "Python-automation-code",
    description:
      "Collection of production automation utilities, scheduled jobs, document parsing scripts, and multi-service webhook event dispatchers.",
    language: "Python",
    url: "https://github.com/shareefmx/Python-automation-code",
    tags: ["Python", "Automation", "Webhooks", "ETL Pipelines"],
    stars: 1,
    forks: 0,
  },
  {
    name: "devb.io",
    description:
      "AI-powered developer profile generator that transforms GitHub event activity and repository metadata into clean, dynamic developer portfolios.",
    language: "TypeScript",
    url: "https://github.com/shareefmx/devb.io",
    tags: ["AI Portfolio", "GitHub API", "TypeScript"],
    stars: 1,
    forks: 0,
  },
  {
    name: "Hacktoberfest2026",
    description:
      "Open source community contributions and pull request repository for the annual global open source celebration.",
    language: "JavaScript",
    url: "https://github.com/shareefmx/Hacktoberfest2026",
    tags: ["Open Source", "JavaScript", "Community"],
    stars: 1,
    forks: 0,
  },
];

export const GitHubRepos = () => {
  const [repos, setRepos] = useState<RepoItem[]>(fallbackRepositories);
  const [stats, setStats] = useState({
    publicRepos: 35,
    totalStars: 12,
    totalForks: 2,
    isLive: false,
    lastFetched: "",
  });
  const [showAll, setShowAll] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchGitHubData = async () => {
    setIsRefreshing(true);
    try {
      // Fetch user profile and repos concurrently
      const [userRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/users/shareefmx"),
        fetch("https://api.github.com/users/shareefmx/repos?per_page=100&sort=updated"),
      ]);

      if (reposRes.ok) {
        const rawRepos = await reposRes.json();
        if (Array.isArray(rawRepos) && rawRepos.length > 0) {
          const starsSum = rawRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          const forksSum = rawRepos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

          // Map and sort repos prioritizing key repositories with descriptions
          const mapped: RepoItem[] = rawRepos
            .filter((r) => !r.fork || r.stargazers_count > 0 || r.description)
            .map((r) => {
              const fallback = fallbackRepositories.find((f) => f.name.toLowerCase() === r.name.toLowerCase());
              return {
                id: r.id,
                name: r.name,
                description: fallback?.description || r.description || "Public repository and engineering project by Muhammed Shareef.",
                language: r.language || fallback?.language || "Code",
                url: r.html_url,
                tags: fallback?.tags || [r.language || "Open Source", "GitHub"],
                stars: r.stargazers_count || 0,
                forks: r.forks_count || 0,
                updatedAt: new Date(r.pushed_at || r.updated_at).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                }),
                featured: fallback?.featured || r.stargazers_count > 1,
              };
            });

          // Ensure featured repos appear near the top
          mapped.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return b.stars - a.stars;
          });

          setRepos(mapped);

          let publicCount = rawRepos.length;
          if (userRes.ok) {
            const userData = await userRes.json();
            if (userData.public_repos) {
              publicCount = userData.public_repos;
            }
          }

          setStats({
            publicRepos: publicCount,
            totalStars: starsSum,
            totalForks: forksSum,
            isLive: true,
            lastFetched: "Live Synced",
          });
        }
      }
    } catch (e) {
      console.warn("GitHub live fetch fallback to local data:", e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const visibleRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <section id="repositories" className="py-24 md:py-32 border-t border-border">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">04</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Open Source & Live GitHub Tracker
          </h2>
        </div>
      </Reveal>

      {/* GitHub Live Tracker Header Card */}
      <Reveal delay={0}>
        <div className="rounded-lg border border-border bg-card/40 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50">
            <div>
              <div className="flex items-center gap-2.5">
                <FolderGit2 className="h-5 w-5 text-signal" />
                <h3 className="text-xl font-medium tracking-tight text-foreground">
                  github.com/shareefmx
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[11px] text-signal font-medium border border-signal/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-signal"></span>
                  </span>
                  Live Sync
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-1.5">
                Real-time tracking of public repositories, RAG pipelines, AI systems, and open-source contributions.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={fetchGitHubData}
                disabled={isRefreshing}
                title="Refresh Live GitHub Data"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin text-signal" : ""}`} />
              </button>

              <a
                href="https://github.com/shareefmx"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-90 font-medium"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Live Metrics Row */}
          <div className="grid grid-cols-2 gap-4 pt-5 sm:grid-cols-4 font-mono text-xs">
            <div>
              <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Public Repos</span>
              <span className="text-lg font-medium text-foreground text-signal mt-0.5 block">
                {stats.publicRepos}+
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Total Stars</span>
              <span className="text-lg font-medium text-foreground text-signal mt-0.5 block flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-signal text-signal" /> {stats.totalStars}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Total Forks</span>
              <span className="text-lg font-medium text-foreground text-signal mt-0.5 block flex items-center gap-1">
                <GitFork className="h-3.5 w-3.5 text-signal" /> {stats.totalForks}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px] uppercase tracking-wider">Sync Status</span>
              <span className="text-xs font-medium text-foreground mt-1 block flex items-center gap-1.5 text-signal">
                <Radio className="h-3.5 w-3.5" /> {stats.isLive ? "Connected & Live" : "Cached Fallback"}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Repositories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleRepos.map((repo, index) => (
          <Reveal
            key={repo.name + index}
            delay={index * 40}
            className="group flex flex-col rounded-md border border-border bg-card/40 p-5 transition-colors hover:border-foreground/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-signal">{repo.language}</span>
              <div className="flex items-center gap-3">
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-signal/80 text-signal" />
                    <span>{repo.stars}</span>
                  </span>
                )}
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
            </div>

            <h4 className="text-base font-medium tracking-tight text-foreground group-hover:text-signal transition-colors mb-2">
              <a href={repo.url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </h4>

            <p className="text-xs leading-relaxed text-muted-foreground mb-4 line-clamp-3">
              {repo.description}
            </p>

            <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {repo.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {repo.updatedAt && (
                <span className="font-mono text-[10px] text-muted-foreground/80">
                  {repo.updatedAt}
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {repos.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground cursor-pointer"
          >
            <span>
              {showAll ? "Show Less ↑" : `Show All (${repos.length}) Repositories ↓`}
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
