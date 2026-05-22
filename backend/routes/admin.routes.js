import express from "express";
import * as controller from "../controllers/admin.controller.js";
import auth from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";

const router = express.Router();

// Admin-only access
router.use(auth);
router.use(authorizeRoles("admin"));

// Dashboard stats
router.get("/dashboard", controller.getDashboardStats);

// Get all users
router.get("/users", controller.getAllUsers);

// Get all vendors
router.get("/vendors", controller.getAllVendors);

// Get all bookings
router.get("/bookings", controller.getAllBookings);

// Get all payments
router.get("/payments", controller.getAllPayments);

// Block user
router.patch("/block-user/:id", controller.blockUser);

// Remove vendor
router.delete("/vendor/:id", controller.removeVendor);

export default router;