import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Users, Globe, Shield, Zap, Code, Brain, Palette, BarChart3, Cpu, Briefcase, Rocket, TrendingUp, Building2, Settings2, Handshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const advantages = [
  { icon: Users, title: "Access to Exceptional Talent", desc: "India offers one of the largest pools of highly skilled professionals across engineering, AI, data science, and product development." },
  { icon: Zap, title: "Cost-Effective Scaling", desc: "Offshore teams provide significant cost advantages without compromising on talent quality or operational speed." },
  { icon: Globe, title: "Rapid Team Expansion", desc: "Companies can quickly build teams to accelerate product development, iterate faster, and drive innovation." },
  { icon: Shield, title: "Global Delivery Capability", desc: "India teams work seamlessly across global time zones, ensuring round-the-clock support and operations." },
];

const services = [
  { icon: Globe, title: "GCC Blueprint & Workforce Design", desc: "We define the operating model, org shape, location strategy, and scale plan your GCC needs to launch with clarity." },
  { icon: Briefcase, title: "Talent Sourcing & Recruitment", desc: "We hire leadership, specialist, and functional talent through a structured recruitment engine built for long-term team quality." },
  { icon: Rocket, title: "Launch & Onboarding", desc: "We stand up the team with coordinated onboarding, role alignment, stakeholder integration, and a working rhythm from day one." },
  { icon: Brain, title: "HR Operations & Compliance", desc: "We run payroll, statutory compliance, employee support, and core people operations so the GCC stays steady and audit-ready." },
  { icon: TrendingUp, title: "Governance & GCC Enablement", desc: "We bring reporting, coordination, and operating discipline into the day-to-day so your GCC scales with control and continuity." },
];

const roleCategories = [
  { category: "Technology & Engineering", roles: ["Software Engineers", "AI / ML Engineers", "Data Scientists", "DevOps Engineers", "Cloud Architects"], icon: Code },
  { category: "Product & Design", roles: ["Product Managers", "Product Analysts", "UX / UI Designers", "Design Ops"], icon: Palette },
  { category: "Business & Operations", roles: ["Business Analysts", "Customer Success", "Sales Operations", "Marketing Specialists"], icon: BarChart3 },
  { category: "Specialized Talent", roles: ["Telecom Engineers", "Embedded Systems", "Electronics Engineers", "Hardware QA"], icon: Cpu },
];

const botStages = [
  {
    stage: "01",
    label: "Build",
    title: "Set Up Your GCC Foundation",
    desc: "We establish the right operating model, hiring plan, compliance structure, and team setup so your India hub starts on strong ground.",
    icon: Building2,
  },
  {
    stage: "02",
    label: "Operate",
    title: "Run with Full Operational Ownership",
    desc: "We manage day-to-day execution across hiring, HR, payroll, compliance, and operating rhythm while the center gains scale and stability.",
    icon: Settings2,
  },
  {
    stage: "03",
    label: "Transfer",
    title: "Hand Over with Confidence",
    desc: "Once the GCC is mature, we transition knowledge, processes, and control to your internal team with continuity built into every step.",
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
    <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight">{heading}</h2>
    <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 lg:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-semibold text-secondary mb-8 shadow-sm backdrop-blur-sm"
              >
                <Globe className="w-4 h-4" />
                Global Delivery Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-8"
              >
                Build Unstoppable <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">
                  Teams in India
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
              >
                Accelerate your growth by seamlessly embedding elite engineering and operational precision into your organization structure. We provide the talent, the space, and the legal compliance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
                  Start Your Expansion <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#engagement" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground font-bold text-sm sm:text-base hover:bg-muted/50 hover:border-primary/50 transition-all duration-300">
                  How We Work <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.9, delay: 0.2 }} 
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass-panel">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern global tech team collaborating" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Metric Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex items-center justify-between shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Top 1% Talent</p>
                      <p className="text-xs text-muted-foreground">Pre-vetted Engineers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-xs text-primary font-medium">Successful Hires</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative pb-16">
        {/* BOT / GCC Journey */}
        <section id="engagement" className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subheading="Build-Operate-Transfer (BOT) / GCC"
              heading="How the GCC Journey Takes Shape"
              description="We set up your offshore center, run it with operational ownership, and transition it to your team when the foundation is ready to stand independently."
            />
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="mb-8">
                <div className="rounded-3xl bg-card border border-border shadow-sm px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">India Hub, Built Around Your GCC Model</p>
                      <p className="text-sm text-muted-foreground">A structured path from setup to handover, designed for long-term ownership.</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Global team
                    <ArrowRight className="w-4 h-4" />
                    India GCC
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

        {/* What We Provide */}
        <section className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="End-To-End GCC Ownership" 
              heading="A GCC Partner Across the Full Operating Model" 
              description="TalentAccel helps companies design, launch, and run Global Capability Centers in India with one accountable partner across strategy, team buildout, HR, compliance, and operating continuity."
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

        {/* Roles */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="Specialized Technical Talent" 
              heading="Roles We Help You Build" 
              description="Access pre-vetted, top-tier professionals across engineering, sophisticated product management, and core business operations."
            />
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {roleCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <StaggerItem key={cat.category}>
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-card to-background border border-border shadow-sm hover:border-primary/40 transition-colors h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-extrabold text-foreground mb-4">{cat.category}</h3>
                      <ul className="space-y-3">
                        {cat.roles.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                            <span className="mt-0.5 rounded-full bg-secondary/20 p-0.5">
                              <Check className="w-3 h-3 text-secondary" />
                            </span>
                            {r}
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

        {/* The ROI of Offshore (Combo timeline & cost) */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="Economic Efficiency & Scale" 
              heading="The Velocity of Offshore Expansion" 
              description="Rapidly expand your technical capabilities while maximizing your operational budget and maintaining exceptional standards."
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

        {/* Why India */}
        <section className="py-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="The India Advantage" 
              heading="Why Companies Build Teams in India" 
              description="India has evolved into the defining global hub for technology innovation, complex product development, and resilient business operations."
            />
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advantages.map((a, i) => {
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
      </div>

      {/* CTA */}
      <section className="py-16 bg-background relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-[3rem] bg-gradient-hero p-10 lg:p-20 text-center overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6 relative z-10 tracking-tight">Ready to Build Your Engineering Hub?</h2>
              <p className="text-primary-foreground/80 text-lg lg:text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                TalentAccel connects you with top global talent while handling all the complex HR operations and legal scaffolding.
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
