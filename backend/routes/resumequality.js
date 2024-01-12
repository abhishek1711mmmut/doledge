// routes/resumeRoutes.js

const express = require('express');
const router = express.Router();
const resumeController = require('../controller/resumequality');

router.get('/resume-quality-score', resumeController.getResumeQualityScore);

module.exports = router;
