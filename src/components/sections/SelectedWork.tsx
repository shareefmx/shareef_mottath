import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  metric: string;
  problem: string;
  built: string;
  highlights: string[];
  tags: string[];
  sourceUrl?: string;
  paperUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "mom-automation",
    title: "AI-Powered Minutes of Meeting (MOM) Automation Platform",
    year: "2025",
    subtitle: "Meeting conversations & transcripts to structured action intelligence",
    metric: "→ Automated minutes extraction in seconds",
    problem:
      "Meeting conversations and transcripts contain critical decisions, action items, and deadlines that get lost or require hours of tedious manual note-taking and follow-up tracking.",
    built:
      "An AI-powered automation platform that converts meeting conversations and transcripts into structured Minutes of Meeting (MOM) documents with minimal manual effort. Integrated Large Language Models (LLMs) with strict schema extraction to identify discussion points, decisions, owner responsibilities, and deadlines from unstructured audio and text transcripts.",
    highlights: [
      "Multi-LLM pipeline for precise information extraction and contextual meeting summarization",
      "Automatic structured extraction of assignees, action deliverables, and completion deadlines",
      "High-performance backend in Rust & TypeScript with export capabilities to Markdown, Notion, and Slack",
    ],
    tags: ["Rust", "TypeScript", "Python", "Shell", "LLM APIs", "FastAPI", "React"],
    sourceUrl: "https://github.com/shareefmx/minomeet",
  },
  {
    id: "n8n-automations",
    title: "Advanced Automation Workflows Using n8n & Zapier (30+ Systems Built)",
    year: "2025",
    subtitle: "Autonomous multi-step business orchestrations",
    metric: "→ 30+ production workflows across 15+ cloud integrations",
    problem:
      "Modern business processes require repetitive cross-platform synchronization, manual email responses, and multi-step data pipelines that slow down teams and induce human error.",
    built:
      "Designed and deployed 30+ end-to-end automation workflows in n8n and Zapier. Integrated Gemini and other LLM APIs for automated text generation, image analysis, conversational flow control, scheduled jobs, and intelligent task routing across Google Cloud and Microsoft Azure.",
    highlights: [
      "Leveraged 50+ specialized n8n nodes and 15+ third-party integrations (Gmail API, Google Sheets, Drive, Telegram, Notion, Slack, Azure, REST APIs)",
      "Automated document processing and webhook-triggered event pipelines with resilient retry logic",
      "Cut repetitive manual operational tasks by ~40% with zero-downtime execution",
    ],
    tags: ["n8n", "Zapier", "JavaScript", "Google Cloud", "Microsoft Azure", "AI Studio API (Gemini)", "Webhooks", "REST APIs"],
    sourceUrl: "https://github.com/shareefmx",
  },
  {
    id: "wildlife-conflict",
    title: "Technologies for Alleviating Human-Wildlife Conflict",
    year: "2024",
    subtitle: "IoT & Computer Vision early-warning defense system (Published in IEEE)",
    metric: "→ Published in IEEE | ~85% detection accuracy",
    problem:
      "Human-wildlife conflicts in fringe forest areas result in severe property damage and loss of life due to the complete lack of automated, real-time perimeter detection and early warnings.",
    built:
      "An IoT-based monitoring system prototype developed within ~45 days using YOLOv5 and Convolutional Neural Networks (CNNs) to detect human and wildlife movement in real time. Built an ML pipeline achieving ~85% detection accuracy, triggering instant automated alerts to forest authorities and residents. Published the complete research in IEEE detailing system architecture and ML workflow.",
    highlights: [
      "Real-time computer vision pipeline combining YOLOv5 bounding box tracking with custom CNN classification",
      "IoT sensor integration for perimeter surveillance and instantaneous alert dispatch",
      "Published the research in IEEE, detailing system architecture, dataset preprocessing, and ML pipeline",
    ],
    tags: ["Convolutional Neural Network", "YOLOv5", "IoT", "Python", "React.js", "Node.js", "Machine Learning"],
    paperUrl: "https://ieeexplore.ieee.org/document/10568876",
    sourceUrl: "https://github.com/shareefmx",
  },
];

export const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">01</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
          </h2>
        </div>
      </Reveal>

      <div className="space-y-px">
        {projects.map((project, index) => (
          <Reveal key={project.id} as="article" delay={index * 60}>
            <div className="group grid gap-8 border-b border-border py-12 md:grid-cols-12 md:gap-12">
              {/* Left Column: Metadata */}
              <div className="md:col-span-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="mt-6 font-mono text-sm text-signal">
                  {project.metric}
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex w-max items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground"
                    >
                      <span className="link-underline">IEEE Paper</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex w-max items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground"
                    >
                      <span className="link-underline">Source</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Problem, Solution, Bullets, Tags */}
              <div className="md:col-span-8">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  <span className="text-foreground font-medium">The problem.</span>{" "}
                  {project.problem}
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  <span className="text-foreground font-medium">What I built.</span>{" "}
                  {project.built}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-signal-soft"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
