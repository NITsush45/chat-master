import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Chats = () => {
  const{loading,conversations}=useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversations.map((conversation,idx)=>(
        <Conversation
        key={conversations._id}
        conversation={conversation}
        lastIdxastidx={idx===conversations.length-1}
        />
      ))}
        {loading?<span className="loading loading-spinner mx-auto"></span>:null}

    </div>
  )
}

export default Chats