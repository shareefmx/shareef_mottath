import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { Brain, Shield, ChartLineUp, Lightning } from "@phosphor-icons/react";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/project-modal";


const projects = [
  {
    icon: Brain,
    title: "Advanced AI Algorithms",
    description: "Machine learning models trained on years of market data for optimal decision making.",
    detailedDescription: "Our Advanced AI Algorithms leverage cutting-edge machine learning models trained on extensive market data spanning multiple years. These algorithms analyze market patterns, predict trends, and make data-driven decisions to optimize trading strategies. The system continuously learns from market behavior, adapting to changing conditions and improving accuracy over time.",
    githubUrl: "https://github.com/shareefmottath/lunexa-ai-algorithms",
    deployUrl: "https://lunexa-ai-algorithms.vercel.app",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "FastAPI"],
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your assets are protected with military-grade encryption and secure infrastructure.",
    detailedDescription: "Bank-Level Security implements military-grade encryption protocols and secure infrastructure to protect user assets. Our multi-layered security approach includes end-to-end encryption, secure key management, biometric authentication, and regular security audits. The system maintains compliance with international security standards while ensuring seamless user experience.",
    githubUrl: "https://github.com/shareefmottath/lunexa-security",
    deployUrl: "https://lunexa-security.vercel.app",
    technologies: ["Node.js", "Cryptography", "OAuth2", "JWT", "SSL/TLS"],
  },
  {
    icon: ChartLineUp,
    title: "Real-Time Analytics",
    description: "Track your performance with detailed insights and comprehensive reporting tools.",
    detailedDescription: "Real-Time Analytics provides comprehensive performance tracking with detailed insights and advanced reporting tools. The dashboard offers real-time market data visualization, custom chart creation, performance metrics, and automated report generation. Users can create personalized dashboards and receive instant notifications about market movements and trading opportunities.",
    githubUrl: "https://github.com/shareefmottath/lunexa-analytics",
    deployUrl: "https://lunexa-analytics.vercel.app",
    technologies: ["React", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
  },
  {
    icon: Lightning,
    title: "Lightning Fast Execution",
    description: "Execute trades in milliseconds to capitalize on market opportunities instantly.",
    detailedDescription: "Lightning Fast Execution enables millisecond-level trade execution to capitalize on market opportunities. The high-performance trading engine uses optimized algorithms, low-latency connections, and advanced order routing to ensure minimal slippage and maximum execution speed. The system handles high-frequency trading with enterprise-grade reliability and performance.",
    githubUrl: "https://github.com/shareefmottath/lunexa-execution",
    deployUrl: "https://lunexa-execution.vercel.app",
    technologies: ["C++", "Rust", "WebAssembly", "Microservices", "Kubernetes"],
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
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

