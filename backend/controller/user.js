const token = require("../configuration/token");
const userModel = require("../model/user");
//! get current user
exports.getCurrentUser = async (req, res) => {
  try {
    const jwtToken = token.extractJWTFromRequest(req);
    const jwtInfo = token.extractJWTDetails(jwtToken);

    const user = await userModel
      .findOne({ _id: jwtInfo.ID })
      .select("-confirmPassword");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      status: "success",
      message: "User details retrieved successfully",
      user: user,
    });
  } catch (error) {
    console.log("get user error: " + error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error occurred",
      error: error,
    });
  }
};
//! update current login user
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
//! update user by id
exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId).select("-confirmPassword");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updateData = req.body;

    Object.assign(user, updateData);

    await user.save();

    return res.status(200).json({
      status: "success",
      message: `${user.name} details updated successfully`,
      user,
    });
  } catch (error) {
    console.log("update user by ID error: " + error);
    return res.status(500).json({
      status: "Failed",
      message: "Internal error occurred",
      error,
    });
  }
};
//! get user by id
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel
      .findOne({ _id: userId })
      .select("-confirmPassword");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      status: "success",
      message: `${user.name} details retrieved successfully`,
      user: user,
    });
  } catch (error) {
    console.log("get user by ID error: " + error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error occurred",
      error: error,
    });
  }
};
//! delete user by id
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel
      .findByIdAndDelete(userId)
      .select("-confirmPassword");

    if (!user) {
      return res.status(404).json({ error: "User not found to delete" });
    }

    return res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    console.log("delete user by ID error: " + error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error occurred",
      error: error,
    });
  }
};
//! get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allusers = await userModel.find().select("-confirmPassword");

    return res.status(200).json({
      status: "success",
      message: "All Users retrieved successfully",
      allusers,
    });
  } catch (error) {
    console.log("get all users error: " + error);
    return res.status(500).send({
      status: "Failed",
      message: "Internal error occurred to fetch all user",
      error: error,
    });
  }
};
