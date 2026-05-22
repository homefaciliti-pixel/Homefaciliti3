import express from "express";
import * as controller from "../controllers/user.controller.js";
import auth from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { idParamSchema } from "../utils/validationSchemas.js";

const router = express.Router();

// User must be logged in
router.use(auth);

// Get profile
router.get("/profile", authorizeRoles("user"), controller.getProfile);

// Update profile
router.put("/profile", authorizeRoles("user"), controller.updateProfile);

// Get booking history
router.get(
  "/bookings",
  authorizeRoles("user"),
  controller.getUserBookings
);

// Get single user (admin only)
router.get(
  "/:id",
  validate(idParamSchema),
  authorizeRoles("admin"),
  controller.getUserById
);

export default router;