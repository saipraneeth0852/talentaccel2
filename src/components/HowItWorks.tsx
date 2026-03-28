import { Target, Search, Layers, Zap, BarChart2, RefreshCw } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  { icon: Target, step: "01", title: "Understand Goals", desc: "Understand your business & workforce goals — what you're building, who you need, and how fast." },
  { icon: Search, step: "02", title: "Assess Gaps", desc: "Assess current HR processes, gaps, and compliance needs to identify where to focus first." },
  { icon: Layers, step: "03", title: "Design Solution", desc: "Design the right HR solution mix aligned to your growth stage — hiring, operations, or full-stack." },
  { icon: Zap, step: "04", title: "Implement Fast", desc: "Implement solutions with speed, accuracy, and accountability — no delays, no compromises." },
  { icon: BarChart2, step: "05", title: "Monitor Outcomes", desc: "Monitor performance, compliance, and workforce outcomes with ongoing reporting and reviews." },
  { icon: RefreshCw, step: "06", title: "Optimize & Scale", desc: "Continuously optimize and scale as your organization evolves — we grow with you." },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-10 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Our Approach
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">How TalentAccel Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured 6-step approach to building and scaling your people function — from first conversation to ongoing optimization.
          </p>
        </AnimatedSection>

        {/* Max width tightens the cards up making them perfectly small */}
        <div className="relative max-w-[1000px] mx-auto w-full pt-4 pb-12">
          
          {/* Mobile Vertical Track */}
          <div className="block lg:hidden absolute top-4 bottom-4 left-8 w-1 bg-border/40 z-0 transform -translate-x-1/2 rounded-full" />
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="block lg:hidden absolute top-4 left-8 w-1 bg-primary z-0 origin-top transform -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(239,90,57,0.6)]" 
          />

          {/* Row 1 (Desktop) */}
          <div className="relative flex flex-col lg:flex-row w-full justify-between items-stretch gap-8 lg:gap-8 z-10">
            {steps.slice(0, 3).map((s, i) => (
              <StepCard key={s.step} step={s} index={i} type={i === 0 || i === 1 ? 'right' : i === 2 ? 'down' : 'none'} />
            ))}
          </div>

          {/* Spacer between rows matches the +4rem height calc on the drop line */}
          <div className="h-12 lg:h-16 w-full" />

          {/* Row 2 (Desktop, rendered right-to-left) */}
          <div className="relative flex flex-col lg:flex-row-reverse w-full justify-between items-stretch gap-8 lg:gap-8 z-10">
            {steps.slice(3, 6).map((s, i) => (
              <StepCard key={s.step} step={s} index={i + 3} type={i === 0 || i === 1 ? 'left' : 'none'} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index, type }: { step: any; index: number, type: 'right' | 'left' | 'down' | 'none' }) => {
  const Icon = step.icon;
  // Timing mapping logic perfectly scales the line drawing to the node's arrival
  let delay = index * 0.2;
  if (index >= 3) delay = 0.8 + (index - 3) * 0.2;

  const lineDelay = delay + 0.1; // Line draws exactly as node completes appearing

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: delay * 0.8 }}
      className="relative w-full lg:w-[31%] group pl-20 lg:pl-0 h-full"
    >
      {/* Node indicator */}
      <div className="absolute left-8 lg:left-1/2 top-4 lg:top-[52px] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-background rounded-full z-20 border-2 border-primary/20 shadow-[0_0_20px_rgba(255,255,255,0.8)] lg:shadow-none group-hover:border-primary/60 transition-colors">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.3, delay: delay }}
          className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(239,90,57,0.8)]"
        />
      </div>

      {/* Connection Lines (Desktop Only) */}
      <div className="hidden lg:block">
        {type === 'right' && (
          <>
            {/* Horizontal Line out to the Right */}
            {/* lg:gap-8 is 2rem. To hit center of next card perfectly: w-[calc(100%+2rem)] */}
            <div className="absolute top-[52px] left-1/2 w-[calc(100%+2rem)] h-1 bg-border/40 transform -translate-y-1/2 z-0" />
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "calc(100% + 2rem)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3, delay: lineDelay, ease: "linear" }}
              className="absolute top-[52px] left-1/2 h-1 bg-primary transform -translate-y-1/2 z-0 origin-left shadow-[0_0_10px_rgba(239,90,57,0.5)]" 
            />
          </>
        )}

        {type === 'left' && (
          <>
            {/* Horizontal Line out to the Left (Row 2 reverse rendering) */}
            <div className="absolute top-[52px] right-1/2 w-[calc(100%+2rem)] h-1 bg-border/40 transform -translate-y-1/2 z-0" />
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "calc(100% + 2rem)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3, delay: lineDelay, ease: "linear" }}
              className="absolute top-[52px] right-1/2 h-1 bg-primary transform -translate-y-1/2 z-0 origin-right shadow-[0_0_10px_rgba(239,90,57,0.5)]" 
            />
          </>
        )}

        {type === 'down' && (
          <>
            {/* Vertical Drop Line connecting Row 1 to Row 2 visually aligned */}
            {/* Card takes up 100% height, spacer gap is 4rem. Total drop connection: calc(100% + 4rem) */}
            <div className="absolute top-[52px] left-1/2 w-1 h-[calc(100%+4rem)] bg-border/40 transform -translate-x-1/2 z-0" />
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "calc(100% + 4rem)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3, delay: lineDelay, ease: "linear" }}
              className="absolute top-[52px] left-1/2 w-1 bg-primary transform -translate-x-1/2 z-0 origin-top shadow-[0_0_10px_rgba(239,90,57,0.5)]" 
            />
          </>
        )}
      </div>

      <div className="relative h-full flex flex-col px-5 py-6 lg:p-7 rounded-[2rem] bg-card border border-border/70 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 z-10">
        <span className="text-5xl lg:text-5xl font-extrabold text-muted-foreground/10 absolute top-4 right-4 pointer-events-none select-none tracking-tighter">
          {step.step}
        </span>
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative z-10 flex-shrink-0">
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 relative z-10">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed relative z-10 flex-1">{step.desc}</p>
      </div>
    </motion.div>
  );
};
