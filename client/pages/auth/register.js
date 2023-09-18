import React, { useState } from 'react';
import axios from "axios";
// import { toast, ToastContainer  } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8005/customers', userData);
            const newUser = response.data;
            onUserAdded(newUser);

            setUserData({
                name: "",
                email: "",
                phone: "",
                address: "",
                dateOfBirth: "",
                gender: ""

            });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };


    return (
        <>
            <Header />
            <div className="w-full flex justify-center items-center  p-5 sm:p-10 md:p-20 lg:p-20 xl:p-20">
                <div className="w-[30%] flex flex-col justify-center items-center shadow-2xl p-5">

                <h2 className="text-2xl font-semibold">Register</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
                    <div className=" sm:p-5 ">
                        <label className="text-lg text-left">Name:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none sm:ml-5
                        lg:h-10 rounded-xl lg:ml-10 pl-2" type="text" id="name" name="name" placeholder="Name" value={userData.name} onChange={handleChange} />
                    </div>
                    <div className="p-5">
                        <label className="text-lg text-left">Email:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none sm:ml-5 lg:h-10 rounded-xl lg:ml-10 pl-2" type="email" id="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div className="p-5">
                        <label className="text-lg">Phone:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none  sm:ml-5 lg:h-10 rounded-xl lg:ml-10 pl-2" type="phone" id="phone" name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} />
                    </div>
                    <div className="p-5">
                        <label className="text-lg text-left">Address:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none sm:ml-5 lg:h-10 rounded-xl lg:ml-10 pl-2" id="text" name="address" placeholder="Address" value={userData.address} onChange={handleChange} />
                    </div>
                    <div className="p-5 ">
                        <label className="text-lg text-left">DOB:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none sm:ml-5 lg:h-10 rounded-xl lg:ml-10 pl-2" type="text" id='dateOfBirth' name="dateOfBirth" placeholder="DOB" value={userData.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div className="p-5 ">
                        <label className="text-lg text-left">Gender:</label>
                        <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none sm:ml-5 lg:h-10 rounded-xl lg:ml-10 pl-2" type="text" id="gender" name="gender" placeholder="Gender" value={userData.gender} onChange={handleChange} />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button onClick={() => window.open("/auth/users")} className="bg-[#FF385C] text-white w-24 h-10 rounded-lg hover:opacity-80">Submit</button>
                    </div>
                </form>
                {/* <ToastContainer /> */}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default register
