const express = require('express');
const {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle
} = require("../controllers/featuredArticleController");

const router = express.Router();

router.post("/", createArticle);         
router.get("/", getAllArticles);         
router.put("/:id", updateArticle);      
router.delete("/:id", deleteArticle);    

module.exports = router;
