import React from 'react';
import { BiGlobe } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="w-full h-full bg-[#f7f7f7]">
    <div className="border-t border-x-gray-800-partition mt-10"></div>
        <div className="flex flex-col p-2 md:flex-row items-center md:p-12 md:space-x-40">
            <ul className="mt:4 md:p-10">
                <h3 className="text-lg font-semibold">Support</h3>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Help Centre</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Anti-discrimination</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Disability support</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Cancellation options</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Report neighbourhood concern</li>
            </ul>

            <ul className="mt-4 md:p-10 pr-16 md:pr-0">
                <h3 className="text-lg font-semibold">Hosting</h3>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Travel Along your home</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">AirCover for Hosts</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Hosting resources</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Community forum</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Hosting responsibly</li>
            </ul>

            <ul className="mt-4 md:p-10 pr-32 md:pr-0">
                <h3 className="text-lg font-semibold">Travel Along</h3>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Newsroom</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">New features</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Careers</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Investors</li>
                <li className="text-base pt-1 md:pt-5 md:cursor-pointer hover:underline">Emergency</li>
            </ul>
        </div>

        <div className="py-3 mt-2 border-t border-x-gray-800-partition"></div>

        <div className="flex flex-col md:flex-row items-center justify-between p-2 md:p-5">
            <div className="flex flex-col md:flex-row justify-start pr-14 md:pr-0">
                <h3>©️ 2023, Travel Along, Inc</h3>
                <ul className="flex flex-col md:flex-row md:pl-2">
                    <li className="md:pl-2 hover:underline md:hover:cursor-pointer">· Privacy</li>
                    <li className="md:pl-2 hover:underline md:hover:cursor-pointer">· Terms</li>
                    <li className="md:pl-2 hover:underline md:hover:cursor-pointer">· Sitemap</li>
                    <li className="md:pl-2 hover:underline md:hover:cursor-pointer">· Company details</li>
                </ul>
            </div>

            <div className="flex mt-4 pt-5 md:pt-0 space-x-6 md:space-x-3 pr-3 md:pr-0">
                <BiGlobe size={25} className="md:hover:cursor-pointer hidden md:block" />
                <h3 className="hidden md:block md:hover:cursor-pointer hover:underline">English (IN)</h3>
                <h3 className="hidden md:block md:hover:cursor-pointer hover:underline">₹ INR</h3>

                <div className="rounded-full bg-[#1877f2] text-white p-1 md:hover:cursor-pointer hover:opacity-80" onClick={() => window.open("https://facebook.com", "_blank")}>
                    <FaFacebookF size={20} />
                </div>
                <div className="rounded-full bg-[#E84C88] text-white p-1 md:hover:cursor-pointer hover:opacity-80" onClick={() => window.open("https://www.instagram.com/dikshant_dak/", "_blank")}>
                    <FaInstagram size={20} />
                </div>
                <div className="rounded-full bg-[#1DA1F2] text-white p-1 md:hover:cursor-pointer hover:opacity-80" onClick={() => window.open("https://twitter.com", "_blank")}>
                    <FaTwitter size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
