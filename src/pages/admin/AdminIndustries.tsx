import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2, Building2, GripVertical } from "lucide-react";
import { toast } from "sonner";

interface Industry {
  id: string;
  label: string;
  icon: string;
  order: number;
}

const emptyForm = { label: "", icon: "Building2" };

export default function AdminIndustries() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Industry | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchIndustries = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "industries"), orderBy("order", "asc"));
      const snap = await getDocs(q);
      setIndustries(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Industry, "id">) })));
    } catch {
      try {
        const snap = await getDocs(collection(db, "industries"));
        setIndustries(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Industry, "id">) })));
      } catch (e: any) {
        toast.error("Could not load industries: " + (e?.message || "Check Firestore setup"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchIndustries(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (ind: Industry) => {
    setEditing(ind);
    setForm({ label: ind.label, icon: ind.icon });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.label.trim()) { toast.error("Label is required"); return; }
    setSaving(true);
    const data = {
      label: form.label.trim(),
      icon: form.icon.trim() || "Building2",
      order: editing?.order ?? industries.length,
      updatedAt: serverTimestamp(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, "industries", editing.id), data);
        toast.success("Industry updated");
      } else {
        await addDoc(collection(db, "industries"), { ...data, createdAt: serverTimestamp() });
        toast.success("Industry added");
      }
      setDialogOpen(false);
      fetchIndustries();
    } catch (e: any) {
      toast.error(e.message || "Failed to save");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteDoc(doc(db, "industries", deleteId));
      toast.success("Industry deleted");
      fetchIndustries();
    } catch (e: any) {
      toast.error(e.message || "Failed to delete");
    }
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Industries</h1>
          <p className="text-sm text-muted-foreground mt-1">{industries.length} industr{industries.length !== 1 ? "ies" : "y"}</p>
        </div>
        <Button onClick={openNew} className="gap-2">
          <Plus className="w-4 h-4" /> Add Industry
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : industries.length === 0 ? (
        <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
          <Building2 className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No industries yet.</p>
          <Button onClick={openNew} variant="outline" className="mt-4 gap-2">
            <Plus className="w-4 h-4" /> Add Industry
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:shadow-card transition-shadow"
            >
              <GripVertical className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-sm text-foreground flex-1 min-w-0 truncate">{ind.label}</span>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => openEdit(ind)}>
                  <Pencil className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteId(ind.id)}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Industry" : "Add Industry"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Label *</Label>
              <Input
                placeholder="e.g. SaaS & Product Companies"
                value={form.label}
                onChange={(e) => setForm((p) => ({ ...p, label: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Icon Name</Label>
              <Input
                placeholder="e.g. Code, Brain, Landmark"
                value={form.icon}
                onChange={(e) => setForm((p) => ({ ...p, icon: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground">Use any Lucide icon name (PascalCase)</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Industry"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Industry?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
