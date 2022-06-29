import React, { useState } from 'react';
import {AiFillLock, AiOutlineMail} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signUp} = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      // console.log(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error ? <p className="bg-red-400 p-3 my-2 rounded-md text-white">{error}</p> : null} 
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="my-4">
            <label htmlFor="">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input 
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl" 
                type="email" />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="">password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input 
                onChange={(event) => setPassword(event.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl" 
                type="password" />
              <AiFillLock className="absolute right-2 top-3 text-gray-400"/>
            </div>
          </div>
          <button className="w-full p-3 bg-button text-btnText rounded-2xl shadow-xl">Sign Up</button>
        </form>
        <p className="my-4">Already have an account ? <Link className="text-accent" to={"/signin"}>Sign In</Link></p>
      </div>
    </div>
  )
}

export default SignUp