const express  = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const cors = require("cors")

const authRoute = require("./router/authRoute")
const fileRoute = require("./router/files.js")

const databaseConnect = require("./config/databaseConfig.js")


databaseConnect();

app.use(express.json({limit:'16mb'}));
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true 
}));
app.use('/api/auth/', authRoute);
app.use('/api/files/', fileRoute);
app.use('/api/notes/', fileRoute);
app.use('/' ,  (req,res)=>{
    res.status(200).json({data : 'JWTauth server is on '})
})


module.exports = app;