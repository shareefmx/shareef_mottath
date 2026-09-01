import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Badges", href: "/#badges" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/1eneuROs2fUPfKQi1ItMfS3JdL_3IivnP/view?usp=sharing";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling if navigating with hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "border-border/80 bg-background/80 backdrop-blur-md shadow-xs"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand with capital M and S */}
        <Link
          to="/"
          className="flex items-center gap-1 font-mono text-sm font-medium tracking-tight hover:text-signal transition-colors"
        >
          Muhammed Shareef
          <span className="caret" aria-hidden="true"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isExternalHash = item.href.startsWith("/#");
            const isCurrentPageHash = location.pathname === "/" && isExternalHash;

            if (isCurrentPageHash) {
              return (
                <a
                  key={item.label}
                  href={item.href.replace("/", "")}
                  className="font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-foreground text-muted-foreground"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className="font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-foreground text-muted-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex items-center gap-1 group"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-lg px-6 py-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href.startsWith("/#") && location.pathname === "/" ? item.href.replace("/", "") : item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.15em] text-signal flex items-center gap-1.5 py-1"
              >
                <span>Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
