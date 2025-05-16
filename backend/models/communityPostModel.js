const mongoose = require("mongoose");

const communityPostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String },
  petType: { type: String, required: true },
  petName: { type: String, required: true },
  image: { type: String },
  video: { type: String }, 
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CommunityPost", communityPostSchema);
