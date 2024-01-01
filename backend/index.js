const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const database = require("./configuration/databaseConfig");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const passport = require('passport');
const session = require('express-session');

require("./configuration/passport")
require("./configuration/passportFacebook");
// const corsOptions = {
//     exposedHeaders: 'Authorization',
// };

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000 // 1 hour in milliseconds
    }
  }));


app.get("/facebook/callback" , passport.authenticate('facebook' , {failureRedirect:"/failed"})
, function(req,res){
res.send("Hogya Login Facebook Se!")
}
);

const port = process.env.PORT || 8800;
const cors = require('cors');

// middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());



app.use(passport.initialize());
app.use(passport.session());


/// Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const blogRouter = require('./routes/blog')
const serviceRouter = require('./routes/service')
const cartRouter = require('./routes/cart')
const socialauthRouter = require("./routes/socialauth");




app.use('/api/auth', authRouter.routes) //✅
app.use('/api', userRouter.routes) //✅
app.use('/api', productRouter.routes) //✅
app.use('/api',blogRouter.routes)
app.use('/api',serviceRouter.routes)
app.use('/api', cartRouter.routes)
app.use('/api/socialauth' , socialauthRouter.routes);

app.get("/google/callback" , passport.authenticate('google' , {failureRedirect:"/failed"})
, function(req,res){
res.send("Hogya Login Google Se !")
// res.redirect('http://localhost:3000'); 
}
);



app.get("/",(req,res)=>{
    res.send("Hello from Server")
})


database()
    .then(() => console.log("Database connected 😎👍"))
    .catch(() => console.log("Database connection failed"));

app.listen(port, () => console.log( `server started on http://localhost:${port}`))   