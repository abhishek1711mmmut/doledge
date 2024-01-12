const Resume = require('../model/resume');

exports.createResume = async (req, res) => {
  try {
    const { name, education, experience, skills } = req.body;

    const newResume = new Resume({
      name,
      education: education.map(edu => ({
        degree: edu.degree,
        university: edu.university,
        year: edu.year
      })),
      experience: experience.map(exp => ({
        position: exp.position,
        company: exp.company,
        year: exp.year
      })),
      skills,
    });

    await newResume.save();

    res.status(201).json({
      status: 'success',
      message: 'Resume created successfully',
    });
  } catch (error) {
    console.error('Error creating resume:', error);
    res.status(500).json({ status: 'failed', error: 'Internal server error' });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.status(200).json({
      status: 'success',
      message: 'Resumes retrieved successfully',
      resumes,
    });
  } catch (error) {
    console.error('Error fetching resumes:', error);
    res.status(500).json({ status: 'failed', error: 'Internal server error' });
  }
};
