import { Reveal } from "@/components/Reveal";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 – Sep 2025",
    role: "React Developer (Remote Part Time)",
    company: "GetBeds Tech",
    description:
      "Developer in GetBeds Tech, a health-tech startup building a seamless hospital bed booking platform. Developed and maintained the frontend for the user platform and admin dashboard, building 40+ reusable components using React, TypeScript, and Tailwind CSS — delivering 20+ responsive pages in ~40 days, improving UI load performance by ~25%. Built and deployed a custom AI agent powered by Gemini 1.5 Flash designed around internal business specifications — reducing manual workflow handling by ~40% and cutting average task resolution time by ~30%.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini 1.5 Flash",
      "AI Agent",
      "Node.js",
    ],
  },
  {
    period: "Apr 2024 – Jul 2024",
    role: "Associate Software Engineer Intern",
    company: "PreProd Corp Private Limited",
    description:
      "Designed and developed responsive web interfaces by transforming wireframes and UI mockups into functional, interactive components using HTML, CSS, and JavaScript. Gained hands-on experience with version control (Git) and team collaboration tools to maintain clean code and streamline agile development cycles.",
    tags: ["HTML5", "CSS3", "JavaScript", "Git", "UI/UX", "Agile"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">03</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </h2>
        </div>
      </Reveal>

      <div>
        {experiences.map((exp, index) => (
          <Reveal key={exp.company + index} delay={index * 50}>
            <div className="group grid gap-2 border-b border-border py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </p>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{exp.company}</span>
                </div>

                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground text-sm">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-muted-foreground/70 hover:text-signal transition-colors"
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
