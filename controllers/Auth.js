const User=require("../models/User");

const OTP=require("../models/otp.JS"); 

const otpGenerator=require("otp-generator");


//sendOTP

exports.sendOTP=async(req,res)=>{
   try {
      //fetch email from request ki body
      const{email}=req.body;

      //check if user already exist
        
      const checkUserPresent=await User.findOne({email});
  
      //if user already exit , then return a response 
  
      if(checkUserPresent)
      {
          return res.status(401).json({
              success:false,
              message:"User already registered"
          })
      }

      //generate otp
      var otp=otpGenerator.generate(6,{
          lowerCaseAlphabets:false,
          upperCaseAlphabets:false,
          specialChars:false
      });
      console.log("otp generatedr",otp);

      //check unique otp or not
      let result=await OTP.findOne({otp:otp});

      while(result)
      {
        otp=otpGenerator(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })
            result=await OTP.findOne({otp:otp});


      }

      //otp ki entry database me karni hai

      const otpPayload={email,otp}

      //create an entry for db
      const otpBody=await OTP.create(otpPayload);
      console.log(otpBody);

      //return response successful

      res.status(200).json({
        success:true,
        message:"OTP sent successfully",
        otp,
      })
  
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,     
    })

    
   }




}



//Signup


//Login


//change password




