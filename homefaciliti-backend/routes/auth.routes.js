import express from "express";
import * as controller from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.get("/profile", controller.getProfile);

export default router;