const mongoose = require('mongoose');

// Define the Schema for Resume
const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  education: [
    {
      degree: { type: String, required: true },
      university: { type: String, required: true },
      year: { type: Number, required: true },
    }
  ],
  experience: [
    {
      position: { type: String, required: true },
      company: { type: String, required: true },
      year: { type: String, required: true },
    }
  ],
  skills: { type: [String], required: true },
});

// Create the Resume model
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
