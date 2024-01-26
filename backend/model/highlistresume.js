const mongoose = require("mongoose");

const highlightResumeSchema = new mongoose.Schema(
  {
    serviceName: {
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
  },
  { timestamps: true }
);

const HighlightResume = mongoose.model(
  "HighlightResume",
  highlightResumeSchema
);
module.exports = HighlightResume;
