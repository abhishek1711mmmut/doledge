const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// for signup proccess
passport.use('google-signup', new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.REDIRECT_URI,
    passReqToCallback:true

}, function(request , accessToken , refreshToken , profile , done){
    // register user here with database
    // console.log(profile);
    return done(null , profile)
}
))  

// for signin proccess
passport.use('google-signin', new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.REDIRECT_URI,
    passReqToCallback:true

}, function(request , accessToken , refreshToken , profile , done){
    // register user here with database
    // console.log(profile);
    return done(null , profile)
}
))  

passport.serializeUser(function(user, done){
    done(null , user);
});

passport.deserializeUser(function(user, done){
    done(null , user);
});
    