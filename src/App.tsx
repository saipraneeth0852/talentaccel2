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
import PayrollCompliance from "./pages/services/PayrollCompliance.tsx";
import HrAdvisory from "./pages/services/HrAdvisory.tsx";
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

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
            <Route path="/offshore-teams" element={<PublicLayout><OffshoreTeams /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><Careers /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
            <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
            <Route path="/blog/:slug" element={<PublicLayout><BlogPost /></PublicLayout>} />
            <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />
            <Route path="/industries" element={<PublicLayout><Industries /></PublicLayout>} />
            <Route path="/services/talent-acquisition" element={<PublicLayout><TalentAcquisition /></PublicLayout>} />
            <Route path="/services/dedicated-teams" element={<PublicLayout><DedicatedTeams /></PublicLayout>} />
            <Route path="/services/payroll-compliance" element={<PublicLayout><PayrollCompliance /></PublicLayout>} />
            <Route path="/services/hr-advisory" element={<PublicLayout><HrAdvisory /></PublicLayout>} />

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
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
