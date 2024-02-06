const express = require("express");
const router = express.Router();
const contactUsController = require("../controller/contactUs");

const validate = require("../middlewares/validation");

// const contactValidationRules = [validate.name, validate.email, validate.tel];

// Save user details for contact
router.post(
  "/get-a-callback",
  // contactValidationRules,
  contactUsController.saveContactDetails
);

// Get all user details for contact
router.get("/contact/getall", contactUsController.getAllContactDetails);

exports.routes = router;
