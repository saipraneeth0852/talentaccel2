import { motion } from "framer-motion";
import { ArrowRight, FileText, Shield, Calculator, BarChart3, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const servicesList = [
  "PF, ESI, PT, LWF Filings",
  "Taxation & Payroll Management",
  "Salary Bands",
  "Multi-state Compliance",
  "POSH, CLRA, Shops & Establishment",
  "Compliance Audits & Advisory",
];

const details = [
  { icon: Calculator, title: "Payroll Management", desc: "End-to-end monthly payroll processing with salary slips, reimbursements, and full-and-final settlement for all employee types." },
  { icon: FileText, title: "Statutory Filings", desc: "Timely PF, ESI, PT, LWF filings across all applicable regulations — never miss a deadline or face penalties." },
  { icon: Shield, title: "Multi-state Compliance", desc: "POSH, CLRA, Shops & Establishment, and all applicable state labour laws — managed across every state where you operate." },
  { icon: BarChart3, title: "Compliance Audits", desc: "Periodic audits to identify gaps, reduce risk, and keep your organisation audit-ready at all times." },
];

const HrOperations = () => (
  <>
    <SEO
      title="HR Operations & Managed Services"
      description="Outsourced HR operations for growing startups — employee onboarding, HRMS setup, compliance reporting & policy management. All fully managed."
      keywords="HR operations outsourcing India, managed HR services startup, HRMS setup India, employee onboarding"
    />
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <FileText className="w-3.5 h-3.5" /> HR Operations
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="page-title mb-6"
          >
            Reliable HR Operations and{" "}
            <span className="text-gradient-accent">Accurate Payroll</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="page-subtitle mb-10"
          >
            Keep payroll, filings, and statutory obligations running smoothly with operational support that reduces risk and frees your team to focus elsewhere.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Service Visual"
              className="lg:justify-self-end"
              imageClassName="h-[260px] sm:h-[330px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10">
          <h2 className="section-title mb-2">What's Included</h2>
        </AnimatedSection>
        <div className="flex flex-wrap gap-3">
          {servicesList.map((s) => (
            <span key={s} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground font-medium shadow-card">
              <Check className="w-3.5 h-3.5 text-secondary" /> {s}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {details.map((d) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={d.title}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="rounded-3xl bg-gradient-hero p-12 lg:p-16 text-center">
            <h2 className="cta-title text-primary-foreground mb-4">Ready to Simplify Compliance?</h2>
            <p className="cta-subtitle text-primary-foreground/80 mb-8 mx-auto">Let our HR Operations team run the payroll and compliance engine behind the scenes so nothing important slips through the cracks.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default HrOperations;
