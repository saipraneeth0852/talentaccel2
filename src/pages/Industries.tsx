import { motion } from "framer-motion";
import { Code, Brain, Landmark, Radio, Cpu, Rocket, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";

const industries = [
  {
    icon: Code,
    label: "SaaS & Product Companies",
    desc: "We help SaaS and product-led companies hire engineers, product managers, and growth talent at speed — from seed stage to Series B and beyond.",
    roles: ["Software Engineers", "Product Managers", "Growth & Marketing", "Customer Success"],
  },
  {
    icon: Brain,
    label: "AI / Data Science",
    desc: "Sourcing specialized AI, ML, and data science talent is complex. We maintain deep networks across India's top AI talent pool.",
    roles: ["AI / ML Engineers", "Data Scientists", "MLOps Engineers", "NLP Specialists"],
  },
  {
    icon: Landmark,
    label: "FinTech",
    desc: "From payments to lending platforms, we help FinTech companies build high-performing engineering and operations teams with full compliance support.",
    roles: ["Backend Engineers", "Risk & Compliance", "Finance Operations", "Product Analysts"],
  },
  {
    icon: Radio,
    label: "Telecom & Networking",
    desc: "We have a strong track record hiring specialized telecom engineers across 4G/5G, network software, and embedded systems.",
    roles: ["Telecom Engineers", "RF Engineers", "Network Architects", "Embedded Systems"],
  },
  {
    icon: Cpu,
    label: "Electronics & Hardware",
    desc: "Rare technical talent for electronics companies — from chip design to firmware engineers and hardware test specialists.",
    roles: ["Electronics Engineers", "VLSI / RTL Design", "Firmware Engineers", "Hardware Test"],
  },
  {
    icon: Rocket,
    label: "Startups & GCCs",
    desc: "Whether you're a 5-person startup making your first technical hire or a GCC setting up an India team, TalentAccel scales with you.",
    roles: ["Founding Team Hires", "Full-stack Teams", "HR & Operations", "Leadership Roles"],
  },
];

const Industries = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          Industries
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
        >
          Hiring for{" "}
          <span className="text-gradient-accent">High-Growth Sectors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          We specialize in hiring for high-growth industries where talent is scarce and speed matters. Deep domain knowledge lets us move faster and match better.
        </motion.p>
      </div>
    </section>

    {/* Industry Cards */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{ind.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ind.desc}</p>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Roles We Hire</p>
                    <ul className="space-y-1.5">
                      {ind.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">
              Don't see your industry?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              We work across all high-growth sectors. Reach out and we'll tell you exactly how we can help.
            </p>
            <a
              href="mailto:hr@talentaccel.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Talk to Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default Industries;
