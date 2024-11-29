import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const[inputs,setInputs]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:""
  });
  const{loading,signup}=useSignup()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    await signup(inputs)
  };
    return (
      <div
        className="flex flex-col items-center justify-center min-w-[30%] mx-auto px-4 py-8 animation-bg-change">
        <div className="w-full p-6 mb-10 rounded-2xl shadow-lg hover:backdrop-blur-none bg-blue-500 bg-clip-padding backdrop:filter backdrop-blur-sm bg-opacity-5">
          <h1 className="text-xl font-semibold mt-2 text-center text-black">SignUp</h1>
          <span className="text-transparent m-auto bg-clip-text bg-gradient-to-r from-lime-800 to-indigo-900 transition-all duration-1000 hover:from-cyan-800 hover:to-red-700 cursor-pointer font-extrabold flex flex-col justify-center items-center">
            CHATMASTER
          <img className="w-[140px] h-[140px] backdrop-blur-lg p-6 items-center justify-items-center" src="/cmlogo.png" alt="Chatmaster Logo" />
          </span>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName" className="label p-2">
                <span className="text-{10px} label-text font-mono text-white">Full Name</span>
                </label>
                <input type="text" placeholder="Daniel Haqiqatzou" className="w-full input input-bordered hover:text-cyan-500 font-serif h-6" 
                value={inputs.fullName}
                onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
                />
            </div>
            <div>
              <label htmlFor="username" className="label p-2">
                <span className="text-{10px} label-text font-mono text-white">Username</span>
              </label>
              <input id="username" type="text" placeholder="Enter your Username" className="w-full input input-bordered hover:text-cyan-500 font-serif h-6" 
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                <span className="text-{10px} label-text font-mono text-white">Password</span>
              </label>
              <input id="password" type="password" placeholder="Enter your Password" className="w-full input input-bordered h-6 font-serif"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="label">
                <span className="text-{10px} label-text font-mono text-white">Confirm Password</span>
              </label>
              <input id="confirmPassword" type="password" placeholder="Re-type Password" className="w-full input input-bordered h-6 font-serif"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
              />
            </div>
            <div className="mb-4">
  <label htmlFor="file" className="label p-2">
    <span className="text-xs label-text font-mono text-white">Upload an Image</span>
  </label>
  <input
    type="file"
    id="file"
    className="w-full input input-bordered h-10 font-serif"
    onChange={(e) => {
      const file = e.target.files[0];
      console.log(file);
    }}
  />
</div>

            <Link to={"/login"} className="text-white text-sm hover:underline hover:text-lime-400 mt-2 inline-block">
            Already have an Account?
          </Link>
            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2 bg-indigo-500 text-black hover:text-white" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
            </div>
          </form>
        </div>
        <footer className="w-full bottom-0 bg-transparent backdrop-blur-lg absolute text-black py-3 left-0 right-0 h-9">
          <div className="container mx-auto text-center text-sm">
            Ssk CHATMASTER 2024 pvt. ltd. &copy; All rights reserved.
          </div>
        </footer>
      </div>
    );
  };
  
  export default SignUp;
  