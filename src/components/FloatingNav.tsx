import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Globe, Building2, FileText, Lightbulb, Users, Phone, LayoutGrid, Menu, X } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", hash: "", icon: Home },
  { label: "Services", href: "/#services", hash: "#services", icon: Briefcase },
  { label: "Offshore", href: "/offshore-teams", hash: "", icon: Globe },
  { label: "Industries", href: "/industries", hash: "", icon: Building2 },
  { label: "Case Studies", href: "/case-studies", hash: "", icon: FileText },
  { label: "Blog", href: "/blog", hash: "", icon: Lightbulb },
  { label: "Careers", href: "/careers", hash: "", icon: LayoutGrid },
  { label: "About", href: "/about", hash: "", icon: Users },
  { label: "Contact", href: "/contact", hash: "", icon: Phone },
];

const mobileNavItems = [
  { label: "Home", href: "/", hash: "", icon: Home },
  { label: "Services", href: "/#services", hash: "#services", icon: Briefcase },
  { label: "Case Studies", href: "/case-studies", hash: "", icon: FileText },
  { label: "Contact", href: "/contact", hash: "", icon: Phone },
  { label: "More", action: "menu", icon: Menu },
];

export const FloatingNav = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location.hash]);

  const handleNavClick = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = location.pathname === "/" ? "" : location.pathname;
      const targetPath = path === "/" ? "" : path;

      if (currentPath === targetPath) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        setActiveHash(`#${hash}`);
      }
    } else if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveHash("");
    } else {
      setActiveHash("");
    }
  };

  const isItemActive = (item: any) => {
    if (item.action === "menu") return isMobileMenuOpen;
    if (item.href === "/") {
      return location.pathname === "/" && !activeHash;
    }
    if (item.hash) {
      return location.pathname === "/" && activeHash === item.hash;
    }
    return location.pathname === item.href || location.pathname.startsWith(item.href + "/");
  };

  return (
    <>
      {/* Floating logo at top right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="fixed top-5 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-float hover:scale-105 transition-transform"
      >
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="text-base font-bold text-foreground tracking-tight hidden sm:inline">
            Talent<span className="text-primary">Accel</span>
          </span>
        </Link>
      </motion.div>

      {/* Desktop floating nav */}
      <motion.nav
        initial={{ y: 40, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ left: "50%" }}
        className="fixed bottom-6 z-50 hidden lg:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-float max-w-[98vw] w-fit"
      >
        {navItems.map((item) => {
          const active = isItemActive(item);
          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              )}
            >
              {active && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-[-1] bg-primary/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.label}
            </Link>
          );
        })}
        <Link
          to="/contact"
          onClick={() => handleNavClick("/contact")}
          className="ml-1 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
        >
          Book a Consultation
        </Link>
      </motion.nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-card flex flex-col pt-10 px-6 pb-24 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <LogoMark size={28} />
                <span className="text-xl font-bold text-foreground tracking-tight">
                  Talent<span className="text-primary">Accel</span>
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-muted rounded-full text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2 overflow-y-auto hide-scrollbar pb-12">
               {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isItemActive(item);
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200",
                        active ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted/30 text-foreground hover:bg-muted"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold">{item.label}</span>
                    </Link>
                  )
               })}
               <Link
                 to="/contact"
                 onClick={() => {
                   handleNavClick("/contact");
                   setIsMobileMenuOpen(false);
                 }}
                 className="mt-6 flex items-center justify-center gap-2 w-full py-4 text-base font-bold rounded-2xl bg-secondary text-secondary-foreground text-center shadow-lg hover:opacity-90 transition-opacity"
               >
                 Book a Consultation
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/90 backdrop-blur-xl border-t border-border pb-safe shadow-[0_-8px_32px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around py-2 px-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const active = isItemActive(item);
            
            if (item.action === "menu") {
              return (
                <button
                  key={item.label}
                  onClick={() => setIsMobileMenuOpen(true)}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-1.5 transition-all duration-200 outline-none",
                    isMobileMenuOpen ? "text-primary scale-110" : "text-muted-foreground"
                  )}
                >
                  <div className={cn("p-1 rounded-lg transition-colors", isMobileMenuOpen && "bg-primary/10")}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
                  {isMobileMenuOpen && (
                    <motion.div layoutId="activeDot" className="w-1 h-1 rounded-full bg-primary mt-0.5" />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href!}
                onClick={() => handleNavClick(item.href!)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-1.5 transition-all duration-200",
                  active ? "text-primary scale-110" : "text-muted-foreground"
                )}
              >
                <div className={cn(
                  "p-1 rounded-lg transition-colors",
                  active && "bg-primary/10"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
                {active && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-1 h-1 rounded-full bg-primary mt-0.5"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};
