const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  readTime: { type: String }
});

module.exports = mongoose.model("SuccessStory", successStorySchema);
