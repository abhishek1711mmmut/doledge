const ContactUs = require("../model/contactus");
const { validationResult } = require("express-validator");
//! Save user details for get a callback
const saveContactDetails = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const validationErrors = validationResult(req);

     // Check inputs validation
     if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);
      return res.status(400).json({
        status: "failed",
        type: "Register",
        errors: errors,
      });
    }


    if (!name || !email || !phoneNumber) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required",
      });
    }

    const existingContact = await ContactUs.findOne({ email });

    if (existingContact) {
      return res.status(400).json({
        status: "failed",
        message:`Dear ${name}, we already have your contact details in our database. We will contact you soon.`,
      });
    }

    const newContact = new ContactUs({
      name,
      email,
      phoneNumber,
    });

    await newContact.save();

    return res.status(201).json({
      status: "success",
      message: ` dear ${name} your Contact details saved successfully we will get back to you`,
    });
  } catch (error) {
    console.log("Error in saving contact details" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in saving contact details",
      error: error.message,
    });
  }
};

//! Get all user details for contact
const getAllContactDetails = async (req, res) => {
  try {
    const contacts = await ContactUs.find();
    return res.status(200).json({
      status: "success",
      message: "All contact details fetched successfully",
      contacts,
    });
  } catch (error) {
    console.log("Error in fetching contact details" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in fetching contact details",
      error: error.message,
    });
  }
};

module.exports = {
  saveContactDetails,
  getAllContactDetails,
};
