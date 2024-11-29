import PropTypes from 'prop-types';
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx}) => {
  const{selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===conversation._id;
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation._id)
    return (
      <>
        <div className={`relative flex gap-2 items-center ${isSelected ? "bg-gradient-to-r from-slate-600 to-indigo-500" : "bg-gradient-to-r from-lime-400 to-yellow-700 hover:from-pink-900 hover:to-indigo-700"} rounded-md p-2 py-1 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105`}
         onClick={()=>setSelectedConversation(conversation)}
         >
          <div className={`avatar ${isOnline?"online":""}`}>
            <div className="w-12 rounded-full transition-transform duration-100 ease-out transform hover:scale-125">
              <img src="/kashimg.jpg" alt="User avatar" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between">
              <p className="font-bold text-black">{conversation?.fullName || "Unnamed"}</p>
            </div>
          </div>
        </div>
        {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
      </>
    );
  }
  Conversation.propTypes = {
    conversation: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fullName: PropTypes.string,
    }).isRequired,
    lastIdx: PropTypes.bool.isRequired,
  };
  
  export default Conversation;
  