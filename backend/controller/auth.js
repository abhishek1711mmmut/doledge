const bcrypt = require("bcrypt");
const User = require("../model/user");
const { getToken } = require("../configuration/token");
const { validationResult } = require("express-validator");

//! Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, tel, workStatus, whatsApp, picture } =
      req.body;
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

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        status: "failed",
        type: "Register",
        error: "User already exists, Please Sign-in",
      });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      picture,
      phoneNumber: tel,
      password: hashedPassword,
      workStatus: workStatus ? workStatus.split(" ")[1] : null,
      whatsApp,
    });

    await newUser.save();

    const token = getToken(newUser);

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    console.error("Sign-up error:", error);
    return res.status(500).json({
      status: "failed",
      type: "Register",
      error: "Internal server error occurred, please try again later",
    });
  }
};
//!login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validationErrors = validationResult(req);

    // Check inputs validation
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);
      return res.status(400).json({
        status: "failed",
        type: "Signin",
        errors: errors,
      });
    }

    if (!email || !password)
      return res.json({
        status: "failed",
        type: "Signin",
        error: "Please enter email and password",
      });

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: "failed",
        type: "Signin",
        error: "User doesn't exist, Please sign-up",
      });
    }

    // Check if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.json({
        status: "failed",
        type: "Signin",
        error: "Incorrect password. Please try again.",
      });
    }

    // Generate token for user
    const token = getToken(user);

    return res.status(200).json({
      status: "success",
      error: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      status: "failed",
      type: "Signin",
      error: "Internal server error occurred, please try again later",
    });
  }
};
