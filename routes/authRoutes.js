import { Router } from "express";
import authController from "../controllers/authController.js";
import { loginLimiter } from "../middlewares/limiter.js";

const router = Router();

router.post("/register", authController.register);
// router.post("/login", authController.login);
router.post("/login", loginLimiter, authController.login);


export default router;