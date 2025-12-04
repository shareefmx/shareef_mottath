import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        role: "React Front End Developer (Remote Part Time)",
        company: "GetBeds Tech",
        period: "February 2025 - September 2025",
        description: "Developer in GetBeds Tech, a health-tech startup building a seamless hospital bed booking platform.",
        achievements: [
            "Developed and maintained the front-end for the GetBeds user website and the internal admin web application, ensuring fast, responsive, and accessible UI experiences.",
            "Built reusable components and scalable layouts using React, TypeScript, Tailwind CSS, and Node.js, improving development efficiency and consistency across the platform."
        ]
    },
    {
        role: "Associate Software Engineer Intern (Internship)",
        company: "PreProd Corp Private Limited",
        period: "April 2024 - July 2024",
        achievements: [
            "Designed and developed responsive web interfaces by transforming wireframes and UI mockups into functional, interactive components using HTML, CSS, JavaScript.",
            "Implemented dynamic features with reusable components, improving code efficiency and enhancing user interaction.",
            "Gained hands-on experience with version control (Git) and team collaboration tools to maintain clean code and streamline workflows."
        ]
    }
];

export const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 px-4 bg-secondary/5">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-4xl"
            >
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-16 text-center">
                    Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line for desktop */}
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-ml-px" />

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary md:left-1/2 md:-ml-2 mt-1.5" />

                                <div className="md:w-5/12 mb-2 md:mb-0">
                                    <div className={`text-sm text-muted-foreground mb-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="md:w-5/12 bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300">
                                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                                    {exp.description && (
                                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    )}
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
