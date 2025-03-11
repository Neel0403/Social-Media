import express from "express";
import {
  createPostController,
  deletePostController,
  getAllPostController,
  getPostController,
  getTimelinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.contoller.js";
import { parser } from "../config/cloudinary.js";

const router = express.Router();

router.post("/create-post", parser.single("img"), createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);
router.put("/like-post/:id", likeAndDislikeController);
router.get("/get-post/:id", getPostController);
router.get("/get-timeline-posts/:username", getTimelinePostsController);
router.get("/", getAllPostController);

export default router;
