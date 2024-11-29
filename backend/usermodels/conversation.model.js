import mongoose from "mongoose";
const conversationSchema=new mongoose.Schema({
    participants:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        },
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[],
        }
    ]
},{timestamps:true}
);

conversationSchema.index({ participants: 1 });
const Conversation=mongoose.model("Conversation",conversationSchema);
export default Conversation;