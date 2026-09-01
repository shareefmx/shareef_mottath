import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const About = () => {
  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <Reveal delay={0}>
          <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
            <span className="font-mono text-xs text-signal">02</span>
            <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              About & Background
            </h1>
          </div>

          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl mb-4">
            Engineering at the boundary of AI models and production code.
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground mb-16">
            AI/ML Engineer and MERN Stack Developer with hands-on experience building, deploying, and integrating AI models into production applications.
          </p>
        </Reveal>

        {/* Story Section */}
        <div className="grid gap-12 md:grid-cols-12 mb-20">
          <div className="md:col-span-6">
            <Reveal delay={0}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-4">
                // Background & Journey
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Hi, I'm <span className="text-foreground font-medium">Muhammed Shareef M</span>. I graduated with a B.E. in Information Science & Engineering from New Horizon College of Engineering, Bengaluru (CGPA 8.74). Originally from Kerala, I've spent the last several years immersed in Bangalore's fast-moving tech ecosystem.
                </p>
                <p>
                  I specialize in AI Model Integration, Intelligent Automation workflows, and MERN stack development. Passionate about leveraging LLMs, Generative AI, and RAG pipelines to solve real-world problems.
                </p>
                <p>
                  From building 30+ end-to-end automation workflows connecting 15+ cloud tools in n8n and Zapier, to training YOLOv5/CNN edge vision models for human-wildlife conflict mitigation with published IEEE research, I love creating systems that hold up under real usage.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={80}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-4">
                // Technical Skills & Stack
              </h3>
              <div className="space-y-4 rounded-md border border-border bg-card/40 p-6 text-sm">
                <div>
                  <span className="font-mono text-xs uppercase text-foreground font-medium block mb-1">
                    Programming Languages
                  </span>
                  <p className="text-muted-foreground">C, C++, Python, JavaScript (ES6+), TypeScript, Rust, Shell</p>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <span className="font-mono text-xs uppercase text-foreground font-medium block mb-1">
                    AI & Machine Learning
                  </span>
                  <p className="text-muted-foreground">
                    LLM Integration, Prompt Engineering, RAG Pipelines, AI Agent Development, Loop Engineering, CNN, YOLOv5, PyTorch, OpenAI API, Gemini API, Claude, Ollama
                  </p>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <span className="font-mono text-xs uppercase text-foreground font-medium block mb-1">
                    Automation & Tools
                  </span>
                  <p className="text-muted-foreground">
                    n8n (QS101-103 Certified), Zapier, Webhooks, Google AI Studio, Vertex AI, Hugging Face, Cursor, Docker
                  </p>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <span className="font-mono text-xs uppercase text-foreground font-medium block mb-1">
                    Frontend & Backend
                  </span>
                  <p className="text-muted-foreground">
                    React.js, Node.js, Express.js, Tailwind CSS, REST APIs, HTML5, CSS3, MongoDB, MySQL
                  </p>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <span className="font-mono text-xs uppercase text-foreground font-medium block mb-1">
                    Cloud & Systems
                  </span>
                  <p className="text-muted-foreground">
                    Google Cloud Platform (GCP), Microsoft Azure, Linux (Ubuntu), Windows, Git & GitHub
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <Reveal delay={0}>
          <div className="mb-8 border-b border-border pb-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              // Certifications & Achievements
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-20">
            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">Anthropic</span>
              <h4 className="font-medium text-foreground">Claude 101 Certified</h4>
              <p className="mt-1 text-xs text-muted-foreground">Advanced prompting and Claude model architecture</p>
            </div>

            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">Oracle</span>
              <h4 className="font-medium text-foreground">OCI Certified AI Foundations</h4>
              <p className="mt-1 text-xs text-muted-foreground">Cloud AI and machine learning infrastructure</p>
            </div>

            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">IBM</span>
              <h4 className="font-medium text-foreground">Generative & Agentic AI Developer</h4>
              <p className="mt-1 text-xs text-muted-foreground">Agent architectures and generative systems</p>
            </div>

            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">n8n</span>
              <h4 className="font-medium text-foreground">n8n QS101, N8N101–103 Certified</h4>
              <p className="mt-1 text-xs text-muted-foreground">Enterprise workflow engineering and integrations</p>
            </div>

            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">IEEE</span>
              <h4 className="font-medium text-foreground">Research Paper Published</h4>
              <p className="mt-1 text-xs text-muted-foreground">IoT & ML for Human-Wildlife Conflict Mitigation</p>
            </div>

            <div className="rounded-md border border-border bg-card/40 p-5">
              <span className="font-mono text-xs text-signal block mb-1">Hackathons</span>
              <h4 className="font-medium text-foreground">National Finalist × 5</h4>
              <p className="mt-1 text-xs text-muted-foreground">VisionNet Top 5, Codexpress IEEE Top 8, Intel oneAPI</p>
            </div>
          </div>
        </Reveal>

        {/* Education & Personal Info */}
        <Reveal delay={0}>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-4">
                // Education
              </h3>
              <div className="rounded-md border border-border bg-card/40 p-6">
                <h4 className="text-lg font-medium text-foreground">B.E in Information Science & Engineering</h4>
                <p className="text-sm text-signal font-mono mt-1">CGPA: 8.74 / 10.0</p>
                <p className="text-sm text-muted-foreground mt-2">New Horizon College of Engineering, Bengaluru, Karnataka</p>
                <p className="text-xs font-mono text-muted-foreground/70 mt-1">2020 – 2024</p>
              </div>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-4">
                // Languages & Extracurriculars
              </h3>
              <div className="rounded-md border border-border bg-card/40 p-6 space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">Spoken Languages:</span>
                  <p className="text-muted-foreground font-mono text-xs mt-0.5">English, Malayalam, Tamil, Hindi</p>
                </div>
                <div className="border-t border-border/50 pt-2">
                  <span className="font-medium text-foreground">Volunteering & Community:</span>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    NSS Volunteer (Assistant Team Leader, 2018–2020) · IEEE Member (2021–2024)
                  </p>
                </div>
                <div className="border-t border-border/50 pt-2">
                  <span className="font-medium text-foreground">Interests:</span>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Building AI Agents, Cricket, Watching Series & Sci-Fi Movies, Exploring emerging tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default About;
