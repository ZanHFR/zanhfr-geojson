const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to serve static files (GeoJSON file)
app.use("/geojson", express.static(path.join(__dirname, "public")));

// Start the server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
