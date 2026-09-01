export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-end">
        <div>
          <p className="font-signature text-4xl leading-none text-foreground">
            Muhammed Shareef M
          </p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            ai/ml engineer <span className="text-signal">|</span> mern stack developer <span className="text-signal">|</span> building intelligent systems
          </p>
        </div>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
