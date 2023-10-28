const JWT = require("jsonwebtoken");
const userModel = require("../model/userSchema");


const jwtAuth = async (req,res,next) =>{
    const token = ( req.cookies && req.cookies.token  ) || null;
    if(!token){
        return res.status(500).json({
            success: false,
            message:"Unauthorised token"
        })

    }
    try{
        JWT.verify(token , process.env.SECRET, (err,user)=>{
            if(err) 
                console.log(err);
            else
                req.user = user
        })
        const a = await userModel.findById(req.user.id);
        if(!a){
            const cookieOption  = {
                expires : new Date(),
                httpOnly:true
            }
            res.cookie("token", null, cookieOption);
            res.status(400).json({
                "message":"user does not exists"
            })
        }
    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        })
    }
    next();
}

module.exports  = jwtAuth;