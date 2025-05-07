const mongoose = require("mongoose");

const rentalItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  rentPrice: Number,
  description: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.models.RentalItem || mongoose.model("RentalItem", rentalItemSchema);
