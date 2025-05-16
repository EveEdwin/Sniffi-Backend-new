const mongoose = require("mongoose");

const featuredArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  image: {
    type: String,
    required: [true, "Image URL is required"]
  },
  readTime: {
    type: String,
    required: [true, "Read time is required"]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FeaturedArticle", featuredArticleSchema);
