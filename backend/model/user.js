const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = Schema({
  name: { 
    type: String, 
    required: [true, "Name is Required"],
    default: "",
  },
  picture: {
    type: String,
    default: "",
  },
  email: { 
    type: String, 
    required: [true, "Email is Required"], 
    unique: true,
    default: "",
  },
  phoneNumber: {
    type: Number,
    default: 0,
  },
  password: { 
    type: String, 
    required: [true, "Password is Required"],
    default: "",
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



// Hash the password and confirmPassword before saving them to the database
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password") || !this.isModified("confirmPassword")) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     // const hashedConfirmPassword = await bcrypt.hash(this.confirmPassword, salt);
//     this.password = hashedPassword;
//     this.confirmPassword = this.password;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// Allow the same phoneNumber for existing users during updates
// userSchema.pre("findOneAndUpdate", async function (next) {
//   const update = this.getUpdate();
//   if (update.phoneNumber) {
//     // Check if there's an existing user with the same phoneNumber
//     const existingUser = await this.model.findOne({ phoneNumber: update.phoneNumber });
//     if (existingUser && existingUser._id.toString() !== update._id) {
//       // There's another user with the same phoneNumber
//       next(new Error("Phone number must be unique."));
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

exports.User = mongoose.model("User", userSchema);
