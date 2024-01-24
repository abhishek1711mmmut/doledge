const Resume = require("../model/resume");

//! create resume
exports.createresume = async (req, res) => {
  try {
    const { name, education, experience, skills } = req.body;
    if (!name || !education || !experience || !skills) {
      return res.status(400).json({
        error: "Incomplete data. Please provide all required fields.",
      });
    }
    const newResume = new Resume({
      name,
      education,
      experience,
      skills,
    });
    const savedResume = await newResume.save();
    res.status(201).json({
      message: `Resume created successfully for ${name}`,
      resume: savedResume,
    });
  } catch (error) {
    console.error("Error in  creating resume:", error);
    res.status(500).json({ error: "Internal Server Error in create resume" });
  }
};

//! get all resume
exports.getallresume = async (req, res) => {
  try {
    const allResumes = await Resume.find();

    res
      .status(200)
      .json({ message: `Resume fetched successfully`, allResumes });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
