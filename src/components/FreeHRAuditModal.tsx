import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useAuditModal } from "@/contexts/AuditModalContext";
import { PhoneCall, Search, FileText, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    icon: PhoneCall,
    title: "Discovery Call",
    desc: "Discuss team goals and pinpoint HR bottlenecks.",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    gradient: "from-blue-500 to-indigo-500",
    labelColor: "text-blue-400",
  },
  {
    step: "Step 2",
    icon: Search,
    title: "Review",
    desc: "Analyze your existing hiring, payroll, and compliance setup.",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    gradient: "from-primary to-orange-500",
    labelColor: "text-primary",
  },
  {
    step: "Step 3",
    icon: FileText,
    title: "Action Plan",
    desc: "Receive a prioritized roadmap of HR recommendations.",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500 to-teal-400",
    labelColor: "text-emerald-400",
  },
];

export const FreeHRAuditModal = () => {
  const { open, closeAudit } = useAuditModal();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && closeAudit()}>
      <DialogContent className="max-w-2xl w-full p-0 border-0 bg-transparent shadow-none overflow-visible [&>button]:hidden">
        <DialogTitle className="sr-only">Free HR Audit</DialogTitle>
        <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none opacity-50" />

          {/* Close button */}
          <button
            onClick={closeAudit}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="relative z-10 p-8 sm:p-10">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,1)] animate-pulse" />
                Free HR Audit
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-3">
                A clearer view of where your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  people ops can excel
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                Practical insights and actionable HR recommendations to support your next stage of growth.
              </p>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.step}
                    className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`w-11 h-11 ${s.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div className={`text-xs font-black tracking-widest uppercase mb-1 ${s.labelColor}`}>{s.step}</div>
                    <h3 className="text-base font-bold mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                onClick={closeAudit}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-[0_0_30px_rgba(239,90,57,0.35)] hover:shadow-[0_0_50px_rgba(239,90,57,0.5)] transition-all duration-300"
              >
                Book Your Free Audit <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
