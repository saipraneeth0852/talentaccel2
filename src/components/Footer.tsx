import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers",    href: "/careers" },
    { label: "Contact",    href: "/contact" },
  ],
  Services: [
    { label: "Talent Acquisition",   href: "/services/talent-acquisition" },
    { label: "Dedicated Teams",      href: "/services/dedicated-teams" },
    { label: "Offshore Buildout",    href: "/offshore-teams" },
    { label: "Payroll & Compliance", href: "/services/payroll-compliance" },
    { label: "HR Advisory",          href: "/services/hr-advisory" },
  ],
  Industries: [
    { label: "SaaS & Product",    href: "/industries" },
    { label: "AI / Data Science", href: "/industries" },
    { label: "FinTech",           href: "/industries" },
    { label: "Telecom",           href: "/industries" },
    { label: "Startups & GCCs",   href: "/industries" },
  ],
  Resources: [
    { label: "Blog",          href: "/blog" },
    { label: "Hiring Guides", href: "/blog" },
    { label: "HR Templates",  href: "/blog" },
    { label: "Case Studies",  href: "/case-studies" },
  ],
};

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-24 lg:pb-8">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <LogoMark size={28} className="brightness-0 invert" />
            <span className="text-xl font-bold">Talent<span className="text-secondary">Accel</span></span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
            Building the Teams that Accel your Business.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:hr@talentaccel.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> hr@talentaccel.com
            </a>
            <a
              href="tel:+918217642293"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 8217642293
            </a>
            <a
              href="tel:+918431867096"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 8431867096
            </a>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Bangalore, India
            </div>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/90">{title}</h4>
            <ul className="space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} TalentAccel. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/company/talentaccel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            aria-label="TalentAccel on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
