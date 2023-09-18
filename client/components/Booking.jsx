import React from 'react';
import Link from 'next/link';
import { BsAirplaneFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { MdHolidayVillage } from "react-icons/md";
import { MdTrain } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";

const Booking = () => {
    return (
        <div className="w-full h-full mt-10 md:mx-5 lg:w-[900px] flex items-center justify-center space-x-5 md:space-x-24 lg:mx-96 lg:mt-20 rounded-2xl shadow-xl md:p-4 ">

            <Link href="/" className="flex flex-col md:mx-5 items-center justify-center cursor-pointer">
                <FaHotel size={30} className="text-[#3b77dc] hover:opacity-70" />
                <h4 className="my-3 font-medium">Hotels</h4>
            </Link>
            
            <Link href="/flights" className="flex flex-col md:mx-5 items-center justify-center cursor-pointer">
                <BsAirplaneFill size={30} className="text-[#3b77dc] hover:opacity-70"  />
                <h4 className="my-3 font-medium">Flights</h4>
            </Link>

            <Link href="/packages" className="hidden md:flex flex-col md:mx-5 items-center justify-center cursor-pointer">
                <MdHolidayVillage size={30} className="text-[#3b77dc] hover:opacity-70" />
                <h4 className="my-3 font-medium">Packages</h4>
            </Link>
            <Link href="/trains" className="hidden md:flex flex-col md:mx-5 items-center justify-center cursor-pointer">
                <MdTrain size={30} className="text-[#3b77dc] hover:opacity-70" />
                <h4 className="my-3 font-medium">Trains</h4>
            </Link>
            <Link href="/buses" className="hidden md:flex flex-col md:mx-5 items-center justify-center cursor-pointer">
                <FaBusAlt size={30} className="text-[#3b77dc] hover:opacity-70" />
                <h4 className="my-3 font-medium">Buses</h4>
            </Link>
        </div>
    )
}

export default Booking;


