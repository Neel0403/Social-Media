import express from "express";
import { createPostController } from "../controllers/post.contoller.js";

const router = express.Router();

router.post("/create-post", createPostController);

export default router;
