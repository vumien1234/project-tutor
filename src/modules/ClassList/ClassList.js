import React, { useEffect, useState, useRef } from "react";
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
import { Pagination } from "antd";  // Import Pagination từ Ant Design

const ClassList = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(null);
  const { classList } = useSelector((state) => state.classList);
  const [search, setSearch] = useState({
    subjects: [],
    areas: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8); // Đặt kích thước trang mặc định là 8 lớp học

  // Ref to track menu elements
  const menuRef = useRef(null);

  const handleSearch = (e, key) => {
    const { checked, value } = e.target;
    if (checked) {
      setSearch((prev) => ({
        ...prev,
        [key]: [...prev[key], value],
      }));
    } else {
      setSearch((prev) => ({
        ...prev,
        [key]: prev[key].filter((item) => item !== value),
      }));
    }
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
                  <input
                    type="checkbox"
                    id={`checkbox-${index}-${subIndex}`}
                    className="mr-2"
                    onChange={(e) => handleSearch(e, item.key)}
                    value={subItem}
                    checked={search[item.key].includes(subItem)}
                  />
                  <label htmlFor={`checkbox-${index}-${subIndex}`} className="text-gray-700">
                    {subItem}
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

  const classListFiltered = classList.filter((item) => {
    let isSubject = false;
    if (search.subjects.length > 0) {
      for (let i = 0; i < search.subjects.length; i++) {
        if (item.subject.toLowerCase() === search.subjects[i].toLowerCase()) {
          isSubject = true;
          break;
        }
      }
    }
    if (search.areas.length > 0) {
      for (let i = 0; i < search.areas.length; i++) {
        if (item.address.toLowerCase().includes(search.areas[i].toLowerCase())) {
          isSubject = true;
          break;
        }
      }
    }

    if (search.subjects.length === 0 && search.areas.length === 0) {
      isSubject = true;
    }

    return isSubject;
  });

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);  // Close the menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cắt dữ liệu theo trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const currentClassList = classListFiltered.slice(startIndex, startIndex + pageSize);

  const onPageChange = (page) => {
    setCurrentPage(page);  // Cập nhật trang hiện tại khi người dùng thay đổi
  };

  return (
    <Container className="py-12">
      <div className="w-full">
        {/* Breadcrumb */}
        <div className="flex items-center">
          <div className="flex items-center">
            <IoHomeOutline className="w-5 h-5 mr-2 text-orange-500" /><a href="/" className="mr-2">Trang chủ</a>
            <p>/ Danh sách lớp</p>
          </div>
        </div>
        {/* Page Title */}
        <div className="flex items-center py-5">
          <h3>Danh sách lớp</h3>
        </div>
        {/* Filter Section */}
        <div className="py-5">
          <div className="text-blue-500">
            <div className="flex items-center pb-5">
              <FaFilter />
              <h5 className="pl-3">Bộ lọc</h5>
            </div>
            <div ref={menuRef}>
              <MenuCheckBox />
            </div>
          </div>
        </div>
        {/* Class List */}
        {currentClassList && currentClassList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-5">
            {currentClassList.map((item, index) => (
              <div className="border border-gray-300" key={index}>
                <div className="bg-blue-800 p-4">
                  <h6 className="font-semibold text-white">ICS {item.id}</h6>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center">
                    <div className="w-[30px]">
                      <RiBookLine className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6 className="font-semibold">Môn học: {item?.subject}</h6>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px]">
                      <IoPerson className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Giáo viên: {item?.username}</h6>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px]">
                      <IoLocationSharp className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Địa điểm: {item?.address}</h6>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px]">
                      <MdAttachMoney className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Giá: {item?.total_price}</h6>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px]">
                      <IoMdTime className="mr-2 text-[20px] text-gray-400 shrink-0" />
                    </div>
                    <h6>Thời gian: {item?.time}</h6>
                  </div>
                  <div className="py-3 text-center">
                    <Link to={`/class/detail/${item.id}`}>
                      <CustomButton>Chi tiết lớp học</CustomButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">Không có lớp học phù hợp</div>
        )}
        {/* Pagination */}
        <div className="flex justify-center py-5">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={classListFiltered.length}
            onChange={onPageChange}
            showSizeChanger={false} // Không cho phép người dùng thay đổi số lượng lớp trên mỗi trang
          />
        </div>
      </div>
    </Container>
  );
};

export default ClassList;
