import { motion } from "framer-motion";
import { ArrowRight, Globe, Megaphone, Handshake, Plane, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const servicesList = [
  "Employer Branding & Talent Marketing",
  "M&A Employee Rebadging",
  "Visa & Immigration Support",
  "CSR Advisory & Execution",
  "HR Event & Engagement Support",
];

const details = [
  { icon: Megaphone, title: "Employer Branding", desc: "Build a talent brand that attracts the right candidates — from LinkedIn presence to careers page messaging, EVP design, and content strategy." },
  { icon: Handshake, title: "M&A Employee Rebadging", desc: "Manage the people complexity of mergers and acquisitions — role mapping, offer transitions, and seamless rebadging with full compliance." },
  { icon: Plane, title: "Visa & Immigration Support", desc: "End-to-end visa and immigration support for employees relocating internationally — work permits, dependent visas, and liaison with authorities." },
  { icon: Globe, title: "CSR & HR Events", desc: "Design and execute CSR programmes, employee engagement events, and company-wide initiatives that reinforce culture and community." },
];

const ExtendedWorkforce = () => (
  <>
    <SEO
      title="Extended Workforce Management"
      description="Manage contractors, freelancers & gig workers compliantly in India. We handle contracts, payments, compliance & vendor workforce at scale."
      keywords="extended workforce India, contractor management India, gig worker compliance, freelancer payroll India"
    />
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <Globe className="w-3.5 h-3.5" /> Extended Workforce Services
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="page-title mb-6"
          >
            Support{" "}
            <span className="text-gradient-accent">Beyond Traditional HR</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="page-subtitle mb-10"
          >
            Extend your people capability with specialist support across branding, transitions, immigration, culture initiatives, and the moments standard HR teams rarely have capacity to own well.
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
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
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
          <h2 className="cta-title text-primary-foreground mb-4">Need Specialist HR Support?</h2>
          <p className="cta-subtitle text-primary-foreground/80 mb-8 mx-auto">Whether you're navigating an M&A transition, a mobility challenge, or a talent-brand refresh, we can help you move with more confidence.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default ExtendedWorkforce;
