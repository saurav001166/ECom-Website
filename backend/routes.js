const router = require("express").Router();
const {
  signup,
  login,
  logout,
  resetPassword,
  verifyOtp,
  getUser
} = require("./controllers/AuthController");

const {
  addToCart,
  getCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  checkout,
  clearCart
} = require("./controllers/FeatureController");

const { verifyToken } = require("./middlewares/verifyToken");
const RentalItem = require("./models/RentalItem");

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.put("/reset-password", resetPassword);
router.put("/verify-otp", verifyOtp);
router.get("/get-user", verifyToken, getUser);

// Cart Routes
router.post("/add-to-cart/:id", verifyToken, addToCart);
router.get("/get-cart", verifyToken, getCart);
router.delete("/remove-from-cart/:id", verifyToken, removeFromCart);
router.put("/increment-quantity/:id", verifyToken, incrementQuantity);
router.put("/decrement-quantity/:id", verifyToken, decrementQuantity);
router.get("/checkout", verifyToken, checkout);
router.get("/clear-cart", verifyToken, clearCart);


router.post("/rentals/add", verifyToken, async (req, res) => {
  try {
    const { name, category, rentPrice, description, image, rating } = req.body;
    const newRentalItem = new RentalItem({
      name,
      category,
      rentPrice,
      description,
      image,
      rating
    });
    await newRentalItem.save();
    res.status(201).json({ message: "Rental product added successfully!" });
  } catch (error) {
    console.error("Error adding rental product:", error);
    res.status(500).json({ message: "Failed to add rental product" });
  }
});

router.get("/rentals", async (req, res) => {
  try {
    const rentalItems = await RentalItem.find();
    res.status(200).json(rentalItems);
  } catch (error) {
    console.error("Error fetching rental products:", error);
    res.status(500).json({ message: "Failed to fetch rental products" });
  }
});

module.exports = router;
