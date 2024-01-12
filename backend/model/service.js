const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title:{
       type: String,
    },
    description:{
       type: String,
    },
    image: {
      type:String
  },
    price:{
       type: Number,
    }
})
exports.Service = mongoose.model("Service", serviceSchema);



