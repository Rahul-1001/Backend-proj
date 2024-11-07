const mongoose = require('mongoose');
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("db connected successfuly"))
    .catch((errr)=>{
        console.log("db connection failed")
        console.error(errr) 
        process.exit(1)
    })   
    
}