import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Users, Globe, Shield, Zap, Code, Brain, Palette, BarChart3, Cpu, Briefcase, Rocket, TrendingUp, Building2, Settings2, Handshake, Headphones } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HeroImagePanel } from "@/components/HeroImagePanel";

const advantages = [
  { icon: Users, title: "Access to Exceptional Talent", desc: "Tap into one of the largest pools of highly skilled engineers and product specialists." },
  { icon: Zap, title: "Cost-Effective Scaling", desc: "Achieve significant cost advantages without compromising on quality or speed." },
  { icon: Globe, title: "Rapid Team Expansion", desc: "Build teams quickly to accelerate product development and drive innovation." },
  { icon: Shield, title: "Global Delivery Capability", desc: "Work seamlessly across global time zones for round-the-clock operations." },
];

const services = [
  { icon: Globe, title: "GCC Blueprint & Workforce Design", desc: "Define the operating model, location strategy, and scale plan." },
  { icon: Briefcase, title: "Talent Sourcing & Recruitment", desc: "Hire leadership and specialized talent through a structured recruitment engine." },
  { icon: Rocket, title: "Launch & Onboarding", desc: "Stand up the team with coordinated onboarding and a working rhythm from day one." },
  { icon: Brain, title: "HR Operations & Compliance", desc: "Run payroll, compliance, and core operations to keep the GCC audit-ready." },
  { icon: TrendingUp, title: "Governance & GCC Enablement", desc: "Bring reporting and operating discipline into the day-to-day." },
];

const roleCategories = [
  { category: "Technology & Engineering", roles: ["Software Engineers", "AI / ML Engineers", "Data Scientists", "DevOps Engineers", "Cloud Architects"], icon: Code },
  { category: "Product & Design", roles: ["Product Managers", "Product Analysts", "UX / UI Designers", "Design Ops"], icon: Palette },
  { category: "Business & Operations", roles: ["Business Analysts", "Customer Success", "Sales Operations", "Marketing Specialists"], icon: BarChart3 },
  { category: "Specialized Talent", roles: ["Telecom Engineers", "Embedded Systems", "Electronics Engineers", "Hardware QA"], icon: Cpu },
  { category: "Support Functions", roles: ["HR & People Operations", "Finance & Accounting", "Legal & Compliance Support", "IT Helpdesk", "Admin & Executive Assistants"], icon: Headphones },
];

const botStages = [
  {
    stage: "01",
    label: "Build",
    title: "Start Strong, Scale Faster",
    desc: "We design your GCC operating model, define the hiring plan, and set up compliant HR and payroll systems so your India hub launches with clarity and control.",
    icon: Building2,
  },
  {
    stage: "02",
    label: "Operate",
    title: "We Run the Engine, You Drive Growth",
    desc: "We manage daily execution across hiring, payroll, HR operations, and governance so your leadership can focus on product, customers, and business growth.",
    icon: Settings2,
  },
  {
    stage: "03",
    label: "Transfer",
    title: "Seamless Handover, Full Ownership",
    desc: "When you are ready, we transfer every process, playbook, and key relationship to your internal team through a structured transition with no disruption or loss of momentum.",
    icon: Handshake,
  },
];

const scalingTimeline = [
  { time: "Foundational Phase", count: "5-10", label: "Engineers Hub" },
  { time: "Growth Phase (6 Mo)", count: "15-30+", label: "Cross-Functional Team" },
  { time: "Scale Phase (12 Mo)", count: "50+", label: "Independent R&D Center" },
];

const SectionHeader = ({
  subheading,
  heading,
  description,
}: {
  subheading: string;
  heading: string;
  description: string;
}) => (
  <AnimatedSection className="text-center mb-10 relative z-10">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
      {subheading}
    </div>
    <h2 className="section-title mb-4">{heading}</h2>
    <p className="section-subtitle mx-auto">{description}</p>
  </AnimatedSection>
);

const OffshoreTeams = () => {
  return (
    <>
      <SEO 
        title="Dedicated Offshore Teams in India | TalentAccel" 
        description="Build and scale dedicated offshore teams in India. From specialized tech talent sourcing to full HR operations, TalentAccel provides premium end-to-end solutions."
        keywords="offshore teams, India tech talent, build operate support, dedicated recruiter, global expansion"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px] pointer-events-none" aria-hidden="true" />
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
                Global Teams (GCC)
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-title mb-6"
              >
                Build High-Performing{" "}
                <span className="text-gradient-accent">Teams in India</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="page-subtitle mb-10"
              >
                Build your India team on a strong operating foundation, with the talent, compliance, and day-to-day execution support needed to scale with confidence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  Start Your Expansion <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#engagement" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200">
                  How We Work <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Global tech team collaborating"
              className="w-full max-w-[34rem] lg:justify-self-end"
              imageClassName="h-[280px] sm:h-[360px] lg:h-[500px]"
              glowClassName="top-14 bottom-4 from-primary/16 via-primary/8 to-secondary/22"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative pb-16">
        {/* 1. Why India — validate the decision first */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="The India Advantage"
              heading="Why Companies Build Teams in India"
              description="India offers the talent density, execution depth, and operating leverage companies need to build serious teams without compromising on quality."
            />
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advantages.map((a) => {
                const Icon = a.icon;
                return (
                  <StaggerItem key={a.title}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-8 rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-colors duration-500" />
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 relative z-10">
                        <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{a.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed relative z-10">{a.desc}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* 2. BOT / GCC Journey — how we execute */}
        <section id="engagement" className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="Build-Operate-Transfer (BOT) / GCC"
              heading="How the GCC Journey Takes Shape"
              description="From first hire to full ownership — a structured path that moves fast without burning bridges. Build now, own it forever."
            />
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="mb-8">
                <div className="rounded-3xl bg-card border border-border shadow-sm px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">India Hub, Built Around Your GCC Model</p>
                      <p className="text-sm text-muted-foreground mt-0.5">From setup to handover — designed for long-term ownership.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                      Global Team
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm shadow-primary/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                      India GCC
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              <div className="relative">
                <div className="hidden lg:block absolute top-14 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
                <StaggerContainer className="grid lg:grid-cols-3 gap-8">
                  {botStages.map((stage) => {
                    const Icon = stage.icon;
                    return (
                      <StaggerItem key={stage.title}>
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="relative h-full rounded-3xl bg-card border border-border shadow-lg overflow-hidden p-8 flex flex-col"
                        >
                          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-primary" />
                              </div>
                              <div className="text-right">
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">{stage.label}</div>
                                <div className="text-3xl font-black text-foreground/10">{stage.stage}</div>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{stage.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{stage.desc}</p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Roles — show the breadth of what's possible */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="Talent Across Every Function"
              heading="Roles We Help You Build"
              description="Whatever your GCC needs to run at full capacity — we source it. Senior leaders to specialists, across every function that matters."
            />
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {roleCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <StaggerItem key={cat.category}>
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-card to-background border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-extrabold text-foreground mb-4">{cat.category}</h3>
                      <ul className="space-y-3 flex-1">
                        {cat.roles.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                            <span className="mt-0.5 rounded-full bg-secondary/20 p-0.5 flex-shrink-0">
                              <Check className="w-3 h-3 text-secondary" />
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        Get in Touch <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
            <AnimatedSection className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't see the exact role?{" "}
                <a href="/#contact" className="text-primary font-medium hover:underline">Tell us what you need</a> — we source across a far wider range than what's listed here.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 4. What We Provide — our specific capabilities */}
        <section className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="End-To-End GCC Ownership"
              heading="A GCC Partner Across the Full Operating Model"
              description="Work with one accountable partner across strategy, hiring, launch, HR operations, compliance, and operating discipline from day one onward."
            />
            <AnimatedSection className="mb-8">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                {["Strategy", "Hiring", "Launch", "HR", "Governance"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <StaggerContainer className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <StaggerItem key={s.title}>
                    <div className="p-6 rounded-3xl bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-secondary/70 to-primary/70 opacity-80" />
                      <div className="mb-4 inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug text-balance min-h-[4.25rem] mb-3 flex items-center justify-center">
                        {s.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-6 flex-grow max-w-[26ch] mx-auto">
                        {s.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* 5. ROI — close with the economic case */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="Economic Efficiency & Scale"
              heading="The Velocity of Offshore Expansion"
              description="Expand technical capacity and operating range while directing more of your budget into product, growth, and strategic priorities."
            />

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              {/* Timeline */}
              <AnimatedSection className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Typical Growth Trajectory</h3>
                <div className="relative pl-8 space-y-10 border-l-2 border-border">
                  {scalingTimeline.map((s, i) => (
                    <motion.div
                      key={s.time}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="relative"
                    >
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                      <div className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">{s.time}</div>
                      <div className="text-3xl font-black text-foreground mb-1">{s.count}</div>
                      <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Cost Box */}
              <AnimatedSection>
                <div className="rounded-3xl bg-gradient-to-br from-muted/80 to-background border border-border p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <h3 className="text-xl font-bold text-foreground mb-8">Estimated Economic Advantage</h3>

                  <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-background border border-border flex justify-between items-center relative z-10 hover:border-red-500/30 transition-colors">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-1">US-Based Team</p>
                        <p className="text-sm font-medium text-foreground">Avg. Base Salary</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-extrabold text-foreground tracking-tight">$150K<span className="text-xl text-muted-foreground">+</span></p>
                      </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-l-primary flex justify-between items-center relative z-10 hover:border-l-secondary transition-all">
                      <div>
                        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">India Hub</p>
                        <p className="text-sm font-medium text-foreground">Avg. Base Salary</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-extrabold text-primary tracking-tight">$50K<span className="text-xl opacity-70"> avg</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border relative z-10 flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full shrink-0">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Reinvest over <strong className="text-foreground">60%</strong> of your talent capital directly back into your core product, marketing, and market expansion efforts.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-background relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[3rem] bg-gradient-hero p-10 lg:p-20 text-center overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <h2 className="cta-title text-primary-foreground mb-6 relative z-10">Ready to Build Your India Hub?</h2>
              <p className="cta-subtitle text-primary-foreground/85 font-medium mb-10 mx-auto relative z-10">
                Access high-calibre talent while we handle the operating model, HR execution, and compliance scaffolding that keeps expansion moving.
              </p>
              <div className="relative z-10 flex justify-center gap-4">
                <a href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-secondary text-secondary-foreground font-bold text-lg hover:shadow-[0_0_30px_rgba(var(--secondary),0.5)] transition-all hover:scale-105 duration-300">
                  Book a Strategy Call <ArrowRight className="w-5 h-5" />
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

export default OffshoreTeams;
