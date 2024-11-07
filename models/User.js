const mongoose =require("mongoose");

const userSchema=new mongoose.Schema({
      firstName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
      },
      lastName:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true,
      },
      accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
       
      }  ,
      additionalDetails:{
        type:mongoose.Schema.type.objectId,
        required:true,
        ref:"Profile",
      },
      courses:{
        type:mongoose.Schema.type.objectId,
        ref:"Course"
      },
      image:{
        type:String,
        required:true,
      },
      courseProgres:[
        {   
          type:mongoose.Schema.type.ObjectId,
         
          ref:"CourseProgress",  
        
      }]


})

module.exports=mongoose.model("User",userSchema);