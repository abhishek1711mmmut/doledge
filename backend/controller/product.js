const { Product } = require("../model/product");
const { User } = require("../model/user");

exports.createProduct = async (req, res) => {
    try {
      // Ensure that the user is authenticated and you have access to the user's _id in req.user._id.
      if (!req.user) {
        return res.status(401).json({
          status: "Failed",
          message: "User not authenticated. Please log in or sign up.",
        });
      }
      const { title, description, price } = req.body;
      if (!title || !description || !price) {
        return res.status(400).json({
          status: "Failed",
          message: "Please provide all required fields: title, description, price.",
        });
      }
  
      // check if exists
      const existingProduct = await Product.findOne({
        title: title,
        description: description,
      });
  
      if (existingProduct) {
        return res.status(400).json({
          status: "Failed",
          message: "Product with the same title and description already exists.",
        });
      }
      // Set the user_id field to the user's _id from the authenticated user
      req.body.user_id = req.user._id;
  
      const product = new Product(req.body);
      await product.save();
  
      return res.status(201).json({
        status: "Success",
        message: "Product added successfully",
        product: product,
      });
    } catch (error) {
      console.log("Create product error: " + error);
      return res.status(500).json({
        status: "Failed",
        message: "Internal error occurred",
        error: error,
      });
    }
  };
  






exports.getAllProduct = async (req, res) => {
    try {
        const query = Product.find().select('-__v');

        if (req.query.category) {
            query.find({ category: req.query.category });
        }
        if (req.query._sort && req.query._order) {
            query.sort({ [req.query._sort]: req.query._order });
        }
        if (req.query._page && req.query._limit) {
            const pageSize = parseInt(req.query._limit);
            const page = parseInt(req.query._page);
            query.skip(pageSize * (page - 1)).limit(pageSize);
        }

        const docs = await query.exec();
        return res.status(200).send({
            status: "Success",
            message: "Product Fetched successfully",
            data: docs,
        });
    } catch (error) {
        console.log("Fetch all product error: " + error);
        return res.status(500).send({
            status: "Failed",
            message: "Internal error occurred",
            error: error,
        });
    }
};
