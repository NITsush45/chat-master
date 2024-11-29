import PropTypes from 'prop-types';
import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const{authUser}=useAuthContext();
  const{selectedConversation}=useConversation()
  const FromMe=message.senderId===authUser._id;
  const fromattedTime=extractTime(message.createdAt);
  const chatClassName=FromMe?"chat-end":"chat-start";
  const profilePic=FromMe?authUser.profilePic:selectedConversation.profilePic;
  const bubbleBgColor=FromMe?"bg-gradient-to-r from-indigo-500 to-yellow-600":"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="qatarimg.jpg" alt={profilePic} />
            </div>
        </div>
        <div>
            <div className={`chat-bubble text-black font-serif bg-gradient-to-r from-lime-300 to-purple-300 ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{fromattedTime}</div>
        </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message