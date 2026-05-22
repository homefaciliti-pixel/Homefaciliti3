/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import { getProfile } from "../api/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // INIT AUTH (AUTO LOGIN)
  // ===============================
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const data = await getProfile();
          setUser(data.user);
        }
      } catch (error) {
        console.log("Auth error:", error);
        localStorage.clear();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // ===============================
  // LOGIN FUNCTION
  // ===============================
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  // ===============================
  // LOGOUT FUNCTION
  // ===============================
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  // ===============================
  // AUTH STATE
  // ===============================
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

// ===============================
// CUSTOM HOOK (VERY IMPORTANT)
// ===============================
export const useAuth = () => useContext(AuthContext);