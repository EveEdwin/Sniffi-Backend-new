const FeaturedArticle = require("../models/featuredArticleModel");

// Create
exports.createArticle = async (req, res) => {
  try {
    const article = await FeaturedArticle.create(req.body);
    res.status(201).json({ success: true, article });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Read All
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await FeaturedArticle.find();
    res.status(200).json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update
exports.updateArticle = async (req, res) => {
  try {
    const article = await FeaturedArticle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!article) {
      return res.status(404).json({ success: false, message: "Article not found" });
    }

    res.status(200).json({ success: true, article });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete
exports.deleteArticle = async (req, res) => {
  try {
    const article = await FeaturedArticle.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ success: false, message: "Article not found" });
    }

    res.status(200).json({ success: true, message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
