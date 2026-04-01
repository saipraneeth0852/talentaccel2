import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { PhoneCall, Search, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const FreeHRAudit = () => {
  return (
    <section id="free-hr-audit" className="py-10 lg:py-12 relative overflow-hidden bg-slate-900 text-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white mb-6 shadow-sm backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,1)] animate-pulse" />
             Zero Risk, High Reward
          </div>
          <h2 className="text-4xl lg:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
             Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Free HR Audit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
             We analyze your current state to provide targeted recommendations—before you ever commit to a partnership.
          </p>
        </AnimatedSection>
        
        <StaggerContainer className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <StaggerItem>
             <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.06] hover:border-primary/50 transition-all duration-300 h-full flex flex-col group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                   <PhoneCall className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-black tracking-widest text-blue-400 uppercase mb-2">Step 1</div>
                <h3 className="text-2xl font-bold mb-4 lg:mb-6 leading-snug">Discovery Call</h3>
                <p className="text-slate-400 text-base leading-relaxed flex-1">A focused 30-minute sync to understand your rapid scaling timeline, immediate operational bottlenecks, and long-term cultural goals.</p>
             </div>
          </StaggerItem>

          <StaggerItem>
             <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.06] hover:border-primary/50 transition-all duration-300 h-full flex flex-col group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                   <Search className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-black tracking-widest text-primary uppercase mb-2">Step 2</div>
                <h3 className="text-2xl font-bold mb-4 lg:mb-6 leading-snug">Process Review</h3>
                <p className="text-slate-400 text-base leading-relaxed flex-1">Our experts plunge deep into your existing HR workflows, recruitment engines, and compliance posture to identify hidden risks and missing processes.</p>
             </div>
          </StaggerItem>

          <StaggerItem>
             <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-secondary/50 transition-all duration-300 h-full flex flex-col group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                   <FileText className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-black tracking-widest text-emerald-400 uppercase mb-2">Step 3</div>
                <h3 className="text-2xl font-bold mb-4 lg:mb-6 leading-snug">Customized Proposal</h3>
                <p className="text-slate-400 text-base leading-relaxed flex-1">You receive a bespoke, aggressively actionable roadmap detailing the exact operational blueprint required to unapologetically unblock your growth.</p>
             </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection className="text-center mt-16 relative z-10 w-full flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-black text-lg shadow-[0_0_40px_rgba(239,90,57,0.4)] hover:shadow-[0_0_60px_rgba(239,90,57,0.6)] transition-all duration-300">
               Book Your Free Audit <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
