import { partnerAPI } from "./axios";

// ── Partner Login ──
export const loginPartner = async (phone, password) => {
  const res = await partnerAPI.post("/partners/login", { phone, password });
  return res.data;
};

// ── Partner Register ──
export const registerPartner = async (data) => {
  const res = await partnerAPI.post("/partners/register", data);
  return res.data;
};

// ── Get Partner Profile ──
export const getPartnerProfile = async () => {
  const res = await partnerAPI.get("/partners/profile");
  return res.data;
};

// ── Get Partner Dashboard Stats ──
export const getPartnerDashboard = async () => {
  const res = await partnerAPI.get("/partners/dashboard");
  return res.data;
};

// ── Get Partner Bookings ──
export const getPartnerBookings = async () => {
  const res = await partnerAPI.get("/partners/bookings");
  return res.data;
};

// ── Accept Booking ──
export const acceptBooking = async (id) => {
  const res = await partnerAPI.patch(`/partners/bookings/${id}/accept`);
  return res.data;
};

// ── Complete Booking ──
export const completeBooking = async (id) => {
  const res = await partnerAPI.patch(`/partners/bookings/${id}/complete`);
  return res.data;
};

// ── Cancel Booking ──
export const cancelPartnerBooking = async (id) => {
  const res = await partnerAPI.patch(`/partners/bookings/${id}/cancel`);
  return res.data;
};

// ── Update Partner Availability ──
export const updateAvailability = async (isAvailable) => {
  const res = await partnerAPI.put("/partners/availability", { isAvailable });
  return res.data;
};
