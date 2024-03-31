import express from "express";
import { register } from "../controllers/auth.controller.js";

const router = express.Router();

//  http://localhost:5000/api/v1/auth/
router.post("/register", register);

export default router;
