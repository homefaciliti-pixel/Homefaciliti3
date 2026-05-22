import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";
import RouteTransition from "../components/common/RouteTransition";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

// Public Pages
import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import Contact from "../pages/public/Contact";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// User
import UserDashboard from "../pages/user/UserDashboard";
import MyBookings from "../pages/user/MyBookings";
import Profile from "../pages/user/Profile";
import UserDetails from "../pages/user/UserDetails";

// Vendor
import VendorDashboard from "../pages/vendor/VendorDashboard";
import BookingRequests from "../pages/vendor/BookingRequests";
import VendorProfile from "../pages/vendor/VendorProfile";
import VendorDetails from "../pages/vendor/VendorDetails";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageVendors from "../pages/admin/ManageVendors";
import Reports from "../pages/admin/Reports";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouteTransition>
        <Routes>

          {/* Public Layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>

              {/* User */}
              <Route element={<RoleRoute role="user" />}>
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/bookings" element={<MyBookings />} />
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/user-details" element={<UserDetails />} />
              </Route>

              {/* Vendor */}
              <Route element={<RoleRoute role="vendor" />}>
                <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                <Route path="/vendor/bookings" element={<BookingRequests />} />
                <Route path="/vendor/profile" element={<VendorProfile />} />
                <Route path="/vendor-details" element={<VendorDetails />} />
              </Route>

              {/* Admin */}
              <Route element={<RoleRoute role="admin" />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<ManageUsers />} />
                <Route path="/admin/vendors" element={<ManageVendors />} />
                <Route path="/admin/reports" element={<Reports />} />
              </Route>

            </Route>
          </Route>

        </Routes>
      </RouteTransition>
    </BrowserRouter>
  );
};

export default AppRoutes;