import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

interface BlogPost {
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

function formatDate(ts: any): string {
  if (!ts) return "";
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [others, setOthers] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const snap = await getDoc(doc(db, "blogs", slug));
        if (snap.exists()) {
          const post = { id: snap.id, ...(snap.data() as Omit<BlogPost, "id">) };
          setArticle(post);
          // Fetch others
          try {
            const q = query(collection(db, "blogs"), orderBy("order", "asc"));
            const allSnap = await getDocs(q);
            const allPosts = allSnap.docs
              .map((d) => ({ id: d.id, ...(d.data() as Omit<BlogPost, "id">) }))
              .filter((p) => p.id !== slug)
              .slice(0, 3);
            setOthers(allPosts);
          } catch {}
        } else {
          setArticle(null);
        }
      } catch {
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <p className="text-muted-foreground">This post doesn't exist or may have been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        {article.imageUrl && (
          <div className="absolute inset-0">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          </div>
        )}
        {!article.imageUrl && <div className="absolute inset-0 bg-gradient-subtle" />}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {article.tag && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                  <Tag className="w-3 h-3" /> {article.tag}
                </span>
              )}
              {article.readTime && (
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{formatDate(article.createdAt)}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground max-w-3xl">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Lead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 pb-10 border-b border-border"
            >
              {article.description}
            </motion.p>

            {/* Markdown content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="prose-blog"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
            </motion.div>

            {/* CTA */}
            <AnimatedSection className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/15 text-center">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Need Help?</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Talk to our team</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                TalentAccel helps startups and growing companies solve exactly these challenges. Book a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* More articles */}
      {others.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">More Insights</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((a) => (
                <Link key={a.id} to={`/blog/${a.id}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col overflow-hidden"
                  >
                    {a.imageUrl && (
                      <div className="w-full h-36 overflow-hidden">
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
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default BlogPost;
