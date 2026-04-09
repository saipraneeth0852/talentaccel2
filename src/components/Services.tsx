import { Users, FileText, Settings, GraduationCap, Heart, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroImagePanel } from "./HeroImagePanel";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    desc: "Full-cycle recruitment, from volume hiring to executive search.",
    bullets: ["Full Time", "Contract & Contract-to-Hire", "Staff Augmentation", "RPO & Volume Hiring", "Executive Hiring"],
    href: "/services/talent-acquisition",
  },
  {
    icon: FileText,
    title: "HR Operations",
    desc: "End-to-end payroll and compliance management, including statutory filings.",
    bullets: ["PF, ESI, PT, LWF Filings", "Taxation & Payroll Management", "Salary Bands", "Multi-state Compliance", "POSH, CLRA, Shops & Establishment", "Compliance Audits & Advisory"],
    href: "/services/hr-operations",
  },
  {
    icon: Settings,
    title: "HR Advisory",
    desc: "Scalable HR foundations: org design, compensation, and HRMS implementation.",
    bullets: ["HR Policies & Handbook", "Org Structure & Role Design", "Compensation Benchmarking", "Performance Management & OKRs", "HRMS / ATS Implementation"],
    href: "/services/hr-advisory",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Skill development programs, from leadership training to technical certifications.",
    bullets: ["Behavioural & Leadership Training", "Technical & Domain Training", "Manager Readiness Programs", "Certification Programs (HR, Compliance, Analytics)"],
    href: "/services/learning-development",
  },
  {
    icon: Heart,
    title: "Employee Experience",
    desc: "Enhance workplace culture with streamlined onboarding and lifecycle management.",
    bullets: ["Background Verification", "Onboarding & Welcome Kits", "Employee Awards & Recognition", "Corporate & Festival Gifting", "Exit Management & F&F Processing"],
    href: "/services/employee-experience",
  },
  {
    icon: Globe,
    title: "Extended Workforce",
    desc: "Turn-key offshore setups, employer branding, and global expansion support.",
    bullets: ["Employer Branding & Talent Marketing", "M&A Employee Rebadging", "Visa & Immigration Support", "CSR Advisory & Execution", "HR Event & Engagement Support"],
    href: "/services/extended-workforce",
  },
];

export const Services = () => (
  <section id="services" className="py-10 lg:py-12 bg-muted/20">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center mb-12">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Services
          </div>
          <h2 className="page-title mb-6">
            Comprehensive Support for{" "}
            <span className="text-gradient-accent drop-shadow-sm">Stronger Teams</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Bring talent acquisition, HR operations, and employee experience together under one trusted partner, so your team can move faster, stay aligned, and scale with more confidence.
          </p>
        </AnimatedSection>

        <HeroImagePanel
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
          alt="Strategic planning and business consulting"
          className="w-full max-w-[34rem] lg:justify-self-end"
          imageClassName="h-[240px] sm:h-[320px] lg:h-[450px]"
          glowClassName="inset-x-[12%] top-12 bottom-6 from-primary/16 via-primary/10 to-secondary/16"
        />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } }
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((s, index) => {
          const Icon = s.icon;
          return (
            <motion.div 
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                }
              }}
            >
              <Link to={s.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="group p-8 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-[0_40px_80px_-20px_rgba(239,90,57,0.15)] hover:border-primary/40 transition-colors duration-300 h-full flex flex-col relative overflow-hidden"
                >
                  {/* Glowing background orb for hover */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Subtle top gradient on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner relative z-10 group-hover:bg-primary/15 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
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
