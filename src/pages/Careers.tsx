import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Briefcase, Users, ArrowRight, Star } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { JobApplicationModal } from "@/components/JobApplicationModal";

const openRoles = [
  { title: "Senior Recruiter", dept: "Talent Acquisition", location: "Bangalore", type: "Full-time" },
  { title: "HR Operations Specialist", dept: "HR Operations", location: "Bangalore", type: "Full-time" },
  { title: "Business Development Manager", dept: "Sales", location: "Bangalore / Remote", type: "Full-time" },
];

const perks = [
  { icon: Briefcase, title: "Meaningful Work", desc: "Help build the teams that power India's fastest-growing startups and enterprises." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside experienced HR and talent professionals in a high-growth environment." },
  { icon: ArrowRight, title: "Growth Path", desc: "Clear career progression with learning opportunities and mentorship from leadership." },
];

const Careers = () => {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "" });
  const [applyRole, setApplyRole] = useState<typeof openRoles[0] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0ARole of Interest: ${form.role}%0A%0APlease find my CV attached.`;
    window.location.href = `mailto:hr@talentaccel.com?subject=CV Submission — ${form.name}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Careers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Grow with{" "}
            <span className="text-gradient-accent">TalentAccel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Join a team that's accelerating talent and enabling growth for startups and enterprises across India. We're always looking for sharp, driven people to join our mission.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Why Join Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Work at TalentAccel</h2>
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
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Open Positions</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Current Openings</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
            {openRoles.map((role) => (
              <StaggerItem key={role.title}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{role.dept}</span>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">{role.location}</span>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">{role.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplyRole(role)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap flex-shrink-0"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CV Upload / Talent Network */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Talent Network</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Don't See a Role? Join Our Network</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upload your CV and join the TalentAccel talent network. When a role that matches your profile opens up, you'll be the first we reach out to.
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
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-2">Submit Your CV</h3>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Role / Domain of Interest</label>
                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="e.g. Recruiter, HR Operations, Sales"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Upload CV</label>
                  <label className="flex flex-col items-center justify-center gap-3 w-full h-32 rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-muted/30 hover:bg-primary/5 transition-all cursor-pointer">
                    <Upload className="w-6 h-6 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {file ? file.name : "Click to upload PDF or DOCX"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Submit to Talent Network <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to let TalentAccel contact you about relevant opportunities.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Life at TalentAccel — image + culture section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Life at TalentAccel</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">A culture built on ambition & care</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We move fast, but we build things right — including our team. Here's a glimpse of what it's like to work with us.
            </p>
          </AnimatedSection>

          {/* Image grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-5xl mx-auto">
            {[
              { bg: "from-primary/20 to-primary/5", label: "Team Meetings", aspect: "md:col-span-2 md:row-span-2" },
              { bg: "from-secondary/20 to-secondary/5", label: "Strategy Sessions", aspect: "" },
              { bg: "from-primary/10 to-secondary/10", label: "Learning Days", aspect: "" },
              { bg: "from-secondary/20 to-primary/10", label: "Celebrations", aspect: "md:col-span-2" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div
                  className={`${item.aspect} rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} border border-border aspect-square flex flex-col items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:scale-[1.02] transition-transform duration-300`}
                >
                  <Star className="w-6 h-6 text-primary/40" />
                  {item.label}
                  <span className="text-xs text-muted-foreground/60">Photo coming soon</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Culture values row */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🚀", title: "Move Fast", desc: "We ship, iterate, and improve — every week." },
              { emoji: "🤝", title: "People First", desc: "Empathy drives how we treat clients, candidates, and each other." },
              { emoji: "📈", title: "Own It", desc: "Take initiative. Your impact is visible and recognized." },
              { emoji: "🌏", title: "Think Big", desc: "We're building towards becoming India's top talent partner." },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-5 rounded-2xl bg-card border border-border shadow-card text-center h-full">
                  <div className="text-3xl mb-3">{v.emoji}</div>
                  <h3 className="font-bold text-foreground mb-1.5">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
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
