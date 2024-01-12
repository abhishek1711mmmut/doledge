const express = require('express');
const router = express.Router();
const resumeServiceController = require('../controller/resumeService');


//create a new service
router.post('/create-service', resumeServiceController.createService);

//get all services
router.get('/services', resumeServiceController.getAllServices);

//select a service and calculate total price
router.post('/select-service-option', resumeServiceController.selectServiceOption);

    


exports.routes = router;     