import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    message:{
        type:String,
        required:true,
        index:true
    }
},{timestamps:true});

const Message=mongoose.model("Message", messageSchema);
export default Message;