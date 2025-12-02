import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { NeuroButton } from "@/components/ui/neuro-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

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
            Have questions? We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
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
                    <label className="text-sm font-light mb-2 block">Subject</label>
                    <Input placeholder="How can we help?" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-light mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="bg-background/50 min-h-[150px]" 
                    />
                  </div>
                  <NeuroButton variant="glow" className="w-full">
                    Send Message
                  </NeuroButton>
                </form>
              </GlassCardContent>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard>
                <GlassCardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-1">Email</h3>
                    <p className="text-foreground/70 font-light text-sm">support@lunexa.ai</p>
                  </div>
                </GlassCardContent>
              </GlassCard>

              <GlassCard>
                <GlassCardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-1">Phone</h3>
                    <p className="text-foreground/70 font-light text-sm">+1 (555) 123-4567</p>
                  </div>
                </GlassCardContent>
              </GlassCard>

              <GlassCard>
                <GlassCardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-1">Office</h3>
                    <p className="text-foreground/70 font-light text-sm">
                      123 Crypto Street<br />
                      San Francisco, CA 94105
                    </p>
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
