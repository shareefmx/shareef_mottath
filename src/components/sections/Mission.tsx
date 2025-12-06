import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import signature from "../../assets/signature.png";

export const Mission = () => {
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


        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-6">
          I designed and built this fully functional website from scratch, showcasing my technical programming skills and a passion for <strong>Vibe Coding</strong>. It is powered by a modern tech stack including <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
        </p>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-6">
          The development was accelerated with the help of <strong>Google Antigravity software</strong> for coding. I implemented a custom system where all data is fetched dynamically from <strong>Google Sheets</strong>, while every image and icon was uniquely created by <strong>Google Gemini</strong>.
        </p>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
          This project is a testament to what can be achieved when engineering expertise meets advanced AI tools. It stands as a complete, self-made digital experience, built entirely on my own to push the boundaries of web development.
        </p>

        <div className="mt-12 flex justify-center">
          <img
            src={signature}
            alt="Shareef Signature"
            className="h-24 md:h-32 opacity-80"
          />
        </div>
      </motion.div>
    </section >
  );
};
