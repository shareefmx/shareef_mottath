import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { useState, useEffect } from "react";
import { ProjectModal } from "@/components/ui/project-modal";
import { fetchProjects, type Project as ProjectType } from "@/lib/google-sheets";
import { Loader2, ArrowUpRight } from "lucide-react";

const categories = ["All", "AI / LLMs", "Automation (n8n)", "MERN Stack", "Computer Vision", "Python"];

const Project = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "AI / LLMs") {
      return project.technologies.some((tech) =>
        ["AI", "Machine Learning", "LLM", "Gemini", "OpenAI", "Prompt Engineering"].some((k) =>
          tech.toLowerCase().includes(k.toLowerCase())
        )
      ) || project.title.toLowerCase().includes("ai") || project.title.toLowerCase().includes("mom");
    }

    if (activeCategory === "Automation (n8n)") {
      return project.technologies.some((tech) =>
        ["n8n", "Zapier", "Webhooks", "Automation"].some((k) =>
          tech.toLowerCase().includes(k.toLowerCase())
        )
      ) || project.title.toLowerCase().includes("automation") || project.title.toLowerCase().includes("n8n");
    }

    if (activeCategory === "MERN Stack") {
      return project.technologies.some((tech) =>
        ["React", "Node.js", "MongoDB", "Express", "TypeScript"].some((k) =>
          tech.toLowerCase().includes(k.toLowerCase())
        )
      );
    }

    if (activeCategory === "Computer Vision") {
      return project.technologies.some((tech) =>
        ["YOLOv5", "CNN", "OpenCV", "Vision", "IoT", "PyTorch"].some((k) =>
          tech.toLowerCase().includes(k.toLowerCase())
        )
      ) || project.title.toLowerCase().includes("wildlife");
    }

    return project.technologies.some((tech) =>
      tech.toLowerCase().includes(activeCategory.toLowerCase())
    );
  });

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <Reveal delay={0}>
          <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
            <span className="font-mono text-xs text-signal">01</span>
            <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              All Projects & Archive
            </h1>
          </div>

          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl mb-4">
            Engineering intelligent systems & software.
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground mb-12">
            A comprehensive list of AI models, automation workflows, open-source repositories, and full-stack applications.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background border-foreground font-medium"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-signal" />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.title + index} as="article" delay={index * 40}>
                <div
                  onClick={() => openProjectModal(project)}
                  className="group flex h-full cursor-pointer flex-col rounded-md border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
                >
                  <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span className="text-signal">{project.technologies[0] || "AI/ML"}</span>
                    <ArrowUpRight className="h-4 w-4 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="text-xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-signal mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </main>

      <Footer />
      <ThemeToggle />

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Project;
