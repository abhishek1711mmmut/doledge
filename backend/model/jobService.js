const mongoose = require("mongoose");

const jobServiceSchema = new mongoose.Schema({
  jobServiceName: {
    type: String,
    required: true,
    unique: true,
  },
  plans: [
    {
      durationMonths: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
}, { timestamps: true });

const jobService = mongoose.model("JobService", jobServiceSchema);
module.exports = jobService;
