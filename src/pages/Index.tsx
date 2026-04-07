import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTalentAccel } from "@/components/WhyTalentAccel";
import { EngagementModels } from "@/components/EngagementModels";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => (
  <>
    <SEO
      title="Scale Your Team & Operations"
      description="TalentAccel manages your full recruitment, HR operations, payroll, and compliance stack—freeing your leadership to focus on building the product and scaling the business."
      keywords="recruitment services India, HR operations for startups, payroll and compliance, offshore team building, talent acquisition, scaling tech teams, HR outsourcing"
    />
    <Hero />
    <TrustedBy />
    <Services />
    <WhyTalentAccel />
    <HowItWorks />
    <EngagementModels />
    <FinalCTA />
    <Footer />
  </>
);

export default Index;
