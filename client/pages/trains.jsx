import Booking from '@/components/Booking';
import Header from '@/components/Header';
import React from 'react'

const Trains = () => {
    return (
        <div>
            <Header />
            <Booking />

            <div className="">
                <h1>Train Ticket Booking</h1>
            </div>
        </div>
    )
}

export default Trains;