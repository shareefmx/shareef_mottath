import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs text-signal uppercase tracking-[0.2em] mb-3">
        404 — Not Found
      </span>
      <h1 className="text-3xl font-medium tracking-tight sm:text-5xl mb-4">
        Page could not be found.
      </h1>
      <p className="max-w-md text-base text-muted-foreground mb-8">
        The link you followed may be broken, or the page may have been removed or relocated.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 font-mono text-xs uppercase tracking-wider"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span>Return to Home</span>
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default NotFound;
