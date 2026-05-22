import express from "express";
import * as controller from "../controllers/booking.controller.js";
import auth from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import {
  bookingSchema,
  idParamSchema,
} from "../utils/validationSchemas.js";

const router = express.Router();

/**
 * =========================
 * 🔐 PROTECTED ROUTES
 * =========================
 */
router.use(auth);

/**
 * =========================
 * 🟢 CREATE BOOKING (User)
 * =========================
 */
router.post(
  "/create",
  authorizeRoles("user"),
  validate(bookingSchema), // body validation
  controller.createBooking
);

/**
 * =========================
 * 🟢 GET MY BOOKINGS (User)
 * =========================
 */
router.get(
  "/my",
  authorizeRoles("user"),
  controller.getMyBookings
);

/**
 * =========================
 * 🟡 ACCEPT BOOKING (Vendor)
 * =========================
 */
router.patch(
  "/accept/:id",
  authorizeRoles("vendor"),
  validate(idParamSchema, "params"), // 🔥 FIX HERE
  controller.acceptBooking
);

/**
 * =========================
 * 🟡 COMPLETE BOOKING (Vendor)
 * =========================
 */
router.patch(
  "/complete/:id",
  authorizeRoles("vendor"),
  validate(idParamSchema, "params"), // 🔥 FIX HERE
  controller.completeBooking
);

/**
 * =========================
 * 🔴 CANCEL BOOKING (User / Vendor)
 * =========================
 */
router.patch(
  "/cancel/:id",
  authorizeRoles("user", "vendor"),
  validate(idParamSchema, "params"), // 🔥 FIX HERE
  controller.cancelBooking
);

export default router;