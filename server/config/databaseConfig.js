
const mongoose  = require("mongoose")

const mongoURI = process.env.MONGO_URL;
toString(mongoURI);

const databaseConnect = () =>{
    try {
        mongoose
    .connect(mongoURI)
    .then((conn) => console.log(`connected to DB :${conn.connection.host}`))
    .catch( (err)=>{console.log(`error occurred ${err}`);})
    } catch (error) {
        console.log("error occurred");
    }
}

module.exports = databaseConnect;