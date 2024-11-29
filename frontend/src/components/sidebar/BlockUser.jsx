import { MdOutlineBlock } from "react-icons/md";
const BlockUser = () => {
  return (
    <div className="mt-auto pt-4">
        <button type="submit" className="btn btn-sm bg-white hover:bg-red-800 text-black hover:text-white">Block User
            <MdOutlineBlock/>
        </button>
    </div>
  )
}

export default BlockUser