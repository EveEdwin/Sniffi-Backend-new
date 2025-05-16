const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

// Load environment variables
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());

// After other middlewares
const featureRoutes = require("./routes/featureRoutes");
const articleRoutes = require("./routes/featuredArticleRoutes");
const communityPostRoutes = require("./routes/communityPostRoutes");
const eventRoutes = require("./routes/eventRoutes");
const successStoryRoutes = require("./routes/successStoryRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");


app.use("/api/articles", articleRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/community", communityPostRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/success-stories", successStoryRoutes);
app.use("/api/appointments", appointmentRoutes);

module.exports = app;
