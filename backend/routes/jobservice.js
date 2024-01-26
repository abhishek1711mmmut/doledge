const express = require('express');
const router = express.Router();
const jobservicecontroller = require('../controller/jobservice');


//! create a new service
router.post('/create-job-service', jobservicecontroller.createJobService);

//! Get all job services
router.get('/job-services', jobservicecontroller.getAllJobServices);

//! Select a job service and calculate total price
router.post('/select-job-service-option', jobservicecontroller.selectJobServiceOption);

    


exports.routes = router;     