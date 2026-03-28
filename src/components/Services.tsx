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
  <section id="services" className="py-16 lg:py-16 bg-muted/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center mb-20">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            What We Do
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Our Unified Ecosystem of <span className="text-gradient-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            From targeted recruitment to complex HR operations, learning, and employee experience — we support your entire people function. Let us handle the complexities of growth so you can focus on building your business.
          </p>
        </AnimatedSection>

        <AnimatedSection className="hidden lg:block relative" delay={0.2}>
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-110 -z-10" />
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
            alt="HR professionals collaboratively reviewing business strategy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[450px] object-cover rounded-3xl shadow-soft ring-1 ring-border/50"
          />
        </AnimatedSection>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((s, index) => {
          const Icon = s.icon;
          return (
            <motion.div 
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15, mass: 1 } 
                }
              }}
            >
              <Link to={s.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group p-8 rounded-[2rem] bg-card border border-border/60 shadow-card hover:shadow-[0_40px_80px_-20px_rgba(239,90,57,0.15)] hover:border-primary/40 transition-colors duration-300 h-full flex flex-col relative overflow-hidden"
                >
                  {/* Glowing background orb for hover */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Subtle top gradient on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + (index % 3) * 0.5, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner relative z-10"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-shrink-0 relative z-10">{s.desc}</p>
                  <ul className="space-y-3 mb-6 flex-1 relative z-10">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-border/60 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary/80 transition-all duration-200 w-full relative z-10">
                    Explore offering <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);
