import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "./Blog";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div id="top" className="relative min-h-screen">
      <Navigation />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <Reveal delay={0}>
          <Link
            to="/blog"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to blog</span>
          </Link>

          <div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="text-signal">{article.tag}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl leading-tight mb-8">
            {article.title}
          </h1>

          <div className="border-t border-border pt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8 flex items-center justify-between">
            <Link
              to="/blog"
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              ← All posts
            </Link>
            <a
              href="mailto:shareefmottath@gmail.com"
              className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
            >
              <span className="link-underline">Discuss with author</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default BlogArticle;
