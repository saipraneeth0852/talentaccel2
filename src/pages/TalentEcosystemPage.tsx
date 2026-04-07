import { TalentEcosystem } from "@/components/TalentEcosystem";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { motion } from "framer-motion";

const TalentEcosystemPage = () => (
  <>
    <SEO
      title="Talent Ecosystem | TalentAccel"
      description="Explore how TalentAccel maps your people challenges to solutions — from hiring and compliance to leadership development and retention."
      keywords="HR solutions, talent acquisition, HR operations, people strategy, workforce challenges"
    />

    {/* Hero */}
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary" />
              People Operations
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="page-title mb-4"
            >
              Your Challenges,{" "}
              <span className="text-gradient-accent">Our Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="page-subtitle"
            >
              See how recurring people challenges connect to the right mix of hiring, compliance, leadership, and employee experience solutions across your business.
            </motion.p>
          </div>
          <HeroImagePanel
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Team collaborating on people strategy"
            className="lg:justify-self-end"
            imageClassName="h-[250px] sm:h-[320px] lg:h-[420px]"
          />
        </div>
      </div>
    </section>

    <TalentEcosystem />

    <Footer />
  </>
);

export default TalentEcosystemPage;
