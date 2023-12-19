const express = require('express');
const router = express.Router();
const serviceController = require('../controller/service');


router
    .get("/services",serviceController.getAllServices)


exports.routes = router;     