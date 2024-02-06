const Blog = require("../model/blog");
const Service = require("../model/service");
const Cards = require("../model/card");
const Resume = require("../model/resume");
const Product = require("../model/product");

exports.getHomeData = async (req, res, next) => {
  // console.log("home data");
  try {
    const services = await Service.find({});

    const blogs = await Blog.find({});

    const cards = await Cards.find({});

    const resumes = await Resume.find({});

    const products = await Product.find({});

    const data = { services, blogs, cards, resumes, products };

    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({
      status: "failed",
      error: "Internal server error occurred",
    });
  }
};
