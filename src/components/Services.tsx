import { Users, FileText, Settings, GraduationCap, Heart, Globe, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    desc: "End-to-end hiring across all engagement types — from permanent to contract and executive search.",
    bullets: ["Full Time", "Contract & Contract-to-Hire", "Staff Augmentation", "RPO & Volume Hiring", "Executive Hiring"],
    outcome: "Faster hiring, better talent fit, reduced hiring costs.",
    href: "/services/talent-acquisition",
  },
  {
    icon: FileText,
    title: "HR Operations",
    desc: "Complete payroll management and statutory compliance handled accurately and on time.",
    bullets: ["PF, ESI, PT, LWF Filings", "Taxation & Payroll Management", "Salary Bands", "Multi-state Compliance", "POSH, CLRA, Shops & Establishment", "Compliance Audits & Advisory"],
    outcome: "Zero compliance risk. Accurate payroll.",
    href: "/services/hr-operations",
  },
  {
    icon: Settings,
    title: "HR Advisory",
    desc: "Strategic HR foundations to structure, scale, and operate your people function.",
    bullets: ["HR Policies & Handbook", "Org Structure & Role Design", "Compensation Benchmarking", "Performance Management & OKRs", "HRMS / ATS Implementation"],
    outcome: "Structured, scalable HR foundations.",
    href: "/services/hr-advisory",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Capability-building programmes that develop leaders and future-ready teams.",
    bullets: ["Behavioural & Leadership Training", "Technical & Domain Training", "Manager Readiness Programs", "Certification Programs (HR, Compliance, Analytics)"],
    outcome: "Skilled teams. Future-ready leaders.",
    href: "/services/learning-development",
  },
  {
    icon: Heart,
    title: "Employee Experience",
    desc: "Everything that makes your employees feel valued — from onboarding to exit.",
    bullets: ["Background Verification", "Onboarding & Welcome Kits", "Employee Awards & Recognition", "Corporate & Festival Gifting", "Exit Management & F&F Processing"],
    outcome: "Better employee experience across the lifecycle.",
    href: "/services/employee-experience",
  },
  {
    icon: Globe,
    title: "Extended Workforce",
    desc: "Specialist services that go beyond traditional HR to support your full talent strategy.",
    bullets: ["Employer Branding & Talent Marketing", "M&A Employee Rebadging", "Visa & Immigration Support", "CSR Advisory & Execution", "HR Event & Engagement Support"],
    outcome: "Support beyond traditional HR.",
    href: "/services/extended-workforce",
  },
];

export const Services = () => (
  <section id="services" className="py-24 lg:py-32 bg-muted/20">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        <AnimatedSection className="lg:col-span-7">
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm font-semibold text-primary tracking-wide uppercase mb-5">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Our Unified Ecosystem of <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            From targeted recruitment to complex HR operations, learning, and employee experience — we support your entire people function. Let us handle the complexities of growth so you can focus on building your business.
          </p>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-5 hidden lg:block" delay={0.2}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-110 -z-10" />
            <motion.img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
              alt="HR professionals collaboratively reviewing business strategy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[400px] object-cover max-w-md mx-auto rounded-3xl shadow-soft ring-1 ring-border/50"
            />
          </div>
        </AnimatedSection>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.title}>
              <Link to={s.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group p-8 rounded-[2rem] bg-card border border-border/60 shadow-card hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                >
                  {/* Subtle top gradient on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-shrink-0">{s.desc}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Outcome callout */}
                  <div className="mt-auto pt-5 border-t border-border/60">
                    <p className="text-sm font-semibold text-secondary leading-snug">{s.outcome}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary/80 transition-all duration-200 mt-5">
                    Explore offering <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
