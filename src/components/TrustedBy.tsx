import { AnimatedSection } from "./AnimatedSection";
import { Shield, Cpu, Cloud, Smartphone, Plane, Factory } from "lucide-react";

const industries = [
  "Electronics", "Telecom", "Emerging Technologies", "Aerospace & Defense", "Manufacturing", "IT Products & Services"
];

const companies = [
  { name: "TechNova", sector: "Electronics", icon: Cpu },
  { name: "SkyDefense", sector: "Aerospace & Defense", icon: Plane },
  { name: "CloudScale AI", sector: "Emerging Technologies", icon: Cloud },
  { name: "ConnectTel", sector: "Telecom", icon: Smartphone },
  { name: "BuildWorks", sector: "Manufacturing", icon: Factory },
  { name: "SecurShield", sector: "IT Services", icon: Shield },
];

export const TrustedBy = () => (
  <section className="py-16 border-y border-border bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-6 lg:px-12 mb-12">
      <AnimatedSection className="text-center mb-10">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by startups and fast-growing companies to build teams that scale
        </p>
      </AnimatedSection>
      
      {/* Fading Industries List (moved above) */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12">
        {industries.map((name, i) => (
          <AnimatedSection key={name} delay={i * 0.08}>
            <div className="text-sm font-semibold text-muted-foreground/50 tracking-wide text-center uppercase">
              {name}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Company Marquee (moved below) */}
      <div className="relative flex overflow-hidden group">
        <div className="flex items-center gap-12 md:gap-16 marquee-track pr-12 md:pr-16">
          {[...companies, ...companies, ...companies].map((company, i) => {
            const Icon = company.icon;
            return (
              <div 
                key={`${company.name}-${i}`} 
                className="flex items-center gap-4 py-2 px-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:border-primary/50 transition-colors whitespace-nowrap min-w-max"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm leading-tight">{company.name}</div>
                  <div className="text-xs text-muted-foreground">{company.sector}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  </section>
);
