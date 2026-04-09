import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, UserCheck, BarChart3, Search, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { SEO } from "@/components/SEO";

const features = [
  { icon: UserCheck, title: "Dedicated Recruiter", desc: "A full-time TalentAccel recruiter focused exclusively on your open roles — aligned to your culture, priorities, and pace." },
  { icon: Search, title: "Dedicated Sourcing Specialist", desc: "A specialist who proactively builds your talent pipeline through direct outreach, referrals, and deep network access." },
  { icon: BarChart3, title: "Hiring Analytics & Reporting", desc: "Weekly reporting on pipeline health, conversion rates, time-to-offer, and candidate feedback — full visibility at all times." },
];

const benefits = [
  "Faster time-to-hire than contingency models",
  "Consistent quality through dedicated focus",
  "Fully aligned to your employer brand and culture",
  "Scalable — add more dedicated resources as you grow",
  "Lower cost-per-hire at volume compared to agencies",
];

const DedicatedTeams = () => (
  <>
    <SEO
      title="Dedicated Offshore Tech Teams in India | TalentAccel"
      description="Build a dedicated offshore tech or ops team in India in 30 days. We handle hiring, onboarding, payroll & HR — you focus on your product."
      keywords="dedicated offshore team India, offshore development team, India tech team, offshore hiring startup"
    />
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <UserCheck className="w-3.5 h-3.5" /> Dedicated Hiring Teams
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="page-title mb-6"
          >
            Your Extended{" "}
            <span className="text-gradient-accent">Hiring Engine</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="page-subtitle mb-10"
          >
            Add an embedded hiring team that works like an extension of your business, giving your open roles the focus, consistency, and pace they need to close well.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5">
              Build My Hiring Team <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all">
              All Services <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Service Visual"
              className="lg:justify-self-end"
              imageClassName="h-[260px] sm:h-[330px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

    {/* What's included */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">The Model</p>
          <h2 className="section-title mb-4">What You Get</h2>
          <p className="section-subtitle mx-auto text-center">A dedicated hiring pod that plugs into your process, reflects your brand, and operates with the ownership of an in-house function.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="p-7 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Why Dedicated</p>
            <h2 className="section-title mb-6">The Dedicated Advantage</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unlike contingency hiring where a recruiter juggles dozens of clients, our Dedicated Team model gives you full focus, faster results, and complete alignment with your culture and goals.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-6">Typical Engagement</h3>
              <div className="space-y-5">
                {[
                  { label: "Team Size", value: "1–3 dedicated resources" },
                  { label: "Ramp Time", value: "1–2 weeks onboarding" },
                  { label: "Reporting", value: "Weekly hiring dashboard" },
                  { label: "Commitment", value: "Monthly, renewable" },
                  { label: "Billing", value: "Monthly retainer" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-primary-foreground/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-primary-foreground/70">{item.label}</span>
                    <span className="text-sm font-semibold text-primary-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="cta-title text-primary-foreground mb-5">Ready to Build Your Hiring Engine?</h2>
            <p className="cta-subtitle text-primary-foreground/80 mb-10 mx-auto">
              Tell us what you need to hire, and we'll shape a dedicated team that can start building pipeline and momentum within days.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default DedicatedTeams;
