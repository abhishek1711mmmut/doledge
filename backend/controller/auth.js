const bcrypt = require('bcrypt');
const model = require('../model/user')
const { getToken } = require('../configuration/token')

const userModel = model.User;

exports.signup = async (req, res) => {
    try {
        const { email } = req.body;
        
        // Shehab Fekry Test
        console.log(req.body)
        return res.send({message:'got you req /singup'}) 

        const exitingUser = await userModel.findOne({ email: email });
        if (exitingUser) {
            return res.status(400).send({
                status: "Failed",
                message: "User already exists"
            });
        }

        const newUser = new userModel(req.body);
        await newUser.save()
        const token = getToken(newUser);
        return res.status(201).send({
            status: "Success",
            message: "User registration successful done",
            token: token,
            user:newUser
        });

    } catch (error) {
        console.log("Sign-up error: " + error);
        return res.status(500).send({
            status: "Failed",
            message: "Internal error occurred",
            error: error
        });
    }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Shehab Fekry Test
    console.log(req.body)
    return res.send({message:'got you req /singup'}) 

    const user = await userModel.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({
          status: "Failed",
          message: "User Not exists. Please sign-up.",
        });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res
        .status(200)
        .json({
          status: "Failed",
          message: "Incorrect password. Please try again.",
        });

    const token = getToken(user);
    res
      .status(200)
      .json({ status: "success", message: "Login successful", token });
  } catch (error) {
    res
      .status(500)
      .send(error);
  }
};


