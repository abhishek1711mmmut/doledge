const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const { validateToken } = require("../configuration/token");

router
  .get("/users", validateToken, userController.getAllUsers) // all users
  .get("/user", validateToken, userController.getCurrentUser) // current user details
  .patch("/user/updateCurrent", validateToken, userController.updateUserDetails) // update current
  .patch("/user/update/:id", validateToken, userController.updateUserById) 
  .get("/user/:id", validateToken, userController.getUserById) // get user details by ID
  .delete("/user/:id", validateToken, userController.deleteUserById); //  delete user by ID

exports.routes = router;
