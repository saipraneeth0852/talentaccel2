import { useState } from "react";
import { initializeApp, deleteApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { UserPlus, Eye, EyeOff, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

// Firebase config — same as main app
const firebaseConfig = {
  apiKey: "AIzaSyBaIT-pzctt11F5xAACTIhYgAs21BTDjoY",
  authDomain: "talentaccel.firebaseapp.com",
  projectId: "talentaccel",
  storageBucket: "talentaccel.firebasestorage.app",
  messagingSenderId: "944597841037",
  appId: "1:944597841037:web:f538af3eb15d28bee5dec4",
};

interface CreatedAccount {
  email: string;
  password: string;
  createdAt: string;
}

export default function AdminAccounts() {
  const { user } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  const [created, setCreated] = useState<CreatedAccount[]>([]);

  const validatePassword = (p: string) => {
    const checks = {
      length: p.length >= 8,
      upper: /[A-Z]/.test(p),
      lower: /[a-z]/.test(p),
      number: /[0-9]/.test(p),
      special: /[^A-Za-z0-9]/.test(p),
    };
    return checks;
  };

  const checks = validatePassword(form.password);
  const passwordStrong = Object.values(checks).every(Boolean);

  const handleCreate = async () => {
    if (!form.email.trim()) { toast.error("Email is required"); return; }
    if (!passwordStrong) { toast.error("Password does not meet requirements"); return; }
    if (form.password !== form.confirm) { toast.error("Passwords do not match"); return; }

    setSaving(true);
    // Use a secondary app instance so current admin session is not disrupted
    let secondaryApp: ReturnType<typeof initializeApp> | null = null;
    try {
      secondaryApp = initializeApp(firebaseConfig, `admin-create-${Date.now()}`);
      const secondaryAuth = getAuth(secondaryApp);
      await createUserWithEmailAndPassword(secondaryAuth, form.email.trim(), form.password);
      await deleteApp(secondaryApp);

      setCreated((prev) => [
        ...prev,
        { email: form.email.trim(), password: form.password, createdAt: new Date().toLocaleString() },
      ]);

      toast.success(`Admin account created for ${form.email.trim()}`);
      setForm({ email: "", password: "", confirm: "" });
      setDialogOpen(false);
    } catch (e: any) {
      if (secondaryApp) { try { await deleteApp(secondaryApp); } catch {} }
      const msg =
        e.code === "auth/email-already-in-use" ? "This email is already registered." :
        e.code === "auth/invalid-email" ? "Invalid email address." :
        e.message || "Failed to create account.";
      toast.error(msg);
    }
    setSaving(false);
  };

  const PasswordCheck = ({ ok, label }: { ok: boolean; label: string }) => (
    <div className={`flex items-center gap-1.5 text-xs ${ok ? "text-green-600" : "text-muted-foreground"}`}>
      <CheckCircle2 className={`w-3 h-3 ${ok ? "opacity-100" : "opacity-30"}`} />
      {label}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Accounts</h1>
          <p className="text-sm text-muted-foreground mt-1">Create and manage admin users</p>
        </div>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <UserPlus className="w-4 h-4" /> Create Admin
        </Button>
      </div>

      {/* Current session info */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Logged in as</p>
            <p className="text-muted-foreground text-sm">{user?.email}</p>
          </div>
          <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-medium border border-green-200">
            Active Session
          </span>
        </div>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-amber-800">
          Admin accounts have full access to all content. Share credentials only with trusted team members.
          Passwords are shown once — store them securely.
        </p>
      </div>

      {/* Created accounts this session */}
      {created.length > 0 && (
        <div>
          <h2 className="font-semibold text-foreground mb-3 text-sm">Accounts Created This Session</h2>
          <div className="space-y-3">
            {created.map((acc, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">{acc.email}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5 w-fit">
                      <span className="text-xs font-mono text-foreground">{acc.password}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Created at {acc.createdAt}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-medium border border-green-200 flex-shrink-0">
                    Created
                  </span>
                </div>
                <p className="text-xs text-amber-700 mt-3 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3" />
                  Copy these credentials now — they won't be shown again after you leave this page.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {created.length === 0 && (
        <div className="text-center py-16 bg-card border border-dashed border-border rounded-2xl">
          <UserPlus className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No admin accounts created yet this session.</p>
          <Button onClick={() => setDialogOpen(true)} variant="outline" className="mt-4 gap-2">
            <UserPlus className="w-4 h-4" /> Create Admin Account
          </Button>
        </div>
      )}

      {/* Create Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create Admin Account</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="newadmin@talentaccel.com"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {form.password && (
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  <PasswordCheck ok={checks.length} label="8+ characters" />
                  <PasswordCheck ok={checks.upper} label="Uppercase letter" />
                  <PasswordCheck ok={checks.lower} label="Lowercase letter" />
                  <PasswordCheck ok={checks.number} label="Number" />
                  <PasswordCheck ok={checks.special} label="Special character" />
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label>Confirm Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={form.confirm}
                onChange={(e) => setForm((p) => ({ ...p, confirm: e.target.value }))}
              />
              {form.confirm && form.password !== form.confirm && (
                <p className="text-xs text-destructive">Passwords do not match</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleCreate}
              disabled={saving || !passwordStrong || form.password !== form.confirm || !form.email}
            >
              {saving ? "Creating…" : "Create Account"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
