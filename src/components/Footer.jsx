import React from 'react';
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram, AiFillHeart} from "react-icons/ai";
import {
    FaFacebook, 
    FaReddit, 
    FaGithub, 
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
        <div className="grid md:grid-cols-2">
            <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
                <div className="">
                    <h2 className="font-bold">Support</h2>
                    <ul>
                        <li className="text-sm py-2">Help Center</li>
                        <li className="text-sm py-2">Contact US</li>
                        <li className="text-sm py-2">Api Status</li>
                        <li className="text-sm py-2">Documentation</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="font-bold">Info</h2>
                    <ul>
                        <li className="text-sm py-2">About Us</li>
                        <li className="text-sm py-2">Careers</li>
                        <li className="text-sm py-2">Invest</li>
                        <li className="text-sm py-2">Legal</li>
                    </ul>
                </div>
            </div>

            <div className="text-right">
                <div className="w-full flex justify-end">
                    <div className="w-full md:w-[300px] py-4 relative">
                        <div className="flex justify-center md:justify-center py-4 md:py-0 md:pb-4 mt-[-1rem]">
                            <ThemeToggle />
                        </div>
                        <p className="text-center">Sign Up for Crypto news</p>
                        <div className='py-4'>
                            <form className="flex flex-col">
                                <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter your email' />
                                <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                            </form>
                        </div>

                        <div className="flex justify-around text-xl">
                            <AiOutlineInstagram className="text-[#d50523]"/>
                            <FaFacebook className="text-blue-500"/>
                            <FaGithub />
                            <FaTwitter className="text-cyan-500"/>
                            <FaReddit className="text-[#ff4500]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="py-4 text-center">Powered by Coin Gecko. Made with <AiFillHeart className="text-red-500 mx-1 inline"  /> by Y2nd</p>
    </div>
  )
}

export default Footer