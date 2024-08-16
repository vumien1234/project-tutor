import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import Container from "../../components/common/Container";
import { menuCheckBox } from "../../components/constants/menuCheckBox";
import { FaFilter } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ClassList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const MenuCheckBox = () => {
        return (
            <div className="flex flex-wrap gap-4">
                {menuCheckBox.map((item, index) => (
                    <div key={index} className="relative flex-1 min-w-[200px] md:min-w-[300px]">
                        <div
                            className="border border-gray-300 p-2 rounded-md flex items-center cursor-pointer"
                            style={{ height: "40px" }}
                            onClick={() => toggleMenu(index)}>
                            <div className="flex items-center justify-between flex-grow">
                                <p>{item.title}</p>
                                {item.submenu && (
                                    <div className="flex items-center">
                                        <AiOutlineDown
                                            size={16}
                                            className={`transition-transform duration-300 ease-in-out ${
                                                openMenu === index ? "rotate-180" : ""
                                            }`}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {openMenu === index && item.submenu && (
                            <div className="absolute left-0 top-full mt-2 bg-white w-full border border-gray-200 shadow-lg z-20">
                                {item.submenu.map((subItem, subIndex) => (
                                    <div className="flex items-center p-2" key={subIndex}>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${index}-${subIndex}`}
                                            className="mr-2"
                                        />
                                        <label
                                            htmlFor={`checkbox-${index}-${subIndex}`}
                                            className="text-gray-700">
                                            {subItem.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <Container className={"justify-center items-center py-12"}>
            <div className="w-full">
                <div className="flex items-center mb-4">
                    <IoHomeOutline className="w-[20px] h-[20px] mr-2 text-color-orange" />
                    <p className="text-gray-400">/ Danh sách lớp</p>
                </div>
                <div className="flex items-center py-5">
                    <h3>Danh sách lớp</h3>
                </div>
                <div className="flex items-center rounded-md overflow-hidden border-2 border-gray-300">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Tìm kiếm tên gia sư..."
                        className="flex-grow p-4 outline-none border-none"
                        style={{ height: "60px" }}
                    />
                    <button
                        className="bg-color-button text-white flex items-center justify-center p-4 transition-colors duration-300"
                        style={{ height: "60px" }}>
                        <FaSearch className="w-5 h-5" />
                        <span className="ml-2">Tìm Kiếm</span>
                    </button>
                </div>

                {/* Checkbox Menu */}
                <div className="py-5">
                    <div className="text-color-button">
                        <div className="flex items-center pb-5">
                            <FaFilter />
                            <h5 className="pl-3 ">Bộ lọc</h5>
                        </div>
                        <MenuCheckBox />
                    </div>
                    <div className="py-10 gap-5 grid grid-cols-1 md:grid-cols-4">
                        <div className="border border-gray-300">
                            <div className="bg-[#0056B3] p-4">
                                <h6 className="font-semibold text-white">D5865</h6>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center">
                                    <FaBook className="mr-2 text-gray-400" />
                                    <h6 className="font-semibold">Tiếng Pháp - Lớp 5</h6>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationSharp className="mr-2 text-gray-400" />
                                    <h6>Nguyễn Trãi, Thanh Xuân, Hà Nội</h6>
                                </div>
                                <div className="flex items-center">
                                    <MdAttachMoney className="mr-2 text-gray-400" />
                                    <h6>250.000 ₫/buổi, 2 buổi/tuần</h6>
                                </div>
                                <div className="flex items-center">
                                    <CiBookmark className="mr-2 text-gray-400" />
                                    <h6>Yêu cầu : Sinh viên</h6>
                                </div>
                                <Link to="/danh-sach-lop/1">
                                    <div className="pt-5">
                                        <CustomButton
                                            color="primary"
                                            title="Xem chi tiết"
                                            icon={FaArrowRight}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="border border-gray-300">
                            <div className="bg-[#0056B3] p-4">
                                <h6 className="font-semibold text-white">D5865</h6>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center">
                                    <FaBook className="mr-2 text-gray-400" />
                                    <h6 className="font-semibold">Tiếng Pháp - Lớp 5</h6>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationSharp className="mr-2 text-gray-400" />
                                    <h6>Nguyễn Trãi, Thanh Xuân, Hà Nội</h6>
                                </div>
                                <div className="flex items-center">
                                    <MdAttachMoney className="mr-2 text-gray-400" />
                                    <h6>250.000 ₫/buổi, 2 buổi/tuần</h6>
                                </div>
                                <div className="flex items-center">
                                    <CiBookmark className="mr-2 text-gray-400" />
                                    <h6>Yêu cầu : Sinh viên</h6>
                                </div>
                                <Link to="/danh-sach-lop/1">
                                    <div className="pt-5">
                                        <CustomButton
                                            color="primary"
                                            title="Xem chi tiết"
                                            icon={FaArrowRight}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="border border-gray-300">
                            <div className="bg-[#0056B3] p-4">
                                <h6 className="font-semibold text-white">D5865</h6>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center">
                                    <FaBook className="mr-2 text-gray-400" />
                                    <h6 className="font-semibold">Tiếng Pháp - Lớp 5</h6>
                                </div>
                                <div className="flex items-center">
                                    <IoLocationSharp className="mr-2 text-gray-400" />
                                    <h6>Nguyễn Trãi, Thanh Xuân, Hà Nội</h6>
                                </div>
                                <div className="flex items-center">
                                    <MdAttachMoney className="mr-2 text-gray-400" />
                                    <h6>250.000 ₫/buổi, 2 buổi/tuần</h6>
                                </div>
                                <div className="flex items-center">
                                    <CiBookmark className="mr-2 text-gray-400" />
                                    <h6>Yêu cầu : Sinh viên</h6>
                                </div>
                                <Link to="/danh-sach-lop/1">
                                    <div className="pt-5">
                                        <CustomButton
                                            color="primary"
                                            title="Xem chi tiết"
                                            icon={FaArrowRight}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ClassList;
