const express = require('express');
const routes = express.Router();

const dashboardControllers = require('../controller/dashboard');
const fileUpload = require('../middlewares/fileUpload');

routes.post('/complete', fileUpload.single('resume') , dashboardControllers.postCompleteProfile);

routes.post('/update', dashboardControllers.postUpdateProfile);

routes.get('/userData/:userID', dashboardControllers.getUserData);

exports.routes = routes;