const mongoose = require("mongoose");
const File = require("../model/Files.js");
const JWT = require('jsonwebtoken');
const courseModel = require('../model/course.js');
const fileModel = require('../model/Files.js')

const addFile = async (req,res)=>{
    const {branch, course , pdf , title} = req.body ;
    if(!branch || !course || !pdf || !title){
        return res.status(400).json({
            "message":"All fields are necessary",
            "success" : true
        })
    }
    try {
        const newFile = File(req.body);
        const savedFile = await newFile.save();
        res.status(200).json({
            "message":"Saved File"
        });

    } catch (err){
        res.status(403).json({
            "message" : err,
            "success": false 
        });
        
    }
}

const getCourse = async (req,res)=>{
    const branch = req.user.branch;
    try{

        const courseArr = await courseModel.findOne({"branch":branch}).select('courses');
        res.status(200).json({
            "success" : 'tr' ,
            "branch" : branch,
            "courses" : courseArr,
        })
    }catch(err){
        res.status(500).json({
            "success":false,
            "message":"Internal Server Error"
        })
    }
}

const getName = async (req,res)=>{
    const {course} = req.body ;
    
    const token = JWT.sign({course:course},process.env.SECRET2,{expiresIn:"10h"});
    const cookieOption = {
        maxAge:24*60*60*1000,
        httpOnly:true,
        domain:'localhost'
    }
    try {
        
        res.cookie("ctoken",token,cookieOption);
        res.status(200).json({
            "success":true,
            "message":`You have got the token for course ${course} `
        })
    } catch (error) {
        res.status(400).json({
            "message":err,
            "success":"false"
        })
    }

}
const getPage = async (req,res) =>{
    try {
        const notes = await fileModel.find({"course": req.course.course}).select("title");
        res.status(200).json({
            "success":true,
            "data" : notes,
        })
    } catch (error) {
        res.status(500).json({
            "success":false,
            "message":error
        })
    }
}
const getData = async (req,res) =>{
    try {
        const {id} = req.body ;
        const notes = await fileModel.find({"_id": id}).select("pdf");
        res.status(200).json({
            "success":true,
            "data" : notes,
        })
    } catch (error) {
        res.status(500).json({
            "success":false,
            "message":error
        })
    }
}
module.exports = {addFile,getName,getCourse,getPage,getData}