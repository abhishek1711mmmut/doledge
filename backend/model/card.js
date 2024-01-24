const mongoose = require('mongoose');

const cardSchema = new  mongoose.Schema({
    header:{
       type: String,
       required: true,
    },
    description:{
       type: String,
       required: true,
    },
    image: {
      type:String
  }
})

const Card = mongoose.model('Card', cardSchema);

module.exports =  Card ;