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
import { Textarea } from "@/components/ui/textarea";
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
import { Plus, Pencil, Trash2, Briefcase, GripVertical } from "lucide-react";
import { toast } from "sonner";

interface Service {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: string;
  order: number;
}

const emptyForm = { title: "", desc: "", bullets: "", icon: "Briefcase" };

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "services"), orderBy("order", "asc"));
      const snap = await getDocs(q);
      setServices(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Service, "id">) }))
      );
    } catch {
      try {
        const snap = await getDocs(collection(db, "services"));
        setServices(
          snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Service, "id">) }))
        );
      } catch (e: any) {
        toast.error("Could not load services: " + (e?.message || "Check Firestore setup"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({ title: s.title, desc: s.desc, bullets: s.bullets.join("\n"), icon: s.icon });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error("Title is required"); return; }
    setSaving(true);
    const data = {
      title: form.title.trim(),
      desc: form.desc.trim(),
      bullets: form.bullets.split("\n").map((b) => b.trim()).filter(Boolean),
      icon: form.icon.trim() || "Briefcase",
      order: editing?.order ?? services.length,
      updatedAt: serverTimestamp(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, "services", editing.id), data);
        toast.success("Service updated");
      } else {
        await addDoc(collection(db, "services"), { ...data, createdAt: serverTimestamp() });
        toast.success("Service added");
      }
      setDialogOpen(false);
      fetchServices();
    } catch (e: any) {
      toast.error(e.message || "Failed to save");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteDoc(doc(db, "services", deleteId));
      toast.success("Service deleted");
      fetchServices();
    } catch (e: any) {
      toast.error(e.message || "Failed to delete");
    }
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Services</h1>
          <p className="text-sm text-muted-foreground mt-1">{services.length} service{services.length !== 1 ? "s" : ""}</p>
        </div>
        <Button onClick={openNew} className="gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : services.length === 0 ? (
        <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
          <Briefcase className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No services yet. Add your first one.</p>
          <Button onClick={openNew} variant="outline" className="mt-4 gap-2">
            <Plus className="w-4 h-4" /> Add Service
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:shadow-card transition-shadow"
            >
              <GripVertical className="w-4 h-4 text-muted-foreground/30 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{s.desc}</p>
                {s.bullets?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {s.bullets.slice(0, 4).map((b) => (
                      <span key={b} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">{b}</span>
                    ))}
                    {s.bullets.length > 4 && (
                      <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">+{s.bullets.length - 4} more</span>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(s)}>
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteId(s.id)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Service" : "Add Service"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Title *</Label>
              <Input
                placeholder="e.g. Talent Acquisition"
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Description</Label>
              <Textarea
                placeholder="Brief description of this service…"
                rows={3}
                value={form.desc}
                onChange={(e) => setForm((p) => ({ ...p, desc: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Bullets (one per line)</Label>
              <Textarea
                placeholder={"Permanent Hiring\nContract Staffing\nExecutive Search"}
                rows={4}
                value={form.bullets}
                onChange={(e) => setForm((p) => ({ ...p, bullets: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Icon Name</Label>
              <Input
                placeholder="e.g. Users, Globe, Calculator"
                value={form.icon}
                onChange={(e) => setForm((p) => ({ ...p, icon: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground">Use any Lucide icon name (PascalCase)</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Service"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Service?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The service will be removed from the website.
            </AlertDialogDescription>
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
