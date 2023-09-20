import React from 'react';
import DateDropDown from './DateDropDown';

const SingleHotelData = ({ singleHotelData }) => {
    return (
        <div className="w-full">
            <div className="w-full h-full md:p-5 flex flex-col md:flex-row justify-evenly items-center bg-[#3b77dc] shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg text-white mt-2 md:mt-0">Area, Landmark or property name</h4>
                    <input
                        type="text"
                        defaultValue={singleHotelData.address}
                        placeholder=""
                        className="w-40 md:w-44 lg:w-48 h-8 md:h-10 pl-2 text-xs sm:text-xs md:text-base text-white rounded-lg mt-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-[#1958b6]"
                    />
                </div>
                <div className="flex flex-col items-center pt-2 md:pt-8">
                    <h4 className="mb-2 text-sm md:text-base lg:text-lg text-white">Checkin</h4>
                    <DateDropDown />
                </div>
                <div className="flex flex-col items-center mt-[-60px] md:mt-0 md:pt-8">
                    <h4 className="mb-2 text-sm md:text-base lg:text-lg text-white">CheckOut</h4>
                    <DateDropDown />
                </div>
                <div className="flex flex-col justify-center items-center mt-[-60px] md:mt-0">
                    <h4 className="mb-2 text-sm md:text-base lg:text-lg text-white">Total Guests</h4>
                    <input
                        type="number"
                        placeholder="No. of people"
                        className="w-40 md:w-44 lg:w-48 h-8 md:h-10 pl-2 text-xs sm:text-xs md:text-base text-white rounded-lg focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-[#1958b6]"
                    />
                </div>
                <button className="w-40 md:w-44 lg:w-48 h-8 md:h-10 mt-3 md:mt-5 mb-3 bg-white text-[#212121] rounded-lg text-sm md:text-base font-semibold md:hover:cursor-pointer hover:opacity-90">Update Search</button>
            </div>

            <div className="w-full md:w-[25%] flex items-center md:mx-20 mt-12 shadow-lg shadow-red-500 p-3 md:p-2 rounded-xl">
                <h3 className="text-sm md:text-lg font-semibold text-[#FF385C] md:ml-4">TA
                    <span className="text-xs md:text-base text-[#FF385C]"> Top Rated Affordable Properties...!</span>
                </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center p-3 md:p-0">
                <div className="flex flex-col">
                    <h2 className="mt-10 md:ml-2 text-sm md:text-2xl font-semibold">{singleHotelData.address}</h2>
                    <img
                        src={singleHotelData.image}
                        alt={singleHotelData.address}
                        className="w-full h-full p-4 md:p-10 mt-5 border border-double border-black transform hover:scale-105 transition-transform duration-300 ease-in-out md:duration-500 md:ease-in-out md:hover:cursor-pointer"
                    />
                </div>

                <div className="w-full h-full lg:w-[700px]  mt-5 p-2 bg-[#FFE2D8] md:p-7  rounded-md md:rounded-2xl">

                    <p className="mt-2 md:mt-5 text-sm sm:text-base md:text-lg text-left sm:text-center md:text-left">For Atmost 4 Adults</p>
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center lg:space-x-24">
                        <div className="flex flex-col justify-start items-center mt-2 md:mt-0 md:p-0">
                            <div className="flex justify-start items-center mr-24 sm:mr-48 md:mr-44 pt-1 md:pt-2">
                                <span>🟢</span>
                                <p className="md:mx-2 text-sm md:text-base">Free Breakfast</p>
                            </div>
                            <div className="flex justify-start items-center mr-20 md:mr-40 pt-1 md:pt-2 md:ml-1">
                                <span>🟢</span>
                                <p className="md:mx-2 text-sm sm:text-sm md:text-base">Free Cancellation</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <h2 className="mt-4 md:mt-10 ml-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{singleHotelData.price}</h2>
                            <p className="text-left ml-2 md:ml-0 mt-1  md:text-right">{singleHotelData.date}</p>
                        </div>
                    </div>
                    <div className="flex justify-start md:justify-end ml-1 md:ml-0 pb-3 md:pb-0" >

                    <button className='w-24 h-8 lg:w-44 lg:h-12 bg-[#FF385C] text-white rounded-md md:rounded-3xl text-xs sm:text-sm md:text-base font-semibold md:hover:cursor-pointer hover:opacity-90'>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleHotelData;
