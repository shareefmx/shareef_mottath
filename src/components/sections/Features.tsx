import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "../ui/glass-card";
import { Code, HardDrives, Cloud, Database, Toolbox, TerminalWindow } from "@phosphor-icons/react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: "React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS",
  },
  {
    icon: HardDrives,
    title: "Backend",
    skills: "Node.js, Express.js, REST APIs, Server-side Rendering",
  },
  {
    icon: Cloud,
    title: "Cloud",
    skills: "Google Cloud Platform, Microsoft Azure",
  },
  {
    icon: Database,
    title: "Database",
    skills: "MongoDB, MySQL (basic)",
  },
  {
    icon: Toolbox,
    title: "Tools & Platforms",
    skills: "n8n, Git & GitHub, Hugging Face, Power BI, Microsoft Office Tools, VS Code, Cursor, Google Antigravity",
  },
  {
    icon: TerminalWindow,
    title: "Operating Systems",
    skills: "Windows, Linux (Ubuntu)",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
            Technical Skills
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <GlassCard className="h-full hover:bg-white/60 transition-colors duration-300">
                <GlassCardHeader className="pb-2">
                  <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon size={20} weight="duotone" className="text-primary" />
                  </div>
                  <GlassCardTitle className="text-lg font-semibold">{category.title}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription className="text-sm leading-relaxed text-gray-600">
                    {category.skills}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
