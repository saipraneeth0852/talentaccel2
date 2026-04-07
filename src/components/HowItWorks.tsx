import { Target, Search, Layers, Zap, BarChart2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  { icon: Target, step: "01", title: "We Start with Your Goals", desc: "Assess hiring plans and team structure." },
  { icon: Search, step: "02", title: "We Review Your Current Setup", desc: "Evaluate existing HR, payroll, and compliance." },
  { icon: Layers, step: "03", title: "We Shape the Right Plan", desc: "Create a tailored operations roadmap." },
  { icon: Zap, step: "04", title: "We Put the Plan into Motion", desc: "Execute hiring and HR process design." },
  { icon: BarChart2, step: "05", title: "We Keep Progress Visible", desc: "Provide visible progress tracking." },
  { icon: RefreshCw, step: "06", title: "We Grow with You", desc: "Evolve HR support as you scale." },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="how-it-works" className="py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            How It Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6 tracking-tight leading-tight"
          >
            How we work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            A straightforward, collaborative approach built for progress.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col gap-20 lg:gap-24 pt-10">
          
          {/* Row 1 */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[3rem] left-[16.66%] right-[16.66%] h-[2px] bg-primary/20 z-0 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2, ease: "linear", delay: 0.0 }}
                className="w-full h-full bg-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-8 relative z-10">
              {steps.slice(0, 3).map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex flex-col items-center text-center group px-4">
                    {/* Step Visuals */}
                    <div className="relative mb-8">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1, duration: 0.15, ease: "easeOut" }}
                        className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-500 hover:shadow-primary/40"
                      >
                        <Icon className="w-8 h-8" strokeWidth={2} />
                      </motion.div>
                      
                      {/* Step Number Badge */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        whileInView={{ scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1 + 0.05, duration: 0.1 }}
                        className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 border-[3px] border-background flex items-center justify-center z-20"
                      >
                        <span className="text-white text-[10px] font-black tracking-tighter">{s.step}</span>
                      </motion.div>

                      {/* Progress indicator (mobile only) */}
                      <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-muted-foreground/20" />
                    </div>

                    {/* Step Content */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1 + 0.05, duration: 0.15 }}
                        className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300"
                      >
                        {s.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1 + 0.1, duration: 0.15 }}
                        className="text-muted-foreground text-sm leading-relaxed font-medium"
                      >
                        {s.desc}
                      </motion.p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[3rem] left-[16.66%] right-[16.66%] h-[2px] bg-primary/20 z-0 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2, ease: "linear", delay: 0.2 }}
                className="w-full h-full bg-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-8 relative z-10">
              {steps.slice(3, 6).map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex flex-col items-center text-center group px-4">
                    {/* Step Visuals */}
                    <div className="relative mb-8">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.15, ease: "easeOut" }}
                        className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-500 hover:shadow-primary/40"
                      >
                        <Icon className="w-8 h-8" strokeWidth={2} />
                      </motion.div>
                      
                      {/* Step Number Badge */}
                      <motion.div
                        initial={{ scale: 0, x: 20 }}
                        whileInView={{ scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 + i * 0.1 + 0.05, duration: 0.1 }}
                        className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 border-[3px] border-background flex items-center justify-center z-20"
                      >
                        <span className="text-white text-[10px] font-black tracking-tighter">{s.step}</span>
                      </motion.div>

                      {/* Progress indicator (mobile only) */}
                      <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-muted-foreground/20" />
                    </div>

                    {/* Step Content */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 + i * 0.1 + 0.05, duration: 0.15 }}
                        className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300"
                      >
                        {s.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 + i * 0.1 + 0.1, duration: 0.15 }}
                        className="text-muted-foreground text-sm leading-relaxed font-medium"
                      >
                        {s.desc}
                      </motion.p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
