const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  picture: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    default: "",
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  workStatus: {
    type: String,
    default: "",
  },
  whatsApp: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
