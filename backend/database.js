const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURI = "mongodb://localhost:27017/my-app"; // Replace with your Atlas URI if using MongoDB Atlas

// Connect to MongoDB
mongoose
  .connect(mongoURI,
     { useNewUrlParser: true, useUnifiedTopology: true }
    )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
