import { GithubLogo, TwitterLogo, LinkedinLogo, DiscordLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 font-light mb-4 md:mb-0">
            © 2024 Lunexa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <TwitterLogo size={20} weight="light" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <GithubLogo size={20} weight="light" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <LinkedinLogo size={20} weight="light" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <DiscordLogo size={20} weight="light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
