import { AnimatedSection } from "./AnimatedSection";
import { Code, Brain, Landmark, Radio, Cpu, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const industries = [
  { icon: Code, label: "SaaS & Product Companies", desc: "Scaling engineering and product teams for tech innovators." },
  { icon: Brain, label: "AI & Data Science", desc: "Finding top-tier talent in machine learning and analytics." },
  { icon: Landmark, label: "FinTech", desc: "Building secure, fast, and compliant financial tech teams." },
  { icon: Radio, label: "Telecom & Networking", desc: "Connecting you with experts in 5G, IoT, and infrastructure." },
  { icon: Cpu, label: "Electronics & Hardware", desc: "Sourcing specialized talent for embedded systems and VLSI." },
  { icon: Rocket, label: "Startups & GCCs", desc: "Fast-tracking leadership and core team hiring for new ventures." },
];

export const Industries = () => (
  <section id="industries" className="py-10 lg:py-12 bg-muted/30">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection className="mb-8 lg:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Industries
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            We specialize in hiring for <span className="text-muted-foreground">high-growth sectors.</span>
          </h2>
        </div>
      </AnimatedSection>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col border-t border-border/60 max-w-5xl"
      >
        {industries.map((ind, index) => {
          const Icon = ind.icon;
          
          return (
            <motion.div 
              key={ind.label}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  transition: { duration: 0.4, ease: "easeOut" } 
                }
              }}
            >
              <Link to="/contact" className="group block w-full py-4 lg:py-5 border-b border-border/60 hover:bg-muted/10 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Left: Title & Icon */}
                  <div className="flex items-center gap-4 lg:gap-6">
                    <span className="text-sm lg:text-base font-mono text-muted-foreground opacity-50 w-6 hidden md:block">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground m-auto transition-colors" />
                    </div>
                    <h3 className="text-lg lg:text-2xl font-bold text-foreground group-hover:translate-x-3 transition-transform duration-500 ease-out whitespace-nowrap">
                      {ind.label}
                    </h3>
                  </div>

                  {/* Right: Description & Arrow */}
                  <div className="flex items-center justify-end gap-8 flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground max-w-xs hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 truncate">
                      {ind.desc}
                    </p>
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:-rotate-45 group-hover:text-primary-foreground transition-all duration-300" />
                    </div>
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);
