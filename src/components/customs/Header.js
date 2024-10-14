import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LogoHeader from "../../assets/image/logo-web.png";
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
    const currentPath = location.pathname;
    const validPaths = ["/tong-quan", "/cach-thuc-nhan-lop", "/tao-note-nhan-lop"];

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
        className={`nav-link cursor-pointer p-5 md:py-0 hover:bg-hover-default md:px-0 md:bg-transparent md:hover:bg-transparent ${
          activeTab === link.path ? "text-yellow-500" : ""
        } overflow-y-auto`}
        onClick={() => handleTabClick(link.path)}
      >
        {link.label}
      </div>
    ));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="md:h-[100px] h-[80px] bg-white flex justify-between items-center w-full shadow-md md:shadow-none">
        <Container className="justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-start space-x-4">
              <Link to={"/"}>
                <img
                  className="h-12 w-12 rounded-full border-2 border-custom-green"
                  src={LogoHeader}
                  alt="Logo header"
                />
              </Link>
              <div>
                <p className="text-2xl font-semibold text-[#16a085]">TutorMaster</p>
                <h6 className="text-orange-500 font-bold md:flex hidden">Chinh phục học tập cùng chúng tôi</h6>
              </div>
            </div>

            <div className="md:hidden block">
              <RiMenu3Fill onClick={handleToggle} className="text-3xl cursor-pointer" />
            </div>

            <div className="md:flex hidden gap-5">
              <CustomButton title="Đăng kí làm gia sư" color="secondary" />
              <Link to={"/danh-sach-lop"}>
                <CustomButton title="Đăng kí thuê gia sư" color="primary1" />
              </Link>
            </div>
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
      <div className="h-[70px] bg-[#006266] text-white md:flex hidden justify-between items-center uppercase">
        <Container className="justify-between items-center">
          <div className="nav-header flex items-center space-x-12">
            {renderNavigation(isClassListHeader ? navLinksClassList : navLinksDefault)}
          </div>

          <div className="flex items-center space-x-10">
            <div className="flex items-center">
              <MdLocalPhone className="text-3xl" />
              <a href="tel:0395219002" className="ml-1 text-2xl">
                0395219002
              </a>
            </div>

            {Object.keys(currentUser).length > 0 ? (
              <div className="relative group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer">
                  <img src={AvataDefault} alt="AvataDefault" className="w-8 h-8" />
                </div>

                <div className="absolute w-[290px] right-0 top-full hidden group-hover:block md:max-h-[300px] md:overflow-y-auto md:scrollbar-thin">
                  <div className="flex flex-col cursor-pointer rounded-xl bg-white text-black shadow-lg">
                    <div className="p-2">
                      <div className="flex flex-col items-start mb-2 px-2">
                        <span className="text-lg font-semibold normal-case">Username: {currentUser.username}</span>
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
