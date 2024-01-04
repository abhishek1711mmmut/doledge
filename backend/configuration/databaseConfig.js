const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect('mongodb+srv://shehabeddin99:shehab123@cluster0.3i74emj.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = connect;