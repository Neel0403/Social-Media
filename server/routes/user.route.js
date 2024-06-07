import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserProfileController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

// update user
router.put("/:id", updateUserController);
// delete user
router.delete("/:id", deleteUserController);
// get user
router.get("/:id", getUserController);
// follow a user
router.put("/follow/:id", followUserController);
// unfollow user
router.put("/unfollow/:id", unfollowUserController);
// get user profile
router.get("/", getUserProfileController)

export default router;
