import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { useAuditModal } from "@/contexts/AuditModalContext";
import { motion, AnimatePresence } from "framer-motion";

export const AnnouncementBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const { openAudit } = useAuditModal();

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-primary-foreground text-sm font-medium relative">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0" />
            <span className="text-primary-foreground/90">
              Not sure where to start?
            </span>
            <button
              onClick={openAudit}
              className="inline-flex items-center gap-1 font-bold text-white underline underline-offset-2 hover:no-underline transition-all"
            >
              Get a free HR audit <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
