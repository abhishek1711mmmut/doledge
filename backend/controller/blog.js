const { Blog } = require('../model/blog');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        if(!!blogs || blogs.length != 0){
            res.status(201).json({
                status: "success",
                message: "blogs displayed successfully",
                blogs,
            });
        } else {
            res.json({
                status: "failed",
                message: "No blogs where found",
            });
        }
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.likeBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        blog.likes += 1;
        await blog.save();

        res.status(200).json({
            status: 'success',
            message: 'Blog liked successfully',
            data: blog,
        });
    } catch (error) {
        console.error('Error liking blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.shareBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        blog.share += 1;
        await blog.save();

        res.status(200).json({
            status: 'success',
            message: 'Blog Shared successfully',
            data: blog,
        });
    } catch (error) {
        console.error('Error Shareing blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};













exports.commentOnBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const { text, author } = req.body;

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        blog.comments.push({ text, author });
        await blog.save();

        res.status(201).json({
            status: 'success',
            message: 'Comment added successfully',
            data: blog,
        });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
