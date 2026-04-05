import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, MessageSquare } from "lucide-react";

export const FinalCTA = () => (
  <section id="contact" className="py-10 lg:py-12">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection>
        <div className="relative rounded-3xl bg-gradient-hero p-6 sm:p-10 lg:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(161_100%_45%/0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-5">
              Ready to build a people function that supports your next stage of growth?
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/70 mb-8 sm:mb-10 max-w-xl mx-auto">
              Let's talk about your goals and how TalentAccel can help you hire well, operate smoothly, and scale with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="mailto:biz@talentaccel.com"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:biz@talentaccel.com"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-200"
              >
                Talk to Our Team
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
