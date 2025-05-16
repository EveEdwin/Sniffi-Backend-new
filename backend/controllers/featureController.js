const Feature = require("../models/featureModel");

// Create Feature(s)
exports.createFeature = async (req, res) => {
  try {
    let feature;

    // Check if req.body is an array
    if (Array.isArray(req.body)) {
      feature = await Feature.insertMany(req.body); // handles bulk insert
    } else {
      feature = await Feature.create(req.body); // single feature
    }

    res.status(201).json({ success: true, feature });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// Get All Features
exports.getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).json({ success: true, features });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Feature
exports.updateFeature = async (req, res) => {
  try {
    const feature = await Feature.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!feature) {
      return res.status(404).json({ success: false, message: "Feature not found" });
    }

    res.status(200).json({ success: true, feature });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Feature
exports.deleteFeature = async (req, res) => {
  try {
    const feature = await Feature.findByIdAndDelete(req.params.id);

    if (!feature) {
      return res.status(404).json({ success: false, message: "Feature not found" });
    }

    res.status(200).json({ success: true, message: "Feature deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete All Features
exports.deleteAllFeatures = async (req, res) => {
  try {
    const result = await Feature.deleteMany({});

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} feature(s) deleted successfully`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
