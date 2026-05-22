import API from "./axios";

// Login
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// Register
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// Get current profile
export const getProfile = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};