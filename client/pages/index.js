import React, { useState, useEffect } from "react";
import axios from "axios";
// import prisma from "../prisma";
// import { useQuery } from 'react-query';
// const { PrismaClient } = require('@prisma/client');
import Booking from "@/components/Booking";
import Header from "@/components/Header";
import HotelDetails from "@/components/HotelDetails";
import Footer from "@/components/Footer";
// import {} from "../../backend/prisma/schema.prisma";

// const prisma = new PrismaClient({
//     datasources: {
//       db: {
//         url: 'http://localhost:8005',
//       },
//     },
//   });

const index = ({ hotels }) => {
    const [hotelData, setHotelData] = useState([]);
    const [newHotels, setNewHotels] = useState(hotels)

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get("http://localhost:8005/hotels"); 
                setHotelData(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHotels();
    }, []);

    return (
        <div>
            <Header hotels={hotels} setNewHotels={setNewHotels} />
            <Booking />
            <h1 className="text-base md:text-4xl font-semibold text-center mt-16">Hotels and Homestays</h1>
            <div className="flex flex-wrap w-full h-full md:p-5 justify-center items-center md:py-8">
                
                {
                    hotelData.map((hotel) => (
                        <HotelDetails key={hotel.id} hotelData={hotel} />
                    ))
                }
       
            </div>
            <Footer />
        </div>
    );
};

export default index;

// export async function getStaticProps() {
//     const hotels = await prisma.hotel.findMany();
//     return {
//       props: {
//         hotels,
//       },
//     };
//   }
