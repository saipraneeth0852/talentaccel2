import { AnimatedSection } from "./AnimatedSection";

export const PricingModel = () => (
  <section className="py-24 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-12">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Transparent Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Pricing Model</h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-medium">
          Outcome-based pricing tied to CTC &mdash; you pay only when we deliver the right hire.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-border shadow-float">
          <div className="grid grid-cols-2 bg-primary text-primary-foreground">
            <div className="px-8 py-5 text-sm font-bold uppercase tracking-wide text-center">CTC</div>
            <div className="px-8 py-5 text-sm font-bold uppercase tracking-wide text-center border-l border-primary-foreground/20">TA Pricing</div>
          </div>
          {[
            { ctc: "< 40 LPA", price: "8.33%" },
            { ctc: "40 - 75 LPA", price: "12%" },
            { ctc: "> 75 LPA", price: "15%" },
          ].map((row, i) => (
            <div key={row.ctc} className={`grid grid-cols-2 transition-colors hover:bg-muted/80 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
              <div className="px-8 py-6 text-foreground font-semibold text-center flex items-center justify-center text-lg">{row.ctc}</div>
              <div className="px-8 py-6 text-primary font-bold text-2xl border-l border-border text-center flex items-center justify-center">{row.price}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);
