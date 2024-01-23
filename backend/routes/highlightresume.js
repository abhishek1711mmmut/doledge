const express = require("express");
const router = express.Router();
const highlightResumeController = require("../controller/highlightresume");

//! create a new service
router.post(
  "/create-highlight-resume",
  highlightResumeController.createHighlightResume
);

//! Get all highlight resume services
router.get(
  "/highlight-resumes",
  highlightResumeController.getAllHighlightResumes
);

//! Select a highlight resume service and calculate total price
router.post(
  "/select-highlight-resume-option",
  highlightResumeController.selectHighlightResumeOption
);

exports.routes = router;
