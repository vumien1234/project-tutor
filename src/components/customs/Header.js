import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { MdLocalPhone, MdOutlineClear } from "react-icons/md";
import CustomButton from "../common/Button";
import Container from "../common/Container";
import AvataDefault from "../../assets/image/avata-default.png";
import Tab from "../common/Tab";
import { RiMenu3Fill, RiUser3Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { navLinksClassList, navLinksDefault } from "../constants/dataHeader";
import Avata from "../../assets/image/avata-default.png";
import { useSelector } from "react-redux";
import Logo_web from "../../assets/image/TUTORMASTER1.png";
import Logo_webMobile from "../../assets/image/logo-mobile.png";
import CustomSearch from "./Search";

const Header = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const [activeTab, setActiveTab] = useState("/");
  const [isClassListHeader, setIsClassListHeader] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const currentPath = location.pathname;
    const validPaths = ["/tong-quan", "/cach-thuc-nhan-lop","/chinh-sach-hoan-phi","/hop-dong"];

    const classListRegex = /^\/danh-sach-lop(\/.*)?$/;

    setActiveTab(tabParam || currentPath);

    setIsClassListHeader(validPaths.includes(currentPath) || classListRegex.test(currentPath));
  }, [tabParam, location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
    setToggle(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    // reload page
    window.location.reload();
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggle]);

  const renderNavigation = (links) => {
    return links.map((link) => (
      <div
        key={link.path}
        className={`nav-link cursor-pointer p-5 md:py-0 hover:bg-hover-default font-semibold md:px-0 md:bg-transparent md:hover:bg-transparent ${
          activeTab === link.path ? "text-yellow-500 font-semibold" : ""
        } overflow-y-auto`}
        onClick={() => handleTabClick(link.path)}
      >
        {link.label}
      </div>
    ));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="md:h-[100px] h-[130px] bg-white flex justify-between items-center w-full shadow-md md:shadow-none">
        <Container className="justify-between items-center">
          <div className="flex flex-row gap-10 items-center justify-between w-full">
            {/* Phần bên trái - Logo và Search */}
            <div className="flex flex-row w-full items-center justify-between">
             <h1 className="w-[290px] h-full">
               <img src={Logo_web} alt="Logo" className="object-cover md:block hidden ml-[-40px]" />
             </h1>
              <img src={Logo_webMobile} alt="Logo" className="object-cover block md:hidden ml-[-20px]" />
              <div className="md:block hidden w-full">
                <CustomSearch />
              </div>
              <div className="md:hidden block">
                <RiMenu3Fill onClick={handleToggle} className="text-[30px] cursor-pointer" />
              </div>
            </div>

            {/* Phần bên phải - Các button và thông tin liên hệ */}
            <div className="md:flex flex-row w-[50%] hidden gap-5 items-center justify-end">
              <CustomButton title="Đăng kí làm gia sư" color="secondary" />
              <Link to={"/danh-sach-lop"}>
                <CustomButton title="Đăng kí thuê gia sư" color="primary1" />
              </Link>
              <div className="flex items-center justify-center p-4 h-[45px] cursor-pointer bg-[#3a83bb] rounded-lg">
                <MdLocalPhone className="text-xl font-bold text-white" />
                <a href="tel:0395219002" className="ml-1 text-xl text-white font-semibold">
                  0395219002
                </a>
              </div>
            </div>
          </div>
          <div className="block md:hidden w-full my-2">
            <CustomSearch />
          </div>

          <div
            className={`fixed inset-0 z-50 flex flex-col bg-white transition-transform transform ${
              toggle ? "translate-x-0" : "translate-x-full"
            } h-screen md:hidden`}
          >
            <div className="flex justify-between p-5">
              <div className="flex gap-5 flex-col sm:flex-row">
                <CustomButton title="Đăng kí làm gia sư" color="secondary" />
                <Link to={"/danh-sach-lop"}>
                  <CustomButton title="Đăng kí thuê gia sư" color="primary1" onClick={handleToggle} />
                </Link>
              </div>
              <MdOutlineClear className="h-10 w-10 cursor-pointer" onClick={handleToggle} />
            </div>

            <div>
              <div className="w-14 h-14 object-cover flex flex-row gap-5 m-5">
                <img src={Avata} alt="Avata" />
                <div>
                  <h5 className="font-semibold">Mộc Miên</h5>
                  <h6>vuthimien@gmail.com</h6>
                </div>
              </div>
              <div className="flex flex-col">
                {renderNavigation(isClassListHeader ? navLinksClassList : navLinksDefault)}
              </div>
              <div className="border border-gray-100"></div>
              <Link to={"/ho-so?tab=thong-tin-nguoi-dung"}>
                <h6 className="p-5 hover:bg-hover-default">Thông tin người dùng</h6>
              </Link>
              <h6 className="p-5 hover:bg-hover-default">Đăng xuất</h6>
            </div>
          </div>
        </Container>
      </div>

      {/* menu-header */}
      <div className="h-[60px] bg-[#3a83bb] text-white md:flex hidden justify-between items-center uppercase">
        <Container className="justify-between items-center">
          <div className="nav-header flex items-center text-[14px] space-x-12">
            {renderNavigation(isClassListHeader ? navLinksClassList : navLinksDefault)}
          </div>

          <div className="flex items-center space-x-10">
            {Object.keys(currentUser).length > 0 ? (
              <div className="relative group">
                <div className="w-11 h-11 border border-green-500 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={currentUser.avatar || AvataDefault} alt="AvataDefault" className="w-full h-full rounded-full " />
                </div>

                <div className="absolute w-[290px] right-0 top-full shadow-xl bg-white hidden rounded-xl group-hover:block md:max-h-[300px] md:overflow-y-auto md:scrollbar-thin">
                  <div className="flex flex-col cursor-pointer text-black">
                    <div className="p-2">
                      <div className="flex flex-col items-start mb-2 px-2">
                        <span className="text-lg font-semibold normal-case">
                          Tên người dùng: {currentUser.username}
                        </span>
                        <span className="text-sm text-gray-600 normal-case">Vai trò: {currentUser.role}</span>
                      </div>
                      <Tab
                        detail="Thông tin cá nhân"
                        Icon={RiUser3Line}
                        onClick={() => navigate("/ho-so?tab=thong-tin-nguoi-dung")}
                      />
                      <Tab detail="Đăng xuất" Icon={IoIosLogOut} onClick={() => handleLogout()} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-white text-black px-5 py-2 rounded">Đăng nhập</button>
              </Link>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
