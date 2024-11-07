const mongoose =require("mongoose");

const sectionSchema=new mongoose.Schema({
    sectionName:{
        type:String,
    },
    subSection:[{
        type:mongoose.SchemaType.Types.objectId,
        ref:"SubSection"
    }]


})

module.exports=mongoose.model("Section",sectionSchema);