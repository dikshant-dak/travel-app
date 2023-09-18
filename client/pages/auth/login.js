import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center w-full mt-16 p-16 ">
                <div className="flex flex-col w-[50%] max-w-[500px]">
                    <h1 className="text-3xl font-semibold">Travel Along</h1>
                    <h2 className="text-left mt-[20px] leading-[22px] text-[#252525]">
                        Welcome Back !
                    </h2>
                    <p className="text-left mt-[20px] leading-[30px] text-[#252525]">
                        Enter Your Details to Login to your account
                    </p>
                </div>

                <div className="flex flex-col items-center w-[400px] ml-[60px]  h-[400px] justify-center shadow-lg rounded-[10px] text-white tracking-normal">
                    <div className="flex flex-col justify-center">
                        <h1 className="mx-[12px] text-black text-3xl text-center mb-[30px] font-semibold">
                            Login
                        </h1>
                        <input
                            className="mb-[15px] w-[300px] h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="mb-[15px] w-[300px] h-[50px] shadow-md pl-[15px] text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px] rounded-2xl"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <Link href="/" className='flex items-center justify-center'>

                        <button className="w-44 h-10 bg-[#FF385C] text-white rounded-lg md:cursor-pointer hover:opacity-80">Login</button>
                        </Link>
                        <Link href="/auth/register">
                            <h3 className="text-[#252525] text-[12px] font-semibold underline mt-[15px] text-center cursor-pointer">
                                Don't have an account? Register
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login;
