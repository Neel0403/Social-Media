import express from "express";
import {
  deleteUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

// update user
router.put("/:id", updateUserController);
// delete user
router.delete("/:id", deleteUserController);
// get user

export default router;
