const { Service } = require('../model/service');
const { Blog } = require('../model/blog');

exports.getHomeData = async (req, res, next) => {
    try {
        let services = await Service.find({});
        let blogs = await Blog.find({});
        let data = {services, blogs};
        
        return res.status(200).json({
            status: "success",
            data,
        });
    } catch (err) {
        return res.json({
            status: "failed",
            error: "Internal server error occured",
        })
    }
    
}