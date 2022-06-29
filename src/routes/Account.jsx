import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavedCoins from '../components/SavedCoins';
import { UserAuth } from "../context/AuthContext";

function Account() {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="">
          <h1 className="text-2xl font-bold">Account</h1>
          <div className="">
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div className="">
          <button
           onClick={handleSignOut} 
            className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl">Sign Out</button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h1 className="text-2xl font-bold py-4">Watch List</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  )
}

export default Account