// controllers/cartController.js

const mongoose = require("mongoose");
const Cart = require("../model/cart");
const token = require("../configuration/token");
const ProductModel = require("../model/product");

//! Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    if (!jwtInfo) {
      return res.status(401).json({
        status: "Failed",
        message: "User not authenticated. Please log in or sign up.",
      });
    }

    const productId = req.params.productId;

    const product = await ProductModel.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    let cart = await Cart.findOne({ _userId: jwtInfo.ID });

    if (!cart) {
      cart = new Cart({
        _id: new mongoose.Types.ObjectId(),
        _userId: jwtInfo.ID,
        products: [],
        cartTotal: 0,
      });
    }

    const cartProduct = {
      product_id: product._id,
      price: product.price,
      description: product.description,
      title: product.title,
    };

    cart.products.push(cartProduct);
    cart.cartTotal += product.price;

    await cart.save();

    return res.status(201).json({
      status: "Success",
      message: "Product added to the cart successfully",
      cartItem: cartProduct,
    });
  } catch (error) {
    console.log("Add to cart error: " + error);
    return res.status(500).json({
      status: "Failed",
      message: "Internal error occurred",
      error: error,
    });
  }
};
//! Delete product from cart
exports.deleteFromCart = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    if (!jwtInfo) {
      return res.status(401).json({
        status: "Failed",
        message: "User not authenticated. Please log in or sign up.",
      });
    }

    const productId = req.params.productId;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid product ID format",
      });
    }

    let cart = await Cart.findOne({ _userId: jwtInfo.ID });

    if (!cart) {
      return res.status(404).json({
        status: "Failed",
        message: "Cart not found",
      });
    }

    const cartProductIndex = cart.products.findIndex(
      (cartProduct) => cartProduct.product_id.toString() === productId
    );

    if (cartProductIndex === -1) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found in the cart",
      });
    }

    const deletedProductPrice = cart.products[cartProductIndex].price;

    cart.products.splice(cartProductIndex, 1);
    cart.cartTotal -= deletedProductPrice;

    await cart.save();

    return res.status(200).json({
      status: "Success",
      message: "Product deleted from the cart successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Failed",
      message: "Internal error",
      error: error.message,
    });
  }
};
//! see my cart (user)
exports.getmyCart = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    if (!jwtInfo) {
      return res.status(401).json({
        status: "Failed",
        message: "you are not authenticated. Please log in or sign up.",
      });
    }

    let cart = await Cart.findOne({ _userId: jwtInfo.ID });

    if (!cart) {
      return res.status(404).json({
        status: "Failed",
        message: " your Cart not found",
      });
    }

    if (cart.products.length === 0) {
      return res.status(200).json({
        status: "Success",
        message: "Dear user, your cart is empty right now. Add some products!",
        
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "dear user your cart ",
      cart: cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Failed to see users cart",
      message: "Internal error to fetch your cart",
      error: error.message,
    });
  }
};