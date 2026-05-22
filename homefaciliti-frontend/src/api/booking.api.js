import API from "./axios";

// Create booking (User)
export const createBooking = async (data) => {
  const res = await API.post("/booking/create", data);
  return res.data;
};

// Get my bookings (User)
export const getMyBookings = async () => {
  const res = await API.get("/booking/my");
  return res.data;
};

// Vendor accept booking
export const acceptBooking = async (id) => {
  const res = await API.patch(`/booking/accept/${id}`);
  return res.data;
};

// Vendor complete booking
export const completeBooking = async (id) => {
  const res = await API.patch(`/booking/complete/${id}`);
  return res.data;
};

// Cancel booking (User/Vendor)
export const cancelBooking = async (id) => {
  const res = await API.patch(`/booking/cancel/${id}`);
  return res.data;
};
