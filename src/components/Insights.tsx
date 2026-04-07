import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { tag: "Hiring", title: "Hiring Strategies for Scaling Startups", desc: "How to build a repeatable hiring process that grows with your company.", read: "5 min" },
  { tag: "Compliance", title: "HR Compliance Checklist for Indian Startups", desc: "Essential compliance steps every startup in India needs to follow.", read: "4 min" },
  { tag: "AI Talent", title: "How to Hire AI Engineers in India", desc: "A practical guide to sourcing and evaluating AI/ML talent in the Indian market.", read: "6 min" },
  { tag: "Offshore", title: "Building Offshore Teams Successfully", desc: "Key lessons from companies that built high-performing distributed teams.", read: "7 min" },
];

export const Insights = () => (
  <section id="insights" className="py-10 lg:py-12">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <AnimatedSection className="text-center mb-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse" />
          Insights
        </div>
        <Link to="/blog" className="block hover:opacity-80 transition-opacity duration-200">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Latest from Our Blog</h2>
        </Link>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Actionable playbooks to help you hire smarter and scale faster.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((a) => (
          <StaggerItem key={a.title}>
            <Link to="/blog">
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col cursor-pointer"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4 w-fit">
                  {a.tag}
                </span>
                <h3 className="font-bold text-foreground mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{a.read} read</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
