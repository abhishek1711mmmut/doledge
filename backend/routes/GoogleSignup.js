const express = require("express");
const passport = require("passport");
const router = express.Router();

// this route will show your google emails to register with, when you choose one of them
// it will redirect you to '/google/callback' route
router.get('/signup/google', passport.authenticate('google-signup', {
    scope: ['profile', 'email'], 
    prompt : "select_account",
}));

// gets invoked after choosing email in '/google'
// defines if the user success authenticated or not and based on each case redirect to it's route.
router.get('/google/callback', passport.authenticate('google-signup', {
    successRedirect: 'http://localhost:3000/auth/googlePassword', // redirect to react app googlePassword page
    failureRedirect: '/signup/failed',
}))

// redirected to when login succeed
// to be invoked from REACT app
router.get('/signup/success', (req, res) => {
    if(req.user) {  
        res.status(200).json({
            status: 'success',
            user: req.user,
        })
    } else {
        res.status(403).json({
            status: 'faild',
            message: 'not authorized',
        })
    }
})

// redirected to when login fails
router.get('/signup/failed', (req, res) => {
    res.status(401).json({
        status: 'faild',
        message: 'google login failed',
    });
})

module.exports = router;
