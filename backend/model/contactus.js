const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
},{timestamps:true});

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
module.exports = ContactUs;
