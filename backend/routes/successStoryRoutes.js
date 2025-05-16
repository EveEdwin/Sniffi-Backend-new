const express = require("express");
const {
  createStory,
  getStories,
  updateStory,
  deleteStory
} = require("../controllers/successStoryController");

const router = express.Router();

router.post("/", createStory);
router.get("/", getStories);
router.put("/:id", updateStory);
router.delete("/:id", deleteStory);

module.exports = router;
