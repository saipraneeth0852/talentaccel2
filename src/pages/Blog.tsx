import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

interface BlogPost {
  id: string;
  tag: string;
  title: string;
  description: string;
  readTime: string;
  imageUrl: string;
  order: number;
  createdAt?: any;
}

function formatDate(ts: any): string {
  if (!ts) return "";
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("order", "asc"));
        const snap = await getDocs(q);
        setPosts(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<BlogPost, "id">) })));
      } catch {
        try {
          const snap = await getDocs(collection(db, "blogs"));
          setPosts(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<BlogPost, "id">) })));
        } catch {}
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <SEO
        title="HR Insights & Blog"
        description="Practical guides, case studies, and expert insights on HR operations, offshore hiring, payroll compliance, and building high-performance teams in India."
        keywords="HR blog India, offshore hiring tips, payroll compliance guide, startup HR insights, talent acquisition"
      />
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Insights & Blog
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground mb-4"
              >
                Talent & HR{" "}
                <span className="text-gradient-accent">Insights</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Practical guides on hiring, compliance, and building great teams — from the TalentAccel team.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="Blog Visual" className="w-full max-w-lg mx-auto object-cover rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((a) => (
                <StaggerItem key={a.id}>
                  <Link to={`/blog/${a.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col cursor-pointer overflow-hidden"
                    >
                      {a.imageUrl && (
                        <div className="w-full h-44 overflow-hidden">
                          <img
                            src={a.imageUrl}
                            alt={a.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                            {a.tag}
                          </span>
                          <span className="text-xs text-muted-foreground">{formatDate(a.createdAt)}</span>
                        </div>
                        <h3 className="font-bold text-foreground mb-3 leading-snug text-base">{a.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{a.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{a.readTime}</span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                            Read more <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          <AnimatedSection className="text-center mt-16">
            <p className="text-muted-foreground mb-6">New articles published regularly. Subscribe to stay updated.</p>
            <a
              href="mailto:biz@talentaccel.com?subject=Newsletter Subscription"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all"
            >
              Subscribe for Updates <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
