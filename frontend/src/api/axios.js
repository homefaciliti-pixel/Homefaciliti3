import axios from "axios";

/* ─────────────────────────────────────────
   USER APP  →  backend-1-ux3b.onrender.com
───────────────────────────────────────── */
export const userAPI = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL || "https://backend-1-ux3b.onrender.com/api",
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

/* ─────────────────────────────────────────
   PARTNER APP  →  partner-backend-2.onrender.com
───────────────────────────────────────── */
export const partnerAPI = axios.create({
  baseURL: import.meta.env.VITE_PARTNER_API_URL || "https://partner-backend-2.onrender.com/api",
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

/* ─────────────────────────────────────────
   ADMIN API  →  adminbackend-1-h03r.onrender.com
───────────────────────────────────────── */
export const adminAPI = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_API_URL || "https://adminbackend-1-h03r.onrender.com/api",
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

// ── Attach JWT token to every request automatically ──
const attachToken = (apiInstance, storageKey = "token") => {
  apiInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(storageKey);
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem(storageKey);
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
};

attachToken(userAPI, "userToken");
attachToken(partnerAPI, "partnerToken");
attachToken(adminAPI, "adminToken");

// ── Default export kept for backward compat ──
export default userAPI;