import { GithubLogo, LinkedinLogo, InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react";

const HuggingFaceLogo = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Matching 'light' weight roughly
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
    <path d="M7 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    <path d="M14 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    <path d="M8 15.5c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 font-light mb-4 md:mb-0">
            © 2025 Shareef All rights.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/shareefmx" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <GithubLogo size={20} weight="light" />
            </a>
            <a href="https://www.linkedin.com/in/shareefmottath" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <LinkedinLogo size={20} weight="light" />
            </a>
            <a href="https://www.instagram.com/shareef_m._/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <InstagramLogo size={20} weight="light" />
            </a>
            <a href="https://www.facebook.com/shareef.mottath" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <FacebookLogo size={20} weight="light" />
            </a>
            <a href="https://x.com/muhd_shareef_m?s=21" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <XLogo size={20} weight="light" />
            </a>
            <a href="https://huggingface.co/shareefmx" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <HuggingFaceLogo size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
