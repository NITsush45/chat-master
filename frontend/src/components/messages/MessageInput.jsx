import { BiSolidSend } from "react-icons/bi";
import { PiUploadSimpleBold } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message,setMessage]=useState("")
  const{loading,sendMessage}=useSendMessage()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message)return;
    await sendMessage(message);
    setMessage("");
  }
    const [open,setOpen]=useState(false);
    const handleEmoji = (e) => {
      setMessage((prev) => prev + e.emoji);
      setOpen(false);
    };
  return (
    <form className="px-2 my-2 flex items-center" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="flex items-center pl-2 text-white hover:text-cyan-300"
      >
        <PiUploadSimpleBold />
      </button>
      <div className="h-6 relative w-6 items-center ml-1 mr-1 cursor-pointer">
            <img src="./emoj.png" alt=""onClick={()=>setOpen(prev=>!prev)} />
            {open && (
          <div className="absolute bottom-8 left-0">
            <EmojiPicker onEmojiClick={handleEmoji} />
          </div>
        )}
        </div>

      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full h-8 p-3 bg-indigo-950 border-green-700 text-white"
          placeholder="Message...."
          value={message} onChange={(e)=>setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 block items-center pe-2 btn-sm text-white hover:text-cyan-300"
          disabled={loading}
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BiSolidSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
