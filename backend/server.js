const express = require("express");
const cors = require("cors");
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_API_KEY);
// const hotelData = require("./hotel.json");

app.use(cors());
app.use(express.json());

// GET ALL CUSTOMERS
app.get("/customers", async (req, res) => {
    try {
        const customers = await prisma.customer.findMany();
        res.json(customers)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
});

// GET ONLY ONE USER
app.get("/customers/:id", async (req, res) => {
    try {
        const customer = await prisma.customer.findFirstOrThrow({
            where: {
                id: parseInt(req.params.id)
            },
        });
        res.json(customer);
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found")
    }
});

// CREATE NEW USER
app.post("/customers", async (req, res) => {
    try {
        const { name, email, phone, address, dateOfBirth, gender } = req.body;
        const customer = await prisma.customer.create({
            data: {
                name,
                email,
                phone,
                address,
                dateOfBirth,
                gender
            }
        });
        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(404).json("Not Found")
    }
})

// UPDATE CUSTOMERS
app.put("/customers/:id", async (req, res) => {
    try {
        const { name, email, phone, address, dateOfBirth, gender } = req.body;
        const updatedCustomer = await prisma.customer.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                name,
                email,
                phone,
                address,
                dateOfBirth,
                gender
            }
        })
        res.json(updatedCustomer)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
});

// DELETE CUSTOMERS
app.delete("/customers/:id", async (req, res) => {
    try {
        deletedCustomer = await prisma.customer.delete({
            where: {
                id: parseInt(req.params.id)
            },
        })
        res.json(deletedCustomer);
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
});

// GET All BOOKINGS
app.get("/bookings", async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany();
        res.json(bookings)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
})

// GET ONE BOOKING
app.get("/bookings/:id", async (req, res) => {
    try {
        const booking = await prisma.booking.findFirstOrThrow({
            where: {
                id: parseInt(req.params.id)
            },
        });
        res.json(booking);
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found")
    }
})

// CREATE BOOKING 
app.post("/bookings", async (req, res) => {
    try {
        const { endDate, customerId, totalPrice, numberOfPeople } = req.body;
        const booking = await prisma.booking.create({
            data: {
                endDate: new Date(endDate),
                customerId: parseInt(customerId),
                totalPrice: parseFloat(totalPrice),
                numberOfPeople: parseInt(numberOfPeople)
            }
        });
        res.status(201).json(booking)
    } catch (error) {
        console.error(error);
        res.status(404).json("Not Found")
    }
})

// DELETE BOOKINGS
app.delete("/bookings/:id", async (req, res) => {
    try {
        deletedBookings = await prisma.booking.delete({
            where: {
                id: parseInt(req.params.id)
            },
        })
        res.json(deletedBookings);
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
});

// UPDATE BOOKINGS
app.put("/bookings/:id", async (req, res) => {
    try {
        const { endDate, customerId, totalPrice, numberOfPeople } = req.body;
        const updatedBookings = await prisma.booking.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                endDate: new Date(endDate),
                customerId: parseInt(customerId),
                totalPrice: parseFloat(totalPrice),
                numberOfPeople: parseInt(numberOfPeople)
            }
        })
        res.json(updatedBookings)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
});

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await prisma.hotel.findMany();
        res.json(hotels)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
})

app.get("/flights", async (req, res) => {
    try {
        const flightsData = await prisma.flights.findMany();
        res.json(flightsData)
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found");
    }
})

app.listen(8005, () => {
    console.log('Server is running on port 8005');
});
