import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PageLoader from "./components/common/PageLoader";
import RouteTransition from "./components/common/RouteTransition";

// ===== PUBLIC PAGES =====
import Home from "./pages/public/Home";
import Categories from "./pages/public/Categories";
import CategoryServices from "./pages/public/CategoryServices";
import Services from "./pages/public/Services";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";

// ===== DASHBOARDS & DETAILS =====
import UserDashboard from "./pages/user/UserDashboard";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDetails from "./pages/user/UserDetails";
import VendorDetails from "./pages/vendor/VendorDetails";

// ===== AUTH =====
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// ===== OPTIONAL (404 PAGE) =====
const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "80px" }}>
    <h2>404 - Page Not Found</h2>
  </div>
);

function App() {
  const { loading } = useAuth();
  const [initialLoading, setInitialLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setInitialLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Prevent app render until auth check finishes
  if (initialLoading) {
    return <PageLoader isExiting={isExiting} />;
  }

  return (
    <BrowserRouter>
      <RouteTransition>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryServices />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />


          {/* ===== AUTH ===== */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ===== DASHBOARDS & DETAILS ===== */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/vendor-details" element={<VendorDetails />} />

          {/* ===== FALLBACK ROUTE ===== */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteTransition>
    </BrowserRouter>
  );
}

export default App;