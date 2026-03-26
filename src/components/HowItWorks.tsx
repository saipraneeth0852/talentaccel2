import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Target, Search, Layers, Zap, BarChart2, RefreshCw } from "lucide-react";

const steps = [
  { icon: Target, step: "01", title: "Understand Goals", desc: "Understand your business & workforce goals — what you're building, who you need, and how fast." },
  { icon: Search, step: "02", title: "Assess Gaps", desc: "Assess current HR processes, gaps, and compliance needs to identify where to focus first." },
  { icon: Layers, step: "03", title: "Design Solution", desc: "Design the right HR solution mix aligned to your growth stage — hiring, operations, or full-stack." },
  { icon: Zap, step: "04", title: "Implement Fast", desc: "Implement solutions with speed, accuracy, and accountability — no delays, no compromises." },
  { icon: BarChart2, step: "05", title: "Monitor Outcomes", desc: "Monitor performance, compliance, and workforce outcomes with ongoing reporting and reviews." },
  { icon: RefreshCw, step: "06", title: "Optimize & Scale", desc: "Continuously optimize and scale as your organization evolves — we grow with you." },
];

export const HowItWorks = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Approach</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How TalentAccel Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A structured 6-step approach to building and scaling your people function — from first conversation to ongoing optimization.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.step}>
              <div className="relative p-7 rounded-2xl bg-card border border-border shadow-card h-full">
                <span className="text-5xl font-extrabold text-muted/60 absolute top-4 right-5">{s.step}</span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
