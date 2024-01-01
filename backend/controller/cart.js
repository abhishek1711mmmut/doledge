const mongoose = require("mongoose"); // Import mongoose
const Cart = require("../model/cart"); // Use the correct model export name
const token = require("../configuration/token");
const ProductModel = require("../model/product");

exports.addToCart = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    // Ensure that the user is authenticated and you have access to the user's _id in req.user._id.
    if (!jwtInfo) {
      return res.status(401).json({
        status: "Failed",
        message: "User not authenticated. Please log in or sign up.",
      });
    }

    const productId = req.params.productId; // Use the correct parameter name

    // Find the product by its ID
    const product = await ProductModel.findOne({_id:productId});

    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    // Find the user's cart based on user ID
    const cart = await Cart.findOne({ _userId: jwtInfo.ID });

    if (!cart) {
      return res.status(404).json({
        status: "Failed",
        message: "Cart not found",
      });
    }

    // Create a new cart item using the product details
    const cartProduct = {
      product_id: product._id, // Use 'product._id' instead of 'Product._id'
      price: product.price,
      description: product.description,
      title: product.title,
    };

    // Add the product to the cart
    cart.products.push(cartProduct);

    cart.cartTotal += product.price; // Update the cart total

    await cart.save();

    return res.status(201).json({
      status: "Success",
      message: "Product added to the cart successfully",
      cartItem: cartProduct, // Return the added cart product
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


// Delete an item from the cart
exports.deleteCartItem = async (req, res) => {
  try {
    console.log("AM i calling from deleteCartItem");
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);
    const productId = req.params.cartId; // Assuming you use cartId in the route
    console.log("I m product id", productId);

    // Find the user's cart based on user ID
    const cart = await Cart.findOne({ _userId: jwtInfo.ID });
    console.log("Print ho ra h..", cart);

    if (!cart) {
      return res.status(404).send({
        status: "Failed",
        message: "Cart not found",
      });
    }
    // console.log('PRODUCT_ID is here',product_id)

    // Find the index of the item to be deleted in the cart.products array
    const cartProductIndex = cart.products.findIndex(
      (cartProduct) => cartProduct.product_id === productId
    );

    if (cartProductIndex === -1) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found in the cart",
      });
    }

    // Remove the item from the cart
    cart.products.splice(cartProductIndex, 1);

    await cart.save();

    return res.status(200).send({
      status: "success",
      message: "Product deleted from the cart successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error",
      error: error.message,
    });
  }
};
