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
    title: "Neural Network Visualizer",
    description: "Interactive visualization of neural network layers and activation functions.",
    detailedDescription: "A powerful educational tool that visualizes how neural networks learn. Users can adjust hyperparameters, watch weights update in real-time, and see how different activation functions affect the learning process. Built for students and researchers to understand deep learning concepts intuitively.",
    githubUrl: "https://github.com/shareefmottath/neural-viz",
    deployUrl: "https://neural-viz.vercel.app",
    technologies: ["React", "D3.js", "TensorFlow.js", "AI", "Machine Learning"],
  },
  {
    icon: Shield,
    title: "DeFi Asset Manager",
    description: "Secure dashboard for tracking and managing decentralized finance assets.",
    detailedDescription: "A comprehensive DeFi dashboard that aggregates assets across multiple chains. Features include real-time price tracking, yield farming ROI calculation, and impermanent loss analysis. Security is paramount with hardware wallet integration and local data storage.",
    githubUrl: "https://github.com/shareefmottath/defi-manager",
    deployUrl: "https://defi-manager.vercel.app",
    technologies: ["React", "Web3.js", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: ChartLineUp,
    title: "Predictive Market Analytics",
    description: "AI-driven market prediction engine for stock and crypto traders.",
    detailedDescription: "Leverages LSTM networks to predict short-term market movements. The platform processes social sentiment, news feeds, and historical price data to generate confidence scores for various assets. Includes backtesting capabilities to validate strategies.",
    githubUrl: "https://github.com/shareefmottath/market-pred",
    deployUrl: "https://market-pred.vercel.app",
    technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Redis"],
  },
  {
    icon: Lightning,
    title: "High-Frequency Trading Bot",
    description: "Low-latency trading bot optimized for arbitrage opportunities.",
    detailedDescription: "Written in Rust for maximum performance, this bot detects price discrepancies across exchanges in microseconds. It executes atomic transactions to guarantee profit or revert the trade, minimizing risk. Configurable strategies allow for market making and trend following.",
    githubUrl: "https://github.com/shareefmottath/hft-bot",
    deployUrl: "https://hft-bot.vercel.app",
    technologies: ["Rust", "C++", "WebSockets", "Docker", "Other"],
  },
  {
    icon: Brain,
    title: "NLP Document Summarizer",
    description: "Automated document summarization using transformer models.",
    detailedDescription: "Upload any PDF or text document and get a concise summary instantly. Uses BERT and GPT-based models to understand context and extract key information. Perfect for researchers and legal professionals dealing with large volumes of text.",
    githubUrl: "https://github.com/shareefmottath/nlp-summary",
    deployUrl: "https://nlp-summary.vercel.app",
    technologies: ["Python", "PyTorch", "Hugging Face", "React", "AI"],
  },
  {
    icon: Shield,
    title: "Identity Verification System",
    description: "Blockchain-based digital identity verification platform.",
    detailedDescription: "A decentralized identity solution that gives users control over their personal data. Institutions can verify credentials without storing sensitive information, reducing the risk of data breaches. Compliant with GDPR and CCPA regulations.",
    githubUrl: "https://github.com/shareefmottath/id-verify",
    deployUrl: "https://id-verify.vercel.app",
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "Other"],
  },
  {
    icon: ChartLineUp,
    title: "E-commerce Recommendation Engine",
    description: "Personalized product recommendations to boost sales conversion.",
    detailedDescription: "An API-first recommendation engine that integrates with any e-commerce store. It analyzes user browsing history and purchase patterns to suggest relevant products. Includes A/B testing tools to measure the impact on revenue.",
    githubUrl: "https://github.com/shareefmottath/ecom-rec",
    deployUrl: "https://ecom-rec.vercel.app",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Machine Learning"],
  },
  {
    icon: Lightning,
    title: "Workflow Automation Suite",
    description: "Drag-and-drop workflow automation for business processes.",
    detailedDescription: "Connects various business apps to automate repetitive tasks. Similar to Zapier but open-source and self-hostable. Users can create complex workflows with conditional logic and loops without writing a single line of code.",
    githubUrl: "https://github.com/shareefmottath/workflow-auto",
    deployUrl: "https://workflow-auto.vercel.app",
    technologies: ["n8n", "Node.js", "Vue.js", "Docker", "Other"],
  },
  {
    icon: Brain,
    title: "Computer Vision Security",
    description: "Real-time object detection for security surveillance systems.",
    detailedDescription: "Monitors video feeds to detect unauthorized access, suspicious behavior, or safety hazards. Runs efficiently on edge devices. Features include facial recognition, license plate reading, and crowd density analysis.",
    githubUrl: "https://github.com/shareefmottath/cv-security",
    deployUrl: "https://cv-security.vercel.app",
    technologies: ["Python", "OpenCV", "YOLO", "Raspberry Pi", "AI"],
  },
  {
    icon: Shield,
    title: "Secure Chat Application",
    description: "End-to-end encrypted messaging app with self-destructing messages.",
    detailedDescription: "Privacy-focused chat app that ensures no one, not even the server admin, can read your messages. Uses the Signal protocol for encryption. Includes features like disappearing messages, screenshot prevention, and anonymous signup.",
    githubUrl: "https://github.com/shareefmottath/secure-chat",
    deployUrl: "https://secure-chat.vercel.app",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "MERN Stack"],
  },
  {
    icon: ChartLineUp,
    title: "Social Media Sentiment Analysis",
    description: "Track brand sentiment across Twitter, Reddit, and Facebook.",
    detailedDescription: "Helps brands understand how they are perceived online. Analyzes millions of posts to determine positive, negative, or neutral sentiment. Provides real-time alerts for PR crises and detailed reports on campaign performance.",
    githubUrl: "https://github.com/shareefmottath/social-sentiment",
    deployUrl: "https://social-sentiment.vercel.app",
    technologies: ["Python", "NLTK", "Elasticsearch", "Kibana", "Machine Learning"],
  },
  {
    icon: Lightning,
    title: "Serverless Image Processing",
    description: "On-the-fly image optimization and resizing API.",
    detailedDescription: "A high-performance image CDN that resizes, compresses, and converts images to modern formats like WebP and AVIF. Reduces bandwidth costs and improves website load times. Handles millions of requests per day with serverless scalability.",
    githubUrl: "https://github.com/shareefmottath/img-process",
    deployUrl: "https://img-process.vercel.app",
    technologies: ["Node.js", "AWS Lambda", "Sharp", "S3", "Other"],
  },
  {
    icon: Brain,
    title: "Generative Art Platform",
    description: "Create unique digital art using GANs and style transfer.",
    detailedDescription: "A platform for artists to collaborate with AI. Users can train their own models or use pre-trained ones to generate stunning visuals. Supports style transfer to apply the look of famous paintings to photos.",
    githubUrl: "https://github.com/shareefmottath/gen-art",
    deployUrl: "https://gen-art.vercel.app",
    technologies: ["Python", "PyTorch", "React", "Flask", "AI"],
  },
  {
    icon: Shield,
    title: "Penetration Testing Toolkit",
    description: "Automated vulnerability scanner for web applications.",
    detailedDescription: "Helps developers find security flaws before hackers do. Scans for common vulnerabilities like SQL injection, XSS, and CSRF. Generates detailed reports with remediation steps.",
    githubUrl: "https://github.com/shareefmottath/pen-test",
    deployUrl: "https://pen-test.vercel.app",
    technologies: ["Python", "Go", "Docker", "Shell", "Other"],
  },
  {
    icon: ChartLineUp,
    title: "IoT Energy Monitor",
    description: "Real-time energy consumption tracking for smart homes.",
    detailedDescription: "Connects to smart meters and IoT plugs to track energy usage down to the appliance level. Identifies energy hogs and suggests ways to save money. Integrates with solar panels to optimize energy independence.",
    githubUrl: "https://github.com/shareefmottath/iot-energy",
    deployUrl: "https://iot-energy.vercel.app",
    technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana", "MERN Stack"],
  },
];

const categories = ["All", "MERN Stack", "React", "n8n", "Python", "Node.js", "ML", "AI"];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "MERN Stack") {
      return project.technologies.some(tech =>
        ["React", "Node.js", "MongoDB", "Express"].includes(tech)
      );
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

