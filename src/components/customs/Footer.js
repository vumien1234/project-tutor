import React from "react";
import Logo_web from "../../assets/image/TUTORMASTER.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Copyright_bg from "../../assets/image/copyright_bg.png";
import Container from "../common/Container";

const Footer = () => {
  return (
    <div className="bg-[#ddeafe] text-[#333]">
      <Container>
        <div className="py-5">
          <img src={Logo_web} alt="Logo" className="object-cover ml-[-12px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 md:gap-16">
            <div className="flex-1 space-y-2">
              <h5 className="uppercase font-semibold">thông tin liên hệ</h5>
               <div className="flex items-center">
                <FaLocationDot className="w-[20px] h-[20px]" />
                <h5 className="ml-4">Trường đại học Phenikaa, Yên Nghĩa, Hà Đông, Hà Nội</h5>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-[20px] h-[20px]" />
                <h5 className="ml-4">041 111 2002</h5>
              </div>
              <div className="flex items-center">
                <MdEmail className="w-[20px] h-[20px]" />
                <p className="ml-4">tutormaster@gmail.com</p>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <h5 className="uppercase font-semibold">VỀ TUTORMASTER</h5>
              <h5 className="mt-1">
                <a href="/introduce">Giới thiệu</a>
              </h5>
              <h5>
                <a href="/classes">Danh sách lớp</a>
              </h5>
              <h5>
                <a href="/for-tutors">Dành cho gia sư</a>
              </h5>
              <h5>
                <a href="/contact">Liên hệ</a>
              </h5>
              <h5>
                <a href="/privacy-policy">Chính sách bảo mật</a>
              </h5>
            </div>
            <div className="flex-1">
              <h5 className="uppercase font-semibold">KẾT NỐI VỚI CHÚNG TÔI</h5>
              <span className="block  mt-2">
                Chúng tôi rất mong muốn được nghe từ bạn! Hãy liên hệ với chúng tôi để chia sẻ ý kiến, câu hỏi hoặc bất
                kỳ yêu cầu nào bạn có.
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
