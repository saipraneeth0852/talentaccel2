import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Network, Target, Zap, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { SEO } from "@/components/SEO";

const servicesList = ["Permanent Hiring", "Contract Staffing", "Executive Search", "Startup Hiring Support", "Tech & AI Hiring"];

const howWeHelp = [
  { icon: Network, title: "Deep Talent Networks", desc: "Access to pre-vetted candidates across tech, product, and business functions built over years of domain hiring." },
  { icon: Target, title: "Structured Screening Process", desc: "Multi-stage evaluation ensuring only the best-fit candidates reach your interview panel." },
  { icon: Zap, title: "Faster Time-to-Hire", desc: "Streamlined processes that cut hiring timelines without compromising on talent quality." },
  { icon: Users, title: "Dedicated Hiring Teams", desc: "Your own embedded recruiter and sourcing specialist focused entirely on your open roles." },
];

const idealFor = ["Fast-growing startups", "Companies expanding in India", "Product and engineering teams"];

const model = ["Dedicated recruiter", "Dedicated sourcing specialist", "Hiring analytics & reporting"];

const TalentAcquisition = () => (
  <>
    <SEO
      title="Talent Acquisition & Hiring Solutions"
      description="End-to-end recruitment for startups in India. We source, screen & onboard top tech and business talent — 40% faster than traditional agencies."
      keywords="talent acquisition India, startup hiring, tech recruitment India, permanent hiring, contract staffing"
    />
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <Users className="w-3.5 h-3.5" /> Talent Acquisition
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Hire the Right Talent,{" "}
            <span className="text-gradient-accent">Faster</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            We help companies hire the right talent quickly and efficiently. From permanent hiring to executive search and tech roles, TalentAccel is your end-to-end recruitment partner.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5">
              Book a Hiring Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all">
              All Services <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              alt="Talent Acquisition Visual"
              className="lg:justify-self-end"
              imageClassName="h-[260px] sm:h-[330px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

    {/* Services Include */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">What's Included</p>
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

    {/* How We Help */}
    <section className="py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Approach</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How We Help</h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeHelp.map((h) => {
            const Icon = h.icon;
            return (
              <StaggerItem key={h.title}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* Ideal For + Model */}
    <section className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card h-full">
              <h2 className="text-2xl font-bold text-foreground mb-6">Ideal For</h2>
              <ul className="space-y-4">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card h-full">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Model</h2>
              <ul className="space-y-4">
                {model.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">Ready to hire smarter?</h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Let TalentAccel build a recruitment engine tailored to your growth stage.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5">
              Book a Hiring Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default TalentAcquisition;
