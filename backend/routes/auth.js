const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

const fileUpload = require('../middlewares/fileUpload');
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

router
  .post("/signup", fileUpload.single('resume'), authController.signup)
  .post("/login", authController.login);
  

exports.routes = router;
