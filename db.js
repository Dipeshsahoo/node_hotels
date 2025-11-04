// Responsible for the database connection
const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // Replace 'hotels' with your database name if needed

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// When connected
db.on('connected', () => {
  console.log("✅ Connected to MongoDB server");
});

// When connection error occurs
db.on('error', (err) => {
  console.log("❌ MongoDB connection error:", err);
});

// When disconnected
db.on('disconnected', () => {
  console.log("⚠️ MongoDB disconnected");
});

// Export the database connection
module.exports = db;
