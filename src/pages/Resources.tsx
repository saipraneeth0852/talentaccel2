import { useEffect, useRef, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { TalentEcosystem } from "@/components/TalentEcosystem";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

function useScrollArrows(ref: React.RefObject<HTMLDivElement>) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });
  };

  return { canLeft, canRight, scroll };
}

const ResourcesPage = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingCases, setLoadingCases] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const casesScrollRef = useRef<HTMLDivElement>(null);
  const postsScrollRef = useRef<HTMLDivElement>(null);

  const casesArrows = useScrollArrows(casesScrollRef);
  const postsArrows = useScrollArrows(postsScrollRef);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const q = query(collection(db, "caseStudies"), orderBy("order", "asc"));
        const snap = await getDocs(q);
        setCases(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
      } catch {
        try {
          const snap = await getDocs(collection(db, "caseStudies"));
          setCases(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
        } catch {}
      } finally {
        setLoadingCases(false);
      }
    };

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
        setLoadingPosts(false);
      }
    };

    fetchCases();
    fetchPosts();
  }, []);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Resources | TalentAccel"
        description="Explore our Talent Ecosystem, successful Case Studies, and expert HR Insights."
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px] pointer-events-none" aria-hidden="true" />
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
                Resources
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-title mb-6"
              >
                Insights, Success Stories &{" "}
                <span className="text-gradient-accent">Ecosystem</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="page-subtitle"
              >
                Discover how TalentAccel helps companies scale properly. Browse our talent ecosystem mapping, read past success stories, and stay updated with expert HR blogs.
              </motion.p>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Resources Visual"
              className="w-full max-w-[34rem] lg:justify-self-end"
              imageClassName="h-[280px] sm:h-[360px] lg:h-[500px]"
              glowClassName="top-14 bottom-4 from-primary/16 via-primary/8 to-secondary/22"
            />
          </div>
        </div>
      </section>

      {/* ── Talent Ecosystem ── */}
      <div id="talent-ecosystem" className="scroll-mt-20">
        <TalentEcosystem />
      </div>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="relative py-12 lg:py-16 bg-background scroll-mt-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        {/* Header */}
        <AnimatedSection className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
              Impact
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Customer{" "}
              <span className="text-gradient-accent">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real results from real companies that partnered with TalentAccel.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        {loadingCases ? (
          <div className="flex justify-center p-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : cases.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">No case studies yet.</p>
        ) : (
          <div className="relative w-full max-w-[1600px] mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            {/* Overlay arrows */}
            {casesArrows.canLeft && (
              <button
                onClick={() => casesArrows.scroll("left")}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1 pl-3 pr-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
            )}
            {casesArrows.canRight && (
              <button
                onClick={() => casesArrows.scroll("right")}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1 pl-4 pr-3 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity duration-200"
                aria-label="Scroll right"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <div
              ref={casesScrollRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 md:px-8 lg:px-12 pb-6 pt-2"
            >
              {cases.map((c, i) => (
                <motion.div
                  key={c.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={cardVariants}
                  className="min-w-[300px] max-w-[320px] sm:min-w-[380px] sm:max-w-[380px] shrink-0 snap-start"
                >
                  <Link to={`/case-studies/${c.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                      transition={{ duration: 0.2 }}
                      className="group rounded-2xl bg-card border border-border h-full flex flex-col cursor-pointer overflow-hidden shadow-card"
                    >
                      {c.imageUrl ? (
                        <div className="w-full h-48 overflow-hidden bg-muted relative">
                          <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <Trophy className="w-10 h-10 text-primary/30" />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4 self-start">
                          {c.tag}
                        </span>
                        <h3 className="font-bold text-foreground mb-3 leading-snug text-base">{c.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{c.description}</p>
                        <div className="mt-5 pt-4 border-t border-border/60">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                            Read study <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Insights ── */}
      <section id="blog" className="relative py-12 lg:py-16 scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        {/* Header */}
        <AnimatedSection className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
              Insights
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              HR & Talent{" "}
              <span className="text-gradient-accent">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Practical guides and expert insights on HR operations from our team.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        {loadingPosts ? (
          <div className="flex justify-center p-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">No posts yet.</p>
        ) : (
          <div className="relative w-full max-w-[1600px] mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none" />
            {/* Overlay arrows */}
            {postsArrows.canLeft && (
              <button
                onClick={() => postsArrows.scroll("left")}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-200"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            {postsArrows.canRight && (
              <button
                onClick={() => postsArrows.scroll("right")}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-200"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <div
              ref={postsScrollRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 md:px-8 lg:px-12 pb-6 pt-2"
            >
              {posts.map((a, i) => (
                <motion.div
                  key={a.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={cardVariants}
                  className="min-w-[300px] max-w-[320px] sm:min-w-[380px] sm:max-w-[380px] shrink-0 snap-start"
                >
                  <Link to={`/blog/${a.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                      transition={{ duration: 0.2 }}
                      className="group rounded-2xl bg-card border border-border h-full flex flex-col cursor-pointer overflow-hidden shadow-card"
                    >
                      {a.imageUrl ? (
                        <div className="w-full h-44 overflow-hidden relative">
                          <img src={a.imageUrl} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      ) : (
                        <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-primary/30" />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                            {a.tag}
                          </span>
                          <span className="text-xs text-muted-foreground">{formatDate(a.createdAt)}</span>
                        </div>
                        <h3 className="font-bold text-foreground mb-2 leading-snug text-base line-clamp-2">{a.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">{a.description}</p>
                        <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{a.readTime}</span>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                            Read more <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default ResourcesPage;
