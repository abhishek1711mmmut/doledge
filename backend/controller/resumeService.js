const ResumeService = require("../model/resumeService");

//! create service
const createService = async (req, res) => {
  try {
    const { serviceId, serviceName, basePrice, options } = req.body;

    const existingService = await ResumeService.findOne({ serviceId });
    if (existingService) {
      return res.status(400).json({ message: "Service ID already in use" });
    }

    const newService = new ResumeService({
      serviceId,
      serviceName,
      basePrice,
      options,
    });
    const data = await newService.save();

    return res.status(201).json({
      status: "success",
      message: `${serviceId} Created Successfully`,
      data,
    });
  } catch (error) {
    console.log("Error in creating new services" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in creating new services",
      error: error.message,
    });
  }
};
//! get all service
const getAllServices = async (req, res) => {
  try {
    const services = await ResumeService.find();
    return res.status(201).json({
      status: "success",
      message: "Resume Services fetched successfully",
      services,
    });
  } catch (error) {
    console.log("Error in fetching resume services : " + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in fetching resume services",
      error: error.message,
    });
  }
};
//!  select service and it's option
const selectServiceOption = async (req, res) => {
  try {
    const { serviceId, optionId } = req.body;
    const selectedService = await ResumeService.findOne({ serviceId });
    if (!selectedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    const selectedOption = selectedService.options.find(
      (opt) => opt.optionId === optionId
    );

    if (!selectedOption) {
      return res
        .status(404)
        .json({ message: "Option not found for the selected service" });
    }

    const totalPrice = selectedService.basePrice + selectedOption.optionPrice;

    const successMessage = `You have selected ${selectedService.serviceId} with option ${selectedOption.optionId} and here is yout Total: ${totalPrice}`;
    res.json({
      success: true,
      message: successMessage,
      selectedService: selectedService.serviceId,
      selectedOption: selectedOption.optionId,
      totalPrice,
    });
  } catch (error) {
    console.log("Error in selecting service and it's option" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in selecting service and it's option",
      error: error.message,
    });
  }
};
module.exports = {
  createService,
  getAllServices,
  selectServiceOption,
};
