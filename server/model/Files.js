const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    title:{
        type: String
    },
    branch:{
        type: String,
        // required: true
    },
    course:{
        type: String,
        required: true
    }
    ,
    // pdf : {
    //     type : String,
    //     select:true,
    //     required : true
    // }
    // type:{
    //     type:String,
    //     required:true
    // }
    // views:{
    //     type: Number, 
    //     default:0
    // },
    // uploadedBy: {
    //     type: String,
    // }
})
const fileModel = mongoose.model('FilesLetsSee', FileSchema);
module.exports = fileModel;