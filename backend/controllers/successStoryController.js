const SuccessStory = require("../models/successStoryModel");

// Create Story
exports.createStory = async (req, res) => {
  try {
    const story = await SuccessStory.create(req.body);
    res.status(201).json({ success: true, story });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Stories
exports.getStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find();
    res.status(200).json({ success: true, stories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Story
exports.updateStory = async (req, res) => {
  try {
    const story = await SuccessStory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!story) return res.status(404).json({ success: false, message: "Story not found" });

    res.status(200).json({ success: true, story });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Story
exports.deleteStory = async (req, res) => {
  try {
    const story = await SuccessStory.findByIdAndDelete(req.params.id);
    if (!story) return res.status(404).json({ success: false, message: "Story not found" });

    res.status(200).json({ success: true, message: "Story deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
