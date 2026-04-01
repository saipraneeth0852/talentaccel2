import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Users, Globe, Shield, Zap, Code, Brain, Palette, BarChart3, Cpu, Briefcase, Rocket, TrendingUp } from "lucide-react";
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
  { icon: Briefcase, title: "Talent Sourcing & Recruitment", desc: "We identify, assess, and hire high-quality professionals meticulously aligned with your organizational goals and company culture." },
  { icon: Rocket, title: "Team Setup & Onboarding", desc: "We manage the entire onboarding lifecycle, ensuring seamless integration and alignment with your existing internal teams." },
  { icon: Brain, title: "HR Operations & Payroll", desc: "TalentAccel handles all complex payroll, statutory compliance, benefits administration, and comprehensive HR support." },
  { icon: TrendingUp, title: "Operational Support", desc: "We ensure perfectly smooth day-to-day HR operations so your technical team can focus purely on delivering results." },
];

const roleCategories = [
  { category: "Technology & Engineering", roles: ["Software Engineers", "AI / ML Engineers", "Data Scientists", "DevOps Engineers", "Cloud Architects"], icon: Code },
  { category: "Product & Design", roles: ["Product Managers", "Product Analysts", "UX / UI Designers", "Design Ops"], icon: Palette },
  { category: "Business & Operations", roles: ["Business Analysts", "Customer Success", "Sales Operations", "Marketing Specialists"], icon: BarChart3 },
  { category: "Specialized Talent", roles: ["Telecom Engineers", "Embedded Systems", "Electronics Engineers", "Hardware QA"], icon: Cpu },
];

const engagementModels = [
  { title: "Dedicated Recruiter", desc: "A dedicated TalentAccel recruiter embeds in your process to focus exclusively on building your offshore team from the ground up." },
  { title: "Managed Offshore Team", desc: "TalentAccel assumes full responsibility for hiring, HR operations, payroll, and local compliance for your entire offshore hub." },
  { title: "Build-Operate-Support", desc: "We build your team, optimize your local HR operations, and continuously support your scaling journey end-to-end." },
];

const scalingTimeline = [
  { time: "Foundational Phase", count: "5-10", label: "Engineers Hub" },
  { time: "Growth Phase (6 Mo)", count: "15-30+", label: "Cross-Functional Team" },
  { time: "Scale Phase (12 Mo)", count: "50+", label: "Independent R&D Center" },
];

const SectionHeader = ({ subheading, heading, description }: { subheading: string; heading: string; description: string }) => (
  <AnimatedSection className="text-center mb-10 relative z-10">
    <div className="inline-flex items-center justify-center space-x-2 mb-3">
      <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
      <span className="text-sm font-bold text-primary tracking-widest uppercase">{subheading}</span>
      <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
    </div>
    <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight">{heading}</h2>
    <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
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

        {/* What We Provide */}
        <section className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="End-To-End Offshore Solutions" 
              heading="What TalentAccel Provides" 
              description="We manage every aspect of your offshore journey, from initial strategic sourcing to ongoing HR support and operational excellence."
            />
            <StaggerContainer className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <StaggerItem key={s.title}>
                    <div className="p-8 rounded-3xl bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-4">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
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

        {/* Engagement Models */}
        <section id="engagement" className="py-16 relative z-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              subheading="Tailored Engagement" 
              heading="Flexible Operating Models" 
              description="Choose the strategic operational model that perfectly aligns with your company's growth timeline and financial goals."
            />
            <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {engagementModels.map((m, i) => (
                <StaggerItem key={m.title}>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -10 }} 
                    className="p-10 rounded-3xl bg-card border border-border shadow-lg relative overflow-hidden h-full flex flex-col"
                  >
                    <div className="absolute -right-6 -top-6 text-[8rem] font-black text-foreground/[0.03] select-none leading-none z-0 tracking-tighter">
                      0{i+1}
                    </div>
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{m.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
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
