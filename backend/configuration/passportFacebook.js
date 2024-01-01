const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use( new FacebookStrategy({

clientID:process.env.FACEBOOK_APP_ID,
clientSecret:process.env.FACEBOOK_APP_SECRET,
callbackURL:process.env.FACEBOOK_CALLBACK_URL,
},
function (accessToken , refreshToken , profile , done){
    console.log(profile);
    return done(null , profile);
}


));