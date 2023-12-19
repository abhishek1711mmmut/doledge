const express = require('express');
const router = express.Router();

const cartController = require('../controller/cart');

router.post("/add_to_cart/:productId", cartController.addToCart);

router.delete('/deleteCartItem/:cartId', cartController.deleteCartItem);

exports.routes = router;
