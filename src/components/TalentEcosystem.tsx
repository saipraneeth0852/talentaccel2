import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Users, FileText, Settings, GraduationCap, Heart, Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  "Hiring the right talent",
  "Managing payroll & statutory compliance accurately",
  "Scaling teams without operational chaos",
  "Upskilling the team",
  "Keeping employees engaged",
];

const solutions = [
  { icon: Users, label: "Talent Acquisition", href: "/services/talent-acquisition", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { icon: FileText, label: "HR Operations", href: "/services/hr-operations", img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { icon: Settings, label: "HR Advisory", href: "/services/hr-advisory", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { icon: GraduationCap, label: "Learning & Development", href: "/services/learning-development", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { icon: Heart, label: "Employee Experience", href: "/services/employee-experience", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { icon: Globe, label: "Extended Workforce", href: "/services/extended-workforce", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export const TalentEcosystem = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-50/50">
    {/* Rich ambient backgrounds */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      {/* Header */}
      <AnimatedSection className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-bold text-slate-800 tracking-wide uppercase">Talent Ecosystem</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          One Partner.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Complete People Solutions.
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          TalentAccel delivers a single-window HR ecosystem that supports businesses at every stage of growth, transforming operational chaos into structured success.
        </p>
      </AnimatedSection>

      {/* Challenges (Current State) */}
      <AnimatedSection className="mb-16">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
          The Challenges Growing Companies Face
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {challenges.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-sm md:text-base text-slate-700 font-medium shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </AnimatedSection>

      {/* Transition Flow Elements */}
      <AnimatedSection className="flex justify-center mb-16 relative">
        <div className="flex flex-col items-center gap-3">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-px bg-gradient-to-b from-slate-200 to-primary/50" 
          />
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(239,90,57,0.15)]"
          >
            <ArrowRight className="w-5 h-5 text-primary rotate-90" />
          </motion.div>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-px bg-gradient-to-b from-primary/50 to-secondary/50" 
          />
        </div>
      </AnimatedSection>

      {/* Solution Label */}
      <AnimatedSection className="text-center mb-12">
        <h3 className="text-2xl font-bold text-slate-900">
          Our Solution <span className="text-secondary">—</span> The Accel Workflow
        </h3>
      </AnimatedSection>

      {/* Solution Tiles (Future State) */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {solutions.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.label}>
              <Link to={s.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full flex flex-col justify-end min-h-[240px] p-6 rounded-[2rem] bg-slate-900 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.16)] hover:border-primary/50 transition-all duration-300 text-left overflow-hidden"
                >
                  {/* Background Image with Zoom */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={s.img} 
                      alt={s.label} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300" />
                  </div>
                  
                  {/* Content (z-10 to stay above image) */}
                  <div className="relative z-10 mt-auto">
                    <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-primary/90 group-hover:border-primary flex items-center justify-center transition-all duration-300 shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <span className="text-lg font-bold text-white group-hover:text-primary-foreground transition-colors duration-300 leading-tight">
                      {s.label}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
