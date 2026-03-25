import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Calculator, Shield, FileText, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";

const servicesList = [
  "Payroll Processing",
  "PF / ESIC / PT Filings",
  "Labour Law Compliance",
  "Contractor Payroll",
  "Compliance Audits",
];

const details = [
  { icon: Calculator, title: "Accurate Payroll Processing", desc: "End-to-end monthly payroll with salary slips, reimbursements, and full-and-final settlement processing for all employee types." },
  { icon: FileText, title: "PF, ESIC, PT & LWF Filings", desc: "Timely statutory filings across all applicable regulations — Provident Fund, Employee State Insurance, Professional Tax, and Labour Welfare Fund." },
  { icon: Shield, title: "Labour Law Compliance", desc: "Multi-state compliance management covering Shops & Establishment, CLRA, POSH, and all applicable state labour laws." },
  { icon: FileText, title: "Compliance Audits & Advisory", desc: "Periodic compliance audits to identify gaps, reduce risk, and ensure your organization is always audit-ready." },
];

const PayrollCompliance = () => (
  <>
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <Calculator className="w-3.5 h-3.5" /> Payroll & Compliance
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Zero Compliance Risk.{" "}
            <span className="text-gradient-accent">Accurate Payroll.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Simplify payroll and statutory compliance with our managed HR services. We handle all filings, calculations, and audits so your team never has to worry about compliance again.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5">
              Get a Free Compliance Audit <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all">
              All Services <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services list */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Coverage</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Services Include</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {servicesList.map((s) => (
            <StaggerItem key={s}>
              <div className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border shadow-card">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-semibold text-sm text-foreground">{s}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Detail cards */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">In Detail</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

    {/* CTA */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">Stay 100% compliant, always.</h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Let TalentAccel manage your payroll and compliance so you can focus on building your business.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
              Book a Free Compliance Audit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default PayrollCompliance;
