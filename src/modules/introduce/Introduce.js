import React from "react";
import Ellipse from "../../assets/image/introduce-image/Ellipse.png";
import LightBulb from "../../assets/image/introduce-image/light bulb.png";
import ImgTeacher from "../../assets/image/introduce-image/snapedit.png";
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
			<div className="bg-[#DDEAFE] relative overflow-hidden " style={{ height: "640px" }}>
				<img
					src={Ellipse}
					alt="Ellipse"
					className="object-cover w-[170px] h-[150px] rounded-full Ellipse absolute"
				/>
			<Container className="py-12">
        <div className="flex w-full flex-col md:flex-row mx-auto">
          {/* Phần nội dung chính */}
          <div className="flex-1 flex flex-col justify-center md:pr-10">
            <div className="relative">
              <div className="flex items-center space-x-4 mt-4 z-10">
                <img src={LightBulb} alt="Light Bulb" className="w-10 h-12" />
                <p className="text-[#0F2239] uppercase text-2xl font-semibold">
                  khám phá tri thức mới
                </p>
              </div>
              <div>
              <p className="text-4xl text-color-orange font-bold pt-5">
                Biến mỗi buổi học <br /> thành bước tiến cùng TutorMaster!
              </p>


                <p className="block text-[#0F2239] mt-3 text-2xl">
                Cùng nhau xây dựng một tương lai tươi sáng, <br /> phát triển tri thức, khám phá tiềm năng và chinh phục mục tiêu với TutorMaster!
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-8">
                <div className="flex items-center">
                  <IoMdCheckmarkCircle className="text-color-orange text-2xl" />
                  <h5 className="block pl-3 ">
                    Được tin tưởng hàng đầu
                  </h5>
                </div>
                <div className="flex items-center">
                  <IoMdCheckmarkCircle className="text-color-purple text-2xl" />
                  <h5 className="block pl-3 ">Gia sư xuất sắc</h5>
                </div>
                <div className="flex items-center">
                  <IoMdCheckmarkCircle className="text-[#0F2239] text-2xl" />
                  <h5 className="block pl-3 ">Cam kết tiến bộ</h5>
                </div>
              </div>
              <div className="mt-10 flex flex-col md:flex-row items-start gap-4">
              <a href="/danh-sach-lop">
                  <CustomButton className="bg-color-orange">
                    Đăng kí thuê gia sư ngay <FaArrowRight className="ml-3" />
                  </CustomButton>
              </a>
                <a href="/lien-he">
                  <CustomButton className="button-purple-color bg-color-purple">
                    Liên hệ <FaArrowRight className="ml-3" />
                  </CustomButton>
                </a>
              </div>
            </div>
          </div>
          {/* Phần hình ảnh và số liệu */}
          <div className="hidden md:flex flex-col items-end relative w-full md:w-[50%]">
            <div className="absolute top-[-4rem] right-[-8rem]">
              <img
                src={Rainbow}
                alt="Rainbow"
                className="w-[170px] h-[170px] object-cover mt-5 hidden md:block"
              />
            </div>
            <img
              src={ImgTeacher}
              alt="ImgTeacher"
              className="object-cover absolute top-0 w-[75%] left-10"
            />
            <div className="absolute top-[70%] right-0 mb-4 animate_number_student">
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
            <div className="absolute top-[95%] left-0 animate_number_tutor">
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
						style={{ marginTop: "50px", right: "0rem" }}
						src={Ellipse_1}
						alt="Ellipse_1"
						className="object-cover absolute w-[200px] h-[200px] Ellipse"
					/>
				</div>
			</div>

			{/* Giới Thiệu Về chúng tôi*/}
			<Container className="py-12">
				<div className="text-center">
					<h4 className="font-bold text-color-purple  uppercase mt-2">Về chúng tôi</h4>
					<div className="mt-8">
						<div className="flex flex-col md:flex-row md:space-x-7">
							{Introduce_Our.map((item, index) => (
								<div
									key={index}
									className="border border-orange-400 flex-1 p-5 shadow-lg rounded-md mb-5 md:mb-0">
									<div className="w-[150px] h-[150px] bg-color-orange flex items-center justify-center mx-auto rounded-full shadow-md">
										<img
											src={images[index]}
											alt="introduce_image"
											className="w-[120px] h-[120px] object-cover rounded-full"
										/>
									</div>
									<div className="mt-4 text-center">
										<h4 className="font-semibold py-2">{item.title}</h4>
										<h5>{item.script}</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>

			<Container className="pb-12">
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
			<div className="bg-pink-100 ">
				<div className="py-10">
					<div className="text-center">
						<h4 className="font-bold uppercase text-color-purple">Gặp gỡ những giáo viên chuyên nghiệp</h4>
					</div>
					<OutstandingTeacher />
				</div>
			</div>

			{/* mission */}
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
            <h4 className="text-left mb-3 font-semibold">Sứ mệnh</h4>
							<h5 className="mb-4">
								Sứ mệnh của chúng tôi là nâng cao chất lượng giáo dục và tạo ra cơ
								hội học tập công bằng cho mọi người. Chúng tôi tin rằng mỗi cá nhân
								đều có tiềm năng vô hạn và quyền được tiếp cận vào kiến thức và kỹ
								năng để phát triển bản thân.
							</h5>
							<h4 className="font-semibold">
								Bằng việc cung cấp dịch vụ gia sư chất lượng, chúng tôi cam kết:
							</h4>
							<div className="flex flex-col mt-5 space-y-4">
								{Missions.map((line, i) => (
									<div className="flex items-start" key={i}>
										<IoCheckmarkDoneSharp className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
										<h5>{line.content}</h5>
									</div>
								))}
							</div>
						</div>
					</div>
				</Container>

			{/* Question and answer */}
				<Container>
					<div className="border border-gray-200 shadow-lg p-5 rounded-lg mb-10">
						<img src={Question} alt="Question" className="object-cover py-5" />
						<div className="px-5 pt-5">
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
						<div className="p-5">
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
	
		</>
	);
};

export default Introduce;
