import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
}

export const CaseStudies = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "caseStudies"), orderBy("order", "asc"), limit(3));
        const snap = await getDocs(q);
        setCases(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
      } catch {
        try {
          const snap = await getDocs(collection(db, "caseStudies"));
          setCases(snap.docs.slice(0, 3).map((d) => ({ id: d.id, ...(d.data() as Omit<CaseStudy, "id">) })));
        } catch {}
      }
    };
    fetch();
  }, []);

  if (cases.length === 0) return null;

  return (
    <section id="case-studies" className="py-16 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
              Impact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground">
              Real outcomes from companies that trusted TalentAccel to build their teams.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all shrink-0"
          >
            View All Work <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <StaggerItem key={c.id}>
              <Link to={`/case-studies/${c.id}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between items-start"
                >
                  <div className="w-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold flex-shrink-0 mb-5">
                      {c.tag}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-6 leading-tight">{c.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200 mt-auto">
                    Read study <ArrowRight className="w-3.5 h-3.5" />
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
