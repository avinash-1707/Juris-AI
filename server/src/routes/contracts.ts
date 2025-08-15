import express from "express";
import { isAuthenticated } from "../middleware/auth.ts";
import {
  analyzeContract,
  detectAndConfirmContractType,
  getContractByID,
  getUserContracts,
  uploadMiddleware,
} from "../controllers/contract.controller.ts";
import { handleErrors } from "../middleware/errors.ts";

const router = express.Router();

router.post(
  "/detect-type",
  isAuthenticated,
  uploadMiddleware,
  handleErrors(detectAndConfirmContractType)
);

router.post(
  "/analyze",
  isAuthenticated,
  uploadMiddleware,
  handleErrors(analyzeContract)
);

router.get("/user-contracts", isAuthenticated, handleErrors(getUserContracts));
router.get("/contract/:id", isAuthenticated, handleErrors(getContractByID));

export default router;
