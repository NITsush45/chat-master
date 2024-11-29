import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading,setLoading]=useState(false);
  const {setAuthUser}=useAuthContext()
  const signup=async({fullName,username,password,confirmPassword})=>{
   const success=handleInputErrors({fullName,username,password,confirmPassword})
   if(!success) return;
   setLoading(true);
   try {
    const res=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fullName,username,password,confirmPassword})
    })

    const data=await res.json();
    if (res.ok) {
        toast.success("Signup successful!");
      } else {
        toast.error(data.message || "Signup failed");
      }

      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data);

   } catch (error) {
    toast.error(error.message || "Something went wrong during signup");
   }finally{
    setLoading(false);
   }
  }
  return {loading,signup}
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword}){
    if(!fullName||!username||!password||!confirmPassword){
        toast.error("Please fill in all fields")
        return false
    }

    if(password!==confirmPassword){
        toast.error("Password do not match")
        return false
    }
    if(password.length !==8){
        toast.error("Password must be of 8 characters")    
    }
    return true
}