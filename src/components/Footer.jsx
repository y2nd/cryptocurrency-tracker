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
    <div>
        <div className="">
            <div className="">
                <div className="">
                    <h2>Support</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>Contact US</li>
                        <li>Api Status</li>
                        <li>Documentation</li>
                    </ul>
                </div>

                <div className="">
                    <h2>Info</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Invest</li>
                        <li>Legal</li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <ThemeToggle />
                        </div>
                        <p>Sign Up for Crypto news</p>
                        <div className="">
                            <form action="">
                                <input type="email" placeholder="Enter your Email..." />
                                <button>Sign Up</button>
                            </form>
                        </div>

                        <div className="">
                            <AiOutlineInstagram />
                            <FaFacebook />
                            <FaGithub />
                            <FaTwitter />
                            <FaReddit />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="py-4 flex justify-center items-center">Powered by Coin Gecko. Made with <AiFillHeart className="text-red-500 mx-1"  /> by Liam</p>
    </div>
  )
}

export default Footer