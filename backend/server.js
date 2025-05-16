const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = require("./app");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connect to MongoDB
connectDatabase();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
