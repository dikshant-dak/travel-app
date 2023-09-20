import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
const HotelDetails = ({ hotelData }) => {
    return (
        <Link href={`/hotel/${hotelData.id}`} className="p-2 md:p-6 mx-3 max-w-sm rounded-lg h-full shadow-2xl border border-gray-300 mt-12 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out md:duration-500 md:ease-in-out">
            <div className=" h-48 w-full">
                <Image
                    src={hotelData.image}
                    alt={hotelData.address}
                    //   layout="fill"
                    width={500}
                    height={500}
                    objectFit="cover"
                />

            </div>
            <div className="md:pt-16 mt-2">
                <div className="font-bold text-xl mb-2">{hotelData.address}</div>
                <p className="text-gray-700 text-base">
                    {hotelData.distance}
                </p>
                <p className="text-gray-700 text-base">{hotelData.date}</p>
                <p className="text-gray-700 text-base">{hotelData.price}</p>
            </div>
        </Link>
    )
}

export default HotelDetails

