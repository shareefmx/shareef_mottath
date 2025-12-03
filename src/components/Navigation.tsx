import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", isHash: false },
  { label: "About Me", href: "/about", isHash: false },
  { label: "Project", href: "/project", isHash: false },
  { label: "Contact", href: "/contact", isHash: false },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "blur-backdrop bg-background/60 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto pl-18 pr-4">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className={cn(
                "text-2xl font-light tracking-tighter text-glow transition-opacity duration-300",
                isHome && !isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              Shareef
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "text-sm font-light text-foreground/80 hover:text-foreground transition-colors",
                    item.label === "Contact" && "mr-8"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} weight="light" />
              ) : (
                <List size={24} weight="light" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm z-40 bg-background/95 blur-backdrop transform transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-start gap-6 p-8 mt-20">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
