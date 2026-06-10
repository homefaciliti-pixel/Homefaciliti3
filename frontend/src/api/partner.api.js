import { partnerAPI } from "./axios";

// ── Partner Login ──
export const loginPartner = async (phone, password) => {
  const res = await partnerAPI.post("/auth/login", { phone, password });
  return res.data;
};

// ── Partner Register ──
export const registerPartner = async (data) => {
  const res = await partnerAPI.post("/auth/register", data);
  return res.data;
};

// ── Get Partner Profile ──
export const getPartnerProfile = async () => {
  const res = await partnerAPI.get("/partner/profile");
  return res.data;
};

// ── Get Partner Dashboard Stats ──
export const getPartnerDashboard = async () => {
  try {
    const [earningsRes, bookingsRes] = await Promise.all([
      partnerAPI.get("/earnings"),
      partnerAPI.get("/bookings"),
    ]);

    const bookings = Array.isArray(bookingsRes.data) ? bookingsRes.data : [];
    const totalBookings = bookings.length;
    const completedBookings = bookings.filter((b) => b.status === "completed").length;
    const totalEarning = earningsRes.data?.totalEarning ?? 0;

    return {
      totalBookings,
      completedBookings,
      earnings: totalEarning,
      rating: 5,
      vendor: {
        isAvailable: true,
        earnings: totalEarning,
        rating: 5,
      },
    };
  } catch (error) {
    console.error("Error fetching partner dashboard details:", error);
    return {
      totalBookings: 0,
      completedBookings: 0,
      earnings: 0,
      rating: 5,
      vendor: { isAvailable: true, earnings: 0, rating: 5 },
    };
  }
};

// ── Get Partner Bookings ──
export const getPartnerBookings = async () => {
  const res = await partnerAPI.get("/bookings");
  const data = Array.isArray(res.data) ? res.data : [];
  return data.map((b) => ({
    ...b,
    _id: b.id,
    serviceName: b.service,
    status: b.status === "upcoming" ? "accepted" : b.status === "cancel" ? "cancelled" : b.status,
    userName: "Customer",
    userPhone: "Not available",
    totalAmount: 1200,
    createdAt: b.createdAt || new Date().toISOString(),
  }));
};

// ── Accept Booking ──
export const acceptBooking = async (id) => {
  const res = await partnerAPI.put(`/bookings/${id}/status`, { status: "upcoming" });
  return res.data;
};

// ── Complete Booking ──
export const completeBooking = async (id) => {
  const res = await partnerAPI.put(`/bookings/${id}/status`, { status: "completed" });
  return res.data;
};

// ── Cancel Booking ──
export const cancelPartnerBooking = async (id) => {
  const res = await partnerAPI.put(`/bookings/${id}/status`, { status: "cancel" });
  return res.data;
};

// ── Update Partner Availability ──
export const updateAvailability = async (isAvailable) => {
  return { success: true, isAvailable };
};
