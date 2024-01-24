//! NECESSARY IMPORTS
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const port = process.env.PORT || 8800;
const database = require("./configuration/databaseConfig");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//! middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,UPDATE,PUT,DELETE,PATCH",
    credentials: true,
  })
);

//! server msg Routes
app.get("/", (req, res) => {
  res.json("hello from Doldege server");
});

//! Routes imports
const authRouter = require("./routes/auth");
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");
const resumeServiceRouter = require("./routes/resumeService");
const productRouter = require("./routes/product");
const blogRouter = require("./routes/blog");
const cartRouter = require("./routes/cart");
const resumequalityRoutes = require("./routes/resumequality");
const serviceRouter = require("./routes/service");
const resumeRouter = require("./routes/resume");
const cardRouter = require("./routes/card");
const jobserviceRouter = require("./routes/jobservice");
const highlightResumeRouter = require("./routes/highlightresume");
const contactusRouter = require("./routes/contactus");
// const dashRouter = require("./routes/dashboard");

//! BASE API'S
app.use("/api/auth", authRouter.routes); //✅
app.use("/api/home", homeRouter.routes); //✅
app.use("/api", userRouter.routes); //✅
app.use("/api/resumeService", resumeServiceRouter.routes); //✅ // resume k services
app.use("/api/jobService", jobserviceRouter.routes); //✅ // job k  services
app.use("/api/contact-us", contactusRouter.routes); //✅
app.use("/api", productRouter.routes); //✅
app.use("/api", blogRouter.routes); //✅
app.use("/api", cartRouter.routes); //✅
app.use("/api", resumequalityRoutes); //✅
app.use("/api/home", serviceRouter.routes); //✅ // normal services
app.use("/api/home", cardRouter.routes); //✅
app.use("/api/resume", resumeRouter.routes); //✅ create and get all resume
app.use("/api/highlightresume", highlightResumeRouter.routes); //✅
// app.use("/api/dashboard", dashRouter.routes);

//! SERVER START FUNCTION
const startServer = async () => {
  try {
    await database();

    app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(
      "Error connecting to the database or starting the server:",
      error
    );
  }
};

startServer();
