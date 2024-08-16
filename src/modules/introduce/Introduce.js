import React from "react";
import Ellipse from "../../assets/image/introduce-image/Ellipse.png";
import LightBulb from "../../assets/image/introduce-image/light bulb.png";
import ImgTeacher from "../../assets/image/introduce-image/image-teacher.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa6";
import Rainbow from "../../assets/image/introduce-image/rainbow.png";
import Ellipse_1 from "../../assets/image/introduce-image/shape_2.png";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import Quality_tutor from "../../assets/image/introduce-image/quality_tutor.png";
import Method_tutor from "../../assets/image/introduce-image/method.png";
import Result_tutor from "../../assets/image/introduce-image/result.png";
import { Commit, Introduce_Our, Missions } from "../../components/constants/data";
import Good_price from "../../assets/image/introduce-image/good_price.png";
import Dedicated_advice from "../../assets/image/introduce-image/dedicated_advice.png";
import Reputable_service from "../../assets/image/introduce-image/reputable_service.png";
import Quality_guaranteed from "../../assets/image/introduce-image/quality_guaranteed.png";
import Mission from "../../assets/image/introduce-image/mission.jpg";
import Question from "../../assets/image/introduce-image/img-question.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuCornerUpRight } from "react-icons/lu";
import Container from "../../components/common/Container";
import OutstandingTeacher from "./OutstandingTeacher";

const images = [Quality_tutor, Method_tutor, Result_tutor];
const imagesCommit = [Good_price, Dedicated_advice, Reputable_service, Quality_guaranteed];

const Introduce = () => {
    return (
        <>
            <div className="bg-[#DDEAFE] relative overflow-hidden ">
                <img
                    src={Ellipse}
                    alt="Ellipse"
                    className="object-cover w-[170px] h-[150px] rounded-full Ellipse absolute"
                />
                <Container className="py-12">
                    <div className="flex flex-col md:flex-row mx-auto">
                        {/* Phần nội dung chính */}
                        <div className="flex-1 flex flex-col justify-center md:pr-10 ">
                            <div className="relative">
                                <div className="flex items-center space-x-4 mt-4 z-10">
                                    <img src={LightBulb} alt="Light Bulb" className="w-10 h-12" />
                                    <p className="text-[#0F2239] uppercase text-2xl font-semibold">
                                        khám phá tri thức mới
                                    </p>
                                </div>
                                <div className="mt-5 md:ml-14">
                                    <p className="text-5xl text-color-orange font-bold pt-5">
                                        Biến từng buổi học
                                    </p>
                                    <span className="block text-[#0F2239] mt-7 text-5xl">
                                        Một hành trình khám phá thú vị cùng TutorMaster!
                                    </span>
                                </div>
                                <div className="mt-10 flex flex-wrap items-center gap-8">
                                    <div className="flex items-center">
                                        <IoMdCheckmarkCircle className="text-color-orange text-2xl" />
                                        <span className="block pl-3 text-2xl">
                                            Được tin tưởng hàng đầu
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <IoMdCheckmarkCircle className="text-color-purple text-2xl" />
                                        <span className="block pl-3 text-2xl">Gia sư xuất sắc</span>
                                    </div>
                                    <div className="flex items-center">
                                        <IoMdCheckmarkCircle className="text-[#0F2239] text-2xl" />
                                        <span className="block pl-3 text-2xl">Cam kết tiến bộ</span>
                                    </div>
                                </div>
                                <div className="mt-10 flex flex-col md:flex-row items-start gap-4">
                                    <CustomButton className="bg-color-orange">
                                        Đăng kí thuê gia sư ngay <FaArrowRight className="ml-3" />
                                    </CustomButton>
                                    <CustomButton className="button-purple-color bg-color-purple">
                                        Liên hệ <FaArrowRight className="ml-3" />
                                    </CustomButton>
                                    <img
                                        src={Rainbow}
                                        alt="Rainbow"
                                        className="w-[170px] h-[170px] object-cover mt-5 hidden md:block"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Phần hình ảnh và số liệu */}
                        <div className="hidden md:flex flex-col items-end relative w-full md:w-1/3">
                            <img
                                src={ImgTeacher}
                                alt="ImgTeacher"
                                className="absolute top-[-5rem] right-0"
                            />
                            <div className="absolute top-[60%] right-0 mb-4 animate_number_student">
                                <div className="bg-white border-2 border-orange-500 w-[200px] h-[70px] rounded-full flex items-center p-2">
                                    <div className="flex items-center">
                                        <div className="w-[55px] h-[55px] bg-color-orange rounded-full flex items-center justify-center">
                                            <MdOutlinePersonAddAlt className="text-3xl text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-color-orange text-2xl font-semibold">
                                                16.500 +
                                            </p>
                                            <span className="block text-sm">Học sinh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[75%] left-0 animate_number_tutor">
                                <div className="bg-white border-2 border-color-purple w-[200px] h-[70px] rounded-full flex items-center p-2">
                                    <div className="flex items-center">
                                        <div className="w-[55px] h-[55px] bg-color-purple rounded-full flex items-center justify-center">
                                            <MdOutlinePersonAddAlt className="text-3xl text-white" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-color-purple text-2xl font-semibold">
                                                16.500 +
                                            </p>
                                            <span className="block text-sm">Gia sư</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="ripple-container">
                    <span className="ripple ripple-1"></span>
                    <span className="ripple ripple-2"></span>
                    <span className="ripple ripple-3"></span>
                    <span className="ripple ripple-4"></span>
                    <img
                        style={{ marginBottom: "-120px", marginLeft: "20rem" }}
                        src={Ellipse_1}
                        alt="Ellipse_1"
                        className="object-cover w-[200px] h-[200px] Ellipse"
                    />
                </div>
            </div>
            {/* Giới Thiệu Về chúng tôi*/}
            <Container className="py-12">
                <div className="text-center">
                    <h6 className="pl-2 font-semibold text-color-purple">Giới Thiệu</h6>
                    <h4 className="text-2xl font-bold mt-2">Về chúng tôi</h4>
                    <div className="mt-20">
                        <div className="flex flex-col md:flex-row md:space-x-7">
                            {Introduce_Our.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-orange-400 flex-1 p-8 shadow-lg rounded-md mb-8 md:mb-0">
                                    <div className="w-[170px] h-[170px] bg-color-orange flex items-center justify-center mx-auto rounded-full shadow-md">
                                        <img
                                            src={images[index]}
                                            alt="introduce_image"
                                            className="w-[140px] h-[140px] object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-xl font-semibold py-2">{item.title}</h3>
                                        <h5 className="text-lg">{item.script}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Commit.map((data, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 p-4 h-auto border border-gray-200 rounded-lg shadow-md">
                            <img
                                src={imagesCommit[idx]}
                                alt={data.title}
                                className="w-[120px] h-[120px] object-contain mb-4 md:mb-0"
                            />
                            <div className="flex-1">
                                <h4 className="uppercase text-green-600 font-bold text-lg">
                                    {data.title}
                                </h4>
                                <h5 className="mt-3 text-gray-700">{data.script}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* teacher_team */}
            <div className="bg-pink-100 mt-10">
                <div className="py-12">
                    <div className="text-center">
                        <h6 className="text-color-purple font-semibold">Đội ngũ giáo viên</h6>
                        <h4>Gặp gỡ những giáo viên chuyên nghiệp</h4>
                    </div>
                    <OutstandingTeacher />
                </div>
            </div>

            {/* mission */}
            <div className="py-12">
                <h4 className="text-center text-2xl font-bold">Sứ mệnh</h4>
                <Container>
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 py-12 relative h-auto md:h-[500px]">
                        <div className="w-full md:w-1/3 relative h-[300px] md:h-full">
                            <img
                                src={Mission}
                                alt="Mission"
                                className="object-cover w-full h-full rounded-md shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col px-4 md:px-8">
                            <h5 className="text-lg md:text-xl mb-4">
                                Sứ mệnh của chúng tôi là nâng cao chất lượng giáo dục và tạo ra cơ
                                hội học tập công bằng cho mọi người. Chúng tôi tin rằng mỗi cá nhân
                                đều có tiềm năng vô hạn và quyền được tiếp cận vào kiến thức và kỹ
                                năng để phát triển bản thân.
                            </h5>
                            <h5 className="text-lg md:text-xl mt-5 font-semibold">
                                Bằng việc cung cấp dịch vụ gia sư chất lượng, chúng tôi cam kết:
                            </h5>
                            <div className="flex flex-col mt-5 space-y-4">
                                {Missions.map((line, i) => (
                                    <div className="flex items-start" key={i}>
                                        <IoCheckmarkDoneSharp className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
                                        <h5 className="text-lg">{line.content}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Question and answer */}
            <div className="bg-purple-100">
                <Container>
                    <div className="py-12">
                        <h4 className="fontText text-center">Câu hỏi và trả lời</h4>
                        <img src={Question} alt="Question" className="object-cover py-5" />
                        <div className="pt-5">
                            <h5>1.Làm thế nào để đăng ký tìm gia sư ?</h5>
                            <div className="flex items-center py-3">
                                <LuCornerUpRight className="text-color-orange w-[30px] h-[30px] mr-5" />
                                <h5>
                                    Bạn có thể đăng ký tìm gia sư bằng cách điền vào biểu mẫu trên
                                    trang web của chúng tôi hoặc gọi điện trực tiếp đến số hotline
                                    để được tư vấn và hướng dẫn chi tiết.
                                </h5>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h5>2.Làm thế nào để đăng ký tìm gia sư ?</h5>
                            <div className="flex items-center py-3">
                                <LuCornerUpRight className="text-color-orange w-[30px] h-[30px] mr-5" />
                                <h5>
                                    Bạn có thể đăng ký tìm gia sư bằng cách điền vào biểu mẫu trên
                                    trang web của chúng tôi hoặc gọi điện trực tiếp đến số hotline
                                    để được tư vấn và hướng dẫn chi tiết.
                                </h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Introduce;
