import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const[search,setSearch]=useState("");
  const{setSelectedConversation}=useConversation()
  const{conversations}=useGetConversations()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      return toast.error("Search something atleast")
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }else toast.error("No such person found")
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered rounded-t-full"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-square bg-gradient-to-br from-yellow-300 bg-red-500 hover:from-indigo-500 text-white">
        <FcSearch className="w-8 h-8 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
