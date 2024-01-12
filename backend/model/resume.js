// models/Resume.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: String,
  university: String,
  year: Number,
});

const experienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  year: String,
});

const resumeSchema = new mongoose.Schema({
  name: String,
  education: [educationSchema],
  experience: [experienceSchema],
  skills: [String],
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
