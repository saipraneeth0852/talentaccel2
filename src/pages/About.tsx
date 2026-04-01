import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Handshake, Linkedin } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const team = [
  {
    name: "Sandeep Sankhla",
    role: "Partner",
    bio: "Proven entrepreneur and strategic business leader with deep expertise in company formation, corporate structuring, governance, and operational scaling. He has supported multiple organizations in establishing compliant, growth-ready business frameworks across industries.",
    image: "/founder-sandeep-rm.png",
    linkedin: "https://www.linkedin.com/in/sandeepsankhla/",
  },
  {
    name: "Carine Dsouza",
    role: "Partner",
    bio: "HR and Talent Management professional with experience in organizational development and people operations. Focused on aligning HR strategy with business outcomes, recruitment, enhancing employee experience, and building structured people processes for growing organizations.",
    image: "/founder-carine-rm.png",
    linkedin: "https://www.linkedin.com/in/carine-viola-dsouza-88723981/",
  },
];

const values = [
  { icon: Target, title: "Context Over Templates", desc: "Every company is different. We take time to understand your stage, culture, and goals before recommending anything." },
  { icon: Zap, title: "Speed With Standards", desc: "We move quickly without taking shortcuts — faster hiring, cleaner compliance, and HR processes that actually stick." },
  { icon: Shield, title: "Accountability", desc: "We treat your people function as if it were our own. When something is in our scope, it gets done — and done right." },
  { icon: Handshake, title: "Partnerships, Not Transactions", desc: "We're not a recruitment portal. We're a long-term partner invested in the health and growth of your organisation." },
];

const About = () => (
  <>
    <SEO 
      title="Scale Your Team & Operations" 
      description="TalentAccel manages your full recruitment, HR operations, payroll, and compliance stack—freeing your leadership to focus on building the product and scaling the business."
      keywords="recruitment services India, HR operations for startups, payroll and compliance, offshore team building, talent acquisition, scaling tech teams, HR outsourcing"
    />
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
            >
              The People Partner for{" "}
              <span className="text-gradient-accent">India's Growing Companies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              TalentAccel manages your full <strong>recruitment</strong>, <strong>HR operations</strong>, <strong>payroll</strong>, and <strong>compliance</strong> stack—so your leadership can stay focused on <strong>building the product</strong> and <strong>scaling the business</strong>.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="About Us Visual" className="w-full max-w-lg mx-auto object-cover rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Mission</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">We exist so you can focus on building</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Growing companies shouldn't have to spend their best energy on hiring complexity, payroll errors, and compliance risk. That's where we come in.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              TalentAccel's mission is to give startups and growth-stage companies access to the people infrastructure that was once only available to large enterprises — without the cost, the headcount, or the overhead.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Companies Served" },
                { value: "500+", label: "Placements Made" },
                { value: "6", label: "Service Pillars" },
                { value: "100%", label: "Compliance Focus" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
                  <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Story</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Started in Bangalore. Built from experience.</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            TalentAccel was founded after seeing the same pattern repeat across fast-growing companies: great products, strong ambition — and an HR function that couldn't keep up.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Hiring was reactive. Compliance was handled at the last minute. People operations were improvised. We set out to change that — building a single partner that growing companies could rely on for the full spectrum of HR, from the first offer letter to complex multi-state compliance.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Leadership Team */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Partners</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Team</h2>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6 overflow-hidden rounded-full bg-[#E5E3DB] flex items-end justify-center group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-lg font-semibold text-slate-600 mb-4">{member.role}</p>
                <div className="flex gap-4 mb-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[90%] mx-auto">
                  {member.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">What We Stand For</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <StaggerItem key={v.title}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-5">
              Let's talk about your team
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Whether you need to hire now or want to build a better HR foundation — we're happy to start with a conversation.
            </p>
            <a
              href="mailto:hr@talentaccel.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default About;
