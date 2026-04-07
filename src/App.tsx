import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation, useNavigationType, NavigationType } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingNav } from "@/components/FloatingNav";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuditModalProvider } from "@/contexts/AuditModalContext";
import { FreeHRAuditModal } from "@/components/FreeHRAuditModal";
import { AuditFloatingWidget } from "@/components/AuditFloatingWidget";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";

// Public pages — lazy loaded for code splitting
const Index = lazy(() => import("./pages/Index"));
const OffshoreTeams = lazy(() => import("./pages/OffshoreTeams"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CaseStudyPost = lazy(() => import("./pages/CaseStudyPost"));
const TalentAcquisition = lazy(() => import("./pages/services/TalentAcquisition"));
const DedicatedTeams = lazy(() => import("./pages/services/DedicatedTeams"));
const HrOperations = lazy(() => import("./pages/services/HrOperations"));
const PayrollCompliance = lazy(() => import("./pages/services/PayrollCompliance"));
const HrAdvisory = lazy(() => import("./pages/services/HrAdvisory"));
const LearningDevelopment = lazy(() => import("./pages/services/LearningDevelopment"));
const EmployeeExperience = lazy(() => import("./pages/services/EmployeeExperience"));
const ExtendedWorkforce = lazy(() => import("./pages/services/ExtendedWorkforce"));
const TalentEcosystemPage = lazy(() => import("./pages/TalentEcosystemPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SeedJobs = lazy(() => import("./pages/SeedJobs"));

// Admin pages — lazy loaded separately so users never download admin code
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminServices = lazy(() => import("./pages/admin/AdminServices"));
const AdminIndustries = lazy(() => import("./pages/admin/AdminIndustries"));
const AdminCaseStudies = lazy(() => import("./pages/admin/AdminCaseStudies"));
const AdminBlogs = lazy(() => import("./pages/admin/AdminBlogs"));
const AdminAccounts = lazy(() => import("./pages/admin/AdminAccounts"));
const AdminCareers = lazy(() => import("./pages/admin/AdminCareers"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const prevPathRef = useRef<string | null>(null);

  // Save scroll position while on a page; also save final position on exit
  useEffect(() => {
    const savePageScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener("scroll", savePageScroll, { passive: true });
    return () => {
      savePageScroll(); // capture final position before leaving
      window.removeEventListener("scroll", savePageScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let tries = 0;

      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const isSamePage = prevPathRef.current === pathname;
          setTimeout(() => {
            element.scrollIntoView({ behavior: isSamePage ? "smooth" : "instant" });
          }, 10);
          prevPathRef.current = pathname;
          return true;
        }
        return false;
      };

      if (!tryScroll()) {
        const intervalId = setInterval(() => {
          tries++;
          if (tryScroll() || tries > 20) {
            clearInterval(intervalId);
          }
        }, 50);
        return () => clearInterval(intervalId);
      }
    } else {
      if (navType === NavigationType.Pop) {
        // Restore saved scroll position for back/forward navigation.
        // Use RAF so the new page's content is in the DOM before we scroll.
        const savedPos = sessionStorage.getItem(`scroll-${pathname}`);
        if (savedPos) {
          const pos = parseInt(savedPos, 10);
          requestAnimationFrame(() => {
            window.scrollTo(0, pos);
            // Second attempt after enter animation (0.4s) in case lazy content
            // wasn't ready yet and clamped our first scroll to 0.
            setTimeout(() => {
              if (pos > 0 && window.scrollY === 0) {
                window.scrollTo(0, pos);
              }
            }, 450);
          });
        }
      }
      prevPathRef.current = pathname;
    }
  }, [pathname, hash, navType]);

  return null;
};

// Nav only shows on public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <FloatingNav />
    {children}
    <AuditFloatingWidget />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const navType = useNavigationType();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // Only scroll to top on forward/replace navigation — POP restoration
          // is handled by ScrollToTop after the new page mounts.
          if (navType !== NavigationType.Pop && !location.hash) {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        }}
      >
        <Routes location={location} key={location.pathname}>
          {/* Public routes */}
          <Route path="/seed-jobs" element={<PageTransition><SeedJobs /></PageTransition>} />
          <Route path="/" element={<PublicLayout><PageTransition><Index /></PageTransition></PublicLayout>} />
          <Route path="/offshore-teams" element={<PublicLayout><PageTransition><OffshoreTeams /></PageTransition></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><PageTransition><About /></PageTransition></PublicLayout>} />
          <Route path="/careers" element={<PublicLayout><PageTransition><Careers /></PageTransition></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><PageTransition><Contact /></PageTransition></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout><PageTransition><Blog /></PageTransition></PublicLayout>} />
          <Route path="/blog/:slug" element={<PublicLayout><PageTransition><BlogPost /></PageTransition></PublicLayout>} />
          <Route path="/talent-ecosystem" element={<PublicLayout><PageTransition><TalentEcosystemPage /></PageTransition></PublicLayout>} />
          <Route path="/case-studies" element={<PublicLayout><PageTransition><CaseStudiesPage /></PageTransition></PublicLayout>} />
          <Route path="/case-studies/:id" element={<PublicLayout><PageTransition><CaseStudyPost /></PageTransition></PublicLayout>} />
          <Route path="/services/talent-acquisition" element={<PublicLayout><PageTransition><TalentAcquisition /></PageTransition></PublicLayout>} />
          <Route path="/services/dedicated-teams" element={<PublicLayout><PageTransition><DedicatedTeams /></PageTransition></PublicLayout>} />
          <Route path="/services/hr-operations" element={<PublicLayout><PageTransition><HrOperations /></PageTransition></PublicLayout>} />
          <Route path="/services/payroll-compliance" element={<PublicLayout><PageTransition><PayrollCompliance /></PageTransition></PublicLayout>} />
          <Route path="/services/hr-advisory" element={<PublicLayout><PageTransition><HrAdvisory /></PageTransition></PublicLayout>} />
          <Route path="/services/learning-development" element={<PublicLayout><PageTransition><LearningDevelopment /></PageTransition></PublicLayout>} />
          <Route path="/services/employee-experience" element={<PublicLayout><PageTransition><EmployeeExperience /></PageTransition></PublicLayout>} />
          <Route path="/services/extended-workforce" element={<PublicLayout><PageTransition><ExtendedWorkforce /></PageTransition></PublicLayout>} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="industries" element={<AdminIndustries />} />
            <Route path="case-studies" element={<AdminCaseStudies />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="accounts" element={<AdminAccounts />} />
            <Route path="careers" element={<AdminCareers />} />
          </Route>

          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <AuditModalProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
            <FreeHRAuditModal />
          </BrowserRouter>
        </AuditModalProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
