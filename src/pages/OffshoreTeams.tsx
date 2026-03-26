import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Users, Globe, Shield, Zap, Code, Brain, Palette, BarChart3, Cpu } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import offshoreHero from "@/assets/offshore-hero.png";

const advantages = [
  { icon: Users, title: "Access to Exceptional Talent", desc: "India offers one of the largest pools of highly skilled professionals across engineering, AI, data science, and product development." },
  { icon: Zap, title: "Cost-Effective Scaling", desc: "Offshore teams provide significant cost advantages without compromising on talent quality." },
  { icon: Globe, title: "Rapid Team Expansion", desc: "Companies can quickly build teams to accelerate product development and innovation." },
  { icon: Shield, title: "Global Delivery Capability", desc: "India teams work seamlessly across time zones, supporting global operations." },
];

const services = [
  { title: "Talent Sourcing & Recruitment", desc: "We identify, assess, and hire high-quality professionals aligned with your organizational goals." },
  { title: "Team Setup & Onboarding", desc: "We manage the onboarding process, ensuring seamless integration with your existing teams." },
  { title: "HR Operations & Payroll", desc: "TalentAccel handles payroll, statutory compliance, benefits administration, and HR support." },
  { title: "Operational Support", desc: "We ensure smooth day-to-day HR operations so your team can focus on delivering results." },
];

const roleCategories = [
  { category: "Technology & Engineering", roles: ["Software Engineers", "AI / ML Engineers", "Data Scientists", "DevOps Engineers", "Cloud Engineers"], icon: Code },
  { category: "Product & Design", roles: ["Product Managers", "Product Analysts", "UX / UI Designers"], icon: Palette },
  { category: "Business & Operations", roles: ["Business Analysts", "Customer Success Managers", "Sales & Marketing Specialists"], icon: BarChart3 },
  { category: "Specialized Talent", roles: ["Telecom Engineers", "Embedded Systems Engineers", "Electronics Engineers"], icon: Cpu },
];

const engagementModels = [
  { title: "Dedicated Recruiter Model", desc: "A dedicated TalentAccel recruiter focuses exclusively on building your offshore team." },
  { title: "Managed Offshore Team", desc: "TalentAccel manages hiring, HR operations, payroll, and compliance for your entire team." },
  { title: "Build-Operate-Support", desc: "We build your team, manage HR operations, and support your scaling journey end-to-end." },
];

const scalingTimeline = [
  { time: "Start", count: "5", label: "Engineers" },
  { time: "3 Months", count: "15", label: "Engineers" },
  { time: "6 Months", count: "30", label: "Engineers" },
];

const OffshoreTeams = () => (
  <>
    <SEO 
      title="Dedicated Offshore Teams in India" 
      description="Build and scale dedicated offshore teams in India. From talent sourcing to HR operations and compliance, TalentAccel provides an end-to-end solution."
      keywords="offshore teams, India tech talent, build operate support, dedicated recruiter"
    />
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
            >
              <Globe className="w-3.5 h-3.5" />
              Dedicated Offshore Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Build High-Performance{" "}
              <span className="text-gradient-accent">Teams in India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              TalentAccel helps global companies build and scale dedicated offshore teams in India. From talent sourcing to HR operations and compliance, we provide an end-to-end solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#engagement" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all">
                Explore Engagement Models <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
            <img src={offshoreHero} alt="Global team building" className="w-full max-w-lg mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why India */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">The India Advantage</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Companies Build Teams in India</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">India has become a global hub for technology, product development, and business operations.</p>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem key={a.title}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* What We Provide */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Model</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What TalentAccel Provides</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                <span className="text-3xl font-extrabold text-primary/20 mb-3 block">0{i + 1}</span>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Roles */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Talent</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Roles We Help Build</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roleCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem key={cat.category}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-sm">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* Engagement Models */}
    <section id="engagement" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Flexible Models</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Engagement Models</h2>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {engagementModels.map((m) => (
            <StaggerItem key={m.title}>
              <motion.div whileHover={{ y: -4 }} className="p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Scaling Timeline */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Scale</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Team Scaling Timeline</h2>
        </AnimatedSection>
        <AnimatedSection className="max-w-2xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            {scalingTimeline.map((s, i) => (
              <div key={s.time} className="flex-1 text-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${40 + i * 60}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="w-full rounded-t-xl bg-gradient-accent mx-auto mb-4 max-w-[80px]"
                />
                <div className="text-3xl font-extrabold text-foreground">{s.count}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="text-xs font-semibold text-primary mt-1">{s.time}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Cost Comparison */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Value</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Cost Advantage Comparison</h2>
        </AnimatedSection>
        <AnimatedSection className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-muted/50 border border-border text-center">
              <p className="text-sm font-medium text-muted-foreground mb-2">US-Based Team</p>
              <p className="text-3xl font-extrabold text-foreground">$150K+</p>
              <p className="text-xs text-muted-foreground mt-1">Avg. annual cost per engineer</p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/5 border-2 border-secondary text-center">
              <p className="text-sm font-medium text-secondary mb-2">India-Based Team</p>
              <p className="text-3xl font-extrabold text-foreground">$40–60K</p>
              <p className="text-xs text-muted-foreground mt-1">Avg. annual cost per engineer</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Save up to <span className="font-bold text-secondary">60%</span> on talent costs while accessing world-class professionals.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Case Study */}
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="p-10 rounded-3xl bg-card border border-border shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">Case Study</span>
            <h3 className="text-2xl font-bold text-foreground mb-3">US SaaS Company Expansion</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-extrabold text-foreground">20</p>
                <p className="text-xs text-muted-foreground">Engineers Hired</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-extrabold text-foreground">10</p>
                <p className="text-xs text-muted-foreground">Weeks</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="text-2xl font-extrabold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">HR & Compliance</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">Challenge:</strong> Build a 20-member engineering team in India.</p>
            <p className="text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">Solution:</strong> TalentAccel handled talent sourcing, recruitment, HR setup, and payroll management.</p>
            <p className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Outcome:</strong> 20 engineers hired within 10 weeks with full HR and compliance support.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">Start Building Your Offshore Team</h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              TalentAccel helps companies access top talent while simplifying HR operations and compliance.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
              Book a Consultation Today <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default OffshoreTeams;
