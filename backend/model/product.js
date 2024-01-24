const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Add reference to the User model
    title: { type: String, required: true, unique: true },
    // category: { type: String }, // Add category field if needed
    description: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    status: { type: String, enum: ["Approved", "Rejected", "Initial"], default: "Initial" },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
