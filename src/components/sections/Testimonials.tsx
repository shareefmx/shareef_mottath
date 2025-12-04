import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GlassCard, GlassCardContent } from "../ui/glass-card";

import { ProjectModal } from "@/components/ui/project-modal";
import { fetchProjects, type Project } from "@/lib/google-sheets";
import { useEffect } from "react";



export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    };
    loadProjects();
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Projects
          </h2>
         
        </div>

        <div className="overflow-x-hidden pb-8">
          <div className="flex gap-6 w-max animate-scroll">
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
              >
                <GlassCard
                  className="w-80 h-full cursor-pointer hover:bg-white/60 transition-colors duration-300"
                  onClick={() => openProjectModal(project)}
                >
                  <GlassCardContent className="p-6">
                    <div className="mb-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon size={20} weight="duotone" className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/80 mb-4 font-light text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/5 rounded-full text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </section>
  );
};
