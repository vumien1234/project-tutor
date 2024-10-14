import React from "react";
import NavHome from "../../assets/image/home-image/nav-home.png";
import PatternNav from "../../assets/image/home-image/pattern.png";
import RainBow from "../../assets/image/home-image/rainbow.png";
import Image_1 from "../../assets/image/home-image/img-nav-home.png";
import CustomButton from "../../components/common/Button";
import { FaArrowRight } from "react-icons/fa6";
import CloudNav from "../../assets/image/home-image/shape_cloud.png";
import StarNav from "../../assets/image/home-image/star.png";
import StarNav_1 from "../../assets/image/home-image/star_1.png";
import StarNav_2 from "../../assets/image/home-image/start_2.png";
import Store_img from "../../assets/image/home-image/store_img.png";
import Bachelors_hats from "../../assets/image/home-image/bachelors_hat.png";
import Bee from "../../assets/image/home-image/bee.png";
import { ImCheckmark2 } from "react-icons/im";
import { FaBook } from "react-icons/fa";
import Cloud_laugh from "../../assets/image/home-image/laughing-cloud.png";
import Plane_img from "../../assets/image/home-image/plane.png";
import Girl_laugh from "../../assets/image/home-image/girl-laugh.png";
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import Flower from "../../assets/image/home-image/flower.png";
import { PiWechatLogoBold } from "react-icons/pi";
import CustomSliderTeacher from "./CustomSlider_teacher";
import CustomSliderReviewFeedBack from "./CustomSlider_review&feedBack";
import CustomSliderWhySelectUs from "./CustomSlider_Why_select_us";
import Container from "../../components/common/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full text-[18px]">
      {/* head-page-home */}
      <div className="relative" style={{ height: "900px" }}>
        <img src={NavHome} alt="bg-nav" className="w-full h-full object-cover" />
        <img src={PatternNav} alt="pattent-nav" className="absolute w-full bottom-0" />
        <img src={CloudNav} alt="cloud-nav" className="absolute right-[100px] top-0 z-10 animate-cloud" />
        <img src={CloudNav} alt="cloud-nav" className="absolute right-[350px] top-0 z-10 animate-cloud_1" />
        <img src={CloudNav} alt="cloud-nav" className="absolute right-[600px] top-0 z-10 animate-cloud_2" />
        <img src={StarNav} alt="star" className="absolute z-10 bottom-[100px] left-5 animate-star w-[50px] h-[50px]" />
        <img src={StarNav_1} alt="star" className="absolute z-10 top-[100px] left-24 animate-star w-[70px] h-[70px] " />
        <img
          src={StarNav_2}
          alt="star"
          className="absolute z-10 top-[200px] left-1/3 animate-star w-[100px] h-[100px] "
        />
        <div className="absolute top-0 w-full h-full">
          <Container>
            <div className="flex flex-col justify-start md:flex-row">
              {/* Content Section */}
              <div className="flex flex-col items-center md:items-start p-8 md:w-1/2">
                <img src={RainBow} alt="RainBow" className="object-cover mb-4" />
                <h6 className="p-2 uppercase bg-purple-500 text-white text-center py-2 font-bold rounded-md">
                  Chào mừng đến với TutorMaster
                </h6>

                <div className="pt-7">
                  <p className="text-[27px] text-[#333] font-bold">Đạt Được Mục Tiêu Học Tập Của Bạn</p>
                  <p className="text-[27px] text-color-orange font-bold">Với Đội Ngũ Gia Sư Chuyên Nghiệp</p>
                </div>
                <span className="block mt-5 text-[18px]">
                  TutorMaster là nền tảng giáo dục đổi mới, kết nối học viên với những gia sư chất lượng, mang lại trải
                  nghiệm học tập độc đáo và hiệu quả. Hãy cùng khám phá cách TutorMaster thay đổi cách bạn nhìn về học
                  tập và nâng cao thành tựu học thuật của bạn!
                </span>
                <div className="mt-10">
                  <Link to={"/danh-sach-lop"}>
                    <CustomButton title="Đăng kí thuê gia sư ngay" icon={FaArrowRight} color="secondary" />
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="hidden md:flex md:w-1/2 justify-center items-center p-8">
                <img src={Image_1} alt="image_1" className="object-cover w-full h-auto" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* story about us */}
      <Container>
        <div className="mt-5">
          <h3 className="text-color-purple italic tracking-wider">TutorMaster</h3>
          <div className="mt-3 flex flex-col md:flex-row md:justify-between md:gap-10">
            <div className="flex-1 md:w-5/12">
              <h5 className="font-semibold">Câu chuyện về chúng tôi</h5>
              <p className="mt-2">
                Câu chuyện của chúng tôi bắt đầu từ niềm tin vững chắc rằng mỗi học viên đều xứng đáng có cơ hội tiếp
                cận một môi trường học tập chất lượng, an toàn và đầy động lực. Từ niềm tin đó, chúng tôi đã tạo ra
                TutorMaster – một nền tảng gia sư trực tuyến như một ngôi nhà học tập thứ hai, nơi học viên có thể phát
                triển toàn diện và khám phá tiềm năng của mình. Chúng tôi không chỉ tập trung vào việc cung cấp kiến
                thức mà còn tạo ra một không gian học tập thân thiện và hỗ trợ, nơi mà học viên có thể tìm thấy sự cảm
                hứng và động lực để tiến bộ mỗi ngày. Với đội ngũ gia sư giàu kinh nghiệm và nhiệt huyết, chúng tôi cam
                kết đồng hành cùng học viên trên con đường học tập, giúp họ vượt qua khó khăn và đạt được những thành
                tựu đáng tự hào.
              </p>
              <div className="my-10 flex items-center">
                <ImCheckmark2 style={{ color: "green" }} className="text-green text-[22px] mr-5" />
                <p>Đội ngũ gia sư chuyên nghiệp</p>
              </div>
              <div className="my-10 flex items-center">
                <ImCheckmark2 style={{ color: "green" }} className="text-green text-[22px] mr-5" />
                <p>Phương pháp giảng dạy hiệu quả</p>
              </div>
              <div className="my-10 flex items-center">
                <ImCheckmark2 style={{ color: "green" }} className="text-green text-[22px] mr-5" />
                <p>Cam kết về kết quả học tập</p>
              </div>
              <div className="mt-14 flex flex-col sm:flex-row gap-5">
                <CustomButton title="Đăng kí thuê gia sư ngay" icon={FaArrowRight} color="secondary" />
                <CustomButton title="Tìm hiểu thêm" icon={FaArrowRight} color="primary1" />
              </div>
            </div>
            <div className="flex-1 md:w-7/12 mt-16 md:mt-0">
              <img className="w-full h-full object-cover" src={Store_img} alt="store_img" />
            </div>
          </div>
        </div>
      </Container>
      {/*join team tutor */}
      <Container>
        <div className="mt-14 flex flex-col md:flex-row">
          <div className="flex-1 md:w-5/12">
            <img className="w-full pl-14 object-cover" src={Bachelors_hats} alt="store_img" />
          </div>
          <div className="flex-1 md:w-7/12 ml-0 md:ml-20 relative">
            <img
              style={{ marginTop: "-3rem" }}
              src={Bee}
              className="w-[120px] h-[120px] absolute right-5 object-cover"
              alt=""
            />
            <h3 className="font-bold mt-5 md:mt-0">Gia nhập đội ngũ gia sư của TutorMaster</h3>
            <span className="block mt-5">
              TutorMaster không chỉ là một nền tảng giáo dục trực tuyến thông thường, mà còn là cơ hội tuyệt vời cho bạn
              phát triển bản thân, chia sẻ kiến thức và kiếm thu nhập từ kỹ năng giảng dạy của bạn. Bất kể bạn là giáo
              viên chuyên nghiệp, sinh viên hoặc ai đó đam mê truyền đạt kiến thức, chúng tôi chào đón tất cả những ai
              muốn chia sẻ và học hỏi.
              <br />
              <br />
              Gia nhập vào đội ngũ gia sư của chúng tôi không chỉ mang lại thu nhập thêm mà còn là cơ hội phát triển kỹ
              năng giảng dạy và xây dựng mối quan hệ với các học sinh trên toàn thế giới. Bạn sẽ có cơ hội tiếp cận một
              lượng lớn học sinh từ nhiều nền văn hóa khác nhau, điều này không chỉ giúp bạn nâng cao kỹ năng giảng dạy
              mà còn mở rộng hiểu biết về các phong cách học tập đa dạng.
              <br />
              <br />
              Tại TutorMaster, chúng tôi tin rằng giáo dục là nền tảng của sự phát triển cá nhân và xã hội. Chúng tôi
              cam kết mang đến một môi trường học tập tích cực và sáng tạo, nơi mà mỗi gia sư đều có thể phát triển toàn
              diện và học sinh có thể đạt được tiềm năng tối đa của mình. Chúng tôi cung cấp các công cụ và tài nguyên
              hỗ trợ giảng dạy, giúp bạn dễ dàng quản lý lớp học và tương tác hiệu quả với học sinh.
              <br />
              <br />
              Hãy đăng ký ngay hôm nay và khám phá cơ hội không giới hạn mà TutorMaster mang lại cho bạn! Chúng tôi rất
              mong được chào đón bạn vào đội ngũ gia sư tài năng và nhiệt huyết của chúng tôi, cùng nhau xây dựng một
              tương lai giáo dục tốt đẹp hơn.
            </span>
            <div className="mt-10">
              <CustomButton title="Đăng kí thuê gia sư ngay" icon={FaArrowRight} color="secondary" />
            </div>
          </div>
        </div>
      </Container>

      {/* slider auto */}
      <div className="mt-10 py-10 w-full bg-[#ffcccc] bg-opacity-40">
        <h3 className="mx-auto text-center">Tại sao bạn nên lựa chọn chúng tôi ?</h3>
        <div>
          <div className="underline mx-auto"></div>
          <div className="underline_1 mx-auto"></div>
          <div className="my-14 w-full">
            <CustomSliderWhySelectUs />
          </div>
        </div>
      </div>
      {/* supply environment */}
      <Container>
        <div className="mt-12 relative">
          <img
            className="animation_img absolute w-[120px] h-[120px] object-cover left-24 hidden md:block"
            src={Cloud_laugh}
            alt=""
          />
          <img
            style={{ marginTop: "-100px" }}
            className="animation_img absolute w-[230px] h-[140px] object-cover right-7 hidden md:block"
            src={Plane_img}
            alt=""
          />
          <div className="flex items-center justify-center">
            <FaBook className="text-color-purple" />
            <h6 className="text-color-purple text-[22px] font-semibold pl-2">Môi trường cung cấp</h6>
          </div>
          <h3 className="mx-auto text-center">Quy trình làm việc của gia sư</h3>
          <div className="mt-5">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 md:w-4/12">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 text-[25px] mr-3" />
                  <p className="uppercase text-[#118407] font-bold text-[22px]">tiếp nhận và tạo quan hệ</p>
                </div>
                <span className="block mt-3 ml-5">
                  Khi nhận yêu cầu từ học viên hoặc phụ huynh, TutorMaster sẽ bắt đầu tư vấn chi tiết về các dịch vụ.
                  Chúng tôi lắng nghe kỹ lưỡng để hiểu rõ mong muốn và yêu cầu của từng học viên. Trong giai đoạn tư
                  vấn, chúng tôi cung cấp thông tin về khóa học, phương pháp giảng dạy, và lợi ích khi tham gia học tại
                  TutorMaster. Chúng tôi cũng trả lời mọi câu hỏi để đảm bảo phụ huynh và học viên yên tâm và tin tưởng
                  vào dịch vụ của chúng tôi.
                </span>
                <div className="mt-8">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-[25px] mr-3" />
                    <p className="uppercase text-[#118407] font-bold text-[22px]">lên kế hoạch học tập</p>
                  </div>
                  <span className="block mt-3 ml-5">
                    Gia sư và học viên sẽ thảo luận để lập kế hoạch học tập chi tiết. Kế hoạch này bao gồm các mục tiêu
                    cụ thể, phương pháp học tập, và lịch trình rõ ràng. Mục tiêu là đáp ứng nhu cầu cá nhân và mục tiêu
                    học tập của học viên, đảm bảo mọi khía cạnh học tập được xem xét và tối ưu hóa. Kế hoạch học tập sẽ
                    được điều chỉnh linh hoạt theo tiến bộ của học viên. Bằng cách này, học viên sẽ có lộ trình học tập
                    rõ ràng và hiệu quả, đạt được kết quả tốt nhất.
                  </span>
                </div>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center">
                <img src={Girl_laugh} alt="Girl_laugh" />
              </div>
              <div className="flex-1 md:w-4/12">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 text-[25px] mr-3" />
                  <p className="uppercase text-[#118407] font-bold text-[22px]">hướng dẫn và hỗ trợ</p>
                </div>
                <span className="block mt-3 ml-5">
                  Gia sư sẽ tiến hành các buổi học theo kế hoạch đã đề ra, cung cấp hướng dẫn chi tiết và hỗ trợ học
                  viên trong quá trình học tập. Gia sư cũng sẽ giao bài tập về nhà và cung cấp tài liệu học tập cần
                  thiết để đảm bảo học viên nắm vững kiến thức. Ngoài ra, gia sư sẽ luôn sẵn sàng giải đáp thắc mắc và
                  hỗ trợ kịp thời, giúp học viên vượt qua khó khăn trong học tập. Điều này đảm bảo học viên có một môi
                  trường học tập liên tục và hiệu quả.
                </span>
                <div className="mt-8">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-[25px] mr-3" />
                    <p className="uppercase text-[#118407] font-bold text-[22px]">theo dõi và đánh giá</p>
                  </div>
                  <span className="block mt-3 ml-5">
                    Gia sư sẽ cập nhật điểm số và tiến độ học tập của học viên lên hệ thống quản lý sau mỗi buổi học.
                    TutorMaster cam kết thường xuyên theo dõi và đánh giá kết quả học tập của học viên, đồng thời cung
                    cấp phản hồi và đề xuất cải tiến nếu cần thiết. Phụ huynh sẽ được thông báo về tình hình học tập của
                    con em mình một cách chi tiết và kịp thời, giúp họ hoàn toàn yên tâm về sự phát triển của học viên
                    tại TutorMaster.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Outstanding teacher */}
      <div className="mt-12 relative bg-[#FFDFD7] py-10">
        <img style={{ top: "-150px", left: "-105px" }} src={Flower} alt="Flower" className="absolute hidden md:block" />
        <div className="flex items-center justify-center">
          <FaGraduationCap className="text-color-purple text-[30px]" />{" "}
          <h6 className="text-color-purple text-[22px] font-semibold pl-3">Đội ngũ gia sư</h6>
        </div>
        <div>
          <h3 className="text-center mb-5 mt-2">Gia sư chuyên nghiệp</h3>
          <CustomSliderTeacher />
        </div>
      </div>
      {/* reviews and feedback */}
      <>
        <div className="my-12">
          <div className="flex items-center justify-center">
            <PiWechatLogoBold className="text-color-purple text-[30px]" />{" "}
            <h6 className="text-color-purple text-[22px] font-semibold pl-3">Đánh giá tổng quan</h6>
          </div>
          <div>
            <h3 className="text-center mt-2">Phản hồi từ phụ huynh</h3>
            <div className="mt-10 relative">
              <CustomSliderReviewFeedBack />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
