import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

const Progress = ({ currentStep }) => {
    const isStep1Active = currentStep >= 1;
    const isStep2Active = currentStep >= 2;

    return (
        <div className="flex flex-col items-center w-full px-4">
            <div className="flex flex-col md:flex-row items-center w-full">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div
                        className={`flex items-center justify-center rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] ${
                            isStep1Active ? "border-2 border-black" : "border-2 border-gray-400"
                        }`}>
                        <IoPersonAddSharp size={40} />
                    </div>
                    <div className="text-center mt-2">
                        <h5 className={`font-bold ${isStep1Active ? "text-primary" : "text-gray-400"}`}>
                            Thông tin người dùng
                        </h5>
                        <h6
                            className={`font-normal ${
                                isStep1Active ? "text-primary" : "text-gray-400"
                            }`}>
                            Kiểm tra lại chính xác thông tin cá nhân của bạn
                        </h6>
                    </div>
                </div>

                {/* Connector */}
                <div className={`hidden md:block border-t-2 ${
                    isStep1Active ? "border-black" : "border-gray-300"
                } flex-1 mx-10`} />

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div
                        className={`flex items-center justify-center rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] ${
                            isStep2Active
                                ? "border-2 border-black"
                                : "border-2 border-gray-400"
                        }`}>
                        <FaCreditCard size={40} />
                    </div>
                    <div className="text-center mt-2">
                        <h5 className={`font-bold ${isStep2Active ? "text-primary" : "text-gray-400"}`}>
                            Xác nhận & Thanh toán
                        </h5>
                        <h6
                            className={`font-normal ${
                                isStep2Active ? "text-primary" : "text-gray-400"
                            }`}>
                            Xác nhận các thông tin bạn đã đăng ký & thanh toán
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
