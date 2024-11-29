import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const useLogout = () => {
    const[loading,setLoading]=useState(false)
    const{setAuthUser}=useAuthContext()

    const logout=async()=>{
        setLoading(true)
        try {
            const res=await fetch("/api/auth/logout",{
                method:"POST",
                headers:{"Content-Type":"application/json"}
            });
            const data=await res.json()
            if (res.ok) {
                localStorage.removeItem("chat-user");
                setAuthUser(null);
                toast.success("Logout successful");
            } else {
                throw new Error(data.error || "Logout failed");
            }
        } catch (error) {
            toast.error(error.message || "An error occurred during logout");
        } finally {
            setLoading(false);
        }
    };
    return {loading,logout};
};

export default useLogout