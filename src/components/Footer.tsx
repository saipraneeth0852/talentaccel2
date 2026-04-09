import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Talent Acquisition", href: "/services/talent-acquisition" },
    { label: "Dedicated Teams", href: "/services/dedicated-teams" },
    { label: "Offshore Buildout", href: "/offshore-teams" },
    { label: "Payroll & Compliance", href: "/services/hr-operations" },
    { label: "HR Advisory", href: "/services/hr-advisory" },
  ],
  Industries: [
    { label: "SaaS & Product", href: "/#industries" },
    { label: "AI / Data Science", href: "/#industries" },
    { label: "FinTech", href: "/#industries" },
    { label: "Telecom", href: "/#industries" },
    { label: "Startups & GCCs", href: "/#industries" },
  ],
  Resources: [
    { label: "Blog", href: "/resources#blog" },
    { label: "Hiring Guides", href: "/resources#blog" },
    { label: "HR Templates", href: "/resources#blog" },
    { label: "Case Studies", href: "/resources#case-studies" },
  ],
};

const FooterLogo = ({ className }: { className?: string }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TalentAccel logo mark"
  >
    <g clipPath="url(#logoClip)">
      <path d="M0 85.3333V32H64L106.667 85.3333H0Z" fill="white" />
      <path d="M106.667 85.3334H53.3335V192H106.667V85.3334Z" fill="white" />
      <path d="M106.667 85.3334H53.3335V192H106.667V85.3334Z" fill="url(#logoGrad)" fillOpacity="0.4" />
      <path d="M138.667 0L117.333 32H160V74.6667L192 53.3333V0H138.667Z" fill="#00E59D" />
    </g>
    <defs>
      <linearGradient id="logoGrad" x1="80.0002" y1="105.333" x2="64.0002" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0" />
        <stop offset="1" />
      </linearGradient>
      <clipPath id="logoClip">
        <rect width="192" height="192" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Footer = () => (
  <footer className="bg-[#1378FF] text-white pt-16 pb-32 lg:pb-6">
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 mb-10">
        {/* Brand column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2.5 mb-6">
            <FooterLogo />
            <span className="text-[22px] font-bold tracking-tight">
              Talent<span className="text-[#00E59D]">Accel</span>
            </span>
          </div>
          <p className="text-white text-[15px] leading-relaxed mb-6 max-w-[280px] font-medium">
            Helping growing companies build strong teams and thoughtful people operations.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://facebook.com/talentaccel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1877F2]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/talentaccel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E1306C]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/talentaccel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>
            <a
              href="https://pinterest.com/talentaccel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on Pinterest"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E60023]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </a>
            <a
              href="https://x.com/talentaccel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on X (formerly Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#1DA1F2]"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.404z" />
              </svg>
            </a>
            <a
              href="https://wa.me/918217642293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm transition-all duration-200 hover:opacity-90"
              aria-label="TalentAccel on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#25D366]"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403H12.002a9.27 9.27 0 0 1-4.467-1.155l-.32-.19-3.322.872.887-3.237-.21-.334a9.24 9.24 0 0 1-1.418-4.908c0-5.111 4.161-9.272 9.274-9.272 2.477 0 4.805.964 6.556 2.716 1.75 1.751 2.714 4.08 2.713 6.556 0 5.111-4.16 9.273-9.272 9.273m8.211-17.487A10.611 10.611 0 0 0 12.002 2.011c-5.875 0-10.655 4.782-10.657 10.659 0 1.878.49 3.71 1.42 5.353l-1.51 5.51 5.637-1.479a10.608 10.608 0 0 0 5.099 1.309h.005c5.875 0 10.656-4.783 10.658-10.659a10.59 10.59 0 0 0-3.139-7.531z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-bold text-[16px] mb-6 text-white">{title}</h4>
            <ul className="space-y-4">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-[14px] text-white hover:text-white transition-colors duration-200 font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact & Addresses Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-t border-white/10">
        <div>
          <h4 className="font-bold text-[16px] mb-6 text-white">Get in Touch</h4>
          <div className="space-y-3">
            <a
              href="mailto:biz@talentaccel.com"
              className="flex items-center gap-3 text-[14px] text-white hover:text-white transition-colors font-medium"
            >
              <Mail className="w-[18px] h-[18px] text-white/90" strokeWidth={1.5} /> biz@talentaccel.com
            </a>
            <a
              href="tel:+918217642293"
              className="flex items-center gap-3 text-[14px] text-white hover:text-white transition-colors font-medium"
            >
              <Phone className="w-[18px] h-[18px] text-white/90" strokeWidth={1.5} /> +91 8217642293
            </a>
            <a
              href="tel:+918431867096"
              className="flex items-center gap-3 text-[14px] text-white hover:text-white transition-colors font-medium"
            >
              <Phone className="w-[18px] h-[18px] text-white/90" strokeWidth={1.5} /> +91 8431867096
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[16px] mb-6 text-white">Corporate Headquarters</h4>
          <div className="flex items-start gap-3 text-[14px] text-white font-medium">
            <MapPin className="w-[18px] h-[18px] text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
            <a
              href="https://maps.google.com/?q=No.+05,+10th+Cross,+Wilson+Garden,+Bangalore+560027,+Karnataka,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed hover:text-white transition-colors"
            >
              No. 05, 10th Cross, Wilson Garden,<br/>Bangalore – 560027, Karnataka, India.
            </a>
          </div>
        </div>

        <div>
           <h4 className="font-bold text-[16px] mb-6 text-white">Operations Office</h4>
           <div className="flex items-start gap-3 text-[14px] text-white font-medium">
             <MapPin className="w-[18px] h-[18px] text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
             <a
               href="https://maps.google.com/?q=No.+22,+2nd+Floor,+Lakeview+Defence+Colony,+Shettihalli,+Jalahalli+West,+Bengaluru+560015"
               target="_blank"
               rel="noopener noreferrer"
               className="leading-relaxed hover:text-white transition-colors"
             >
               No. 22, 2nd Floor, Lakeview Defence Colony,<br/>Shettihalli, Jalahalli West, Bengaluru 560015
             </a>
           </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="text-[13px] text-white/90 font-medium">
          © 2026 TalentAccel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
