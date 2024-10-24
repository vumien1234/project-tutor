import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const CallButton = () => {
    return (
        <div className="fixed top-[80%] left-10 md:left-3 md:flex items-center space-x-4 z-50 hidden">
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-600 opacity-20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-red-600 opacity-20 animate-ping delay-100"></div>
                <div className="absolute inset-0 rounded-full bg-red-600 opacity-20 animate-ping delay-200"></div>
                <button className="relative w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <FaPhoneVolume className="w-8 h-8 animate-rotate-slightly" />
                </button>
            </div>
            <div className="rounded-full bg-red-600 bg-opacity-90 px-5 py-3 text-white text-lg font-semibold shadow-lg hidden md:block">
                <h4 className="font-semibold">0395219002</h4>
            </div>
        </div>
    );
};

export default CallButton;
