const express = require("express");
const router = express.Router();
// const socialauthController = require("../controller/socialauth");
const passport = require("passport");


router.get("/g" , passport.authenticate('google' , { scope:['profile', 'email']}));


router.get('/f' , passport.authenticate('facebook' ,{
scope:['public_profile' , 'email']
}))


exports.routes = router;