import { AnimatedSection } from "./AnimatedSection";

export const PricingModel = () => (
  <section className="py-10 lg:py-12 bg-muted/30">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
          Transparent Pricing
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Pricing Model</h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-medium">
          Outcome-based pricing tied to CTC &mdash; you pay only when we deliver the right hire.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-border shadow-float">
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
