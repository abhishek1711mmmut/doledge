const bcrypt = require("bcrypt");
const model = require("../model/user");
const token = require("../configuration/token");
const userModel = require("../model/user").User;

exports.getUser = async (req, res) => {
    try {
      const jwtToken = token.extractJWTFromRequest(req);
      const jwtInfo = token.extractJWTDetails(jwtToken);
  
      const user = await userModel.findOne({ _id: jwtInfo.ID }).select('-confirmPassword');
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({
        status: 'success',
        message: 'User details retrieved successfully',
        user: user,
      });
    } catch (error) {
      console.log('get user error: ' + error);
      return res.status(500).send({
        status: 'Failed',
        message: 'Internal error occurred',
        error: error,
      });
    }
  };
  
  

exports.updateUserDetails = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    const user = await userModel
      .findOne({ email: jwtInfo.email })
      .select(" -confirmPassword");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Access and process fields from the request body
    const updateData = req.body;
    // Update the user object properties with values from updateData
    Object.assign(user, updateData);
    // Save the user document after processing the updates
    await user.save();

    return res.status(200).send({
      status: "success",
      message: "User details updated successfully",
      user: user,
    });
  } catch (error) {
    console.log("update user details error: " + error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error occurred",
      error: error,
    });
  }
};
