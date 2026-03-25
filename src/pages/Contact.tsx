import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0A${form.message}`;
    window.location.href = `mailto:hr@talentaccel.com?subject=Enquiry from ${form.name} — ${form.service}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
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
      </section>

      {/* Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <AnimatedSection className="space-y-8">
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

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-bold text-foreground mb-2">Free HR Audit</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We offer a free workplace audit to understand your current HR processes, gaps, and compliance needs before recommending any solution.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-card border border-border shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Ravi Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="ravi@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Company Name</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Service You Need</label>
                  <select
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
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your hiring needs, team size, or any specific challenges…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
