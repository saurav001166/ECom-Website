const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    
    
    if (mongoose.connection.readyState === 1) {
      console.log("Connected to MongoDB");
    } else {
      console.log("MongoDB connection failed");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("MongoDB connection failed");
  }
};

module.exports = { connectDb };
