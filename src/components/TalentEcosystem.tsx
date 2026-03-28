import { AnimatedSection } from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Users, Shield, Settings, GraduationCap, Heart, Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const workflowData = [
  {
    challengeTitle: "Talent Bottlenecks",
    challengeDesc: "Struggling to hire the right talent quickly and at scale to meet your growth demands.",
    solutionLabel: "Talent Acquisition",
    solutionDesc: "End-to-end recruitment across all corporate functions and leadership levels.",
    solutionHref: "/services/talent-acquisition",
    icon: Users,
    color: "from-blue-500 to-indigo-500"
  },
  {
    challengeTitle: "Compliance Risks",
    challengeDesc: "Managing payroll and complex statutory compliance inaccurately, risking heavy fines.",
    solutionLabel: "HR Operations",
    solutionDesc: "Complete management of payroll, benefits, and statutory legal compliance.",
    solutionHref: "/services/hr-operations",
    icon: Shield,
    color: "from-emerald-500 to-teal-500"
  },
  {
    challengeTitle: "Operational Chaos",
    challengeDesc: "Scaling teams rapidly without structured operational workflows to support them.",
    solutionLabel: "HR Advisory",
    solutionDesc: "Architecting strategic hr frameworks, policies, and scalable company structures.",
    solutionHref: "/services/hr-advisory",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  },
  {
    challengeTitle: "Skill Gaps",
    challengeDesc: "Failing to create long-term impact due to a lack of continuous upskilling.",
    solutionLabel: "Learning & Development",
    solutionDesc: "Targeted capability-building programmes designed to develop your future leaders.",
    solutionHref: "/services/learning-development",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500"
  },
  {
    challengeTitle: "Retention Issues",
    challengeDesc: "Constantly losing top-tier employees due to poor culture and disengagement.",
    solutionLabel: "Employee Experience",
    solutionDesc: "Designing progressive workplace cultures that meaningfully engage and retain top talent.",
    solutionHref: "/services/employee-experience",
    icon: Heart,
    color: "from-rose-500 to-orange-500"
  },
  {
    challengeTitle: "Global Friction",
    challengeDesc: "Facing massive overhead and complexity when expanding into new global markets.",
    solutionLabel: "Extended Workforce",
    solutionDesc: "Rapid deployment of scalable offshore teams and specialist contractors.",
    solutionHref: "/services/extended-workforce",
    icon: Globe,
    color: "from-cyan-500 to-blue-500"
  },
];

const TimelineNode = ({ item, index }: { item: typeof workflowData[0]; index: number }) => {
  const Icon = item.icon;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-10 md:mb-20 group">
      
      {/* Desktop Left Column (Always Challenge) */}
      <div className={`w-full md:w-5/12 md:text-right md:pr-10 z-10 pl-10 md:pl-0 mt-6 md:mt-0 order-2 md:order-1`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <h4 className="text-xl font-bold text-slate-800">{item.challengeTitle}</h4>
          <p className="text-sm text-slate-500 leading-relaxed md:ml-auto max-w-sm">{item.challengeDesc}</p>
        </motion.div>
      </div>

      {/* The Central Node (Pointer) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 md:left-1/2 -ml-5 md:-ml-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-100 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.08)] flex items-center justify-center z-20 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300 order-1 md:order-2"
      >
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gradient-to-br ${item.color} transition-colors duration-300`}>
          <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Desktop Right Column (Always Solution) */}
      <div className={`w-full md:w-5/12 md:text-left md:pl-10 z-10 pl-10 md:pl-0 mt-6 md:mt-0 hidden md:block order-3`}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <Link to={item.solutionHref} className="block group/link">
            <h4 className="text-xl font-bold text-slate-800 group-hover/link:text-primary transition-colors duration-300 flex items-center gap-2">
              {item.solutionLabel}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mt-1">{item.solutionDesc}</p>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Right Column Fallback */}
      <div className={`w-full pl-10 mt-4 md:hidden order-4`}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to={item.solutionHref} className="block group/link p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">The Solution is</span>
            </div>
            <h4 className="text-xl font-bold text-slate-800 group-hover/link:text-primary transition-colors duration-300 flex items-center justify-between mt-1">
              {item.solutionLabel}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed mt-2">{item.solutionDesc}</p>
          </Link>
        </motion.div>
      </div>
      
    </div>
  );
};

export const TalentEcosystem = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-16 lg:py-16 relative bg-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-10 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            The Accel Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight max-w-3xl mx-auto">
            Resolving Constraints. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Accelerating Growth.
            </span>
          </h2>
        </AnimatedSection>


        {/* Vertical Scroll Timeline Area */}
        <div className="relative max-w-6xl mx-auto pt-10">
          
          {/* Static Column Headers (Desktop) */}
          <div className="hidden md:flex justify-between w-full mb-10 px-6">
            <div className="w-5/12 text-right pr-6">
              <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">Challenges</h3>
            </div>
            <div className="w-5/12 text-left pl-6">
              <h3 className="text-2xl font-black text-primary uppercase tracking-widest">Solutions</h3>
            </div>
          </div>
          
          {/* Tracking Line Base (Gray) */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 md:-ml-px w-0.5 bg-slate-100" />
          
          {/* Active Animated Outline Form Scroll */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 bottom-0 left-0 md:left-1/2 md:-ml-px w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" 
          />

          {/* Workflow Nodes */}
          {workflowData.map((item, index) => (
            <TimelineNode key={item.challengeTitle} item={item} index={index} />
          ))}

        </div>
      </div>
    </section>
  );
};
