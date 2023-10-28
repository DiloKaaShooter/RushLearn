const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    branch:{
        type: String,
        required: true
    },
    year:{
      type:String,
      required:true
    },
    course:{
      type:Array,
      required:true
    }
    
})
const courseModel = mongoose.model('Course', courseSchema);
module.exports = courseModel;