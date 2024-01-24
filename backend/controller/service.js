const Service = require("../model/service");

//! get particular
exports.getService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({
      status: "success",
      message: "Service details fetched successfully",
      service,
    });
  } catch (error) {
    console.log("error in fetch service by id");
    res.status(500).json({ error: "Internal server error" });
  }
};
//! get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    if (!!services || services.length != 0) {
      res.status(201).json({
        status: "success",
        message: "Services or Plans displayed successfully",
        services,
      });
    } else {
      res.json({
        status: "failed",
        message: "No services where found",
      });
    }
  } catch (error) {
    console.error("Error fetching Services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//! create service
exports.addService = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;

    const existingService = await Service.findOne({ title });

    if (existingService) {
      return res.status(400).json({
        status: "failed",
        message: "Service with the same title already exists",
      });
    }

    if (!title || !description || !price || !image) {
      return res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }
    const newService = new Service({
      title,
      description,
      price,
      image,
    });

    await newService.save();

    res.status(201).json({ message: "Service added successfully", newService });
  } catch (error) {
    console.error("Error adding Service:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
//! update service by id
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, image } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, price, image },
      { new: true }
    );

    if (!updatedService) {
      return res
        .status(404)
        .json({ status: "failed", message: "Service not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Service updated successfully",
      updatedService,
    });
  } catch (error) {
    console.error("Error updating Service:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
//! delete service by id
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res
        .status(404)
        .json({ status: "failed", message: "Service not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Service deleted successfully",
      deletedService,
    });
  } catch (error) {
    console.error("Error deleting Service:", error);
    res.status(500).json({ status: "failed", error: "Internal server error" });
  }
};
