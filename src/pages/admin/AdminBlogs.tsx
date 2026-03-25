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
import MDEditor from "@uiw/react-md-editor";
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
import { Plus, Pencil, Trash2, BookOpen, Upload, X, Clock, Download } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { seedBlogs } from "@/lib/seedData";

interface Blog {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  readTime: string;
  imageUrl: string;
  order: number;
  createdAt?: any;
}

const emptyForm = { tag: "", title: "", description: "", content: "", readTime: "", imageUrl: "" };

export default function AdminBlogs() {
  const [items, setItems] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "blogs"), orderBy("order", "asc"));
      const snap = await getDocs(q);
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Blog, "id">) })));
    } catch {
      try {
        const snap = await getDocs(collection(db, "blogs"));
        setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Blog, "id">) })));
      } catch (e: any) {
        toast.error("Could not load blogs: " + (e?.message || "Check Firestore setup"));
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

  const openEdit = (b: Blog) => {
    setEditing(b);
    setForm({ tag: b.tag, title: b.title, description: b.description, content: b.content ?? "", readTime: b.readTime, imageUrl: b.imageUrl });
    setDialogOpen(true);
  };

  const handleFileUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `blogs/${Date.now()}_${file.name}`);
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
      content: form.content.trim(),
      readTime: form.readTime.trim(),
      imageUrl: form.imageUrl.trim(),
      order: editing?.order ?? items.length,
      updatedAt: serverTimestamp(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, "blogs", editing.id), data);
        toast.success("Blog post updated");
      } else {
        await addDoc(collection(db, "blogs"), { ...data, createdAt: serverTimestamp() });
        toast.success("Blog post added");
      }
      setDialogOpen(false);
      fetchItems();
    } catch (e: any) {
      toast.error(e.message || "Failed to save");
    }
    setSaving(false);
  };

  const handleSeedDefaults = async () => {
    if (!window.confirm(`This will import ${seedBlogs.length} default blog articles into Firestore. Continue?`)) return;
    setSaving(true);
    try {
      for (const blog of seedBlogs) {
        await addDoc(collection(db, "blogs"), {
          ...blog,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      toast.success(`Imported ${seedBlogs.length} default articles`);
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
      await deleteDoc(doc(db, "blogs", deleteId));
      if (item?.imageUrl) {
        try { await deleteObject(ref(storage, item.imageUrl)); } catch {}
      }
      toast.success("Blog post deleted");
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
          <h1 className="text-2xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-sm text-muted-foreground mt-1">{items.length} post{items.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSeedDefaults} disabled={saving} className="gap-2">
            <Download className="w-4 h-4" /> Import Defaults
          </Button>
          <Button onClick={openNew} className="gap-2">
            <Plus className="w-4 h-4" /> Add Post
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
          <BookOpen className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No blog posts yet.</p>
          <Button onClick={openNew} variant="outline" className="mt-4 gap-2">
            <Plus className="w-4 h-4" /> Add Post
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((b) => (
            <div key={b.id} className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-card transition-shadow">
              {b.imageUrl && (
                <img src={b.imageUrl} alt={b.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {b.tag && (
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{b.tag}</span>
                  )}
                  {b.readTime && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {b.readTime}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mt-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{b.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(b)}>
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteId(b.id)}
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
            <DialogTitle>{editing ? "Edit Blog Post" : "Add Blog Post"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Tag</Label>
                <Input placeholder="e.g. Hiring Tips" value={form.tag} onChange={(e) => setForm((p) => ({ ...p, tag: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label>Read Time</Label>
                <Input placeholder="e.g. 5 min read" value={form.readTime} onChange={(e) => setForm((p) => ({ ...p, readTime: e.target.value }))} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Title *</Label>
              <Input placeholder="Blog post title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>Description / Excerpt</Label>
              <Textarea rows={2} placeholder="Short summary shown in the blog listing" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
            </div>
            <div className="space-y-1.5" data-color-mode="light">
              <Label>Full Content (Markdown)</Label>
              <MDEditor
                value={form.content}
                onChange={(val) => setForm((p) => ({ ...p, content: val ?? "" }))}
                height={320}
                preview="edit"
              />
              <p className="text-xs text-muted-foreground">
                Supports **bold**, _italic_, ## headings, bullet lists, {">"} blockquotes, and more.
              </p>
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
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone. The cover image will also be deleted.</AlertDialogDescription>
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
