const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ success: false, message: "Token required" });
  }

  try {
    // If the token exists, verify it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;  // Attach user ID to the request object
    next();  // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
