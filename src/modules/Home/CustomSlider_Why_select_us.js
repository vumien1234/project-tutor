import React from 'react';
import sliderSettings from '../../components/common/SliderSettings';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import Store_img1 from '../../assets/image/home-image/store_img.png';
import Concentrate_img from '../../assets/image/home-image/concentrate.jpg';
import Personer_custom from '../../assets/image/home-image/personer-custom.jpg';
import Quality_tutor from '../../assets/image/home-image/quality-tutor.jpg';
import Monitor from '../../assets/image/home-image/monitor.jpg';
import Reputation from '../../assets/image/home-image/reputation.png';
import Container from '../../components/common/Container';

const CustomSliderWhySelectUs = () => {

  const custom_sliderSettings_1 = {
    ...sliderSettings,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <Container className=" justify-center items-center">
     <div className='w-full'>
          <Slider {...custom_sliderSettings_1}>
            <div className="border border-dashed border-blue-500 p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-blue-600 text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Store_img1} alt="Tiện lợi và thoải mái" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Tiện lợi và thoải mái</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Chúng tôi cung cấp dịch vụ gia sư tại nhà, giúp bạn dễ dàng tiếp cận kiến thức ngay tại không gian quen thuộc của mình. Bạn có thể học tại nhà mà không cần di chuyển, tiết kiệm thời gian.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border border-dashed border-[#786ACF] p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-[#786ACF] text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Concentrate_img} alt="Tập trung cao độ" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Tập trung cao độ</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Với môi trường học tập tại nhà, bạn có thể tập trung hoàn toàn vào việc học mà không bị phân tán bởi những yếu tố ngoại vi. Gia sư sẽ đến tận nơi, tạo ra một không gian học tập yên tĩnh và chuyên sâu.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border border-dashed border-[#AED139] p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-[#AED139] text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Personer_custom} alt="Tùy chỉnh cá nhân hóa" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Tùy chỉnh cá nhân hóa</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Dịch vụ gia sư tại nhà của chúng tôi cho phép bạn tùy chỉnh lộ trình học tập theo sở thích và mục tiêu cá nhân. Bạn có thể chọn gia sư phù hợp với mình và xây dựng kế hoạch học tập linh hoạt.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border border-dashed border-[#FBC730] p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-[#FBC730] text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Quality_tutor} alt="Gia sư chất lượng" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Gia sư chất lượng</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Đội ngũ gia sư của chúng tôi được chọn lọc kỹ càng, chuyên môn cao và kinh nghiệm giảng dạy rõ ràng. Chúng tôi chỉ hợp tác với những gia sư đã được kiểm tra về năng lực và đạo đức nghề nghiệp.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border border-dashed border-[#FE5A86] p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-[#FE5A86] text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Monitor} alt="Sự giám sát và đánh giá" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Sự giám sát và đánh giá</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Chúng tôi cung cấp sự giám sát chặt chẽ và đánh giá thường xuyên để đảm bảo tiến độ học tập. Gia sư sẽ theo dõi quá trình học của bạn, đưa ra các đánh giá và điều chỉnh phương pháp giảng dạy.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border border-dashed border-[#00b894] p-5 rounded-xl max-w-sm mx-auto">
              <div className="relative bg-[#00b894] text-white rounded-lg h-full">
                <div className="flex justify-center box_slider_auto">
                  <img src={Reputation} alt="Uy tín và chất lượng" className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center line-clamp-1">Uy tín và chất lượng</h3>
                  <p className="mt-4 mb-10 text-center line-clamp-6">
                    Chúng tôi cam kết mang đến dịch vụ gia sư chất lượng nhất với uy tín đã được xây dựng qua thời gian. Bạn có thể hoàn toàn yên tâm khi lựa chọn dịch vụ của chúng tôi.
                  </p>
                  <div className="text-center bg-color-orange flex items-center justify-center w-3/5 h-10 mx-auto rounded-full">
                    <a href="/" className="text-white font-semibold text-[16px] rounded-full">
                      Xem chi tiết
                    </a>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
     </div>
    </Container>
  );
};

export default CustomSliderWhySelectUs;
