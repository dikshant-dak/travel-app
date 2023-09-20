import React, { useState, useEffect } from 'react';
import Booking from '@/components/Booking'
import Header from '@/components/Header'
import { HiMiniArrowsRightLeft } from "react-icons/hi2"
import DateDropDown from '@/components/DateDropDown';
import Footer from '@/components/Footer';
import axios from 'axios';

const flights = () => {
    const [flightData, setFlightData] = useState([]);
    // const [showFlights, setShowFlights] = useState(false);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get("http://localhost:8005/flights");
                setFlightData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFlights();
    }, []);

    return (
        <div>
            <Header />
            <Booking />
            <div className="w-full flex flex-col justify-center items-center mt-10">
                <h2 className="text-sm lg:text-4xl font-semibold">Domestic and International Flights</h2>
                <div className="w-full md:w-[80%] h-full border border-gray-500 rounded-lg md:p-10 mt-10">
                    <div className="flex">
                        <div className="flex justify-start md:justify-center items-center ">
                            <input
                                type="checkbox"
                                id="roundCheckBox1"
                                className="appearance-none w-3 h-3 md:w-5 md:h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 "
                            />
                            <label className="md:mx-5 text-sm md:text-lg">One-Way</label>
                        </div>
                        <div className="flex justify-center items-center ">
                            <input
                                type="checkbox"
                                id="roundCheckBox2"
                                className="appearance-none w-3 h-3 md:w-5 md:h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <label className="md:mx-5 text-sm md:text-lg">Round-trip</label>
                        </div>
                        <div className="flex justify-center items-center ">
                            <input
                                type="checkbox"
                                id="roundCheckBox3"
                                className="appearance-none w-3 h-3 md:w-5 md:h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <label className="md:mx-5 text-sm md:text-lg">Multi-city</label>
                        </div>
                    </div>

                    <div className="flex justify-start items-center">
                        <div className="flex flex-col md:flex-row items-center mt-4 py-2 md:p-5">
                            <div className="flex flex-col">
                                <label className="text-gray-600 text-sm md:text-lg mb-2">From</label>
                                <input
                                    type="text"
                                    placeholder="Departure"
                                    className="border rounded-lg border-gray-400 text-sm md:text-lg p-2 w-20 h-10 md:w-64 md:h-16 focus:outline-none"
                                />

                            </div>
                            <div className="flex justify-center items-center rounded-2xl p-2 shadow-lg ml-3 md:mt-8 hover:opacity-70 md:hover:cursor-pointer">
                                <HiMiniArrowsRightLeft size={28} className="text-[#ff385c]" />
                            </div>
                            <div className="flex flex-col mx-5">
                                <label className="text-gray-600 text-sm md:text-lg mb-2">To</label>
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    className="border rounded-lg border-gray-400 text-sm md:text-lg p-2 w-20 h-10 md:w-64 md:h-16 focus:outline-none"
                                />
                            </div>
                        </div>

                        <DateDropDown />
                        <button className="w-32 h-12 md:w-44 mr-36 pr-10 md:pr-0 md:mx-10 mt-10 bg-[#ff385c] text-white rounded-xl md:rounded-3xl text-xs md:text-lg font-semibold hover:opacity-80 md:hover:cursor-pointer">Search Flights</button>
                    </div>


                </div>


            </div>


            <div className="w-full mt-10">
                {flightData.map((flights) => {
                    return (
                        <div key={flights.id} flightdata={flights} className="w-full flex justify-evenly items-center">
                            <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-36 xl:mx-20 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 lg:space-x-16 items-center shadow-xl my-3 mt-10 bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-2xl">
                                <h3 className="text-2xl sm:text-3xl">{flights.name}</h3>
                                <div className="flex flex-col items-center justify-center">
                                    <h2 className="text-2xl sm:text-3xl">{flights.departureTime}</h2>
                                    <p className="text-xl sm:text-2xl ml-0 sm:ml-2 mt-2 sm:mt-0">{flights.departureCity}</p>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <h2 className="text-2xl sm:text-3xl">{flights.destinationTime}</h2>
                                    <p className="text-xl sm:text-2xl ml-0 sm:ml-2 mt-2 sm:mt-0">{flights.destinationCity}</p>
                                </div>
                                <h2 className="text-2xl sm:text-3xl">{flights.price}</h2>
                                <button className="w-full sm:w-40 h-16 sm:h-auto rounded-xl text-xl sm:text-2xl bg-[#ff385c] text-white hover:opacity-90 font-semibold mt-2 sm:mt-0">
                                    View Details
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    )
}

export default flights
