
const mongoose = require("mongoose")

const JWT = require("jsonwebtoken")

const bcrypt = require('bcrypt');


const userSchema =  mongoose.Schema({
    imageUrl:{
        type : String,
        select : true
    }
    ,
    En:{
        type: Number,
        select: true
    }
    ,
    password :{
        type: String,
        select : false
    }
    ,

    branch : {
        type : String,
        select:true,
    }
    ,
    name:{
        type:String,
        select:true
    },
    year :{
        type: String,
        select:true
    }
    ,
    isCR :{
        type: Boolean,
        select:true
    }
    ,
    forgotPasswordToken :{
        type: String
    },
    forgotPasswordExpiryDate:{
        type: Date,
    },

})
userSchema.methods = {
    jwtToken(){
        return JWT.sign({
            id :this._id,
            password: this.password,
            branch:this.branch
        },
        process.env.SECRET,
        {expiresIn:'24h'})
    }
}

userSchema.pre('save',async function(){
    if(!this.isModified('password')){
    }
    this.password = await bcrypt.hash(this.password,10)
    
})

const userModel = mongoose.model('user' , userSchema)

module.exports = userModel;