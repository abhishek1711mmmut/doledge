const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title:{
       type: String,
       required: true,
    },
    description:{
       type: String,
       required: true,
    },
    image: {
      type:String
  },
    price:{
       type: Number,
       required: true,
    }
})
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;



