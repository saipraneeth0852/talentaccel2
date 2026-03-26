import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { TalentEcosystem } from "@/components/TalentEcosystem";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyTalentAccel } from "@/components/WhyTalentAccel";
import { EngagementModels } from "@/components/EngagementModels";
import { PricingModel } from "@/components/PricingModel";
import { Insights } from "@/components/Insights";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => (
  <>
    <SEO 
      title="Home" 
      description="TalentAccel is an integrated Talent & HR Service provider helping startups and fast-growing organizations scale team and automate compliance."
      keywords="startup hiring, HR operations, compliance, recruitment, offshore teams, talent ecosystem"
    />
    <Hero />
    <TrustedBy />
    <TalentEcosystem />
    <Services />
    <Industries />
    <HowItWorks />
    <CaseStudies />
    <WhyTalentAccel />
    <EngagementModels />
    <PricingModel />
    <Insights />
    <FinalCTA />
    <Footer />
  </>
);

export default Index;
