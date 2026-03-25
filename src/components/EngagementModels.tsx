import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const models = [
  {
    name: "Startup Growth Pack",
    target: "Early-stage startups",
    features: ["Hiring support", "HR policy setup", "Payroll & compliance"],
    highlight: false,
  },
  {
    name: "Growth Company Pack",
    target: "Scaling organizations",
    features: ["Startup Growth Pack +", "Compliance audits & advisory", "L&D workshops", "Employer engagement", "HR analytics + dashboards"],
    highlight: true,
  },
  {
    name: "Enterprise HR Partner Pack",
    target: "Mid to large enterprises",
    features: ["Growth Company Pack +", "Employer branding", "Immigration support", "Certification programs", "Process documentation & governance"],
    highlight: false,
  },
];

export const EngagementModels = () => (
  <section className="py-24 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Engagement</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Engagement Models</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto italic">
          The models are based on maturity, scale, and complexity. Our bundles are designed to remove HR friction at every stage of growth.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {models.map((m) => (
          <StaggerItem key={m.name}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`relative p-8 rounded-2xl border h-full transition-all duration-300 ${
                m.highlight
                  ? "bg-primary border-primary shadow-card-hover"
                  : "bg-card border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {m.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${m.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                {m.name}
              </h3>
              <p className={`text-sm mb-6 ${m.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Best for: {m.target}
              </p>
              <ul className="space-y-3 mb-8">
                {m.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${m.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${m.highlight ? "text-secondary" : "text-secondary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex w-full justify-center items-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  m.highlight
                    ? "bg-secondary text-secondary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Custom Quote
              </a>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
