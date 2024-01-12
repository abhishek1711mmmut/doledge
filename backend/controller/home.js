const { Service } = require('../model/service');
const { Blog } = require('../model/blog');
const { Cards } = require('../model/card');

exports.getHomeData = async (req, res, next) => {
    try {
        let services = await Service.find({});
        let blogs = await Blog.find({});
        let cards = await Cards.find({});

        let data = {services, blogs , cards};
        
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