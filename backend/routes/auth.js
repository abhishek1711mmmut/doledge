const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

const fileUpload = require('../middlewares/fileUpload');
const validate = require('../middlewares/validation');

const signinValidation = [validate.email, validate.password];
const signupValidation = [validate.name, validate.email, validate.password, validate.tel];

router
  .post("/signup", fileUpload.single('resume'),signupValidation, authController.signup)
  .post("/login",signinValidation, authController.login);
  

exports.routes = router;
