import API from "./axios";

// Get vendor bookings
export const getVendorBookings = async () => {
  const res = await API.get("/vendors/bookings");
  return res.data;
};

// Update vendor profile
export const updateVendorProfile = async (data) => {
  const res = await API.put("/vendors/profile", data);
  return res.data;
};

// Get all vendors (Admin)
export const getAllVendors = async () => {
  const res = await API.get("/vendors");
  return res.data;
};

// Approve vendor (Admin)
export const approveVendor = async (id) => {
  const res = await API.patch(`/vendors/approve/${id}`);
  return res.data;
};