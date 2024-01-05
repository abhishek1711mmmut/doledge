const express = require("express");
const passport = require("passport");
const router = express.Router();

const {User} = require('../model/user');
const { getToken } = require("../configuration/token");

// this route will show your google emails to register with, when you choose one of them
// it will redirect you to '/google/callback' route
router.get('/signin/google', passport.authenticate('google-signin', {scope: ['profile', 'email']}));

// gets invoked after choosing email in '/google'
// defines if the user success authenticated or not and based on each case redirect to it's route.
router.get('/signin/google/callback', passport.authenticate('google-signin', {
    successRedirect: 'http://localhost:3000/auth/loadLoginData', // redirect to react app home page
    failureRedirect: '/auth/failed',
}))

// redirected to when login succeed
// to be invoked from REACT app
router.get('/signin/success', (req, res) => {
    if(req.user) {  
        User.findOne({email: req.user.emails[0].value})
        .then(user => {
            if(!!user){
                let userData = {};
                let token = getToken(user);
                userData.name = user.name;
                userData._id = user._id;

                return res.status(200).json({
                    status: 'success',
                    user: userData,
                    token,
                })
            } else {
                return res.status(401).json({
                    status: 'failed',
                    message: "user doesn't exist",
                })
            }
        })
        .catch(err => console.log(err))
    } else {
        res.status(403).json({
            status: 'faild',
            message: 'not authorized',
        })
    }
})

// redirected to when login fails
router.get('/signin/failed', (req, res) => {
    res.status(401).json({
        status: 'faild',
        message: 'google login failed',
    });
})

// to logout
router.get('/logout', (req, res) => {
    req.logOut(() => {
        req.session.destroy(() => {
            // delete req.user;
            res.json({logut: true});
        })
    });
})

module.exports = router;