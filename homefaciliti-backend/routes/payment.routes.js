import express from "express";
import * as controller from "../controllers/payment.controller.js";
import auth from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { idParamSchema } from "../utils/validationSchemas.js";

const router = express.Router();

// Protected routes
router.use(auth);

// Create payment
router.post(
  "/create/:id",
  validate(idParamSchema),
  authorizeRoles("user"),
  controller.createOrder
);

// Verify payment
router.post(
  "/verify",
  authorizeRoles("user"),
  controller.verifyPayment
);

// Admin: view all payments
router.get(
  "/all",
  authorizeRoles("admin"),
  controller.getAllPayments
);

export default router;