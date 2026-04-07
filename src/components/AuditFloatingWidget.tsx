import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, X } from "lucide-react";
import { useAuditModal } from "@/contexts/AuditModalContext";

export const AuditFloatingWidget = () => {
  const { openAudit } = useAuditModal();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-20 lg:bottom-8 right-4 lg:right-6 z-40 flex items-center gap-2"
        >
          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-sm"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Main widget */}
          <button
            onClick={openAudit}
            className="group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-primary text-primary-foreground shadow-[0_8px_32px_rgba(10,114,255,0.35)] hover:shadow-[0_12px_40px_rgba(10,114,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ClipboardList className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold opacity-80">It's free</p>
              <p className="text-sm font-bold">Get your HR Audit</p>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
