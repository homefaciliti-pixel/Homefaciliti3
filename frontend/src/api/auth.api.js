import { userAPI } from "./axios";

// ── User Login ──
export const loginUser = async (phone, password) => {
  const res = await userAPI.post("/auth/login", { phone, password });
  return res.data;
};

// ── User Register ──
export const registerUser = async (data) => {
  const res = await userAPI.post("/auth/register", data);
  return res.data;
};

// ── Get current user profile ──
export const getProfile = async () => {
  const res = await userAPI.get("/auth/profile");
  return res.data;
};