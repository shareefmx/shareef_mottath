import { Reveal } from "@/components/Reveal";
import { ArrowRight, Mail } from "lucide-react";

const HuggingFaceIcon = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-10c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 7.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
);

const GithubIcon = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ className = "h-[18px] w-[18px]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 4.763 5.276 5.276 0 0 0 1.213 1.572l3.488 3.033a1.442 1.442 0 0 0 .977.382h.001a1.43 1.43 0 0 0 1.011-.428l7.009-7.14a1.434 1.434 0 0 0 .428-1.025 1.436 1.436 0 0 0-.427-1.025l-4.103-4.178 3.593-3.663A1.42 1.42 0 0 0 15.228.438 1.385 1.385 0 0 0 13.483 0zm-2.88 7.283l3.655 3.722-6.578 6.702a2.43 2.43 0 0 1-.57.404l-3.488-3.033a2.41 2.41 0 0 1-.564-.737 2.457 2.457 0 0 1-.122-2.193c.123-.321.32-.613.565-.851l3.524-3.774 3.578-1.74zM16.14 12.986l-2.072 2.11 4.104 4.179a1.434 1.434 0 0 0 1.025.427 1.436 1.436 0 0 0 1.025-.427 1.434 1.434 0 0 0 .427-1.025 1.436 1.436 0 0 0-.427-1.025l-4.082-4.239z" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="flex min-h-[88vh] flex-col justify-center pt-28">
      {/* Eyebrow */}
      <Reveal delay={0}>
        <p className="eyebrow mb-8 flex items-center gap-3">
          <span className="text-signal">●</span>
          Open for AI/ML & Full-Stack roles — Get in touch
        </p>
      </Reveal>

      {/* Main Headline */}
      <Reveal delay={80}>
        <h1 className="max-w-4xl text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          I build AI systems and intelligent workflows that ship.
          <span className="text-muted-foreground">
            {" "}
            LLMs, Generative AI, RAG pipelines, and full-stack production apps.
          </span>
        </h1>
      </Reveal>

      {/* Bio paragraph */}
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm <span className="text-foreground font-medium">Muhammed Shareef</span>, an AI/ML Engineer and MERN Stack Developer. Most of my work is building, deploying, and integrating AI models into production applications — custom LLM agents, RAG retrieval pipelines, 30+ automated workflows in n8n, and high-performance React frontends.
        </p>
      </Reveal>

      {/* CTAs and Socials */}
      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            See selected work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/shareefmx"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shareefmottath/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:shareefmottath@gmail.com"
              rel="noreferrer"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://huggingface.co/shareefmx"
              target="_blank"
              rel="noreferrer"
              aria-label="Hugging Face"
              className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              <HuggingFaceIcon />
            </a>
            <a
              href="https://leetcode.com/u/Muhammed_Shareef"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              <LeetCodeIcon />
            </a>
          </div>
        </div>
      </Reveal>

      {/* Metrics Row */}
      <Reveal delay={320}>
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 font-mono text-sm sm:grid-cols-4">
          <div>
            <dt className="text-2xl text-signal">30+</dt>
            <dd className="mt-1 text-xs text-muted-foreground">automated n8n workflows built</dd>
          </div>
          <div>
            <dt className="text-2xl text-signal">85%+</dt>
            <dd className="mt-1 text-xs text-muted-foreground">accuracy in AI/ML pipelines</dd>
          </div>
          <div>
            <dt className="text-2xl text-signal">40+</dt>
            <dd className="mt-1 text-xs text-muted-foreground">reusable React components</dd>
          </div>
          <div>
            <dt className="text-2xl text-signal">1</dt>
            <dd className="mt-1 text-xs text-muted-foreground">IEEE published research paper</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
};
