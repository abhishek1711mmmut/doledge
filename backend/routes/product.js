const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const { validateToken } = require('../configuration/token');

router
    .post("/product", validateToken, productController.createProduct) // create products
    .get("/product", validateToken, productController.getAllProduct) // read product
    .put("/product/:id", validateToken, productController.updateProduct) // update product
    .delete("/product/:id", validateToken, productController.deleteProduct) // delete product

exports.routes = router;     