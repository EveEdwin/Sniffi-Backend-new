const express = require("express");
const { createPost, getPosts, likePost, addComment, deletePost } = require("../controllers/communityPostController");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.put("/like/:id", likePost);
router.post("/comment/:id", addComment);
router.delete("/:id", deletePost);

module.exports = router;
