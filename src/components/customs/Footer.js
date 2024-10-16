import React from "react";
import Logo_web from "../../assets/image/logo-web.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Copyright_bg from "../../assets/image/copyright_bg.png";
import Container from "../common/Container";

const Footer = () => {
	return (
		<div className="bg-[#0f2239] text-white">
			<Container>
				<div className="py-10">
					<div className="flex items-center mb-10">
						<img
							src={Logo_web}
							alt="Logo"
							className="w-[70px] h-[70px] object-cover rounded-full"
						/>
						<p
							className="uppercase md:text-[32px] text-[18px] tracking-wide text-white font-bold ml-8">
							TutorMaster
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
						<div className="flex-1">
							<h4 className="uppercase font-semibold text-xl">THÔNG TIN LIÊN HỆ</h4>
							<div className="mt-7 flex items-center">
								<FaLocationDot className="w-[25px] h-[25px]" />
								<h5 className="ml-4">
									Trường đại học Phenikaa, Yên Nghĩa, Hà Đông, Hà Nội
								</h5>
							</div>
							<div className="mt-7 flex items-center">
								<FaPhone className="w-[25px] h-[25px]" />
								<h5 className="ml-4">041 111 2002</h5>
							</div>
							<div className="mt-7 flex items-center">
								<MdEmail className="w-[25px] h-[25px]" />
								<p className="ml-4">tutormaster@gmail.com</p>
							</div>
							<div className="mt-10 hidden md:block relative h-[300px] bg-gray-400">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7484136612293!2d105.74611147352138!3d20.962616190050518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2s!4v1721487500557!5m2!1svi!2s"
									title="Map showing the location of Phenikaa University"
									style={{ border: "0", width: "100%", height: "100%" }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
						<div className="flex-1">
							<h4 className="uppercase font-semibold text-xl">VỀ TUTORMASTER</h4>
							<p className="py-2 mt-5">
								<a href="/introduce">Giới thiệu</a>
							</p>
							<p className="py-2">
								<a href="/classes">Danh sách lớp</a>
							</p>
							<p className="py-2">
								<a href="/for-tutors">Dành cho gia sư</a>
							</p>
							<p className="py-2">
								<a href="/contact">Liên hệ</a>
							</p>
							<p className="py-2">
								<a href="/privacy-policy">Chính sách bảo mật</a>
							</p>
						</div>
						<div className="flex-1">
							<h4 className="uppercase font-semibold text-xl">KẾT NỐI VỚI CHÚNG TÔI</h4>
							<span className="block  mt-5">
								Chúng tôi rất mong muốn được nghe từ bạn! Hãy liên hệ với chúng tôi
								để chia sẻ ý kiến, câu hỏi hoặc bất kỳ yêu cầu nào bạn có.
							</span>
						</div>
					</div>
				</div>
			</Container>
			<div className="relative">
				<img src={Copyright_bg} alt="Background" className="w-full h-auto" />
				<h6 className="absolute inset-0 md:flex items-center justify-center text-white text-base  hidden">
					© 2024 TutorMaster. All rights reserved.
				</h6>
			</div>
		</div>
	);
};

export default Footer;
