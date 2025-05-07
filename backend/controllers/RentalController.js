const Rental = require("../models/Rental");

const getRentalItems = async (req, res) => {
  try {
    const items = await Rental.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rental items" });
  }
};

const addRentalItem = async (req, res) => {
  try {
    const newItem = new Rental(req.body);
    await newItem.save();
    res.status(201).json({ message: "Rental item added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding rental item" });
  }
};

module.exports = { getRentalItems, addRentalItem };
