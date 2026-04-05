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
  <section className="py-10 lg:py-12 bg-card border-y border-border">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-[34px] font-medium text-muted-foreground leading-tight tracking-tight">
          Trusted across <span className="font-bold text-foreground">fast-growing sectors</span> to build teams that scale
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center md:justify-center gap-3 sm:gap-x-4 sm:gap-y-4 md:gap-x-12 md:gap-y-10 opacity-90 md:opacity-70 md:hover:opacity-100 transition-opacity duration-500">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div 
                key={sector.name} 
                className="flex items-center justify-start md:justify-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-foreground hover:text-primary transition-transform duration-300 hover:scale-[1.02] cursor-default group md:border-none md:bg-transparent md:px-0 md:py-0 md:hover:scale-105"
              >
                <div className="w-12 h-12 rounded-2xl bg-muted/80 flex items-center justify-center border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-semibold text-base md:text-lg tracking-tight">{sector.name}</span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </section>
);
