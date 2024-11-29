import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[500px] md:h-[600px] hover:backdrop-blur-none backdrop:filter rounded-2xl overflow-hidden bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 animation-bg-change">
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home