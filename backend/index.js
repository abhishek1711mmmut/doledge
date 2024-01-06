const express = require("express");
const dotenv = require("dotenv").config();
const database = require("./configuration/databaseConfig");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

// Google Authentication Imports
require('./configuration/passport'); // definition to passport object
const googleSignupRoutes = require('./routes/GoogleSignup'); // google signup routes
const googleSigninRouts = require('./routes/GoogleSignin');


const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: 'GET,UPDATE,PUT,DELETE',
  credentials: true,
}));

app.get("/", (req, res) => {
  res.json("hello from server");
});

// Google Authentication
app.use(session({
  secret: 'hello',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(googleSignupRoutes)
// app.use(googleSigninRouts)

// Google Logout middleware
app.get('/logout', (req, res) => {
  req.logOut((error1) => {
    req.session.destroy((error2) => {
          // delete req.user;
          res.clearCookie("connect.sid");
          return res.json('done')
      })
  });
})


/// Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const blogRouter = require('./routes/blog')
const serviceRouter = require('./routes/service')
const cartRouter = require('./routes/cart')
const socialauthRouter = require("./routes/socialauth");


// APIs
app.use('/api/auth', authRouter.routes) //✅
app.use('/api', userRouter.routes) //✅
app.use('/api', productRouter.routes) //✅
app.use('/api',blogRouter.routes)
app.use('/api',serviceRouter.routes)
app.use('/api', cartRouter.routes)
app.use('/api/socialauth' , socialauthRouter.routes);

const port = process.env.PORT || 8800;
database()
    .then(() => console.log("Database connected 😎👍"))
    .catch(() => console.log("Database connection failed"));

app.listen(port, () => console.log( `server started on http://localhost:${port}`))   