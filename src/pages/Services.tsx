import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Settings,
  GraduationCap,
  Heart,
  Globe,
  ArrowRight,
  Check,
  Target,
  Network,
  Zap,
  Shield,
  Calculator,
  BarChart3,
  Briefcase,
  Layers,
  BookOpen,
  Gift,
  Plane,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroImagePanel } from "@/components/HeroImagePanel";

// Service definitions
const services = [
  {
    id: "talent-acquisition",
    icon: Users,
    title: "Talent Acquisition",
    tagline: "End-to-end hiring across all engagement types",
    description:
      "Build a sharper, faster hiring engine with a partner that can source, assess, and close the talent your business needs at every stage of growth. From permanent roles to contract staffing, executive search, and volume hiring — we've got your recruitment covered.",
    includes: [
      "Permanent Hiring",
      "Contract & Contract-to-Hire",
      "Staff Augmentation",
      "RPO & Volume Hiring",
      "Executive Search",
    ],
    benefits: [
      {
        icon: Network,
        title: "Deep Talent Networks",
        desc: "Access to pre-vetted candidates across tech, product, and business functions built over years of domain hiring.",
      },
      {
        icon: Target,
        title: "Structured Screening",
        desc: "Multi-stage evaluation ensuring only the best-fit candidates reach your interview panel.",
      },
      {
        icon: Zap,
        title: "40% Faster Hiring",
        desc: "Streamlined processes that cut hiring timelines without compromising on talent quality.",
      },
      {
        icon: Users,
        title: "Dedicated Hiring Teams",
        desc: "Your own embedded recruiter and sourcing specialist focused entirely on your open roles.",
      },
    ],
    cta: "Book a Hiring Consultation",
  },
  {
    id: "hr-operations",
    icon: FileText,
    title: "HR Operations",
    tagline: "Complete payroll management and statutory compliance",
    description:
      "Keep payroll, filings, and statutory obligations running smoothly with operational support that reduces risk and frees your team to focus elsewhere. Our comprehensive HR operations service covers everything from employee onboarding to HRMS setup and multi-state compliance management.",
    includes: [
      "PF, ESI, PT, LWF Filings",
      "Payroll Processing",
      "HRMS Setup & Implementation",
      "Multi-state Compliance",
      "POSH & CLRA Management",
      "Compliance Audits",
    ],
    benefits: [
      {
        icon: Calculator,
        title: "Accurate Payroll",
        desc: "End-to-end monthly payroll with salary slips, reimbursements, and full-and-final settlement processing.",
      },
      {
        icon: FileText,
        title: "Statutory Filings",
        desc: "Timely PF, ESI, PT, LWF filings across all applicable regulations — never miss a deadline.",
      },
      {
        icon: Shield,
        title: "Multi-state Compliance",
        desc: "POSH, CLRA, Shops & Establishment, and all state labour laws managed across every jurisdiction.",
      },
      {
        icon: BarChart3,
        title: "Compliance Audits",
        desc: "Periodic audits to identify gaps, reduce risk, and keep your organisation audit-ready.",
      },
    ],
    cta: "Get HR Operations Assessment",
  },
  {
    id: "hr-advisory",
    icon: Settings,
    title: "HR Advisory",
    tagline: "Strategic HR foundations to structure and scale",
    description:
      "Establish sustainable HR foundations that scale with your business. From organizational design to compensation strategy and HRMS implementation, we help you build the HR infrastructure needed for confident, sustainable growth.",
    includes: [
      "HR Policies & Handbook",
      "Organizational Structure Design",
      "Compensation Benchmarking",
      "Performance Management",
      "HRMS / ATS Implementation",
      "OKRs & Goal Frameworks",
    ],
    benefits: [
      {
        icon: Layers,
        title: "Strategic Org Design",
        desc: "Build organizational structures that scale, clarify decision-making, and align roles with business objectives.",
      },
      {
        icon: Target,
        title: "Compensation Clarity",
        desc: "Benchmark salaries, design equitable compensation bands, and create transparent career progression.",
      },
      {
        icon: Settings,
        title: "HRMS Implementation",
        desc: "End-to-end setup of HR systems that automate workflows, improve visibility, and simplify reporting.",
      },
      {
        icon: BarChart3,
        title: "Performance Framework",
        desc: "Implement goal-setting, performance review, and feedback systems that drive accountability.",
      },
    ],
    cta: "Schedule HR Strategy Session",
  },
  {
    id: "learning-development",
    icon: GraduationCap,
    title: "Learning & Development",
    tagline: "Capability-building programmes that develop leaders",
    description:
      "Develop your team's capabilities with targeted training programs designed to build skills and improve retention. From leadership development to technical certifications and behavioral training, we design and deliver programs that create measurable impact.",
    includes: [
      "Leadership Training",
      "Technical & Domain Training",
      "Manager Readiness Programs",
      "Professional Certifications",
      "Custom Curriculum",
      "Coaching & Mentoring",
    ],
    benefits: [
      {
        icon: BookOpen,
        title: "Leadership Development",
        desc: "Develop your next layer of managers with structured programs that improve team capabilities and reduce turnover.",
      },
      {
        icon: Zap,
        title: "Technical Upskilling",
        desc: "Keep your teams current with industry certifications and hands-on technical training delivered by experts.",
      },
      {
        icon: Target,
        title: "Custom Programs",
        desc: "Learning paths tailored to your organization's specific skill gaps and business priorities.",
      },
      {
        icon: Users,
        title: "Measurable Impact",
        desc: "Post-training assessments and follow-up coaching ensure skills transfer and sustained improvement.",
      },
    ],
    cta: "Design a Training Program",
  },
  {
    id: "employee-experience",
    icon: Heart,
    title: "Employee Experience",
    tagline: "Everything that makes your employees feel valued",
    description:
      "Enhance workplace culture and employee satisfaction by streamlining key lifecycle moments. We help you design and execute seamless onboarding, recognition programs, and thoughtful exit management that build engagement and retention.",
    includes: [
      "Background Verification",
      "Onboarding Programs",
      "Welcome Kits",
      "Employee Recognition",
      "Corporate Gifting",
      "Professional Exit Management",
    ],
    benefits: [
      {
        icon: Users,
        title: "Strong Onboarding",
        desc: "Comprehensive first-30-days experience that accelerates productivity, builds culture fit, and improves retention.",
      },
      {
        icon: Gift,
        title: "Recognition & Engagement",
        desc: "Structured programs that celebrate achievements, build community, and strengthen employee connection.",
      },
      {
        icon: Shield,
        title: "Professional Exits",
        desc: "Thoughtful offboarding with final settlement and knowledge transfer that maintains relationships.",
      },
      {
        icon: Heart,
        title: "Culture Building",
        desc: "Lifecycle programs that create memorable moments and reinforce your company culture.",
      },
    ],
    cta: "Build Your Employee Experience",
  },
  {
    id: "extended-workforce",
    icon: Globe,
    title: "Extended Workforce",
    tagline: "Specialist services",
    description:
      "Navigate global expansion, M&A integration, and extended team challenges with expert guidance. We provide employer branding, visa support, M&A employee integration, and offshore team establishment — making international operations seamless.",
    includes: [
      "Employer Branding",
      "M&A Employee Integration",
      "Visa & Immigration Support",
      "Offshore Operations Setup",
      "CSR Advisory",
      "HR Events & Engagement",
    ],
    benefits: [
      {
        icon: Globe,
        title: "Global Expansion",
        desc: "Expert guidance on setting up teams in new countries and navigating local regulations.",
      },
      {
        icon: Briefcase,
        title: "M&A Integration",
        desc: "Smooth employee rebadging, culture integration, and retention management during transitions.",
      },
      {
        icon: Plane,
        title: "Visa & Immigration",
        desc: "End-to-end support for work visas, relocation logistics, and international compliance.",
      },
      {
        icon: Users,
        title: "Employer Branding",
        desc: "Build your reputation as an employer of choice in new markets to attract top talent globally.",
      },
    ],
    cta: "Explore Global Expansion",
  },
];

// Service Section Component - displayed as full sections
const ServiceSectionComponent = ({ service, index }: any) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={service.id} className={index > 0 ? "py-16 lg:py-24 border-t border-border" : "py-16 lg:py-24"}>
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
        >
          {/* Content */}
          <div className={isEven ? "" : "lg:col-start-2"}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
              <Icon className="w-4 h-4" />
              {service.title}
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{service.title}</h2>
            <p className="text-lg text-muted-foreground mb-3 font-medium">{service.tagline}</p>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.includes.map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {service.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image/Visual Section */}
          <div className={`relative ${isEven ? "" : "lg:col-start-1"}`}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-8 lg:p-12 h-full flex flex-col justify-center">
              {/* Benefits Grid */}
              <div className="space-y-4">
                {service.benefits.map((benefit: any) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BenefitIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Services Page Component
export const ServicePage = () => {
  return (
    <>
      <SEO
        title="Professional HR Services Platform | TalentAccel"
        description="Complete HR solutions for growing startups: talent acquisition, HR operations, payroll compliance, learning & development, and extended workforce support. Build exceptional teams with TalentAccel."
        keywords="HR services India, talent acquisition, payroll compliance, HR operations, extended workforce, learning development"
      />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-12 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px]" />

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
                Our Services
              </div>

              <h1 className="page-title mb-6">
                Complete People Solutions from Hiring to{" "}
                <span className="text-gradient-accent drop-shadow-sm">Sustainable Growth</span>
              </h1>

              <p className="page-subtitle mb-8">
                We integrate talent acquisition, HR operations, advisory, learning, and employee experience into one cohesive people platform. Choose the services that fit your growth stage.
              </p>

              <a
                href="#services-list"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <HeroImagePanel
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="HR Services and People Operations Platform"
              className="w-full max-w-[34rem] lg:justify-self-end"
              imageClassName="h-[280px] sm:h-[360px] lg:h-[500px]"
              glowClassName="top-14 bottom-4 from-primary/16 via-primary/8 to-secondary/22"
            />
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div id="services-list">
        {services.map((service, index) => (
          <ServiceSectionComponent key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your People Operations?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Let's find the right starting point for your company. Book a free consultation with our team to explore which services make sense for your growth stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity duration-200 hover:-translate-y-0.5"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicePage;
