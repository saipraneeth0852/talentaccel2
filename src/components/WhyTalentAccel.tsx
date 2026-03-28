import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Rocket, Zap, Shield, Handshake } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Startup-Focused Approach", desc: "We understand the challenges of building teams in fast-growing companies and tailor our approach accordingly." },
  { icon: Zap, title: "Speed & Quality", desc: "Our hiring process ensures faster closures without compromising on talent quality." },
  { icon: Shield, title: "End-to-End Support", desc: "From recruitment to HR operations and compliance, we support your entire people function." },
  { icon: Handshake, title: "Flexible Engagement", desc: "Choose from contingency hiring, dedicated recruitment teams, or full HR outsourcing to match your stage." },
];

export const WhyTalentAccel = () => (
  <section id="why-talentaccel" className="py-16 lg:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Why Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why TalentAccel</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            We're not a generic recruitment agency. We're a startup-focused talent advisory partner that combines deep hiring expertise with end-to-end HR infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  </section>
);
