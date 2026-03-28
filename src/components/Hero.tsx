import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Rocket, Users, Shield } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 bg-gradient-subtle" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px]" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Trusted by startups & fast-growing companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            One partner —{" "}
            <span className="text-gradient-accent drop-shadow-sm">Complete people solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            TalentAccel partners with startups and growing companies to build high-performing teams, streamline HR operations, and ensure compliance — from hiring to payroll.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
            >
              Book a Hiring Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all duration-300"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Floating bullet points moved to right side */}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-secondary/10 blur-[120px] rounded-full min-w-[300px] min-h-[300px] -z-10" />
          
          <div className="relative max-w-lg mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Diverse tech startup team collaborating in a modern office"
              className="w-full h-[500px] object-cover rounded-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] ring-1 ring-border/50"
            />
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="absolute -left-12 top-10 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/95 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl max-w-[220px] flex gap-4 items-center cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-bold text-foreground leading-snug">Fast-track hiring for startups & scaling companies</p>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/95 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl max-w-[220px] flex gap-4 items-center cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-xs font-bold text-foreground leading-snug">Dedicated recruiters & offshore hiring support</p>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
              className="absolute -left-8 bottom-12 z-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/95 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl max-w-[220px] flex gap-4 items-center cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-xs font-bold text-foreground leading-snug">End-to-end HR, payroll & compliance management</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
