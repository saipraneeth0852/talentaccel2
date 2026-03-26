import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Search, Timer, Target, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    num: "01",
    icon: Search,
    name: "Project-Based",
    desc: "Hiring, HR setup, consulting assignments",
    detail: "A defined-scope engagement with clear deliverables. Ideal for one-time hiring drives, policy builds, or HRMS implementation. Focused, fast, and highly targeted.",
  },
  {
    num: "02",
    icon: Timer,
    name: "Monthly Retainers",
    desc: "Payroll, compliance, RPO services",
    detail: "Ongoing managed services with a fixed monthly fee. We become your outsourced HR function — giving you predictable costs and consistent, high-quality delivery.",
  },
  {
    num: "03",
    icon: Target,
    name: "Outcome-Based Pricing",
    desc: "Hiring across verticals",
    detail: "Pay only when we deliver — whether it's successful placements, compliance milestones, or completed projects. It's a completely risk-free, no-hire, no-fee model.",
  },
  {
    num: "04",
    icon: Package,
    name: "Bundled Solutions",
    desc: "Cost-effective, multi-service packages",
    detail: "Combine hiring, payroll, compliance, and HR advisory into a single, cohesive package. Perfectly designed for scaling companies that need comprehensive full-stack people support.",
  },
];

export const EngagementModels = () => (
  <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
    {/* Subtle Background Glows */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">How We Work</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">Engagement Models</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Flexible frameworks designed for every stage of your growth — from tactical one-off projects to comprehensive HR outsourcing.
        </p>
      </AnimatedSection>

      {/* Modern 2x2 Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {models.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border/60 hover:border-primary/40 rounded-[2rem] p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col cursor-default"
            >
              {/* Oversized Background Number */}
              <div className="absolute -bottom-8 -right-4 text-[12rem] font-black text-muted-foreground/5 select-none pointer-events-none group-hover:text-primary/[0.03] group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-700 leading-none">
                {m.num}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all duration-500 text-primary shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-foreground text-2xl leading-tight mb-1.5">{m.name}</h3>
                    <p className="text-xs font-bold text-primary/80 uppercase tracking-wider">{m.desc}</p>
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {m.detail}
                </p>
                
                <div className="mt-8 pt-6 border-t border-border/50 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-primary/10 px-4 py-2 rounded-full inline-flex items-center">
                    Explore Model <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <AnimatedSection className="text-center mt-20">
        <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-card border border-border shadow-sm max-w-xl mx-auto w-full">
          <p className="text-foreground font-semibold text-lg mb-2">Not sure which model fits your stage?</p>
          <p className="text-muted-foreground text-sm mb-6">Let's discuss your specific needs and tailor a solution.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Talk to an Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
