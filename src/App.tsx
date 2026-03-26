import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingNav } from "@/components/FloatingNav";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Public pages
import Index from "./pages/Index.tsx";
import OffshoreTeams from "./pages/OffshoreTeams.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import CaseStudiesPage from "./pages/CaseStudiesPage.tsx";
import Industries from "./pages/Industries.tsx";
import TalentAcquisition from "./pages/services/TalentAcquisition.tsx";
import DedicatedTeams from "./pages/services/DedicatedTeams.tsx";
import HrOperations from "./pages/services/HrOperations.tsx";
import PayrollCompliance from "./pages/services/PayrollCompliance.tsx";
import HrAdvisory from "./pages/services/HrAdvisory.tsx";
import LearningDevelopment from "./pages/services/LearningDevelopment.tsx";
import EmployeeExperience from "./pages/services/EmployeeExperience.tsx";
import ExtendedWorkforce from "./pages/services/ExtendedWorkforce.tsx";
import NotFound from "./pages/NotFound.tsx";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminServices from "./pages/admin/AdminServices.tsx";
import AdminIndustries from "./pages/admin/AdminIndustries.tsx";
import AdminCaseStudies from "./pages/admin/AdminCaseStudies.tsx";
import AdminBlogs from "./pages/admin/AdminBlogs.tsx";
import AdminAccounts from "./pages/admin/AdminAccounts.tsx";
import AdminCareers from "./pages/admin/AdminCareers.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

// Nav only shows on public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <FloatingNav />
    {children}
  </>
);

import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}>
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout><PageTransition><Index /></PageTransition></PublicLayout>} />
        <Route path="/offshore-teams" element={<PublicLayout><PageTransition><OffshoreTeams /></PageTransition></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><PageTransition><About /></PageTransition></PublicLayout>} />
        <Route path="/careers" element={<PublicLayout><PageTransition><Careers /></PageTransition></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><PageTransition><Contact /></PageTransition></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><PageTransition><Blog /></PageTransition></PublicLayout>} />
        <Route path="/blog/:slug" element={<PublicLayout><PageTransition><BlogPost /></PageTransition></PublicLayout>} />
        <Route path="/case-studies" element={<PublicLayout><PageTransition><CaseStudiesPage /></PageTransition></PublicLayout>} />
        <Route path="/industries" element={<PublicLayout><PageTransition><Industries /></PageTransition></PublicLayout>} />
        <Route path="/services/talent-acquisition" element={<PublicLayout><PageTransition><TalentAcquisition /></PageTransition></PublicLayout>} />
        <Route path="/services/dedicated-teams" element={<PublicLayout><PageTransition><DedicatedTeams /></PageTransition></PublicLayout>} />
        <Route path="/services/hr-operations" element={<PublicLayout><PageTransition><HrOperations /></PageTransition></PublicLayout>} />
        <Route path="/services/payroll-compliance" element={<PublicLayout><PageTransition><PayrollCompliance /></PageTransition></PublicLayout>} />
        <Route path="/services/hr-advisory" element={<PublicLayout><PageTransition><HrAdvisory /></PageTransition></PublicLayout>} />
        <Route path="/services/learning-development" element={<PublicLayout><PageTransition><LearningDevelopment /></PageTransition></PublicLayout>} />
        <Route path="/services/employee-experience" element={<PublicLayout><PageTransition><EmployeeExperience /></PageTransition></PublicLayout>} />
        <Route path="/services/extended-workforce" element={<PublicLayout><PageTransition><ExtendedWorkforce /></PageTransition></PublicLayout>} />

        {/* Admin routes (no transitions directly to keep snappy, or default) */}
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
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
