import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Metric { value: string; label: string; }

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: Metric[];
}

export const CaseStudies = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "caseStudies"), orderBy("order", "asc"), limit(2));
        const snap = await getDocs(q);
        setCases(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
      } catch {
        try {
          const snap = await getDocs(collection(db, "caseStudies"));
          setCases(snap.docs.slice(0, 2).map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
        } catch {}
      }
    };
    fetch();
  }, []);

  if (cases.length === 0) return null;

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Results</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from companies that trusted TalentAccel to build their teams.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <StaggerItem key={c.id}>
              <Link to="/case-studies" className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4">
                    {c.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4">{c.title}</h3>
                  {Array.isArray(c.metrics) && c.metrics.some(m => m.value) && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {c.metrics.map((m, i) => (
                        <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                          <div className="text-2xl font-extrabold text-foreground">{m.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                    Read full case study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
