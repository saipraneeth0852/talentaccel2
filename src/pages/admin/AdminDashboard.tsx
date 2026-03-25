import { useEffect, useState } from "react";
import { collection, getCountFromServer, writeBatch, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Briefcase, Building2, FileText, BookOpen, ArrowRight, DatabaseZap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { seedServices, seedIndustries, seedCaseStudies, seedBlogs } from "@/lib/seedData";
import { useQueryClient } from "@tanstack/react-query";

interface StatCard {
  label: string;
  collection: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

const stats: StatCard[] = [
  { label: "Services", collection: "services", icon: Briefcase, href: "/admin/services", color: "bg-blue-50 text-blue-600" },
  { label: "Industries", collection: "industries", icon: Building2, href: "/admin/industries", color: "bg-green-50 text-green-600" },
  { label: "Case Studies", collection: "caseStudies", icon: FileText, href: "/admin/case-studies", color: "bg-purple-50 text-purple-600" },
  { label: "Blog Posts", collection: "blogs", icon: BookOpen, href: "/admin/blogs", color: "bg-orange-50 text-orange-600" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [countsLoaded, setCountsLoaded] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seeded, setSeeded] = useState(false);
  const queryClient = useQueryClient();

  const fetchCounts = async () => {
    const results: Record<string, number> = {};
    await Promise.allSettled(
      stats.map(async (s) => {
        try {
          const snap = await getCountFromServer(collection(db, s.collection));
          results[s.collection] = snap.data().count;
        } catch {
          results[s.collection] = 0;
        }
      })
    );
    setCounts(results);
    setCountsLoaded(true);
  };

  useEffect(() => { fetchCounts(); }, []);

  const isEmpty = countsLoaded && Object.values(counts).every((c) => c === 0);

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const batch = writeBatch(db);
      const ts = serverTimestamp();

      seedServices.forEach((s) => {
        batch.set(doc(collection(db, "services")), { ...s, createdAt: ts, updatedAt: ts });
      });
      seedIndustries.forEach((s) => {
        batch.set(doc(collection(db, "industries")), { ...s, createdAt: ts, updatedAt: ts });
      });
      seedCaseStudies.forEach((s) => {
        batch.set(doc(collection(db, "caseStudies")), { ...s, createdAt: ts, updatedAt: ts });
      });
      seedBlogs.forEach((s) => {
        batch.set(doc(collection(db, "blogs")), { ...s, createdAt: ts, updatedAt: ts });
      });

      await batch.commit();

      // Invalidate frontend cache so website picks up new data immediately
      queryClient.invalidateQueries({ queryKey: ["appData"] });

      setSeeded(true);
      toast.success("All content seeded successfully!");
      fetchCounts();
    } catch (e: any) {
      toast.error(e.message || "Seeding failed. Check Firestore rules.");
    }
    setSeeding(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Overview of your content</p>
      </div>

      {/* Seed banner — only shows when all collections are empty */}
      {isEmpty && !seeded && (
        <div className="mb-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <DatabaseZap className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Database is empty</h3>
            <p className="text-sm text-muted-foreground mt-0.5 mb-4">
              Seed all your existing content (5 services, 6 industries, 2 case studies, 4 blogs) into Firestore with one click.
            </p>
            <Button onClick={handleSeed} disabled={seeding} className="gap-2">
              <DatabaseZap className="w-4 h-4" />
              {seeding ? "Seeding…" : "Seed Initial Content"}
            </Button>
          </div>
        </div>
      )}

      {seeded && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800 font-medium">Content seeded successfully. The website is now reading from Firestore.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              to={s.href}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {countsLoaded ? (counts[s.collection] ?? 0) : "—"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 bg-card border border-border rounded-2xl p-6">
        <h2 className="font-semibold text-foreground mb-1">Quick Actions</h2>
        <p className="text-sm text-muted-foreground mb-4">Jump to a section to manage content</p>
        <div className="flex flex-wrap gap-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                to={s.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-sm font-medium transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                Manage {s.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
