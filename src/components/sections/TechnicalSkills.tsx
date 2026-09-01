import { Reveal } from "@/components/Reveal";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript (ES6+)", "TypeScript", "Shell"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "LLM Model Training",
      "RAG Pipelines",
      "AI Agent Development",
      "Loop Engineering",
    ],
  },
  {
    title: "AI Tools & Platforms",
    skills: [
      "Hugging Face",
      "n8n",
      "Zapier",
      "Cursor",
      "Claude",
      "OpenClaw",
      "OpenAI API",
      "Google AI Studio",
      "Vertex AI",
      "Ollama LLM models",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
  },
  {
    title: "Cloud & Database",
    skills: ["Google Cloud Platform", "MongoDB", "MySQL (basic)"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Cursor", "Docker (basic)"],
  },
  {
    title: "Methodologies & OS",
    skills: [
      "Agile (Scrum)",
      "CI/CD",
      "Prompt Engineering",
      "Vibe Coding",
      "Windows",
      "Linux (Ubuntu)",
    ],
  },
];

export const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">02</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Technical Skills
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.title}
            delay={index * 40}
            className="flex flex-col rounded-md border border-border bg-card/40 p-5 transition-colors hover:border-foreground/30"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-signal mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm bg-muted/60 px-2 py-0.5 font-mono text-xs text-foreground/90 border border-border/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

