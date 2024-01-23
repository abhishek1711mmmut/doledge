// routes/cart.js

const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart");

// Add product to cart
router.post("/add-to-cart/:productId", cartController.addToCart);

// Delete product from cart
router.delete("/delete-from-cart/:productId", cartController.deleteFromCart);

router.get("/my-cart", cartController.getmyCart);

exports.routes = router;  