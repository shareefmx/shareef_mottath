import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 text-center">
            About Me
          </h1>

          <div className="space-y-8">
            <GlassCard>
              <GlassCardContent className="p-8">

                <p className="text-foreground/70 font-light leading-relaxed mb-4">
                  Hi, I'm <strong>Muhammed Shareef M</strong>. I graduated with a B.E. in Information Science & Engineering from New Horizon College of Engineering, Bengaluru. Originally from Kerala, I've been based in Bangalore for the last five years, immersing myself in the city's vibrant tech ecosystem.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed mb-4">
                  I am a <strong>MERN Stack Developer</strong> and <strong>Automation Specialist</strong> with a strong focus on building full-stack applications and API integrations. My goal is to leverage cutting-edge technology to create impactful digital solutions that drive efficiency and growth, constantly pushing the boundaries of what's possible with code and AI.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Beyond my professional role, I am deeply passionate about <strong>AI Automation</strong> and "Vibe Coding". I've built over 30 automated workflows using n8n and published research on using Machine Learning for wildlife conservation. I love solving complex problems with C++ and Python, and in my free time, I enjoy watching series and movies and staying updated with the latest developments in technology.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard>
              <GlassCardContent className="p-8">
                <h2 className="text-2xl font-light tracking-tight mb-4">Technologies</h2>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  My technical expertise is centered around the <strong>MERN Stack</strong> and <strong>AI Automation</strong>. I leverage a powerful suite of tools to build modern, efficient, and intelligent applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Frontend & Backend</h3>
                    <ul className="list-disc list-inside text-foreground/70 font-light space-y-1">
                      <li>React.js, TypeScript, JavaScript (ES6+)</li>
                      <li>Tailwind CSS, HTML5, CSS3</li>
                      <li>Node.js, Express.js, REST APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">AI & Automation</h3>
                    <ul className="list-disc list-inside text-foreground/70 font-light space-y-1">
                      <li>n8n (30+ Workflows), Webhooks</li>
                      <li>Machine Learning (YOLOv5, CNN)</li>
                      <li>Prompt Engineering, Vibe Coding</li>
                      <li>Google Gemini, Hugging Face APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Tools & Cloud</h3>
                    <ul className="list-disc list-inside text-foreground/70 font-light space-y-1">
                      <li>Git & GitHub, VS Code, Cursor</li>
                      <li>Google Cloud Platform, Microsoft Azure</li>
                      <li>Google Antigravity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Languages</h3>
                    <ul className="list-disc list-inside text-foreground/70 font-light space-y-1">
                      <li>English, Malayalam</li>
                      <li>Tamil, Hindi</li>
                    </ul>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>


          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
