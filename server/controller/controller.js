const userModel = require("../model/userSchema.js");
const courseModel = require('../model/course.js');
const fileModel = require('../model/Files.js');
const emailValidator = require("email-validation");
const JWT = require('jsonwebtoken');
const bcrypt = require("bcrypt");


const signup = async (req,res,next) =>{

    const user = await userModel.findOne({"En": req.body.En});

    if(user) return res.status(403).json({
        message : "user already exist!"
    });

        const {En,password,confirmPassword,name,branch} = req.body;

        if(!En || !password || ! confirmPassword || !name || !branch){
            return res.status(500).json({
                success:false,
                message:"Pls enter all the details"
            })
        }

        if(password != confirmPassword){
            return res.json({
                message : "  password and confirm password are not same ",
            })
            
        }

        try{
            const userInfo = userModel(req.body)

            const result = await userInfo.save();

            return res.status(200).json({
            success : true,
            data: result
        })
        }
        catch(err){
            if(err.code === 11000){
                return res.status(500).json({
                    success :false,
                    message : 'Account already exist with provided credentials'
                })
            }

            return res.status(500).json({
                success :false,
                message : "fuckOff"
            })

        }
}

const signin = async (req,res,next) =>{
    const {En,password} = req.body;

    if(!En || !password){
        return res.status(500).json({
            success:false,
            message:"Pls enter email and password"
        })
    }

    try{

        const user = await userModel
    .findOne({En})
    .select('password')
    if(!user || !(await bcrypt.compare(password,user.password) )){
        return res.status(400).json({
            success:false,
            message:"Invalid Credentials"
        })
    }
    const token = user.jwtToken();
    user.password =  undefined;

    const cookieOption = {
        maxAge:24*60*60*1000,
        httpOnly:true,
        domain:'localhost'
    }

    res.cookie("token",token,cookieOption)
    .status(200).json({
        success:true,
        data:user,
        token:token
    })
    }
    catch(err){
        res.status(500).json({
            success:'false',
            message: err
        })
    }
    

}

const getUser = async (req,res,next) =>{
   const id = req.user.id ;

    try{
        const user = await userModel.findById(id);
        return res.status(200).json({
            success:true,
            data: user
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

const logOutUser =  (req,res,next) =>{
    try{
        const cookieOption  = {
            expires : new Date(),
            httpOnly:true
        }
        res.cookie("token", null, cookieOption);
        res.status(200).json({
            success:true,
            message :"loggedOut"
        })

    }
    catch(err){
        res.status(500).json({
            success:true,
            message : err.message
        })

    }
}


module.exports = {
    signup,signin ,logOutUser,getUser
}
