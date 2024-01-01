const { Blog } = require('../model/service');

exports.getAllServices = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(201).json({
            status: "success",
            message: "Services or Plans displayed successfully",
            data: blogs
        });
    } catch (error) {
        console.error('Error fetching Services:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
