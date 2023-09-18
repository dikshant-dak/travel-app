import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // console.log(dropdownOpen);


    //   const alerti = ()=>{
    //     alert("Wow I am working")
    //   }
    return (
        <div className="w-full h-full">

            <nav className="w-full h-full flex items-center justify-between p-3 shadow-lg">
                <Link href="/" className="text-sm font-bold md:text-2xl text-[#FF385C] lg:text-3xl lg:ml-6">
                    TRAVEL ALONG
                </Link>

                <ul className="hidden md:block w-full lg:w-[510px] lg:h-[70px] lg:flex items-center justify-center rounded-3xl shadow-lg text-lg pt-3 font-medium space-x-5">
                    <li className=" lg:mr-3 lg:cursor-pointer lg:hover:opacity-90">
                        Anywhere
                        <span className=" lg:inline text-[grey] ml-2">
                            |
                        </span>
                    </li>
                    <li className=" lg-block lg:mr-2 lg:cursor-pointer lg:hover:opacity-90">
                        Any Week
                        <span className=" lg:inline text-[grey] ml-2">
                            |
                        </span>
                    </li>
                    <li className=" lg:cursor-pointer lg:hover:opacity-90">
                        Any Time
                    </li>

                    <div className=" lg:flex lg:items-center">
                        <div className="rounded-full bg-[#ff385c] flex justify-center items-center lg:hover:opacity-80">
                            <AiOutlineSearch
                                className="lg:mr-3 lg:cursor-pointer text-white p-2 ml-2 mr-2"
                                size={38}
                            />
                        </div>
                    </div>
                </ul>

                <ul className="lg:flex items-center justify-center text-lg p-4">
                    <li className="hidden md:block text-sm p-3 lg:text-lg">Travel your way</li>
                    <BiGlobe className="hidden md:block md:mr-2 md:cursor-pointer" size={25} />
                    <div
                        className="w-full flex justify-center items-center lg:cursor-pointer shadow-xl lg:w-[92px] lg:h-8 rounded-3xl lg:space-x-3"
                        onClick={() => setDropdownOpen(true)}
                    // onClick={alerti}
                    >
                        <AiOutlineMenu className="lg:cursor-pointer" size={25}
                        />

                        <CgProfile className="hidden md:block lg:cursor-pointer " size={25} />
                        {dropdownOpen ? (
                            <div className=" top-10 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-2 mt-32">
                                <ul className="space-y-2 lg:w-44">
                                    <li className="hover:opacity-80">
                                        <Link href="/auth/register">Sign Up</Link>
                                    </li>
                                    <li className="hover:opacity-80">
                                        <Link href="/auth/login">Login</Link> 
                                    </li>
                                    <li className="hover:opacity-80">
                                        <Link href="/about">About</Link> 
                                    </li>
                                    <li className="hover:opacity-80">Help Center</li>
                                    <li className="hover:opacity-80">
                                        <Link href="/auth/users">Registered Users</Link>
                                    </li>
                                    <li className="hover:opacity-80">
                                        <Link href="/auth/deleteUser">Delete Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </div>

                    {/* <div onClick={()=>alert("Hello World")}>hello World</div> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
