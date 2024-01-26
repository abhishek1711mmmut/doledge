const mongoose = require('mongoose');
const { Schema } = mongoose;

const productInCartSchema = new Schema({
    product_id: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const cartSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    _userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [productInCartSchema],
    cartTotal: {
        type: Number,
        default: 0,
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
