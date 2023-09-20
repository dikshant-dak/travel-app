import React, { useState, useEffect } from 'react';
// import { AiOutlineSearch } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import axios from 'axios';
import Image from 'next/image';

const Header = ({ hotels, setNewHotels }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (search) {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [search]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get("http://localhost:8005/hotels");
            const searchedHotels = response.data.filter((hotel) =>
                hotel.address.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(searchedHotels);
            console.log(searchedHotels)
            setShowResults(true);
        } catch (error) {
            console.error(error);
        }
    };

    // const handleSearch = () => {
    //     setNewHotels(searchResults);
    // }

    return (
        <div className="w-full h-full">

            <nav className="w-full h-full flex items-center justify-between p-3 shadow-lg">
                <Link href="/" className="text-xs font-bold md:text-2xl text-[#FF385C] lg:text-3xl lg:ml-6">
                    TRAVEL ALONG
                </Link>

                <div className="no-underline flex items-center justify-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-20 h-10 pl-3 text-xs sm:w-[180px] sm:h-[50px] outline-none bg-white md:text-sm rounded-tl-md rounded-bl-md text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:pl-4 md:w-[450px] md:h-[50px] lg:text-lg md-px-30 md:rounded-tl-3xl md:rounded-bl-3xl md:pl-6 "
                    />
                    <button id="btn-search"
                        className="w-12 h-10 sm:w-[100px] sm:h-[50px] bg-[#ff385c] text-white outline-none rounded-tr-md rounded-br-md sm:text-sm md:w-[150px] md:h-[50px] text-xs md:text-base hover:opacity-80 md:rounded-tr-3xl md:rounded-br-3xl lg:text-lg"
                        // onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>

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
            {
                showResults && (
                    <div className="flex flex-wrap justify-center items-center">
                        {searchResults.map((hotel) => (

                            <div key={hotel.id} className="flex justify-around items-center">
                                <Link href={`/hotel/${hotel.id}`} className="p-2 md:p-6 mx-3 max-w-sm rounded-lg h-full shadow-2xl border border-gray-300 mt-12 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out md:duration-500 md:ease-in-out">
                                    <div className=" h-48 w-full">
                                        <Image
                                            src={hotel.image}
                                            alt={hotel.address}
                                            //   layout="fill"
                                            width={500}
                                            height={500}
                                            objectFit="cover"
                                        />

                                    </div>
                                    <div className="md:pt-16 mt-2">
                                        <div className="font-bold text-xl mb-2">{hotel.address}</div>
                                        <p className="text-gray-700 text-base">
                                            {hotel.distance}
                                        </p>
                                        <p className="text-gray-700 text-base">{hotel.date}</p>
                                        <p className="text-gray-700 text-base">{hotel.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Header;
