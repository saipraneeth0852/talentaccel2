import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { HeroImagePanel } from "@/components/HeroImagePanel";
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

const CaseStudiesPage = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
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
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <SEO 
        title="Customer Success Stories" 
        description="Companies that trusted TalentAccel to build their teams and manage their HR operations."
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
                Case Studies
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-title mb-4"
              >
                Real Results from{" "}
                <span className="text-gradient-accent">Real Companies</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="page-subtitle"
              >
                Explore how companies partnered with TalentAccel to solve hiring bottlenecks, strengthen operations, and build more scalable people foundations.
              </motion.p>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Case Studies Visual"
              className="lg:justify-self-end"
              imageClassName="h-[250px] sm:h-[320px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : cases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No case studies yet. Check back soon.</p>
            </div>
          ) : (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <StaggerItem key={c.id}>
                  <Link to={`/case-studies/${c.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col cursor-pointer overflow-hidden"
                    >
                      {c.imageUrl ? (
                        <div className="w-full h-44 overflow-hidden bg-muted">
                          <img
                            src={c.imageUrl}
                            alt={c.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-44 bg-muted/50 flex items-center justify-center">
                          <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-primary" />
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
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.description}</p>
                        <div className="flex items-center justify-between">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-hero p-12 lg:p-20 text-center">
              <h2 className="cta-title text-primary-foreground mb-5">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="cta-subtitle text-primary-foreground/80 mb-10 mx-auto">
                Build your next phase with a partner that can help you hire faster, stay compliant, and scale your team with more confidence.
              </p>
              <a
                href="mailto:biz@talentaccel.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
