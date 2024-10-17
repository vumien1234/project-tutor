import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaArrowRight } from "react-icons/fa";
import { IoHomeOutline, IoLocationSharp, IoPerson } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { CiBookmark, CiCalendar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/Button";
import { menuCheckBox } from "../../components/constants/menuCheckBox";
import { fetchClassList } from "./api";
import { IoMdTime } from "react-icons/io";
import { RiBookLine } from "react-icons/ri";
import { Pagination } from "../../components/common/Pagination";

const ClassList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const { classList, currentPage, totalPages, setCurrentPage } = useSelector((state) => state.classList);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const MenuCheckBox = () => (
    <div className="flex flex-wrap gap-4">
      {menuCheckBox.map((item, index) => (
        <div key={index} className="relative flex-1 min-w-[200px] md:min-w-[300px]">
          <div
            className="border border-gray-300 p-2 rounded-md flex items-center cursor-pointer"
            style={{ height: "40px" }}
            onClick={() => toggleMenu(index)}
          >
            <div className="flex items-center justify-between flex-grow">
              <p>{item.title}</p>
              {item.submenu && (
                <AiOutlineDown size={16} className={`transition-transform ${openMenu === index ? "rotate-180" : ""}`} />
              )}
            </div>
          </div>
          {openMenu === index && item.submenu && (
            <div className="absolute left-0 top-full mt-2 bg-white w-full border border-gray-200 shadow-lg z-20">
              {item.submenu.map((subItem, subIndex) => (
                <div className="flex items-center p-2" key={subIndex}>
                  <input type="checkbox" id={`checkbox-${index}-${subIndex}`} className="mr-2" />
                  <label htmlFor={`checkbox-${index}-${subIndex}`} className="text-gray-700">
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

  useEffect(() => {
    dispatch(fetchClassList());
  }, [dispatch]);

  return (
    <Container className="py-12">
      <div className="w-full">
        {/* Breadcrumb */}
        <div className="flex items-center">
         <div className="flex items-center">
           <IoHomeOutline className="w-5 h-5 mr-2 text-orange-500" /><p className="mr-2">Trang chủ</p>
           <p >/ Danh sách lớp</p>
         </div>
        </div>
        {/* Page Title */}
        <div className="flex items-center py-5">
          <h3 >Danh sách lớp</h3>
        </div>
        {/* Search Bar */}
        <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm tên gia sư..."
            className="flex-grow p-4 outline-none"
            style={{ height: "50px" }}
          />
          <button className="bg-blue-500 text-white flex items-center justify-center p-4" style={{ height: "50px" }}>
            <FaSearch className="w-5 h-5" />
            <span className="ml-2">Tìm Kiếm</span>
          </button>
        </div>
        {/* Filter Section */}
        <div className="py-5">
          <div className="text-blue-500">
            <div className="flex items-center pb-5">
              <FaFilter />
              <h5 className="pl-3">Bộ lọc</h5>
            </div>
            <MenuCheckBox />
          </div>
        </div>
        {/* Class List */}
        {classList && classList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-5">
            {classList?.map((item, index) => (
              <div className="border border-gray-300" key={index}>
                <div className="bg-blue-800 p-4">
                  <h6 className="font-semibold text-white">{item.id}</h6>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center  ">
                    <div className="w-[30px]">
                      <RiBookLine className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6 className="font-semibold">Môn học: {item?.subject}</h6>
                  </div>
                  <div className="flex items-center  ">
                    <div className="w-[30px]">
                      <IoPerson className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Giáo viên: {item?.username}</h6>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[30px]">
                      <IoLocationSharp className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Địa điểm: {item?.address}</h6>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[30px]">
                      <MdAttachMoney className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Giá: {item?.total_price}</h6>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[30px]">
                      <IoMdTime className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Thời gian: {item?.time}</h6>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[30px]">
                      <CiCalendar className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6 className="font-semibold">Ngày dến hạn: {item?.due_date}</h6>
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[30px]">
                      <CiBookmark className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Ghi chú: {item?.note}</h6>
                  </div>
                  <Link to={`/chi-tiet-lop/${item.id}`}>
                    <div className="pt-5">
                      <CustomButton color="primary" title="Xem chi tiết" icon={FaArrowRight} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No classes available</p>
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} className="mt-4"/>
      </div>
    </Container>
  );
};

export default ClassList;
