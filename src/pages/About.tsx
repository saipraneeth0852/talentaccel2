import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Handshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const team = [
  {
    name: "Sandeep Sankhla",
    role: "Co-Founder",
    bio: "Proven entrepreneur and strategic business leader with deep expertise in company formation, corporate structuring, governance, and operational scaling. He has supported multiple organizations in establishing compliant, growth-ready business frameworks across industries.",
    image: "/founder-sandeep-rm.png",
  },
  {
    name: "Carine Dsouza",
    role: "Co-Founder",
    bio: "HR and Talent Management professional with experience in organizational development and people operations. Focused on aligning HR strategy with business outcomes, recruitment, enhancing employee experience, and building structured people processes for growing organizations.",
    image: "/founder-carine-rm.png",
  },
];

const values = [
  { icon: Target, title: "Startup-Focused Approach", desc: "We understand the challenges of building teams in fast-growing companies and tailor every engagement accordingly." },
  { icon: Zap, title: "Speed & Quality", desc: "Our hiring process ensures faster closures without compromising on talent quality." },
  { icon: Shield, title: "End-to-End Support", desc: "From recruitment to HR operations and compliance, we support your entire people function." },
  { icon: Handshake, title: "Flexible Engagement", desc: "Choose from contingency hiring, dedicated recruitment teams, or full HR outsourcing to match your stage." },
];

const About = () => (
  <>
    <SEO
      title="About TalentAccel — Our Story, Mission & Team"
      description="Meet the founders behind TalentAccel. We help startups and growing companies build high-performance teams, HR operations, and offshore teams in India."
      keywords="about TalentAccel, HR company India, offshore HR team, startup HR solutions, TalentAccel founders"
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
              Building the Teams that{" "}
              <span className="text-gradient-accent">Accel your Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              TalentAccel delivers a single-window HR ecosystem that supports businesses at every stage of growth — from first hire to full-scale operations.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why TalentAccel Exists</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building and scaling a startup requires more than just great ideas — it requires the right people, the right structure, and the right support systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At TalentAccel, we understand the unique challenges growing companies face when it comes to hiring, compliance, and managing people operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide structured, reliable, and scalable HR solutions that enable startups and growth-stage companies to focus on innovation and growth, while we build the people infrastructure that supports their journey.
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Born from the Challenges of Growth</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            TalentAccel was founded in Bangalore with one clear purpose: to be the people partner that growing companies actually need — not just a recruiter, but a full-stack HR ecosystem.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our founders saw firsthand how startups struggled to hire fast, stay compliant, and build structured HR operations while trying to scale. TalentAccel was built to solve all of it under one roof — accelerating talent and enabling growth.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Leadership Team */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Founders</p>
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
              Ready to build your team?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Let's discuss how TalentAccel can accelerate your talent and enable your growth.
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
