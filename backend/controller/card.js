const { Cards } = require('../model/card');

exports.getAllCards = async (req, res) => {
    try {
        const cards = await Cards.find();
        if(!!cards || cards.length != 0){
            res.status(201).json({
                status: "success",
                message: "Cards displayed successfully",
                cards,
            });
        } else {
            res.json({
                status: "failed",
                message: "No Cards where found",
            });
        }
    } catch (error) {
        console.error('Error fetching Cards:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.addCards = async (req, res) => {
    try {
        const { header, description, image } = req.body;

        if (!header || !description || !image) {
            return res.status(400).json({ status: 'failed', message: 'All fields are required' });
        }
        const newCards = new Cards({
            header,
            description,
            image,
        });

        await newCards.save();

        res.status(201).json({ message: 'Cards added successfully'});
    } catch (error) {
        console.error('Error adding Cards:', error);
        res.status(500).json({ status: 'failed', error: 'Internal server error' });
    }
};

exports.updateCards = async (req, res) => {
    try {
        const { id } = req.params;
        const { header, description, image } = req.body;

        const updatedCards = await Cards.findByIdAndUpdate(
            id,
            { header, description, image },
            { new: true } // Return the updated document
        );

        if (!updatedCards) {
            return res.status(404).json({ status: 'failed', message: 'Cards not found' });
        }

        res.status(200).json({
            status: 'success',
            message: 'Cards updated successfully',
        });
    } catch (error) {
        console.error('Error updating Cards:', error);
        res.status(500).json({ status: 'failed', error: 'Internal server error' });
    }
};

exports.deleteCards = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCards = await Cards.findByIdAndDelete(id);

        if (!deletedCards) {
            return res.status(404).json({ status: 'failed', message: 'Cards not found' });
        }

        res.status(200).json({
            status: 'success',
            message: 'Cards deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting Cards:', error);
        res.status(500).json({ status: 'failed', error: 'Internal server error' });
    }
};