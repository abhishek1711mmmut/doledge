const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const { validateToken } = require('../configuration/token');


router
    .get('/user', validateToken, userController.getUser)
    .patch('/user/update', validateToken, userController.updateUserDetails)

exports.routes = router;