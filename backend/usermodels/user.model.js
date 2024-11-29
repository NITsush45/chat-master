import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    // profilePic:{
    //     type:String,
    //     default:"",
    // },
},{timestamps:true});

const User=mongoose.model("User",userSchema);
export default User;