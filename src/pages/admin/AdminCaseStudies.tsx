import { useEffect, useRef, useState } from "react";
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
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
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
import { Plus, Pencil, Trash2, FileText, Upload, X, Download } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { seedCaseStudies } from "@/lib/seedData";

interface Metric { value: string; label: string; }

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: Metric[];
  results: string[];
  imageUrl: string;
  order: number;
}

const emptyMetrics: Metric[] = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];

const emptyForm = {
  tag: "",
  title: "",
  description: "",
  challenge: "",
  solution: "",
  outcome: "",
  metrics: emptyMetrics,
  results: "",
  imageUrl: "",
};

export default function AdminCaseStudies() {
  const [items, setItems] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<CaseStudy | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "caseStudies"), orderBy("order", "asc"));
      const snap = await getDocs(q);
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
    } catch {
      try {
        const snap = await getDocs(collection(db, "caseStudies"));
        setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
      } catch (e: any) {
        toast.error("Could not load case studies: " + (e?.message || "Check Firestore setup"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (cs: CaseStudy) => {
    setEditing(cs);
    const metrics: Metric[] = Array.isArray(cs.metrics) && cs.metrics.length === 3
      ? cs.metrics
      : emptyMetrics;
    setForm({
      tag: cs.tag ?? "",
      title: cs.title ?? "",
      description: cs.description ?? "",
      challenge: cs.challenge ?? "",
      solution: cs.solution ?? "",
      outcome: cs.outcome ?? "",
      metrics,
      results: Array.isArray(cs.results) ? cs.results.join("\n") : "",
      imageUrl: cs.imageUrl ?? "",
    });
    setDialogOpen(true);
  };

  const setMetric = (i: number, field: "value" | "label", val: string) => {
    setForm((p) => {
      const m = [...p.metrics];
      m[i] = { ...m[i], [field]: val };
      return { ...p, metrics: m };
    });
  };

  const handleFileUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `case-studies/${Date.now()}_${file.name}`);
      const task = uploadBytesResumable(storageRef, file);
      task.on(
        "state_changed",
        (snap) => setUploadProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
        reject,
        async () => {
          const url = await getDownloadURL(task.snapshot.ref);
          setUploadProgress(null);
          resolve(url);
        }
      );
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await handleFileUpload(file);
      setForm((p) => ({ ...p, imageUrl: url }));
      toast.success("Image uploaded");
    } catch {
      toast.error("Upload failed");
    }
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error("Title is required"); return; }
    setSaving(true);
    const data = {
      tag: form.tag.trim(),
      title: form.title.trim(),
      description: form.description.trim(),
      challenge: form.challenge.trim(),
      solution: form.solution.trim(),
      outcome: form.outcome.trim(),
      metrics: form.metrics.map((m) => ({ value: m.value.trim(), label: m.label.trim() })),
      results: form.results.split("\n").map((r) => r.trim()).filter(Boolean),
      imageUrl: form.imageUrl.trim(),
      order: editing?.order ?? items.length,
      updatedAt: serverTimestamp(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, "caseStudies", editing.id), data);
        toast.success("Case study updated");
      } else {
        await addDoc(collection(db, "caseStudies"), { ...data, createdAt: serverTimestamp() });
        toast.success("Case study added");
      }
      setDialogOpen(false);
      fetchItems();
    } catch (e: any) {
      toast.error(e.message || "Failed to save");
    }
    setSaving(false);
  };

  const handleSeedDefaults = async () => {
    if (!window.confirm(`Import ${seedCaseStudies.length} default case studies into Firestore. Continue?`)) return;
    setSaving(true);
    try {
      for (const cs of seedCaseStudies) {
        await addDoc(collection(db, "caseStudies"), {
          ...cs,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      toast.success(`Imported ${seedCaseStudies.length} default case studies`);
      fetchItems();
    } catch (e: any) {
      toast.error(e.message || "Import failed");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const item = items.find((i) => i.id === deleteId);
      await deleteDoc(doc(db, "caseStudies", deleteId));
      if (item?.imageUrl) {
        try { await deleteObject(ref(storage, item.imageUrl)); } catch {}
      }
      toast.success("Case study deleted");
      fetchItems();
    } catch (e: any) {
      toast.error(e.message || "Failed to delete");
    }
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Case Studies</h1>
          <p className="text-sm text-muted-foreground mt-1">{items.length} case stud{items.length !== 1 ? "ies" : "y"}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSeedDefaults} disabled={saving} className="gap-2">
            <Download className="w-4 h-4" /> Import Defaults
          </Button>
          <Button onClick={openNew} className="gap-2">
            <Plus className="w-4 h-4" /> Add Case Study
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
          <FileText className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No case studies yet.</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button variant="outline" onClick={handleSeedDefaults} disabled={saving} className="gap-2">
              <Download className="w-4 h-4" /> Import Defaults
            </Button>
            <Button onClick={openNew} className="gap-2">
              <Plus className="w-4 h-4" /> Add Case Study
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((cs) => (
            <div key={cs.id} className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-card transition-shadow">
              {cs.imageUrl && (
                <img src={cs.imageUrl} alt={cs.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {cs.tag && (
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cs.tag}</span>
                  )}
                  {Array.isArray(cs.metrics) && cs.metrics.filter(m => m.value).map((m) => (
                    <span key={m.label} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground">{cs.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{cs.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(cs)}>
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteId(cs.id)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Case Study" : "Add Case Study"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Tag</Label>
                <Input placeholder="e.g. SaaS Startup" value={form.tag} onChange={(e) => setForm((p) => ({ ...p, tag: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label>Title *</Label>
                <Input placeholder="Case study title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Short Description</Label>
              <Textarea rows={2} placeholder="One-line summary shown on cards" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
            </div>

            <div className="space-y-1.5">
              <Label>The Challenge</Label>
              <Textarea rows={3} placeholder="What problem did the client face?" value={form.challenge} onChange={(e) => setForm((p) => ({ ...p, challenge: e.target.value }))} />
            </div>

            <div className="space-y-1.5">
              <Label>Our Solution</Label>
              <Textarea rows={3} placeholder="How did TalentAccel solve it?" value={form.solution} onChange={(e) => setForm((p) => ({ ...p, solution: e.target.value }))} />
            </div>

            <div className="space-y-1.5">
              <Label>The Outcome</Label>
              <Textarea rows={2} placeholder="What was the result?" value={form.outcome} onChange={(e) => setForm((p) => ({ ...p, outcome: e.target.value }))} />
            </div>

            <div className="space-y-2">
              <Label>Key Metrics (3 numbers)</Label>
              <div className="grid grid-cols-3 gap-3">
                {form.metrics.map((m, i) => (
                  <div key={i} className="space-y-1.5 p-3 bg-muted/40 rounded-xl">
                    <Input
                      placeholder="Value e.g. 15"
                      value={m.value}
                      onChange={(e) => setMetric(i, "value", e.target.value)}
                    />
                    <Input
                      placeholder="Label e.g. Engineers Hired"
                      value={m.label}
                      onChange={(e) => setMetric(i, "label", e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Key Results</Label>
              <Textarea
                rows={4}
                placeholder={"One result per line:\nHired 15 engineers in 2 months\nReduced hiring time by 40%"}
                value={form.results}
                onChange={(e) => setForm((p) => ({ ...p, results: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground">One bullet point per line</p>
            </div>

            <div className="space-y-1.5">
              <Label>Cover Image</Label>
              <div className="space-y-2">
                {form.imageUrl && (
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-border">
                    <img src={form.imageUrl} alt="Cover" className="w-full h-full object-cover" />
                    <button
                      onClick={() => setForm((p) => ({ ...p, imageUrl: "" }))}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
                {uploadProgress !== null && (
                  <div className="space-y-1">
                    <Progress value={uploadProgress} className="h-1.5" />
                    <p className="text-xs text-muted-foreground">{uploadProgress}% uploaded</p>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                <Button type="button" variant="outline" size="sm" className="gap-2 w-full" onClick={() => fileRef.current?.click()}>
                  <Upload className="w-3.5 h-3.5" />
                  {form.imageUrl ? "Replace Image" : "Upload Image"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">or paste URL below</p>
                <Input placeholder="https://…" value={form.imageUrl} onChange={(e) => setForm((p) => ({ ...p, imageUrl: e.target.value }))} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving || uploadProgress !== null}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Case Study"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Case Study?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone. The image will also be deleted.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive hover:bg-destructive/90 text-destructive-foreground" onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
