import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";

import { useState, useEffect } from "react";
import { ProjectModal } from "@/components/ui/project-modal";
import { fetchProjects, type Project as ProjectType } from "@/lib/google-sheets";
import { Loader2 } from "lucide-react";


// Categories are kept static for now, or could be derived from data
const categories = ["All", "MERN Stack", "React", "n8n", "Python", "Data Visualization", "ML", "AI", "Other"];



const Project = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

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

    if (activeCategory === "MERN Stack") {
      return project.technologies.some(tech =>
        ["React", "Node.js", "MongoDB", "Express"].includes(tech)
      );
    }

    if (activeCategory === "Data Visualization") {
      return project.technologies.some(tech =>
        ["D3.js", "Grafana", "Kibana", "Data Visualization"].includes(tech)
      ) || project.title.toLowerCase().includes("visualizer");
    }

    if (activeCategory === "ML" || activeCategory === "AI") {
      return project.technologies.some(tech =>
        ["Python", "TensorFlow", "Scikit-learn", "AI", "Machine Learning"].includes(tech)
      );
    }

    return project.technologies.some(tech =>
      tech.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-4 text-center">
            Our Projects
          </h1>
          <p className="text-foreground/70 font-light text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Explore our innovative solutions and cutting-edge technologies
          </p>

          {/* Royal Filter Menu */}
          <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4 sm:pb-0 px-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border backdrop-blur-md
                  ${activeCategory === category
                    ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] scale-10"
                    : "bg-white/5 border-white/10 text-foreground/60 hover:bg-white/10 hover:border-white/20 hover:text-foreground"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
                {(isExpanded ? filteredProjects : filteredProjects.slice(0, 4)).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full cursor-pointer hover:shadow-[0_8px_30px_hsl(var(--glow)/0.15)] transition-all duration-300" onClick={() => openProjectModal(project)}>
                      <GlassCardContent className="p-6 sm:p-8">
                        <div className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <project.icon size={20} weight="light" className="text-primary sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-light tracking-tight mb-3 sm:mb-4">{project.title}</h2>
                        <p className="text-foreground/70 font-light leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>
                      </GlassCardContent>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {filteredProjects.length > 4 && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-8 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    {isExpanded ? "Show Less" : "View More"}
                  </button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </main>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Project;

