import { AnimatedSection } from "./AnimatedSection";

const industries = [
  "Electronics", "Telecom", "Emerging Technologies", "Aerospace & Defense", "Manufacturing", "IT Products & Services"
];

export const TrustedBy = () => (
  <section className="py-16 border-y border-border bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-6 lg:px-12 mb-12">
      <AnimatedSection className="text-center">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by startups and fast-growing companies to build teams that scale
        </p>
      </AnimatedSection>
    </div>
    
    <div className="relative flex overflow-hidden group">
      <div className="flex items-center gap-16 md:gap-24 marquee-track pr-16 md:pr-24">
        {[...industries, ...industries, ...industries].map((name, i) => (
          <div 
            key={`${name}-${i}`} 
            className="text-2xl md:text-4xl font-black text-muted-foreground/30 hover:text-primary/60 transition-colors duration-300 tracking-wider whitespace-nowrap uppercase select-none"
          >
            {name}
          </div>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
    </div>
  </section>
);
