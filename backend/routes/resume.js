const express = require('express');
const { createresume,getallresume } = require('../controller/resume');
const router = express.Router();


router.post("/create-resume",createresume)

router.get("/allresumes",getallresume)

exports.routes = router;   