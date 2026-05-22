import API from "./axios";

// Update profile
export const updateUserProfile = async (data) => {
  const res = await API.put("/users/profile", data);
  return res.data;
};

// Get all users (Admin only)
export const getAllUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

// Delete user (Admin)
export const deleteUser = async (id) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};