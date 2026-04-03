import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Rocket, Zap, Shield, Handshake } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Built Around Your Stage", desc: "What a company needs at 20 people is different from what it needs at 200. We shape our support around where you are today and where you're headed next." },
  { icon: Zap, title: "Clear, Practical Partnership", desc: "We bring recommendations you can act on, support you can rely on, and systems that make day-to-day operations easier." },
  { icon: Shield, title: "One Connected People Partner", desc: "Hiring, HR, payroll, and compliance work better when they work together. We help you manage them as one connected function." },
  { icon: Handshake, title: "Flexible by Design", desc: "Whether you need project support, an ongoing partner, or embedded expertise, we fit into the way your business operates." },
];

export const WhyTalentAccel = () => (
  <section id="why-talentaccel" className="py-10 lg:py-12">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Why TalentAccel
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">Built for companies on the rise</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            The most exciting stage of growth deserves people operations that are just as thoughtful as the business itself. We combine speed, structure, and flexibility to help you grow with intention, not just pace.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="btn-pressable inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Start the Conversation
            </a>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <div className="p-6 rounded-3xl bg-card border border-border shadow-card h-full">
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
