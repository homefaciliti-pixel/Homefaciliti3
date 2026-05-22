import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";

// ✅ FIXED IMPORT NAME
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import vendorRoutes from "./routes/vendor.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import { errorHandler } from "./middlewares/error.js";

const app = express();

// ===== SECURITY MIDDLEWARES =====
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());
app.use(compression());
app.use(morgan("dev"));

// ===== RATE LIMITER =====
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ===== HEALTH CHECK =====
app.get("/", (req, res) => {
  res.json({
    status: "HomeFaciliti Backend Running",
    version: "5.0.0",
  });
});

// ===== ROUTES =====
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);

// ===== 404 HANDLER =====
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// ===== GLOBAL ERROR HANDLER =====
app.use(errorHandler);

export default app;