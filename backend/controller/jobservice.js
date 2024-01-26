const jobService = require("../model/jobService");
const JobService = require("../model/jobService");

//! create job services
const createJobService = async (req, res) => {
  try {
    const { jobServiceName, plans } = req.body;

    const existingService = await jobService.findOne({ jobServiceName });
    if (existingService) {
      return res
        .status(400)
        .json({ message: "Job Service name already in use" });
    }

    const newJobService = new JobService({
      jobServiceName,
      plans,
    });
    await newJobService.save();

    return res.status(201).json({
      status: "success",
      message: `${jobServiceName} Created Successfully`,
      newJobService,
    });
  } catch (error) {
    console.log("Error in creating new job service" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in creating new job service",
      error: error.message,
    });
  }
};
//! Get all job services
const getAllJobServices = async (req, res) => {
  try {
    const jobServices = await JobService.find();
    return res.status(201).json({
      status: "success",
      message: "Job Services fetched successfully",
      jobServices,
    });
  } catch (error) {
    console.log("Error in fetching job services : " + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in fetching job services",
      error: error.message,
    });
  }
};

//! selecte plans of  job services
const selectJobServiceOption = async (req, res) => {
  try {
    const { serviceId, planId } = req.body;
    const selectedService = await JobService.findOne({ _id: serviceId });

    if (!selectedService) {
      return res
        .status(404)
        .json({ message: "Job Service not found to select" });
    }

    const selectedPlan = selectedService.plans.find(
      (plan) => plan._id.toString() === planId
    );

    if (!selectedPlan) {
      return res
        .status(404)
        .json({ message: "Plan not found for the selected job service" });
    }

    const totalPrice = selectedPlan.price;

    const successMessage = `You have selected ${selectedService.jobServiceName} with plan ${selectedPlan.durationMonths} and here is your Total: ${totalPrice}`;
    res.json({
      success: true,
      message: successMessage,
      selectedService: selectedService.jobServiceName,
      selectedPlan: selectedPlan.planId,
      totalPrice,
    });
  } catch (error) {
    console.log("Error in selecting job service and its option" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in selecting job service and its option",
      error: error.message,
    });
  }
};

module.exports = {
  createJobService,
  getAllJobServices,
  selectJobServiceOption,
};
