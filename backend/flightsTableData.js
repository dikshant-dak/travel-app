const express = require("express");
const cors = require("cors");
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_API_KEY);
const fs = require("fs");
// const hotelData = require("./hotel.json");


app.use(cors());
app.use(express.json());

// STORING Flights DATA IN THE DATABASE
const insertData = async () => {
    try {
        const flightsData = fs.readFileSync("flights.json");
        const flights1 = JSON.parse(flightsData);

        for (const flightsData of flights1) {
            const { name, departureTime, destinationTime, price, departureCity, destinationCity } = flightsData;

            await prisma.flights.create({
                data: {
                    name,
                    departureTime,
                    destinationTime,
                    price,
                    departureCity,
                    destinationCity
                },
            });
        }
        console.log('Flights data inserted successfully.');
    } catch (error) {
        console.error('Error inserting flights data:', error);
    }
}
insertData();