const express = require("express");
const { getUser , logOutUser, signup, signin } = require("../controller/controller.js");
const jwtAuth = require("../middleware/jwtAuth.js");
const { getBranch } = require("../middleware/getBranch.js");

const authRoute = express.Router()

authRoute.post('/signup' ,  signup)

authRoute.post('/signin' ,signin)

authRoute.get('/user' ,jwtAuth, getUser)

authRoute.get('/logout' , jwtAuth ,logOutUser)

module.exports = authRoute;