import express from "express";
import {
  createPostController,
  deletePostController,
  getPostController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.contoller.js";

const router = express.Router();

router.post("/create-post", createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);
router.put("/like-post/:id", likeAndDislikeController);
router.get("/get-post/:id", getPostController);

export default router;
