const express = require('express');
const router = express.Router();
const resumeController = require('../controller/resume');

// Create a resume
router.post('/resumes', resumeController.createResume);

// Get all resumes
router.get('/resumes', resumeController.getResumes);

module.exports = router;
