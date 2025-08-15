import express from "express";
import { isAuthenticated } from "../middleware/auth.ts";
import {
  createCheckoutSession,
  getPremiumStatus,
} from "../controllers/payment.controller.ts";

const router = express.Router();

router.get("/create-checkout-session", isAuthenticated, createCheckoutSession);
router.get("/membership-status", isAuthenticated, getPremiumStatus);

export default router;
