import { motion } from "framer-motion";
import { Users, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";

const cases = [
  {
    tag: "SaaS Startup",
    title: "Scaling a SaaS Startup's Engineering Team",
    challenge: "A fast-growing SaaS company needed to scale its engineering team quickly to meet product milestones, but lacked an internal recruitment function and was struggling with long hiring cycles.",
    solution: "TalentAccel embedded a dedicated recruiter and sourcing specialist, built a structured screening pipeline, and ran parallel hiring tracks across multiple engineering roles.",
    outcome: "Hired 15 engineers in 2 months, reducing hiring time by 40% and enabling the startup to hit its product milestone on schedule.",
    metrics: [
      { icon: Users, value: "15", label: "Engineers Hired" },
      { icon: Clock, value: "2", label: "Months" },
      { icon: TrendingUp, value: "40%", label: "Faster Hiring" },
    ],
    results: [
      "Hired 15 engineers in 2 months",
      "Reduced hiring time by 40%",
      "Zero open critical roles at launch",
      "Full onboarding support provided",
    ],
  },
  {
    tag: "Offshore Team",
    title: "Building an Offshore Engineering Team in India",
    challenge: "A US-based SaaS company needed to build a 20-member engineering team in India to expand capacity and reduce operational costs, without the infrastructure or local HR expertise to do so independently.",
    solution: "TalentAccel handled end-to-end talent sourcing, recruitment, HR setup, and payroll management. We built the team from scratch and managed all statutory compliance.",
    outcome: "20 engineers hired within 10 weeks with full HR and compliance support, enabling the company to scale without operational complexity.",
    metrics: [
      { icon: Users, value: "20", label: "Engineers Hired" },
      { icon: Clock, value: "10", label: "Weeks" },
      { icon: TrendingUp, value: "100%", label: "Compliance Cover" },
    ],
    results: [
      "Built a 25-member India team",
      "Managed hiring, HR, and payroll operations",
      "Full statutory compliance from day one",
      "Ongoing HR operations support",
    ],
  },
];

const CaseStudiesPage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          Case Studies
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground mb-4"
        >
          Real Results from{" "}
          <span className="text-gradient-accent">Real Companies</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-xl"
        >
          Companies that trusted TalentAccel to build their teams and manage their HR operations.
        </motion.p>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        {cases.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-6">
                  {c.tag}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">{c.title}</h2>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {c.metrics.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div key={m.label} className="text-center p-5 rounded-2xl bg-muted/50 border border-border">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-3xl font-extrabold text-foreground">{m.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Challenge / Solution / Outcome */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">The Challenge</h3>
                    <p className="text-sm text-foreground leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Our Solution</h3>
                    <p className="text-sm text-foreground leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">The Outcome</h3>
                    <p className="text-sm text-foreground leading-relaxed">{c.outcome}</p>
                  </div>
                </div>

                {/* Results list */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Key Results</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">
              Ready to be our next success story?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Let TalentAccel help you hire faster, stay compliant, and scale your team with confidence.
            </p>
            <a
              href="mailto:hr@talentaccel.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default CaseStudiesPage;
