import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto pt-4">
      {!loading ? (
        <button
          type="submit"
          className="btn btn-sm bg-amber-500 hover:bg-red-600 text-black hover:text-white"
        >
          Logout
          <RiLogoutCircleLine onClick={logout} />
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
