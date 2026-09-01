import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/shareefmx",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shareefmottath/",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Muhammed_Shareef",
  },
  {
    name: "Hugging Face",
    href: "https://huggingface.co/shareefmx",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/muhd_shareef_m?s=21",
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1eneuROs2fUPfKQi1ItMfS3JdL_3IivnP/view?usp=sharing",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">07</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-12">
        {/* Left Column: Heading & Email */}
        <div className="md:col-span-8">
          <Reveal delay={0}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              Working on something that needs to ship?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Open for full-time AI/ML & Full-Stack roles, freelance & contract projects — DM me. Email or any of the channels below works, and I read everything that comes in.
            </p>
            <a
              href="mailto:shareefmottath@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-xl font-medium tracking-tight link-underline text-foreground hover:text-signal transition-colors"
            >
              shareefmottath@gmail.com
              <ArrowUpRight className="h-5 w-5 text-signal" />
            </a>
          </Reveal>
        </div>

        {/* Right Column: Links List */}
        <div className="md:col-span-4">
          <Reveal delay={80}>
            <ul className="space-y-3 border-t border-border pt-4">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

