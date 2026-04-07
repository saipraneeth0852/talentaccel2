import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { HeroImagePanel } from "./HeroImagePanel";
import { useAuditModal } from "@/contexts/AuditModalContext";

export const Hero = () => {
  const { openAudit } = useAuditModal();

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (!section) return;

    const navOffset = window.innerWidth >= 1024 ? 112 : 88;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "#how-it-works");
  };

  return (
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
            className="page-title mb-6"
          >
            One Partner for{" "}
            <span className="text-gradient-accent drop-shadow-sm">Complete People Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="page-subtitle mb-10"
          >
            From hiring and HR operations to payroll and compliance, TalentAccel gives growing companies the people infrastructure to scale with clarity, speed, and confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <button
              onClick={openAudit}
              className="btn-pressable inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              Book Your Free HR Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/#how-it-works"
              onClick={(event) => {
                const section = document.getElementById("how-it-works");
                if (!section) return;

                event.preventDefault();
                scrollToHowItWorks();
              }}
              className="btn-pressable inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200"
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
            Free, no-obligation HR assessment.
          </motion.div>

          {/* Floating bullet points moved to right side */}
        </div>

        <HeroImagePanel
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
          alt="Diverse tech startup team collaborating in a modern office"
          className="w-full max-w-[34rem] lg:justify-self-end"
          imageClassName="h-[280px] sm:h-[360px] lg:h-[500px]"
          glowClassName="top-14 bottom-4 from-primary/16 via-primary/8 to-secondary/22"
        />
      </div>
    </div>
  </section>
  );
};
