import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserFriendsController,
  getUserProfileController,
  unfollowUserController,
  updateProfilePictureController,
  updateUserController,
} from "../controllers/user.controller.js";
import { parser } from "../config/cloudinary.js"

const router = express.Router();

// update user
router.put("/:id", updateUserController);
// update profile picture
router.put("/:id/profile-picture", parser.single("profilePicture"), updateProfilePictureController);
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
// get user friends
router.get("/friends/:userId", getUserFriendsController)

export default router;
