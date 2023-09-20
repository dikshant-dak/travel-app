import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SingleHotelData from "@/components/SingleHotelData";

const id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [singleHotelData, setSingleHotelData] = useState(null);

    useEffect(() => {
        const fetchSingleHotel = async () => {
            try {
                const response = await axios.get(`http://localhost:8005/hotels/${id}`)
                setSingleHotelData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if(id) {
            fetchSingleHotel();
        }
    }, [id]);

  return (
    <div>
        <Header />
        {
            singleHotelData ? (
                <SingleHotelData singleHotelData={singleHotelData} />
            ) : (
                <p>Loading...</p>
            )
        }
        <Footer />
    </div>
  )
}

export default id;
