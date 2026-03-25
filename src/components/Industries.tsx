import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Code, Brain, Landmark, Radio, Cpu, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Code, label: "SaaS & Product Companies" },
  { icon: Brain, label: "AI / Data Science" },
  { icon: Landmark, label: "FinTech" },
  { icon: Radio, label: "Telecom & Networking" },
  { icon: Cpu, label: "Electronics & Hardware" },
  { icon: Rocket, label: "Startups & GCCs" },
];

export const Industries = () => (
  <section id="industries" className="py-24 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Industries</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">We specialize in hiring for high-growth sectors</h2>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <StaggerItem key={ind.label}>
              <Link to="/industries" className="block">
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">{ind.label}</span>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
