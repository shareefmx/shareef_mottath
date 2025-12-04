import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 px-4">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-4xl text-center"
            >
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8">
                    About Me
                </h2>
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-6">
                    I am Shareef, a passionate developer dedicated to building innovative solutions. My focus is on creating intuitive and powerful tools that empower users to achieve more.
                </p>
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                    With a strong background in modern web technologies and a keen eye for design, I strive to bridge the gap between complex functionality and seamless user experience.
                </p>
            </motion.div>
        </section>
    );
};
