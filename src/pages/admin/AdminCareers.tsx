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
import { Plus, Pencil, Trash2, Briefcase } from "lucide-react";
import { toast } from "sonner";

interface CareerRole {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  order: number;
}

const emptyForm = { title: "", dept: "", location: "", type: "Full-time" };

// Original hardcoded data
const initialSeedData = [
  { title: "Senior Recruiter", dept: "Talent Acquisition", location: "Bangalore", type: "Full-time", order: 0 },
  { title: "HR Operations Specialist", dept: "HR Operations", location: "Bangalore", type: "Full-time", order: 1 },
  { title: "Business Development Manager", dept: "Sales", location: "Bangalore / Remote", type: "Full-time", order: 2 },
];

export default function AdminCareers() {
  const [roles, setRoles] = useState<CareerRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<CareerRole | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "careers"), orderBy("order", "asc"));
      const snap = await getDocs(q);
      
      if (snap.empty) {
        // Seed database if completely empty
        const promises = initialSeedData.map(data => 
          addDoc(collection(db, "careers"), { ...data, createdAt: serverTimestamp() })
        );
        await Promise.all(promises);
        toast.success("Migrated legacy hardcoded jobs into the database!");
        
        // Re-fetch after seed
        const newSnap = await getDocs(q);
        setRoles(newSnap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CareerRole, "id">) })));
      } else {
        setRoles(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CareerRole, "id">) })));
      }
    } catch (e: any) {
      toast.error("Could not load roles: " + (e?.message || "Check Firestore setup"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRoles(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (r: CareerRole) => {
    setEditing(r);
    setForm({ title: r.title, dept: r.dept, location: r.location, type: r.type });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error("Title is required"); return; }
    setSaving(true);
    const data = {
      title: form.title.trim(),
      dept: form.dept.trim(),
      location: form.location.trim(),
      type: form.type.trim() || "Full-time",
      order: editing?.order ?? roles.length,
      updatedAt: serverTimestamp(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, "careers", editing.id), data);
        toast.success("Role updated");
      } else {
        await addDoc(collection(db, "careers"), { ...data, createdAt: serverTimestamp() });
        toast.success("Role added");
      }
      setDialogOpen(false);
      fetchRoles();
    } catch (e: any) {
      toast.error(e.message || "Failed to save");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteDoc(doc(db, "careers", deleteId));
      toast.success("Role deleted");
      fetchRoles();
    } catch (e: any) {
      toast.error(e.message || "Failed to delete");
    }
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Careers / Open Positions</h1>
          <p className="text-sm text-muted-foreground mt-1">{roles.length} active job posting{roles.length !== 1 ? "s" : ""}</p>
        </div>
        <Button onClick={openNew} className="gap-2">
          <Plus className="w-4 h-4" /> Add Post
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : roles.length === 0 ? (
        <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
          <Briefcase className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No open roles yet. Add your first one.</p>
          <Button onClick={openNew} variant="outline" className="mt-4 gap-2">
            <Plus className="w-4 h-4" /> Add Post
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {roles.map((r) => (
            <div
              key={r.id}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:shadow-card transition-shadow"
            >
               <Briefcase className="w-5 h-5 text-muted-foreground/40 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground">{r.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{r.dept}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-muted text-muted-foreground rounded-full">{r.location}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">{r.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(r)}>
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteId(r.id)}
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
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Job Posting" : "Add Job Posting"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Job Title *</Label>
              <Input
                placeholder="e.g. Senior Recruiter"
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Department *</Label>
              <Input
                placeholder="e.g. Talent Acquisition"
                value={form.dept}
                onChange={(e) => setForm((p) => ({ ...p, dept: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1.5">
                 <Label>Location *</Label>
                 <Input
                   placeholder="e.g. Bangalore"
                   value={form.location}
                   onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                 />
               </div>
               <div className="space-y-1.5">
                 <Label>Type *</Label>
                 <Input
                   placeholder="e.g. Full-time"
                   value={form.type}
                   onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
                 />
               </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Post Job"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Job Posting?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The role will be removed from the Careers page permanently.
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
