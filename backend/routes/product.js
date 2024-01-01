const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const { validateToken } = require('../configuration/token');

router
    .post("/product", validateToken, productController.createProduct)
    .get("/product", validateToken, productController.getAllProduct)


exports.routes = router;     