/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ── Restore session on page load ──
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      const token =
        localStorage.getItem("userToken") || localStorage.getItem("partnerToken");
      if (savedUser && token) {
        setUser(JSON.parse(savedUser));
      }
    } catch {
      localStorage.clear();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Login — stores token by role ──
  const login = (data) => {
    const userData = data.user || data.partner || data;
    const token = data.token;
    const role = userData.role || "user";

    if (role === "vendor" || role === "partner") {
      localStorage.setItem("partnerToken", token);
    } else {
      localStorage.setItem("userToken", token);
    }
    localStorage.setItem("user", JSON.stringify({ ...userData, role }));
    setUser({ ...userData, role });
  };

  // ── Logout ──
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("partnerToken");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);