import React from "react";
import Container from "../../components/common/Container";
import { IoHomeOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { GoClockFill } from "react-icons/go";
import CustomButton from "../../components/common/Button";
import { FaArrowRight, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImgWhy from "../../assets/image/why.png";

const ClassDetail = () => {
    return (
        <Container>
            <div className="w-full py-12">
                <div className="flex items-center mb-4">
                    <IoHomeOutline className="w-5 h-5 mr-2 text-orange-500" />
                    <h6 className="text-gray-400">
                        / Danh sách lớp / <span className="font-semibold ">D6767</span>
                    </h6>
                </div>
                <div className="py-5 flex flex-col md:flex-row gap-10 w-full">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">Chi tiết lớp D6767</h3>
                        <div className="py-5 flex items-center">
                            <span>Tình trạng:</span>
                            <p className="text-green-500 flex items-center ml-2">
                                Đang còn <IoIosCheckmarkCircle className="ml-2" />
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mb-5">
                            <IoMdPerson className="w-5 h-5 text-gray-600" />
                            <h6 className="text-blue-400">GV. Phạm Ngọc Hưng</h6>
                        </div>
                        <div className="flex items-center gap-3 mb-5">
                            <IoLocationSharp className="w-5 h-5 text-gray-600" />
                            <h6>Nguyễn Trãi, Thanh Xuân, Hà Nội</h6>
                        </div>
                        <div className="flex items-center gap-3 mb-5">
                            <MdAttachMoney className="w-5 h-5 text-gray-600" />
                            <h6>250.000 ₫/buổi, 2 buổi/tuần</h6>
                        </div>
                        <div className="flex items-center gap-3 mb-5">
                            <GoClockFill className="w-6 h-6 text-gray-600" />
                            <h6>
                                Thời gian có thể học: Các buổi sáng, các buổi chiều và tối (thứ
                                2,4,6). Những thời gian khác, cần trao đổi thêm với phụ huynh
                            </h6>
                        </div>
                        <div className="flex items-center gap-3 mb-5">
                            <CiBookmark className="w-5 h-5 text-gray-600" />
                            <h6>Yêu cầu: Sinh Viên</h6>
                        </div>
                        <div className="my-7">
                            <h5 className="font-semibold">Đặc điểm học sinh :</h5>
                            <h6 className="py-3">Giới tính: Nam</h6>
                            <h6>
                                Học sinh vừa vào lớp 5, đang học trường song ngữ Việt-Pháp. Học lực
                                trung bình khá
                            </h6>
                        </div>
                        <Link to="/dang-ki-lop/1">
                            <CustomButton
                                title="Đăng kí nhận lớp ngay"
                                icon={FaArrowRight}
                                color="secondary"
                                className="mt-2"
                            />
                        </Link>
                    </div>
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.3445306288277!2d105.74850312713554!3d20.962530488435032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2s!4v1722911677746!5m2!1svi!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"></iframe>
                    </div>
                </div>
                <div className="border-dashed border my-5 border-indigo-200"></div>
                <div className="py-2">
                    <h5 className="font-semibold">Các lớp tương tự:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div className="py-5">
                            <div className="w-full md:w-[300px] border border-gray-300">
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
                                    <Link to="/classList/1">
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
                        <div className="py-5">
                            <div className="w-full md:w-[300px] border border-gray-300">
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
                                    <Link to="/classList/1">
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

                <div className="border-dashed border my-5 border-indigo-200"></div>
                <div className="py-3 flex flex-col md:flex-row md:gap-32 gap-5">
                    <img src={ImgWhy} alt="why" className="object-cover w-[150px] h-[150px]" />
                    <div>
                        <h3>Nếu bạn chưa chắc chắn về việc nhận lớp này ?</h3>
                        <h6 className="py-5">
                            Hãy liên hệ với chúng tôi để được tư vấn thêm ! .Nhân viên hỗ trợ của
                            TutorMaster sẽ cung cấp thông tin chi tiết về lớp học và yêu cầu cụ thể
                            .
                        </h6>
                        <Link to={"/lien-he"}>
                            <CustomButton
                                title="Liên hệ ngay"
                                icon={FaArrowRight}
                                color="secondary"
                                className="mt-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ClassDetail;
