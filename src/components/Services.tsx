import { Users, UserCheck, Globe, Calculator, Settings, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    desc: "We help companies hire the right talent quickly and efficiently.",
    bullets: ["Permanent Hiring", "Contract Staffing", "Executive Search", "Startup Hiring Support", "Tech & AI Hiring"],
    href: "/services/talent-acquisition",
  },
  {
    icon: UserCheck,
    title: "Dedicated Hiring Teams",
    desc: "Build your hiring engine with a dedicated TalentAccel recruitment team.",
    bullets: ["Dedicated Recruiter", "Dedicated Sourcing Specialist", "Hiring Analytics & Reporting"],
    href: "/services/dedicated-teams",
  },
  {
    icon: Globe,
    title: "Offshore / India Team Buildout",
    desc: "We help global companies build high-quality teams in India.",
    bullets: ["Talent Sourcing & Hiring", "HR & Payroll Setup", "Compliance Management", "Team Scaling Support"],
    href: "/offshore-teams",
  },
  {
    icon: Calculator,
    title: "Payroll & Compliance Services",
    desc: "Simplify payroll and statutory compliance with our managed HR services.",
    bullets: ["Payroll Processing", "PF / ESIC / PT Filings", "Labour Law Compliance", "Contractor Payroll", "Compliance Audits"],
    href: "/services/payroll-compliance",
  },
  {
    icon: Settings,
    title: "HR Advisory & Operations",
    desc: "End-to-end HR support for growing companies.",
    bullets: ["HR Policy Development", "HRMS Implementation", "Performance Management Frameworks", "Employee Lifecycle Management", "HR Compliance Advisory"],
    href: "/services/hr-advisory",
  },
];

export const Services = () => (
  <section id="services" className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">What We Do</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From recruitment to HR operations and compliance, we support your entire people function.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.title}>
              <Link to={s.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
