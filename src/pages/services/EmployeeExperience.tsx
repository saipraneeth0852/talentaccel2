import { motion } from "framer-motion";
import { ArrowRight, Heart, Gift, Star, LogOut, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const servicesList = [
  "Background Verification",
  "Onboarding & Welcome Kits",
  "Employee Awards & Recognition",
  "Corporate & Festival Gifting",
  "Exit Management & F&F Processing",
  "Retirement & Appreciation Kits",
];

const details = [
  { icon: Heart, title: "Onboarding & Welcome", desc: "First-day experiences that set the tone — welcome kits, onboarding packs, and structured induction programmes that make new hires feel at home." },
  { icon: Star, title: "Awards & Recognition", desc: "Employee recognition programmes, milestone awards, and spot recognition tools that reinforce your culture and boost retention." },
  { icon: Gift, title: "Corporate & Festival Gifting", desc: "Thoughtfully curated gifting programmes for festivals, milestones, and company events — personalised and delivered end-to-end." },
  { icon: LogOut, title: "Exit Management", desc: "Structured offboarding, full-and-final settlement processing, and retirement & appreciation kits that leave leavers with a positive lasting impression." },
];

const EmployeeExperience = () => (
  <>
    <SEO
      title="Employee Experience & Retention"
      description="Build a workplace people stay at. We design engagement frameworks, feedback systems & retention strategies that reduce attrition for growing startups."
      keywords="employee experience India, employee retention startup, engagement framework, reduce attrition India"
    />
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <Heart className="w-3.5 h-3.5" /> Employee Experience Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Better Employee Experience{" "}
            <span className="text-gradient-accent">Across the Lifecycle.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            From the first day to the last, we help you build employee experiences that drive engagement, loyalty, and pride in your organisation.
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
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
          <h2 className="text-2xl font-bold text-foreground mb-2">What's Included</h2>
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
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Invest in your people's experience</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Engaged employees stay longer, perform better, and become your best advocates. Let's build that together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default EmployeeExperience;
