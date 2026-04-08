import { AnimatedSection } from "./AnimatedSection";
import { Cloud, Cpu, Landmark, Rocket, Building2, Radio, ShoppingBag, Factory, Shield } from "lucide-react";

const sectors = [
  { name: "SaaS & Product", icon: Cloud },
  { name: "AI & Data Science", icon: Cpu },
  { name: "FinTech", icon: Landmark },
  { name: "Startups & Scaleups", icon: Rocket },
  { name: "Global Centers (GCC)", icon: Building2 },
  { name: "Manufacturing", icon: Factory },
  { name: "Electronics", icon: Cpu },
  { name: "Aerospace & Defence", icon: Shield },
  { name: "Telecom", icon: Radio },
  { name: "E-Commerce", icon: ShoppingBag },
];

export const TrustedBy = () => (
  <section className="py-16 lg:py-24 bg-card border-y border-border overflow-hidden">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-16">
      <AnimatedSection className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-5">
          From High-Growth Industries to <span className="text-gradient-accent">High-Impact Teams</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-medium">
          We Help You Scale with Confidence.
        </p>
      </AnimatedSection>
    </div>

    <AnimatedSection delay={0.2} className="w-full">
      <div className="relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_120px,_black_calc(100%-120px),transparent_100%)] pb-4">
        <div 
          className="marquee-track flex gap-6 sm:gap-8 w-max"
          style={{ animationDuration: '50s' }}
        >
          {/* We use 4 sets of the 10 sectors. -50% translation goes through exactly 20 items. */}
          {[...sectors, ...sectors, ...sectors, ...sectors].map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div 
                key={`${sector.name}-${idx}`} 
                className="flex items-center gap-4 rounded-3xl border border-border bg-background/60 backdrop-blur-md px-7 py-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-card group shrink-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-semibold text-lg tracking-tight whitespace-nowrap text-foreground">{sector.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  </section>
);
