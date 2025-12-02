import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { NeuroButton } from "@/components/ui/neuro-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";

const Contact = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-foreground/70 font-light text-center mb-12">
            Have questions? I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="bg-primary/10 border border-primary/30 shadow-[0_10px_40px_hsl(var(--primary)/0.15)] hover:bg-primary/20 hover:border-primary/50 transition-colors">
              <GlassCardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-light mb-2 block">Name</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-light mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>

                  <div>
                    <label className="text-sm font-light mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      className="bg-background/50 min-h-[150px]"
                    />
                  </div>
                  <NeuroButton variant="glow" className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_hsl(var(--primary)/0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_0_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)]">
                    Send Message
                  </NeuroButton>
                </form>
              </GlassCardContent>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard className="bg-primary/10 border border-primary/30 shadow-[0_10px_40px_hsl(var(--primary)/0.15)] hover:bg-primary/20 hover:border-primary/50 transition-colors">
                <GlassCardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-1">Email</h3>
                    <p className="text-foreground/70 font-light text-sm">shareefmottath@gmail.com</p>
                    <p className="text-foreground/70 font-light text-sm">shareefmottath@outlook.com</p>
                  </div>
                </GlassCardContent>
              </GlassCard>

              <GlassCard className="bg-primary/10 border border-primary/30 shadow-[0_10px_40px_hsl(var(--primary)/0.15)] hover:bg-primary/20 hover:border-primary/50 transition-colors">
                <GlassCardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-1">Phone</h3>
                    <p className="text-foreground/70 font-light text-sm">+91 8304852079</p>
                  </div>
                </GlassCardContent>
              </GlassCard>

            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
