const { Service } = require('../model/service');

exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        if(!!services || services.length != 0){
            res.status(201).json({
                status: "success",
                message: "Services or Plans displayed successfully",
                services,
            });
        } else {
            res.json({
                status: "failed",
                message: "No services where found",
            });
        }
    } catch (error) {
        console.error('Error fetching Services:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
