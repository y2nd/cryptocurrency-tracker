import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const {user, logOut} = UserAuth();

    const navigate = useNavigate();

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleSignOut = async () => {
        try {
          await logOut();
          navigate("/");
        } catch(error) {
          console.log(error.message);
        }
      }

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
        <Link to={""}>
            <h1 className="text-2xl">Cryptobase</h1>
        </Link>
        <div className="hidden md:block">
            <ThemeToggle />
        </div>
        
        { user?.email ? (
            <div className="">
                <Link to={"/account"} className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">Account</Link>
                <button className="bg-yellow-600 text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl" onClick={handleSignOut}>Sign Out</button>
            </div>
        ) : (
            <div className="hidden md:block">
                <Link to={"/signin"} className="p-4 hover:text-accent">Sign In</Link>
                <Link to={"/signup"} className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">Sign Up</Link>
            </div>
        )}

        {/* Menu Icon */}
        <div className="block md:hidden cursor-pointer z-10" onClick={handleMenu}>
            {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
        </div>

        {/* Mobile menu */}
        {isOpen && 
            <div className="md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10">
                <ul className="w-full p-4">
                    <li className="border-b py-6">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="border-b py-6">
                        <Link to={"/"}>Account</Link>
                    </li>
                    <li className="border-b py-6">
                        <ThemeToggle />
                    </li>
                </ul>
                <div className="flex flex-col w-full p-4">
                    <Link to={"/signin"}>
                        <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">Sign In</button>
                    </Link>
                    <Link to={"/signup"}>
                        <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">Sign Up</button>
                    </Link>
                </div>
            </div>
        }
    </div>
  )
}

export default NavBar