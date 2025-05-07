const mongoose = require("mongoose");

const rentalItemSchema = new mongoose.Schema(
  {
    name: String,            // Name of the rental product
    category: String,        // Category (Furniture, Electronics, etc.)
    rentPrice: Number,       // Rent price for the item
    description: String,     // Short description of the product
    image: String,           // Image URL or path to the product image
    rating: { type: Number, default: 0 },  // Rating for the product
  },
  { timestamps: true }      
);


const RentalItem = mongoose.model("RentalItem", rentalItemSchema);

module.exports = RentalItem;
