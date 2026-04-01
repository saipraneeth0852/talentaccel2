import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Globe, FileText, Lightbulb, Users, Phone, LayoutGrid, Menu, X, Settings, GraduationCap, Heart, ChevronDown } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    icon: Users,
    title: "Talent Acquisition",
    desc: "End-to-end hiring across all engagement types",
    href: "/services/talent-acquisition",
  },
  {
    icon: FileText,
    title: "HR Operations",
    desc: "Complete payroll management and statutory compliance",
    href: "/services/hr-operations",
  },
  {
    icon: Settings,
    title: "HR Advisory",
    desc: "Strategic HR foundations to structure and scale",
    href: "/services/hr-advisory",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Capability-building programmes that develop leaders",
    href: "/services/learning-development",
  },
  {
    icon: Heart,
    title: "Employee Experience",
    desc: "Everything that makes your employees feel valued",
    href: "/services/employee-experience",
  },
  {
    icon: Globe,
    title: "Extended Workforce",
    desc: "Specialist services beyond traditional HR",
    href: "/services/extended-workforce",
  },
];

const resourceItems = [
  {
    icon: Lightbulb,
    title: "Blog",
    desc: "Insights and trends from our experts",
    href: "/blog",
  },
  {
    icon: FileText,
    title: "Case Studies",
    desc: "Read about our successful partnerships",
    href: "/case-studies",
  },
];

const navItems = [
  { label: "Home", href: "/", hash: "", icon: Home },
  { label: "Services", type: "mega-menu", items: serviceItems, icon: Briefcase, href: "/#services", hash: "#services" },
  { label: "Global Teams", href: "/offshore-teams", hash: "", icon: Globe },
  { label: "Resources", type: "dropdown", items: resourceItems, icon: Lightbulb },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location.hash]);

  // Track active section on scroll for homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ['services', 'case-studies', 'why-talentaccel'];
      let found = false;

      // Ensure we clear hash if at the very top (Home)
      if (window.scrollY < window.innerHeight / 3) {
        setActiveHash((prev) => prev !== "" ? "" : prev);
        return;
      }

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveHash((prev) => prev !== `#${id}` ? `#${id}` : prev);
            found = true;
            break;
          }
        }
      }
      
      // Clear if scrolled past observed sections
      if (!found && window.scrollY >= window.innerHeight / 3) {
        setActiveHash((prev) => prev !== "" ? "" : prev);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
    
    // Highlight if on homepage and the hash matches, even for mega-menus
    if (item.hash && location.pathname === "/") {
      if (activeHash === item.hash) return true;
    }
    
    // Default mega-menu/dropdown logic
    if (item.type === "mega-menu" || item.type === "dropdown") return false; 
    
    if (item.href === "/") {
      return location.pathname === "/" && !activeHash;
    }
    
    if (item.href) {
      return location.pathname === item.href || location.pathname.startsWith(item.href + "/");
    }
    
    return false;
  };

  return (
    <>
      {/* Top Navigation Wrapper */}
      <div className="fixed top-0 lg:top-5 left-0 right-0 z-50 lg:pointer-events-none flex justify-center w-full bg-card/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-border/40 lg:border-none py-2.5 lg:py-0 pointer-events-auto transition-all duration-300 shadow-sm lg:shadow-none">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center h-10 lg:h-14 gap-2 lg:gap-2.5 px-2 lg:px-5 lg:rounded-full lg:bg-card/80 lg:backdrop-blur-xl lg:border lg:border-border lg:shadow-float lg:hover:scale-105 transition-transform shrink-0"
        >
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 lg:gap-2.5">
            <LogoMark size={28} className="lg:w-8 lg:h-8" />
            <span className="text-[15px] lg:text-base font-bold text-[#191D3E] tracking-tight dark:text-white">
              TalentAccel
            </span>
          </Link>
        </motion.div>

        {/* Desktop floating nav */}
        <motion.nav
          ref={navRef}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden xl:flex items-center h-14 gap-1 px-2 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-float w-fit pointer-events-auto"
        >
          {navItems.map((item) => {
            const active = isItemActive(item);
            
            if (item.type === "mega-menu") {
              return (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href || "#"}
                    onClick={(e) => {
                      if (item.href) handleNavClick(item.href);
                      if (window.innerWidth >= 1024) {
                         // Let hover handle toggle on desktop
                         setOpenDropdown(openDropdown === item.label ? null : item.label);
                      }
                    }}
                    className={cn(
                      "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap outline-none",
                      openDropdown === item.label ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", openDropdown === item.label && "rotate-180")} />
                  </Link>
                  
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 15 }}
                         transition={{ duration: 0.2, ease: "easeOut" }}
                         className="absolute top-full left-0 mt-5 w-[700px] p-4 bg-card border border-border/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl grid grid-cols-2 gap-2 z-50 origin-top-left"
                      >
                         {item.items.map((subItem: any) => (
                           <Link key={subItem.title} to={subItem.href} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors h-full" onClick={() => setOpenDropdown(null)}>
                             <div className="flex bg-primary/10 text-primary w-11 h-11 rounded-xl shrink-0 items-center justify-center transition-colors group-hover:bg-primary/20 group-hover:scale-105 duration-300">
                               <subItem.icon className="w-5 h-5" />
                             </div>
                             <div className="flex flex-col">
                               <div className="font-bold text-[15px] text-foreground group-hover:text-primary transition-colors">{subItem.title}</div>
                               <div className="text-[13px] text-muted-foreground leading-snug mt-1 line-clamp-2">{subItem.desc}</div>
                             </div>
                           </Link>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (item.type === "dropdown") {
              return (
                <div 
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={cn(
                      "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap outline-none",
                      openDropdown === item.label ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", openDropdown === item.label && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 15 }}
                         transition={{ duration: 0.2, ease: "easeOut" }}
                         className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[280px] p-2 bg-card border border-border/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl z-50 origin-top"
                      >
                         {item.items.map((subItem: any) => (
                           <Link key={subItem.title} to={subItem.href} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors" onClick={() => setOpenDropdown(null)}>
                             <div className="flex bg-secondary/10 text-secondary-foreground w-9 h-9 rounded-lg shrink-0 items-center justify-center transition-colors group-hover:bg-secondary/20">
                               <subItem.icon className="w-4 h-4" />
                             </div>
                             <div>
                               <div className="font-semibold text-[14px] text-foreground group-hover:text-primary transition-colors">{subItem.title}</div>
                               <div className="text-[12px] text-muted-foreground leading-snug">{subItem.desc}</div>
                             </div>
                           </Link>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href!}
                onClick={() => handleNavClick(item.href!)}
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
            className="ml-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Book a Consultation
          </Link>
        </motion.nav>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-card flex flex-col pt-10 px-6 pb-16 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <LogoMark size={28} />
                <span className="text-xl font-bold text-[#191D3E] tracking-tight dark:text-white">
                  TalentAccel
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

                  if (item.type === "mega-menu" || item.type === "dropdown") {
                    return (
                      <div key={item.label} className="flex flex-col gap-2">
                        <div className="flex items-center gap-4 px-4 py-3.5 mt-2 bg-muted/10 rounded-2xl">
                           <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/5 text-primary">
                             <Icon className="w-5 h-5" />
                           </div>
                           <span className="text-lg font-bold text-foreground">{item.label}</span>
                        </div>
                        <div className="pl-6 flex flex-col gap-2 relative">
                          <div className="absolute left-9 content-[''] h-[80%] top-2 w-px bg-border/50" />
                          {item.items.map((subItem: any) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              onClick={() => {
                                handleNavClick(subItem.href);
                                setIsMobileMenuOpen(false);
                              }}
                              className="py-3 px-8 text-foreground font-medium hover:text-primary transition-colors flex items-center gap-3 relative z-10"
                            >
                              <subItem.icon className="w-4 h-4 text-muted-foreground" />
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href!}
                      onClick={() => {
                        handleNavClick(item.href!);
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
