const JWT = require('jsonwebtoken');

const getBranch = async (req,res,next) =>{
  const token = (req.cookies && req.cookies.token) || null ;
  if(!token){
    return res.status(400).json({
      success:"false",
      message:"Unauthorised"
    })
  }
  try {
    const payload = JWT.verify(token,process.env.SECRET);
    
    req.user = {branch : payload.branch};
  } catch (error) {
    
  }
  next();
}

const courseAuth = async (req,res,next) =>{
  const token = (req.cookies && req.cookies.ctoken) || null ;
  if(!token){
    res.status(400).json({
      "message":"You dont have permission to access the notes",
      "success":false
    })
  }
  try{
    const payload = JWT.verify(token,process.env.SECRET2);
    req.course = {course:payload.course};
  }catch(err){
    console.log('Error')
  }
  next();
}

module.exports = {getBranch,courseAuth};