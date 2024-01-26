const Blog = require("../model/blog");

//! allblogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!!blogs || blogs.length != 0) {
      res.status(201).json({
        status: "success",
        message: "blogs fetched successfully",
        blogs,
      });
    } else {
      res.json({
        status: "failed",
        message: "No blogs where found",
      });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//!like blog by id
exports.likeBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found for like" });
    }

    blog.likes += 1;
    await blog.save();

    res.status(200).json({
      status: "success",
      message: `${blog.title} liked successfully`,
      data: blog,
    });
  } catch (error) {
    console.error("Error liking blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//!share blog by id
exports.shareBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found for share" });
    }

    blog.share += 1;
    await blog.save();

    res.status(200).json({
      status: "success",
      message: `${blog.title} Shared successfully`,
      data: blog,
    });
  } catch (error) {
    console.error("Error Shareing blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//!comment blog by id
exports.commentOnBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const { text, author } = req.body;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    blog.comments.push({ text, author });
    await blog.save();

    res.status(201).json({
      status: "success",
      message: `Comment added successfully on ${blog.title} `,
      data: blog,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
