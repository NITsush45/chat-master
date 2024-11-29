import User from "../usermodels/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utilities/token.js";

export const signup=async(req,res)=>{
    try {
        console.log("Request Body:",req.body);
       const{fullName,username,password,confirmPassword}=req.body;
       if(!fullName||!username||!password||!confirmPassword){
        return res.status(400).json({error:"All Fields required"})
       }
       if(password!==confirmPassword){
        res.status(400).json({error:"Password didn't matched"})
       }
       const user=await User.findOne({username});
       if(user){
        return res.status(400).json({error:"Username already exists"})
       }


       const hashedPassword=await bcrypt.hash(password,10);

       //const boyProfilePic=`https://ui-avatars.com/api/?name=${username}`

       const newUser=new User({
        fullName,
        username,
        password:hashedPassword,
       })


      if(newUser){
        await generateTokenAndSetCookie(newUser._id,res);

       await newUser.save();
       res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username:newUser.username
       });
     }else{
        res.status(400).json({error:"Invalid User info"});
     }
    } catch (error) {
        console.log("Error in signup page",error.message);
        res.status(500).json({error:"Server down currently"});
    }    
};
export const login=async(req,res)=>{
    try {
        const{username,password}=req.body;
        const user=await User.findOne({username});
        const correctPassword=await bcrypt.compare(password,user?.password||"");
        if(!user||!correctPassword){
            return res.status(400).json({error:"Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username
        });
    } catch (error) {
        console.log("Error in login page",error.message);
        res.status(500).json({error:"Server down currently"});
    }
};
export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0,httpOnly:true,secure:true});
        res.status(200).json({message:"logged out successfully"});
    } catch (error) {
        console.log("Error in logout page",error.message);
        res.status(500).json({error:"Server down currently"});
    }
};