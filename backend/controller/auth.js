const bcrypt = require('bcrypt');
const { User } = require('../model/user')
const { getToken } = require('../configuration/token');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    try {
        let { name, email, password, tel, workStatus, whatsApp } = req.body;
        workStatus = workStatus.split(' ')[1];
        const validationErrorsArray = validationResult(req);
        console.log(validationErrorsArray)

        // check inputs validation
        if (validationErrorsArray.length != 0) {
            return res.status(400).json({
              status: "Failed",
              message: "Invalid input, please try again" 
            });
        }

        // check if user already exists
        const exitingUser = await User.findOne({ email: email });
        if (exitingUser) {
            return res.status(400).send({
              status: "Failed",
              message: "User already exists" 
            });
        }
        
        // hashing password
        bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // create a new user
          const newUser = new User({name, email, phoneNumber: tel, password: hashedPassword, workStatus, whatsApp});
          newUser.save()
          .then(() => {
            return res.status(201).json({
              status: "Success",
              message: "User registered successfully",
            });
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

      // incase of any internal error happens
    } catch (error) {
        console.log("Sign-up error: " + error);
        return res.status(500).json({
            status: "Failed",
            message: "Internal error occurred",
            error: error
        });
    }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validationErrorsArray = validationResult(req);
    console.log(validationErrorsArray)

    // check inputs validation
    if (validationErrorsArray.length != 0) {
        return res.status(400).json({
          status: "Failed",
          message: "Invalid input, please try again" 
        });
    }

    // check if user already exists
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log(user)
        return res.status(400).json({
          status: "Failed",
          message: "User doesn't exist, Please sign-up." 
        });
    }

    // check if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
    return res.status(200).json({
      status: "Failed",
      message: "Incorrect password. Please try again.",
    });

    // generate token for user & specify user data
    const token = getToken(user);
    const updatedUser = {_id: user._id, name: user.name}

    return res.status(200).json({ 
      status: "success", 
      message: "Login successful",
      user: updatedUser, 
      token: token,
    });

    // incase of any internal error happens
  } catch (error) {
    console.log("Sign-up error: " + error);
    return res.status(500).json({
        status: "Failed",
        message: "Internal error occurred",
        error: error,
    });
  }
};


