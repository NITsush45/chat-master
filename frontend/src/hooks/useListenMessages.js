import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import kalimbaSound from "../assets/sound/kalimba.wav";

const useListenMessages = () => {
  const{socket}=useSocketContext()
  const {messages,setMessages}=useConversation();


  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      const sound= new Audio(kalimbaSound);
      sound.play();
        setMessages([...messages,newMessage])
    })

    return()=>socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessages