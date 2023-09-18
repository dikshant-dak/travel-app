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
// STORING HOTELS DATA IN THE DATABASE
const insertData = async () => {
    try {
        const hotelData = fs.readFileSync("hotel.json");
        const hotels = JSON.parse(hotelData);

        for (const hotelData of hotels) {
            const { image, address, price, distance, date } = hotelData;

            await prisma.hotel.create({
                data: {
                    image,
                    address,
                    price,
                    distance,
                    date,
                },
            });
        }
        console.log('Hotels data inserted successfully.');
    } catch (error) {
        console.error('Error inserting hotels data:', error);
    } finally {
        await prisma.$disconnect(); // Disconnect from the database
    }
}
insertData();