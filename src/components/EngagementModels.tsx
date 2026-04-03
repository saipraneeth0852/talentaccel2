import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Search, Timer, Target, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    num: "01",
    icon: Search,
    name: "Project-Based",
    desc: "Fixed-Scope Deliverables",
    detail: "Ideal for one-time hiring drives, policy builds, or HRMS implementation. Focused, fast, and highly targeted assignments.",
    color: "from-primary/18 to-primary/8",
    textColor: "text-primary",
  },
  {
    num: "02",
    icon: Timer,
    name: "Monthly Retainer",
    desc: "Scale Your People Ops",
    detail: "Ongoing managed services with a fixed monthly fee. We become your outsourced HR function—predictable, consistent, and expert-led.",
    color: "from-primary/16 to-primary/6",
    textColor: "text-primary",
    recommended: true,
  },
  {
    num: "03",
    icon: Target,
    name: "Outcome-Based",
    desc: "Performance-Driven Hiring",
    detail: "Pay only when we deliver—whether it's successful placements or compliance milestones. A completely risk-free, no-hire, no-fee model.",
    color: "from-primary/14 to-primary/5",
    textColor: "text-primary",
  },
  {
    num: "04",
    icon: Package,
    name: "Full-Stack Bundles",
    desc: "All-in-One Infrastructure",
    detail: "Combine hiring, payroll, compliance, and advisory into a single cohesive package. Best for scaling companies that need 360° support.",
    color: "from-primary/12 to-primary/4",
    textColor: "text-primary",
  },
];

export const EngagementModels = () => {
  return (
    <section className="py-10 lg:py-12 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        <AnimatedSection className="text-center mb-12 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.35)] animate-pulse" />
            Flexible Partnerships
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6 tracking-tight">
            How We Engage With You
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From tactical projects to fully managed people operations, our models are designed to scale alongside your organization.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {models.map((m, i) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.name} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col ${
                    m.recommended ? 'ring-2 ring-primary/20 bg-gradient-to-b from-card to-primary/5' : ''
                  }`}
                >
                  {/* Subtle Numbering */}
                  <span className="absolute top-8 right-8 text-6xl font-black text-slate-900/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                    {m.num}
                  </span>

                  {/* Recommendation Badge */}
                  {m.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-8 relative border border-primary/10`}>
                      <div className="absolute inset-0 bg-white/20 blur-sm rounded-2xl" />
                      <Icon className={`w-7 h-7 ${m.textColor} relative z-10`} />
                    </div>

                  {/* Content */}
                  <div className="flex-1 mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                      {m.name}
                    </h3>
                    <p className={`text-sm font-semibold ${m.textColor} mb-4 tracking-wide uppercase`}>
                      {m.desc}
                    </p>
                    <div className="w-10 h-1 bg-primary/12 mb-6 group-hover:w-20 transition-all duration-500" />
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {m.detail}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all duration-500"
                  >
                    <span className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">
                      Get Started
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-primary/10">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </Link>

                  {/* Decorative corner glow */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
