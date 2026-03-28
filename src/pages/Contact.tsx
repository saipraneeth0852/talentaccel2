import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const services = [
  "Talent Acquisition",
  "Dedicated Hiring Teams",
  "Offshore / India Team Buildout",
  "Payroll & Compliance",
  "HR Advisory & Operations",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await addDoc(collection(db, "contactInquiries"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at hr@talentaccel.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact TalentAccel — Get in Touch"
        description="Ready to build your team? Contact TalentAccel for a free consultation on offshore hiring, HR operations, and talent acquisition services in India."
        keywords="contact TalentAccel, HR consultation India, offshore hiring inquiry, startup HR services"
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
                Contact Us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground mb-4"
              >
                Let's Build Your Team{" "}
                <span className="text-gradient-accent">Together</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Reach out for a free consultation. We'll assess your needs and recommend the right HR and talent solution.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80" alt="Contact Visual" className="w-full max-w-lg mx-auto object-cover rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact details */}
            <AnimatedSection className="h-[100%] flex flex-col gap-6 lg:gap-8">
              <div>
                <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-6">Get in Touch</p>
                <div className="space-y-5">
                  <a href="mailto:hr@talentaccel.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-semibold">Email</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">hr@talentaccel.com</p>
                    </div>
                  </a>
                  <a href="tel:+918217642293" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-semibold">Phone</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+91 8217642293</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+91 8431867096</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-semibold">Office</p>
                      <p className="text-sm font-medium text-foreground">Bangalore, India</p>
                    </div>
                  </div>
                  <a href="https://www.talentaccel.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-semibold">Website</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">www.talentaccel.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-2 p-5 sm:p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                
                <h3 className="font-bold text-foreground text-md mb-2 flex items-center gap-2 relative z-10">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free HR Audit
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 relative z-10">
                  We analyze your current state to provide targeted recommendations before you commit to a partnership.
                </p>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-[13px] text-foreground font-medium"><span className="inline-block text-[10px] text-muted-foreground uppercase tracking-wider mr-2">Step 1</span> Discovery Call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-[13px] text-foreground font-medium"><span className="inline-block text-[10px] text-muted-foreground uppercase tracking-wider mr-2">Step 2</span> Process Review</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-[13px] text-foreground font-medium"><span className="inline-block text-[10px] text-muted-foreground uppercase tracking-wider mr-2">Step 3</span> Customized Proposal</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15} className="lg:col-span-2 flex h-full">
              {submitted ? (
                <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-card border border-border shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Message Received!</h2>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Thanks for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-between space-y-4 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card">
                  <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Ravi Kumar"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Work Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        maxLength={150}
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="ravi@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Company Name</label>
                      <input
                        id="contact-company"
                        name="company"
                        maxLength={100}
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        maxLength={20}
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Service You Need</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your hiring needs, team size, or any specific challenges…"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : <><span>Send Message</span> <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
