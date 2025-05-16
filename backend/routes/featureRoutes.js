const express = require('express');
const {
  createFeature,
  getAllFeatures,
  updateFeature,
  deleteFeature,
  deleteAllFeatures
} = require("../controllers/featureController");

const router = express.Router();

// Routes
router.post("/", createFeature);       
router.get("/", getAllFeatures);        
router.put("/:id", updateFeature);     
router.delete("/:id", deleteFeature);   
router.delete("/",deleteAllFeatures)

module.exports = router;
