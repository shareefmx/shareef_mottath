import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const links = [
  { name: "GitHub", href: "https://github.com/shareefmx" },
  { name: "LinkedIn", href: "https://linkedin.com/in/shareef-mx" },
  { name: "LeetCode", href: "https://leetcode.com/u/Muhammed_Shareef" },
  { name: "Hugging Face", href: "https://huggingface.co/shareefmx" },
  { name: "X / Twitter", href: "https://x.com/muhd_shareef_m?s=21" },
  { name: "Download CV", href: "https://drive.google.com/file/d/1eneuROs2fUPfKQi1ItMfS3JdL_3IivnP/view?usp=sharing" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Inquiry from ${name || "Portfolio Visitor"}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:shareefmottath@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <Reveal delay={0}>
          <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
            <span className="font-mono text-xs text-signal">05</span>
            <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact & Inquiries
            </h1>
          </div>

          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl mb-4">
            Working on something that needs to ship?
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground mb-16">
            Open for full-time roles, freelance projects, and AI automation consulting. Reach out anytime.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Left Column: Form */}
          <div className="md:col-span-7">
            <Reveal delay={0}>
              <form onSubmit={handleSend} className="space-y-4 rounded-md border border-border bg-card/40 p-6 md:p-8">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signal"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signal"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>

          {/* Right Column: Direct Info & Social Links */}
          <div className="md:col-span-5 space-y-8">
            <Reveal delay={80}>
              <div className="space-y-4">
                <div className="rounded-md border border-border bg-card/40 p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <Mail className="h-4 w-4 text-signal" />
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Direct Email</span>
                  </div>
                  <a
                    href="mailto:shareefmottath@gmail.com"
                    className="text-base font-medium text-foreground hover:text-signal transition-colors block"
                  >
                    shareefmottath@gmail.com
                  </a>
                  <a
                    href="mailto:shareefmottath@outlook.com"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors block mt-0.5"
                  >
                    shareefmottath@outlook.com
                  </a>
                </div>

                <div className="rounded-md border border-border bg-card/40 p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <Phone className="h-4 w-4 text-signal" />
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Phone</span>
                  </div>
                  <a
                    href="tel:+918304852079"
                    className="text-base font-medium text-foreground hover:text-signal transition-colors block"
                  >
                    +91 8304852079
                  </a>
                </div>

                <div className="rounded-md border border-border bg-card/40 p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPin className="h-4 w-4 text-signal" />
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <ul className="space-y-3 border-t border-border pt-6 mt-6">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground font-mono text-xs uppercase tracking-wider"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Contact;
