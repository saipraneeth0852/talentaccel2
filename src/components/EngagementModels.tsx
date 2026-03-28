import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Timer, Target, Package, ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    name: "Outcome-Based",
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

export const EngagementModels = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-16 bg-background relative overflow-hidden font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <AnimatedSection className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            How We Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Engagement Models</h2>
          <p className="text-muted-foreground max-w-2xl">
            Flexible frameworks designed for every stage of your growth — from tactical one-off projects to comprehensive HR outsourcing.
          </p>
        </AnimatedSection>

        {/* Tab-like structural top border visual */}
        <div className="flex flex-col gap-8 w-full">
          {/* Main 4-Column Area */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full bg-card border-t-4 border-t-primary border-l border-r border-b border-border/60 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x lg:divide-y-0 divide-border/50 h-full">
              {models.map((m, i) => {
                const Icon = m.icon;
                const isHovered = hoveredCard === i;
                return (
                  <div 
                    key={m.num}
                    className="p-8 flex flex-col h-full bg-card hover:bg-[#f6faff] transition-colors duration-500 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Header */}
                    <div className="text-center mb-6 h-16">
                      <h3 className="font-black text-foreground text-lg uppercase tracking-wider mb-2 leading-tight">{m.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{m.desc}</p>
                    </div>

                    <div className="w border-t border-border/40 mx-4" />

                    {/* Faux Pricing / Icon Focus Area */}
                    <div className="py-8 text-center flex flex-col items-center flex-shrink-0">
                      <motion.div
                        animate={{
                          y: isHovered ? -5 : 0,
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e1effe] to-[#f3f8ff] flex items-center justify-center shadow-inner mb-4 relative"
                      >
                        {/* Glow effect matching the blurred text of image */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Icon className="w-8 h-8 text-[#1a66cc] relative z-10" />
                      </motion.div>
                      
                      

                      <Link to="/contact" className="w-full relative overflow-hidden rounded-full block">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-sm rounded-full shadow-[0_4px_14px_0_rgba(24,119,242,0.39)] transition-colors text-center"
                        >
                          Explore Model
                        </motion.div>
                      </Link>
                    </div>

                    <div className="w border-t border-border/40 mx-4 mb-6" />

                    {/* Features/Details List equivalent */}
                    <div className="flex-1">
                      <h4 className="font-extrabold text-foreground text-sm mb-4">Model Overview</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
