const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: String,
    text: String,
});

const blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type:String
    },
    likes: { 
        type: Number, 
        default: 0
    },
    share: { 
        type: Number, 
        default:0 
    },
    comments: [commentSchema],
    
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports =  Blog ;
