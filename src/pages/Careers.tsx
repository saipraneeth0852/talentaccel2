import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Briefcase, Users, ArrowRight, Star, Rocket, Heart, Target, Globe, CheckCircle2 } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { HeroImagePanel } from "@/components/HeroImagePanel";
import { JobApplicationModal } from "@/components/JobApplicationModal";
import { SEO } from "@/components/SEO";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { careerSeedData } from "@/lib/careerSeedData";

const perks = [
  { icon: Briefcase, title: "Meaningful Work", desc: "Help build the teams that power India's fastest-growing startups and enterprises." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside experienced HR and talent professionals in a high-growth environment." },
  { icon: ArrowRight, title: "Growth Path", desc: "Clear career progression with learning opportunities and mentorship from leadership." },
];

interface CareerRole {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  order?: number;
  experience?: string;
  summary?: string;
  workMode?: string;
}

const curatedOpenRoles: CareerRole[] = careerSeedData.map((role, index) => ({
  id: `curated-${index}-${role.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  ...role,
}));

const mergeRoles = (remoteRoles: CareerRole[]) => {
  const roleMap = new Map<string, CareerRole>();

  [...remoteRoles, ...curatedOpenRoles].forEach((role, index) => {
    const key = `${role.title.toLowerCase()}::${role.location.toLowerCase()}`;
    roleMap.set(key, {
      ...roleMap.get(key),
      ...role,
      id: role.id || `${key}-${index}`,
      order: role.order ?? index,
    });
  });

  return Array.from(roleMap.values()).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
};

const Careers = () => {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Dynamic Roles State
  const [openRoles, setOpenRoles] = useState<CareerRole[]>(curatedOpenRoles);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [applyRole, setApplyRole] = useState<CareerRole | null>(null);
  const careerBadgeClass = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8 shadow-sm";
  const careerBadgeDotClass = "w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(239,90,57,0.8)] animate-pulse";

  useEffect(() => {
    const fetchOpenings = async () => {
      try {
        const snap = await getDocs(collection(db, "careers"));
        const roles = snap.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<CareerRole, "id">) }));
        setOpenRoles(mergeRoles(roles));
      } catch {
        setOpenRoles(curatedOpenRoles);
      } finally {
        setLoadingRoles(false);
      }
    };
    fetchOpenings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      await addDoc(collection(db, "jobApplications"), {
        ...form,
        cvFileName: file?.name ?? "",
        source: "talent-network",
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email your CV directly to hr@talentaccel.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Careers at TalentAccel" 
        description="Join a team that's accelerating talent and enabling growth for startups and enterprises across India. We're looking for driven people."
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px] pointer-events-none" aria-hidden="true" />
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={careerBadgeClass}
              >
                <span className={careerBadgeDotClass} />
                Careers
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-title mb-6"
              >
                Grow with{" "}
                <span className="text-gradient-accent">TalentAccel</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="page-subtitle"
              >
                Join a team helping ambitious companies build stronger people systems, better hiring engines, and more resilient growth across India and beyond.
              </motion.p>
            </div>
            <HeroImagePanel
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              alt="Careers Visual"
              className="w-full max-w-[34rem] lg:justify-self-end"
              imageClassName="h-[280px] sm:h-[360px] lg:h-[500px]"
              glowClassName="top-14 bottom-4 from-primary/16 via-primary/8 to-secondary/22"
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <div className={careerBadgeClass}>
              <span className={careerBadgeDotClass} />
              Why Join Us
            </div>
            <h2 className="section-title mb-4">Why Work at TalentAccel</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <div className={careerBadgeClass}>
              <span className={careerBadgeDotClass} />
              Open Positions
            </div>
            <h2 className="section-title mb-4">Current Openings</h2>
          </AnimatedSection>

          {loadingRoles ? (
             <div className="flex justify-center items-center py-12">
               <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
             </div>
          ) : openRoles.length > 0 ? (
            <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
              {openRoles.map((role) => (
                <StaggerItem key={role.id || role.title}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{role.dept}</span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">{role.location}</span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">{role.type}</span>
                        {role.experience ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/60 text-foreground text-xs font-semibold">{role.experience}</span>
                        ) : null}
                        {role.workMode ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">{role.workMode}</span>
                        ) : null}
                      </div>
                      {role.summary ? (
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{role.summary}</p>
                      ) : null}
                    </div>
                    <button
                      onClick={() => setApplyRole(role)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap flex-shrink-0 self-start"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-12 max-w-2xl mx-auto bg-muted/30 rounded-2xl border border-border">
              <Briefcase className="w-8 h-8 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground font-medium">No open positions at the moment.</p>
              <p className="text-sm text-muted-foreground mt-1">Check back later or join our talent network below.</p>
            </div>
          )}
        </div>
      </section>

      {/* CV Upload / Talent Network */}
      <section className="py-16 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection className="h-full flex flex-col">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Talent Network</p>
              <h2 className="section-title mb-4">Don't See a Role? Join Our Network</h2>
              <p className="section-subtitle mb-6">
                Share your profile once, and we'll keep you in mind for roles that align with your strengths, ambitions, and preferred direction of growth.
              </p>
              <ul className="space-y-3">
                {[
                  "Be considered for future openings",
                  "Get matched to opportunities across our client network",
                  "Receive updates on roles in your domain",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-card border border-border shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                
                <h4 className="font-bold text-foreground text-md mb-4 flex items-center gap-2 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-primary" />
                  </div>
                  What Happens Next?
                </h4>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                      <span className="text-[10px] font-bold text-foreground">1</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Profile Review</h5>
                      <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">Our recruitment team reviews every CV to understand your core strengths and aspirations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                      <span className="text-[10px] font-bold text-foreground">2</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Smart Mapping</h5>
                      <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">We map your capabilities against emerging requirements from our top startup / enterprise clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                      <span className="text-[10px] font-bold text-foreground">3</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Priority Outreach</h5>
                      <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">When an opening aligns with your goals, we reach out directly for an expedited interview.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="h-full flex flex-col">
              {submitted ? (
                <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-card border border-border shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">You're in the Network!</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Your CV has been submitted. We'll reach out when a role matching your profile opens up.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-between space-y-4 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="text-lg font-bold text-foreground mb-2">Submit Your CV</h3>
                  <div>
                    <label htmlFor="cv-name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Full Name *</label>
                    <input
                      id="cv-name"
                      name="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="cv-email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email *</label>
                    <input
                      id="cv-email"
                      name="email"
                      type="email"
                      required
                      maxLength={150}
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="cv-phone" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Phone</label>
                    <input
                      id="cv-phone"
                      name="phone"
                      maxLength={20}
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="cv-role" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Role / Domain of Interest</label>
                    <input
                      id="cv-role"
                      name="role"
                      maxLength={100}
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="e.g. Recruiter, HR Operations, Sales"
                    />
                  </div>
                  <div>
                    <label htmlFor="cv-file" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Upload CV</label>
                    <label htmlFor="cv-file" className="flex flex-col items-center justify-center gap-3 w-full h-32 rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-muted/30 hover:bg-primary/5 transition-all cursor-pointer">
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {file ? file.name : "Click to upload PDF or DOCX"}
                      </span>
                      <input
                        id="cv-file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  </div>
                  {submitError && <p className="text-sm text-destructive">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting…" : <><span>Submit to Talent Network</span> <ArrowRight className="w-4 h-4" /></>}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to let TalentAccel contact you about relevant opportunities.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Life at TalentAccel */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <div className={careerBadgeClass}>
              <span className={careerBadgeDotClass} />
              Life at TalentAccel
            </div>
            <h2 className="section-title mb-4">
              Where High Standards<br className="hidden sm:block" /> Meet Human Connection
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Ambition without ego. Speed without shortcuts. We hold each other to a high bar — and genuinely enjoy the climb.
            </p>
          </AnimatedSection>

          {/* Stats strip */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-14 max-w-3xl mx-auto">
              {[
                { value: "94%", label: "Team satisfaction score" },
                { value: "40+", label: "Passionate people & growing" },
                { value: "3×", label: "Avg. promotions per team member" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Bento photo grid */}
          <AnimatedSection className="mb-14 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

              {/* Large feature card with quote overlay */}
              <div className="col-span-2 rounded-2xl overflow-hidden relative" style={{ minHeight: "280px" }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="TalentAccel team collaborating"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="text-white font-semibold text-base md:text-lg leading-snug max-w-xs">
                    "The energy here is unlike anywhere I've worked. High bar, real support."
                  </p>
                  <p className="text-white/60 text-xs mt-2 font-medium">— Priya, Talent Acquisition Lead</p>
                </div>
              </div>

              {/* Culture proof card */}
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex flex-col justify-between p-5 md:p-6 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -right-2 w-14 h-14 bg-white/5 rounded-full" />
                <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3 relative z-10">Culture Proof</p>
                <p className="text-white font-bold text-base md:text-lg leading-snug relative z-10">
                  8 in 10 of our hires come through a team referral.
                </p>
                <p className="text-white/60 text-xs mt-3 leading-relaxed relative z-10">
                  When your team refers their best friends, that says everything.
                </p>
              </div>

              {/* Photo 2 */}
              <div className="rounded-2xl overflow-hidden relative" style={{ minHeight: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                  alt="Team strategy session"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold">Strategy Days</span>
              </div>

              {/* Photo 3 */}
              <div className="rounded-2xl overflow-hidden relative" style={{ minHeight: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
                  alt="Team celebrating wins"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold">Celebrating Wins</span>
              </div>

            </div>
          </AnimatedSection>

          {/* Culture pillars */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Built to Move",
                desc: "We ship every week. Feedback is instant, decisions are fast, and the work carries real stakes.",
              },
              {
                icon: Heart,
                title: "Human at Heart",
                desc: "We debate ideas hard and treat people well. That's not a paradox — it's the only way we know how.",
              },
              {
                icon: Target,
                title: "Own Your Impact",
                desc: "No hand-holding, no red tape. You'll see exactly how your work changes things — for the team and clients.",
              },
              {
                icon: Globe,
                title: "Always Growing",
                desc: "Learning isn't saved for annual reviews. Stretch projects, mentorship, and investment in you are built into the day-to-day.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="group p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* Application Modal */}
      {applyRole && (
        <JobApplicationModal role={applyRole} onClose={() => setApplyRole(null)} />
      )}

      <Footer />
    </>
  );
};

export default Careers;
