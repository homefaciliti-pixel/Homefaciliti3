import { userAPI } from "./axios";

// ── Create booking (User) ──
export const createBooking = async (data) => {
  const res = await userAPI.post("/bookings/create", data);
  return res.data;
};

// ── Get my bookings (User) ──
export const getMyBookings = async () => {
  const res = await userAPI.get("/bookings/my");
  return res.data;
};

// ── Cancel booking (User) ──
export const cancelBooking = async (id) => {
  const res = await userAPI.patch(`/bookings/cancel/${id}`);
  return res.data;
};
