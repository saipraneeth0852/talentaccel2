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
    challengeTitle: "Roles sit empty while your team burns out.",
    challengeDesc: "Hiring speed shouldn't be your biggest bottleneck. Every week without a mission-critical hire costs your business real momentum.",
    solutionLabel: "Active Talent Acquisition",
    solutionDesc: "Dedicated partners who own your recruitment pipeline from search to offer, closing roles at the speed of your growth.",
    solutionHref: "/services/talent-acquisition",
    icon: Users,
    color: "from-blue-500 to-indigo-500"
  },
  {
    challengeTitle: "Compliance is a legal minefield you can't ignore.",
    challengeDesc: "Statutory compliance shouldn't be your job. Navigating PF, ESI, and multi-state filings is a risk no founder should take.",
    solutionLabel: "Seamless HR Operations",
    solutionDesc: "We handle the heavy lifting, ensuring you stay 100% audit-ready while we manage your payroll and statutory obligations.",
    solutionHref: "/services/hr-operations",
    icon: Shield,
    color: "from-emerald-500 to-teal-500"
  },
  {
    challengeTitle: "Improvised HR is fine for Day 1, not Day 1,000.",
    challengeDesc: "Is your people infrastructure built for the scale you're aiming for? Inconsistent policies shouldn't stall your professional growth.",
    solutionLabel: "Strategic HR Advisory",
    solutionDesc: "We build the scalable frameworks you need—from org design and performance models to professional policy structures.",
    solutionHref: "/services/hr-advisory",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  },
  {
    challengeTitle: "Leading teams is a skill, not just a promotion.",
    challengeDesc: "Great individual contributors get promoted but often struggle to lead—and your entire organization feels the friction.",
    solutionLabel: "Management Development",
    solutionDesc: "Practical, high-impact coaching and programs that transform your best performers into top-tier leadership talent.",
    solutionHref: "/services/learning-development",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500"
  },
  {
    challengeTitle: "Culture doesn't happen by accident—it's designed.",
    challengeDesc: "High attrition is often a symptom of an undefined culture. If your people are leaving, your employee experience needs work.",
    solutionLabel: "Retention by Design",
    solutionDesc: "We craft the intentional onboarding and engagement touchpoints that make your best people want to stay and grow.",
    solutionHref: "/services/employee-experience",
    icon: Heart,
    color: "from-rose-500 to-orange-500"
  },
  {
    challengeTitle: "Expanding globally shouldn't feel overwhelming.",
    challengeDesc: "Setting up offshore teams in India involves more than just a map. Logistics, legal, and branding can stall your momentum.",
    solutionLabel: "Extended Workforce Solutions",
    solutionDesc: "Turn-key offshore setups, via logistics, and employer branding that accelerate your international growth and presence.",
    solutionHref: "/services/extended-workforce",
    icon: Globe,
    color: "from-cyan-500 to-blue-500"
  },
];

const TimelineNode = ({ item, index }: { item: typeof workflowData[0]; index: number }) => {
  const Icon = item.icon;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-10 md:mb-12 group">
      
      {/* Desktop Left Column (Always Challenge) */}
      <div className={`w-full md:w-5/12 md:text-right md:pr-10 z-10 pl-10 md:pl-0 mt-6 md:mt-0 order-2 md:order-1`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <h4 className="text-lg sm:text-xl font-bold text-slate-800">{item.challengeTitle}</h4>
          <p className="text-sm text-slate-500 leading-relaxed md:ml-auto max-w-sm">{item.challengeDesc}</p>
        </motion.div>
      </div>

      {/* The Central Node (Pointer) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
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
          <Link to={item.solutionHref} className="block group/link p-4 rounded-3xl bg-slate-50 border border-slate-100">
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
    <section ref={containerRef} className="py-10 lg:py-12 relative bg-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-10 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
            Where We Help
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight leading-tight max-w-3xl mx-auto">
            The People Challenges Every Growing Company Faces
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed mt-4">
            Sound familiar? Here's how we help you move past them.
          </p>
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
            style={{ scaleY, originY: 0, willChange: "transform" }}
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
