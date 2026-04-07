import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";

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

const metricIcons = [Users, Clock, TrendingUp];

const CaseStudyPost = () => {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [others, setOthers] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const snap = await getDoc(doc(db, "caseStudies", id));
        if (snap.exists()) {
          const post = { id: snap.id, ...(snap.data() as Omit<CaseStudy, "id">) };
          setStudy(post);
          // Fetch others
          try {
            const q = query(collection(db, "caseStudies"), orderBy("order", "asc"));
            const allSnap = await getDocs(q);
            const allPosts = allSnap.docs
              .map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) }))
              .filter((p) => p.id !== id)
              .slice(0, 3);
            setOthers(allPosts);
          } catch {}
        } else {
          setStudy(null);
        }
      } catch {
        setStudy(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold text-foreground">Case Study NOT Found</h1>
        <p className="text-muted-foreground">The success story you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={study.title}
        description={study.description}
        image={study.imageUrl || undefined}
        keywords={study.tag}
      />
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        {study.imageUrl && (
          <div className="absolute inset-0">
            <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          </div>
        )}
        {!study.imageUrl && <div className="absolute inset-0 bg-gradient-subtle" />}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {study.tag && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                  {study.tag}
                </span>
              )}
            </div>

            <h1 className="page-title max-w-4xl">
              {study.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Lead Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 pb-12 border-b border-border"
            >
              {study.description}
            </motion.p>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-12">
                <AnimatedSection delay={0.2}>
                  <h2 className="section-title mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-loose">
                    {study.challenge}
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <h2 className="section-title mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-loose">
                    {study.solution}
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <h2 className="section-title mb-4">The Outcome</h2>
                  <p className="text-muted-foreground leading-loose">
                    {study.outcome}
                  </p>
                </AnimatedSection>

                {/* Key Results List */}
                {Array.isArray(study.results) && study.results.length > 0 && (
                  <AnimatedSection delay={0.5}>
                    <h2 className="section-title mb-6">Key Operations Delivered</h2>
                    <ul className="space-y-4">
                      {study.results.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                )}
              </div>

              {/* Sidebar Metrics */}
              <div className="md:col-span-4">
                <AnimatedSection delay={0.4} className="sticky top-32 space-y-6">
                  {Array.isArray(study.metrics) && study.metrics.some(m => m.value) && (
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Impact Metrics</h3>
                      <div className="space-y-6">
                        {study.metrics.map((m, idx) => {
                          const Icon = metricIcons[idx] ?? TrendingUp;
                          return (
                            <div key={idx} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-2xl font-extrabold text-foreground leading-none mb-1">{m.value}</div>
                                <div className="text-sm text-muted-foreground">{m.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-gradient-hero border border-transparent">
                    <h3 className="text-xl font-bold text-primary-foreground mb-3">Want similar results?</h3>
                    <p className="text-sm text-primary-foreground/80 mb-6">
                      Let's talk about how TalentAccel can help scale your team and manage HR operations seamlessly.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:opacity-90 transition-all"
                    >
                      Book a Consultation
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More case studies */}
      {others.length > 0 && (
        <section className="py-16 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10 flex items-center justify-between">
              <h2 className="section-title">More Case Studies</h2>
              <Link to="/case-studies" className="text-sm font-semibold text-primary hover:underline">
                View all
              </Link>
            </AnimatedSection>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((c) => (
                <StaggerItem key={c.id}>
                  <Link to={`/case-studies/${c.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col overflow-hidden"
                    >
                      {c.imageUrl ? (
                        <div className="w-full h-36 overflow-hidden bg-muted">
                          <img
                            src={c.imageUrl}
                            alt={c.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-36 bg-muted/50 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          </span>
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center mb-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                            {c.tag}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground mb-3 leading-snug text-base">{c.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">{c.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                            Read study <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default CaseStudyPost;
