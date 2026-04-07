import { createContext, useContext, useState } from "react";

interface AuditModalContextType {
  open: boolean;
  openAudit: () => void;
  closeAudit: () => void;
}

const AuditModalContext = createContext<AuditModalContextType | null>(null);

export const AuditModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <AuditModalContext.Provider value={{ open, openAudit: () => setOpen(true), closeAudit: () => setOpen(false) }}>
      {children}
    </AuditModalContext.Provider>
  );
};

export const useAuditModal = () => {
  const ctx = useContext(AuditModalContext);
  if (!ctx) throw new Error("useAuditModal must be used within AuditModalProvider");
  return ctx;
};
