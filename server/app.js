const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Routes to handle API requests
const photosRoutes = require("./api/routes/photos");
const tagsRoutes = require("./api/routes/tags");
const usersRoutes = require("./api/routes/users");

// Mongo URI
const mongoURI =
  process.env.MONGO_ATLAS_USER +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_CLUSTER;

// Create mongo connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Middleware
app.use(morgan("dev")); // logs API requests
app.use(express.static(path.join(__dirname, "../public"))); // Makes folders publicly available
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS -- course correction for client
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // gives access to any client
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization" // append to incoming request
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET"); // limit API access
    return res.status(200).json({});
  }
  next();
});

// Use routes to handle API requests
app.use("/photos", photosRoutes);
app.use("/tags", tagsRoutes);
app.use("/user", usersRoutes);

// rewrite virtual urls to vue app to enable refreshing of internal pages
app.get("*", function (req, res, next) {
  // res.sendFile(path.resolve("server/public/index.html"));
  res.sendFile(path.resolve("public/index.html"));
});
// Error handling if there is no avialable API request
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
// Handle any other unhandled error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
