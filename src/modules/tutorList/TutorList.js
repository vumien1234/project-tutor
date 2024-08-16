import React from "react";
import TeamTeacher from "../../assets/image/team teacher.jpg";
import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";
import ImgTeacher from "../../assets/image/home-image/teacher.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const TutorList = () => {
    return (
        <div className="relative">
            <Banner
                className="h-[400px]"
                image={TeamTeacher}
                title="Đội ngũ giảng dạy giàu kinh nghiệm"
                description="Đội ngũ gia sư của chúng tôi"
            />
            <Container>
                <div className="py-16 w-full">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2">
                        <div className="h-[450px] relative">
                            <img
                                src={ImgTeacher}
                                alt="ImgTeacher"
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-b from-transparent via-black/50 to-black text-white flex flex-col justify-end gap-3">
                                <h5 className="text-lg font-semibold">TS. Lê Thái Hà</h5>
                                <p className="text-sm">
                                    Tùy chỉnh trường học trực tuyến của bạn với giao diện người dùng
                                    trực quan. Thiết kế trang chủ của bạn.
                                </p>
                                <Link to="/tutor-list/1" className="text-orange-500 hover:underline">
                                    Xem chi tiết <FaArrowRight className="inline-block ml-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="h-[450px] relative">
                            <img
                                src={ImgTeacher}
                                alt="ImgTeacher"
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-b from-transparent via-black/50 to-black text-white flex flex-col justify-end gap-3">
                                <h5 className="text-lg font-semibold">TS. Lê Thái Hà</h5>
                                <p className="text-sm">
                                    Tùy chỉnh trường học trực tuyến của bạn với giao diện người dùng
                                    trực quan. Thiết kế trang chủ của bạn.
                                </p>
                                <Link to="/teacher-detail" className="text-orange-500 hover:underline">
                                    Xem chi tiết <FaArrowRight className="inline-block ml-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="h-[450px] relative">
                            <img
                                src={ImgTeacher}
                                alt="ImgTeacher"
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-b from-transparent via-black/50 to-black text-white flex flex-col justify-end gap-3">
                                <h5 className="text-lg font-semibold">TS. Lê Thái Hà</h5>
                                <p className="text-sm">
                                    Tùy chỉnh trường học trực tuyến của bạn với giao diện người dùng
                                    trực quan. Thiết kế trang chủ của bạn.
                                </p>
                                <Link to="/teacher-detail" className="text-orange-500 hover:underline">
                                    Xem chi tiết <FaArrowRight className="inline-block ml-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="h-[450px] relative">
                            <img
                                src={ImgTeacher}
                                alt="ImgTeacher"
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-b from-transparent via-black/50 to-black text-white flex flex-col justify-end gap-3">
                                <h5 className="text-lg font-semibold">TS. Lê Thái Hà</h5>
                                <p className="text-sm">
                                    Tùy chỉnh trường học trực tuyến của bạn với giao diện người dùng
                                    trực quan. Thiết kế trang chủ của bạn.
                                </p>
                                <Link to="/teacher-detail" className="text-orange-500 hover:underline">
                                    Xem chi tiết <FaArrowRight className="inline-block ml-1" />
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default TutorList;
