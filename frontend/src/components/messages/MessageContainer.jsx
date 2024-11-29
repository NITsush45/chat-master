import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const{selectedConversation,setSelectedConversation}=useConversation()
  useEffect(()=>{
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] h-screen flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 flex overflow-auto px-4 py-2 mb-2">
            <span className="label-text text-black font-serif">To:</span>{" "}
            <span className="text-teal-300 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const{authUser}=useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-lime-300 font-serif flex flex-col items-center gap-2">
        <p>Hello!! Welcome {authUser.fullName} :)</p>
        <p>Start to chat with your friends & loved ones ;)</p>
        <BiMessageSquareDetail className="text-4xl md:text-7xl text-center" />
      </div>
    </div>
  );
};
