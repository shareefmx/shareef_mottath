import { Reveal } from "@/components/Reveal";

export const Principle = () => {
  return (
    <section className="border-y border-border py-20 md:py-28">
      <Reveal delay={0}>
        <p className="eyebrow mb-8">// operating principle</p>
        <blockquote className="max-w-3xl text-balance text-2xl font-medium leading-[1.18] tracking-tight sm:text-3xl md:text-4xl">
          System design is the programming language,
          <span className="text-muted-foreground"> AI is the compiler.</span>
        </blockquote>
      </Reveal>
    </section>
  );
};

