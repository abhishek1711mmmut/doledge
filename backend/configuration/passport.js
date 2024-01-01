const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done){



done(null , user);
});
passport.deserializeUser(function(user, done){



    done(null , user);
    });
    

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.REDIRECT_URI,
    passReqToCallback:true

},function(request , accessToken , refreshToken , profile , done){
    console.log(profile);
    return done(null , profile)
}
))