import { Reveal } from "@/components/Reveal";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">05</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-12">
        {/* Left Column: Story */}
        <div className="md:col-span-5">
          <Reveal delay={0}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                What interests me most is building, deploying, and integrating AI models into reliable production applications. Getting an LLM to generate a completion once is straightforward; engineering robust agent workflows, RAG pipelines, intelligent task routing, and resilient automation architectures that reliably serve users is where the real value lies.
              </p>
              <p>
                Most of what I've built sits at the intersection of AI intelligence and full-stack engineering — AI-powered Minutes of Meeting platforms, end-to-end automation systems connecting 15+ cloud tools in n8n, real-time computer vision models with published IEEE research, and production React/TypeScript web apps. I focus on building systems that hold up when real users depend on them.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 4 Bento Cards */}
        <div className="md:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {/* Card 1 */}
            <Reveal
              as="div"
              delay={0}
              className="flex h-full flex-col bg-background p-6"
            >
              <h3 className="font-medium text-foreground">Agentic Systems & LLMs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Custom AI agents and prompt pipelines — Gemini 1.5 Flash task resolution agents, structured schema extraction, and LLM integrations deployed to production.
              </p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground/70">
                Gemini · Claude · OpenAI API · LangChain · Prompt Engineering
              </p>
            </Reveal>

            {/* Card 2 */}
            <Reveal
              as="div"
              delay={60}
              className="flex h-full flex-col bg-background p-6"
            >
              <h3 className="font-medium text-foreground">Intelligent Automation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                30+ end-to-end automated workflows connecting 15+ third-party tools, event-driven webhooks, scheduled cron jobs, and cloud function bridges in n8n & Zapier.
              </p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground/70">
                n8n · Zapier · Webhooks · Google Cloud · Azure
              </p>
            </Reveal>

            {/* Card 3 */}
            <Reveal
              as="div"
              delay={120}
              className="flex h-full flex-col bg-background p-6"
            >
              <h3 className="font-medium text-foreground">Computer Vision & ML Research</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Edge computer vision pipelines — real-time object tracking with YOLOv5 and CNN classifiers, IoT integration, and published IEEE research on human-wildlife conflict.
              </p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground/70">
                YOLOv5 · CNN · PyTorch · OpenCV · IoT · IEEE
              </p>
            </Reveal>

            {/* Card 4 */}
            <Reveal
              as="div"
              delay={180}
              className="flex h-full flex-col bg-background p-6"
            >
              <h3 className="font-medium text-foreground">Full-Stack & Cloud Systems</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Scalable web architecture and modern UI — 40+ reusable React/TypeScript components, Node.js & Express REST APIs, MongoDB, and GCP deployments.
              </p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground/70">
                React.js · TypeScript · Node.js · Express · MongoDB · GCP
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <Reveal delay={0}>
        <div className="mt-20 grid gap-x-12 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              IEEE Published
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Published research in IEEE on IoT-based ML systems for human-wildlife conflict alleviation with ~85% accuracy.
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              Top 5 Finalist
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              All India Top 5 finalist at VisionNet TechAthon; top 8 at IEEE Codexpress; finalist at Intel oneAPI & Flipkart GRiD 5.0.
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              Certified Specialist
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Certified in Claude 101 (Anthropic), OCI AI Foundations (Oracle), IBM GenAI & Agentic AI, and n8n QS101-103.
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              Production AI
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Built Gemini 1.5 Flash agent cutting manual triage time by ~40% and delivered 20+ responsive pages in ~40 days at GetBeds Tech.
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              Education
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              B.E in Information Science & Engineering from New Horizon College of Engineering, Bengaluru with CGPA 8.74 (2020–2024).
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
              Community
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Assistant Team Leader in NSS Volunteer (2018–2020) and active IEEE Member (2021–2024).
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
