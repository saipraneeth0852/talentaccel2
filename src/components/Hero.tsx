import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Rocket, Users, Shield } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 bg-gradient-subtle" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px]" />

    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-32 lg:pt-24 pb-16 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Trusted by startups and fast-growing companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[2.2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold lg:leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Build your team with confidence.{" "}
            <span className="text-gradient-accent drop-shadow-sm">Scale your people operations with clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            TalentAccel helps growing companies hire exceptional talent, strengthen HR operations, and stay compliant as they scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('free-hr-audit')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-pressable inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              Book Your Free HR Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="btn-pressable inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors duration-200"
            >
              See How It Works
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-foreground/80 font-medium"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
               <Shield className="w-3 h-3" />
            </span>
            A practical HR and compliance review at no cost and no obligation.
          </motion.div>

          {/* Floating bullet points moved to right side */}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.15, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-secondary/10 blur-[120px] rounded-full min-w-[300px] min-h-[300px] -z-10" />
          
          <div className="relative max-w-lg mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Diverse tech startup team collaborating in a modern office"
              className="w-full h-[500px] object-cover rounded-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] ring-1 ring-border/50"
              style={{ willChange: "transform" }}
            />
            

          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
