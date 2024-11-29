import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  const{loading,login}=useLogin()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className="flex flex-col items-baseline justify-center min-w-[30%] min-h-screen mx-auto animation-bg-change">
      <div className="w-full p-6 rounded-2xl shadow-lg hover:backdrop-blur-none bg-blue-500 bg-clip-padding backdrop:filter backdrop-blur-sm bg-opacity-5">
        <h1 className="text-xl font-semibold text-center text-black">Login</h1>
        <span className="text-transparent m-auto bg-clip-text bg-gradient-to-r from-lime-800 to-indigo-900 transition-all duration-1000 hover:from-cyan-800 hover:to-red-700 cursor-pointer font-extrabold flex flex-col justify-center items-center"> CHATMASTER
          <img className=" w-[150px] h-[150px] backdrop-blur-lg p-6 items-center justify-items-center" src="/cmlogo.png" alt="" />
        </span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text font-mono text-white">Username</span>
            </label>
            <input id="username" type="text" placeholder="Enter your Username" className="w-full input input-bordered hover:text-cyan-500 font-serif h-10" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label id="password" className="label">
              <span className="text-base label-text font-mono text-white">Password</span>
            </label>
            <input id="password" type="password" placeholder="Enter your Password" className="w-full input input-bordered h-10 font-serif" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="text-white text-sm hover:underline hover:text-lime-400 mt-2 inline-block">
            {"Don't"} have an Account?
          </Link>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 bg-indigo-500 text-black hover:text-white"
            disabled={loading}
            >{loading?<span className="loading loading-spinner"></span>:"Login"}</button>
          </div>
        </form>
      </div>
      <footer className="w-full bottom-0 bg-transparent backdrop-blur-lg absolute text-white py-3 left-0 h-9">
        <div className="container mx-auto text-center text-sm text-black">
          Ssk CHATMASTER 2024 pvt. ltd. &copy; All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Login