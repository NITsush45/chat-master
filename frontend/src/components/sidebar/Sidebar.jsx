import BlockUser from "./BlockUser"
import Chats from "./Chats"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-blue-800 p-4 flex flex-col">
        <SearchInput/>
        <div className="divider px-2"></div>
        <Chats/>
        <LogoutButton />
        <BlockUser />
    </div>
  )
}

export default Sidebar