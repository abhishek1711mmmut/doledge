const express = require('express');
const router = express.Router();
const serviceController = require('../controller/service');


//for all fetching services
router.get("/services",serviceController.getAllServices);
// get particular service by id
router.get("/service/:id",serviceController.getService);
//Create services
router.post("/add-services",serviceController.addService);
// Update a service
router.put('/services/:id', serviceController.updateService);
// Delete a service
router.delete('/services/:id', serviceController.deleteService);

exports.routes = router;     