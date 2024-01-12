const express = require('express');
const router = express.Router();
const serviceController = require('../controller/service');

//for fetching services
router.get("/services",serviceController.getAllServices);
//Create services
router.post("/add-services",serviceController.addService);
// Update a service
router.put('/services/:id', serviceController.updateService);
// Delete a service
router.delete('/services/:id', serviceController.deleteService);

exports.routes = router;     