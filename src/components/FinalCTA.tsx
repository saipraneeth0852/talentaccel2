import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, MessageSquare, ClipboardList } from "lucide-react";
import { useAuditModal } from "@/contexts/AuditModalContext";

export const FinalCTA = () => {
  const { openAudit } = useAuditModal();
  return (
  <section id="contact" className="py-10 lg:py-12">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection>
        <div className="relative rounded-3xl bg-gradient-hero p-6 sm:p-10 lg:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(161_100%_45%/0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="cta-title text-primary-foreground mb-5">
              Ready to Scale with Confidence?
            </h2>
            <p className="cta-subtitle text-primary-foreground/80 mb-8 sm:mb-10 mx-auto">
              Build a people function that matches your ambition, with the hiring, HR, payroll, and compliance support your next phase demands.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="mailto:biz@talentaccel.com"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={openAudit}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-200"
              >
                Free HR Audit
                <ClipboardList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
  );
};
