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
import Modal from "../common/Model";
import { useForm } from "react-hook-form";

const Header = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [searchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const navigate = useNavigate();
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeTab, setActiveTab] = useState("/");
    const [isClassListHeader, setIsClassListHeader] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const currentPath = location.pathname;
        const validPaths = [
            "/danh-sach-lop",
            "/tong-quan",
            "/cach-thuc-nhan-lop",
            "/tao-note-nhan-lop",
        ];

        setActiveTab(tabParam || currentPath);

        setIsClassListHeader(validPaths.includes(currentPath));
    }, [tabParam, location.pathname]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(tab);
        setToggle(false);
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
                onClick={() => handleTabClick(link.path)}>
                {link.label}
            </div>
        ));
    };

    const handleSave = () => {
        alert('ok')
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                <div className="h-[100px] bg-white flex justify-between items-center w-full shadow-md md:shadow-none">
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
                                    <p className="text-2xl font-semibold text-[#16a085]">
                                        TutorMaster
                                    </p>
                                    <h6 className="text-orange-500 font-bold md:flex hidden">
                                        Khám phá tri thức
                                    </h6>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <RiMenu3Fill
                                    onClick={handleToggle}
                                    className="text-3xl cursor-pointer"
                                />
                            </div>

                            <div className="md:flex hidden gap-5">
                                <CustomButton
                                    title="Đăng kí làm gia sư"
                                    color="secondary"
                                    onClick={openModal}
                                />
                                <Link to={"/danh-sach-lop"}>
                                    <CustomButton title="Đăng kí thuê gia sư" color="primary1" />
                                </Link>
                            </div>
                        </div>

                        <div
                            className={`fixed inset-0 z-50 flex flex-col bg-white transition-transform transform ${
                                toggle ? "translate-x-0" : "translate-x-full"
                            } h-screen md:hidden`}>
                            <div className="flex justify-between p-5">
                                <div className="flex gap-5 flex-col sm:flex-row">
                                    <CustomButton
                                        title="Đăng kí làm gia sư"
                                        color="secondary"
                                        onClick={openModal}
                                    />
                                    <Link to={"/danh-sach-lop"}>
                                        <CustomButton
                                            title="Đăng kí thuê gia sư"
                                            color="primary1"
                                            onClick={handleToggle}
                                        />
                                    </Link>
                                </div>
                                <MdOutlineClear
                                    className="h-10 w-10 cursor-pointer"
                                    onClick={handleToggle}
                                />
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
                                    {renderNavigation(
                                        isClassListHeader ? navLinksClassList : navLinksDefault
                                    )}
                                </div>
                                <div className="border border-gray-100"></div>
                                <Link to={"/ho-so?tab=thong-tin-nguoi-dung"}>
                                    <h6 className="p-5 hover:bg-hover-default">
                                        Thông tin người dùng
                                    </h6>
                                </Link>
                                <h6 className="p-5 hover:bg-hover-default">Đăng xuất</h6>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="h-[80px] bg-color-button text-white md:flex hidden justify-between items-center uppercase">
                    <Container className="justify-between items-center">
                        <div className="nav-header flex items-center space-x-12">
                            {renderNavigation(
                                isClassListHeader ? navLinksClassList : navLinksDefault
                            )}
                        </div>

                        <div className="flex items-center space-x-10">
                            <div className="flex items-center">
                                <MdLocalPhone className="text-3xl" />
                                <a href="tel:0395219002" className="ml-1 text-2xl">
                                    0395219002
                                </a>
                            </div>
                            <div className="relative group">
                                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                                    <img
                                        src={AvataDefault}
                                        alt="AvataDefault"
                                        className="w-[30px] h-[30px]"
                                    />
                                </div>
                                <div className="absolute w-[290px] right-0 top-full hidden group-hover:block md:max-h-[300px] md:overflow-y-auto md:scrollbar-thin">
                                    <div className="flex flex-col cursor-pointer bg-white text-black shadow-lg">
                                        <div className="p-2">
                                            <Tab
                                                detail="Thông tin cá nhân"
                                                Icon={RiUser3Line}
                                                onClick={() =>
                                                    navigate("/ho-so?tab=thong-tin-nguoi-dung")
                                                }
                                            />
                                            <Tab detail="Đăng xuất" Icon={IoIosLogOut} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col justify-center">
                    <p className="uppercase font-semibold text-center md:text-[25px] text-[20px]">
                        đăng kí làm gia sư
                    </p>
                    <h6 className="text-center text-gray-400">
                        Mời bạn điền vào các trường thông tin dưới đây, chúng tôi sẽ gọi lại cho bạn
                        để xác nhận thông tin bạn cung cấp
                    </h6>
                    <div>
                        <form onSubmit={handleSubmit(handleSave)}>
                            <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                                <div className="flex flex-col w-full">
                                    <h6
                                        className={`${
                                            errors.Password ? "text-red-500" : ""
                                        } flex items-center mb-2`}>
                                        Họ và tên
                                    </h6>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        placeholder=" Họ và tên"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.Password && (
                                        <h6 className="text-red-500 ">{errors.Password.message}</h6>
                                    )}
                                </div>
                                <div className="flex flex-col w-full mt-5 md:mt-0">
                                    <h6
                                        className={`${
                                            errors.PasswordNew ? "text-red-500" : ""
                                        } flex mb-2 items-center`}>
                                        Email
                                    </h6>
                                    <input
                                        type="text"
                                        {...register("email")}
                                        placeholder="Email"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.PasswordNew && (
                                        <h6 className="text-red-500">
                                            {errors.PasswordNew.message}
                                        </h6>
                                    )}
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                                <div className="flex flex-col w-full">
                                    <h6
                                        className={`${
                                            errors.date ? "text-red-500" : ""
                                        } flex items-center mb-2`}>
                                        Ngày sinh
                                    </h6>
                                    <input
                                        {...register("date")}
                                        type="date"
                                        placeholder="Ngày sinh"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.date && (
                                        <h6 className="text-red-500 ">{errors.date.message}</h6>
                                    )}
                                </div>
                                <div className="flex flex-col w-full mt-5 md:mt-0">
                                    <h6
                                        className={`${
                                            errors.phone ? "text-red-500" : ""
                                        } flex mb-2 items-center`}>
                                        Số điện thoại
                                    </h6>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        placeholder=" Số điện thoại"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.phone && (
                                        <h6 className="text-red-500">{errors.phone.message}</h6>
                                    )}
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                                <div className="flex flex-col w-full">
                                    <h6
                                        className={`${
                                            errors.date ? "text-red-500" : ""
                                        } flex items-center mb-2`}>
                                        Nghề nghiệp hiện tại
                                    </h6>
                                    <input
                                        {...register("date")}
                                        type="text"
                                        placeholder="Nghề nghiệp hiện tại"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.date && (
                                        <h6 className="text-red-500 ">{errors.date.message}</h6>
                                    )}
                                </div>
                                <div className="flex flex-col w-full mt-5 md:mt-0">
                                    <h6
                                        className={`${
                                            errors.phone ? "text-red-500" : ""
                                        } flex mb-2 items-center`}>
                                        Nơi ở hiện tại
                                    </h6>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        placeholder=" Nơi ở hiện tại"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.phone && (
                                        <h6 className="text-red-500">{errors.phone.message}</h6>
                                    )}
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-5 mt-5">
                                <div className="flex flex-col w-full">
                                    <h6
                                        className={`${
                                            errors.date ? "text-red-500" : ""
                                        } flex items-center mb-2`}>
                                        Bạn có thể dạy môn
                                    </h6>
                                    <input
                                        {...register("date")}
                                        type="text"
                                        placeholder="Bạn có thể dạy môn"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.date && (
                                        <h6 className="text-red-500 ">{errors.date.message}</h6>
                                    )}
                                </div>
                                <div className="flex flex-col w-full mt-5 md:mt-0">
                                    <h6
                                        className={`${
                                            errors.phone ? "text-red-500" : ""
                                        } flex mb-2 items-center`}>
                                        Bạn có thể dạy lớp
                                    </h6>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        placeholder="Bạn có thể dạy lớp"
                                        className="py-3 px-5 rounded-sm border-[1.5px] border-solid w-full md:min-w-[300px]"
                                    />
                                    {errors.phone && (
                                        <h6 className="text-red-500">{errors.phone.message}</h6>
                                    )}
                                </div>
                            </div>
                            <CustomButton
                                title="Đăng kí ngay"
                                className="mt-10"
                                buttonType="submit"
                            />
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Header;
