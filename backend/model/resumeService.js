const mongoose = require("mongoose");

const resumeServiceSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
    unique: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  options: [
    {
      optionId: String,
      optionName: String,
      optionPrice: Number,
    },
  ],
});

exports.ResumeService = mongoose.model("ResumeService", resumeServiceSchema);
