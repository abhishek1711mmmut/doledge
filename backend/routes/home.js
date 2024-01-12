const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");


router.get("/home/data", homeController.getHomeData);


exports.routes = router;