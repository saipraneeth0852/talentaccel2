import { AnimatedSection } from "./AnimatedSection";

const logos = [
  "Electronics", "Telecom", "Emerging Technologies", "Aerospace & Defense", "Manufacturing", "IT Products & Services"
];

export const TrustedBy = () => (
  <section className="py-16 border-y border-border bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-10">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by startups and fast-growing companies to build teams that scale
        </p>
      </AnimatedSection>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((name, i) => (
          <AnimatedSection key={name} delay={i * 0.08}>
            <div className="text-lg font-bold text-muted-foreground/40 tracking-wide">
              {name}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
