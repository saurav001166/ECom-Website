const { signup, login, logout, resetPassword, verifyOtp, getUser } = require("./controllers/AuthController");
const { addToCart, getCart, removeFromCart, incrementQuantity, decrementQuantity, checkout, clearCart } = require("./controllers/FeatureController");
const { verifyToken } = require("./middlewares/verifyToken");

const router = require("express").Router();

// AUTH ROUTES
router.post("/signup", signup);            // User signup
router.post("/login", login);              // User login
router.get("/logout", logout);             // User logout
router.put("/reset-password", resetPassword); // Reset password
router.put("/verify-otp", verifyOtp);     // OTP verification for password reset
router.get("/get-user", verifyToken, getUser);  // Get user details (protected)

// FEATURE ROUTES
router.post("/add-to-cart/:id", verifyToken, addToCart);     // Add to cart (protected)
router.get("/get-cart", verifyToken, getCart);    // Get user's cart (protected, no need for :id if based on logged-in user)
router.delete("/remove-from-cart/:id", verifyToken, removeFromCart); // Remove item from cart (protected)
router.put("/increment-quantity/:id", verifyToken, incrementQuantity);  // Increment quantity (protected)
router.put("/decrement-quantity/:id", verifyToken, decrementQuantity);  // Decrement quantity (protected)
router.get("/checkout", verifyToken, checkout);   // Checkout route (protected)
router.get("/clear-cart", verifyToken, clearCart); // Clear cart (protected)

module.exports = router;
