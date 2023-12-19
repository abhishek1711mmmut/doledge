const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    service:String,
    duration:String,
    price:Number
})
exports.Blog = mongoose.model("Service", blogSchema);



