const bcrypt = require('bcrypt');
const { User } = require('../model/user')
const { getToken } = require('../configuration/token');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    try {
        let { name, email, password, tel, workStatus, whatsApp, picture } = req.body;
        workStatus = workStatus ? workStatus.split(' ')[1] : '';
        const validationErrorsArray = validationResult(req);
        console.log(req.body)
        // console.log(validationErrorsArray)

        // // check inputs validation
        // if (validationErrorsArray.length != 0) {
        //     return res.status(400).json({
        //       status: "Failed",
        //       message: "Invalid input, please try again" 
        //     });
        // }

        // check if user already exists
        const exitingUser = await User.findOne({ email: email });
        if (exitingUser) {
            return res.json({
              status: "failed",
              type: 'Register',
              error: "User already exists, Please Sign-in",
            });
        }
        
        // hashing password
        bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // create a new user
          const newUser = new User({name, email, picture, phoneNumber: tel, password: hashedPassword, workStatus, whatsApp});
          newUser.save()
          .then(() => {
            const token = getToken(newUser);
            return res.status(201).json({
              status: "success",
              message: "User registered successfully",
              user: newUser,
              token: token,
            });
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

      // incase of any internal error happens
    } catch (error) {
        console.log("Sign-up error: " + error);
        return res.status(500).json({
            status: "failed",
            type: 'Register',
            error: "Internal server error occurred, please try again later",
        });
    }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validationErrorsArray = validationResult(req);
    // console.log(validationErrorsArray)

    // check inputs validation
    // if (validationErrorsArray.length != 0) {
    //     return res.status(400).json({
    //       status: "Failed",
    //       message: "Invalid input, please try again" 
    //     });
    // }

    // check if user already exists
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.json({
          status: "failed",
          type: 'Signin',
          error: "User doesn't exist, Please sign-up" 
        });
    }

    // check if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
    return res.json({
      status: "failed",
      type: 'Signin',
      error: "Incorrect password. Please try again.",
    });

    // generate token for user & specify user data
    const token = getToken(user);
    const updatedUser = {_id: user._id, name: user.name, email: user.email, picture: user.picture}

    return res.status(200).json({ 
      status: "success", 
      error: "Login successful",
      user: updatedUser, 
      token: token,
    });

    // incase of any internal error happens
  } catch (error) {
    console.log("Sign-up error: " + error);
    return res.status(500).json({
        status: "failed",
        type: 'Signin',
        error: "Internal server error occurred, please try again later",
    });
  }
};


