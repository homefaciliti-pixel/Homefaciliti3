import express from "express";
import * as controller from "../controllers/vendor.controller.js";
import auth from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { idParamSchema } from "../utils/validationSchemas.js";

const router = express.Router();

// Public: Get vendors by service
router.get("/service/:id", validate(idParamSchema), controller.getVendorsByService);

// Vendor Protected Routes
router.use(auth);

// Vendor Dashboard
router.get(
  "/dashboard",
  authorizeRoles("vendor"),
  controller.getDashboard
);

// Vendor bookings
router.get(
  "/bookings",
  authorizeRoles("vendor"),
  controller.getVendorBookings
);

// Vendor update availability
router.put(
  "/availability",
  authorizeRoles("vendor"),
  controller.updateAvailability
);

// Admin approve vendor
router.patch(
  "/approve/:id",
  validate(idParamSchema),
  authorizeRoles("admin"),
  controller.approveVendor
);

export default router;