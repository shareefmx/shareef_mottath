import { GithubLogo, TwitterLogo, LinkedinLogo, DiscordLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light tracking-tighter mb-4 text-glow">Lunexa</h3>
            <p className="text-sm text-foreground/60 font-light">
              AI-powered crypto trading for everyone
            </p>
          </div>
          
          <div>
            <h4 className="font-light mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Features</a></li>
              <li><a href="#pricing" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Pricing</a></li>
              <li><a href="#how-it-works" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-light mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">About</a></li>
              <li><a href="/blog" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Blog</a></li>
              <li><a href="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-light mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Privacy</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Terms</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-light">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
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
