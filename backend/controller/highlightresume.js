const HighlightResume = require("../model/highlistresume");

//! create highlight resume services
const createHighlightResume = async (req, res) => {
  try {
    const { serviceName, plans } = req.body;

    const existingService = await HighlightResume.findOne({ serviceName });
    if (existingService) {
      return res
        .status(400)
        .json({ message: "Highlight Resume service name already in use" });
    }

    const newHighlightResume = new HighlightResume({
      serviceName,
      plans,
    });
    await newHighlightResume.save();

    return res.status(201).json({
      status: "success",
      message: `${serviceName} Created Successfully`,
      newHighlightResume,
    });
  } catch (error) {
    console.log("Error in creating new highlight resume service" + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in creating new highlight resume service",
      error: error.message,
    });
  }
};
//! Get all highlight resume services
const getAllHighlightResumes = async (req, res) => {
  try {
    const highlightResumes = await HighlightResume.find();
    return res.status(201).json({
      status: "success",
      message: "Highlight Resumes fetched successfully",
      highlightResumes,
    });
  } catch (error) {
    console.log("Error in fetching highlight resumes : " + error);
    return res.status(500).json({
      status: "failed",
      message: "Error in fetching highlight resumes",
      error: error.message,
    });
  }
};
//! select plans of highlight resume services
const selectHighlightResumeOption = async (req, res) => {
  try {
    const { serviceId, planId } = req.body;
    const selectedService = await HighlightResume.findOne({ _id: serviceId });

    if (!selectedService) {
      return res
        .status(404)
        .json({ message: "Highlight Resume service not found to select" });
    }

    const selectedPlan = selectedService.plans.find(
      (plan) => plan._id.toString() === planId
    );

    if (!selectedPlan) {
      return res
        .status(404)
        .json({
          message: "Plan not found for the selected Highlight Resume service",
        });
    }

    const totalPrice = selectedPlan.price;

    const successMessage = `You have selected ${selectedService.serviceName} with plan ${selectedPlan.durationMonths} and here is your Total: ${totalPrice}`;
    res.json({
      success: true,
      message: successMessage,
      selectedService: selectedService.serviceName,
      selectedPlan: selectedPlan.planId,
      totalPrice,
    });
  } catch (error) {
    console.log(
      "Error in selecting Highlight Resume service and its option" + error
    );
    return res.status(500).json({
      status: "failed",
      message: "Error in selecting Highlight Resume service and its option",
      error: error.message,
    });
  }
};
module.exports = {
  createHighlightResume,
  getAllHighlightResumes,
  selectHighlightResumeOption,
};
