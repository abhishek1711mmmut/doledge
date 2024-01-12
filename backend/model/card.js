const mongoose = require('mongoose');

const cardSchema = new  mongoose.Schema({
    header:{
       type: String,
    },
    description:{
       type: String,
    },
    image: {
      type:String
  }
})

exports.Cards = mongoose.model("Card", cardSchema);




