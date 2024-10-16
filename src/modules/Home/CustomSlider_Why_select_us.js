import React from "react";
import sliderSettings from "../../components/common/SliderSettings";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import Store_img1 from "../../assets/image/home-image/store_img.png";
import Concentrate_img from "../../assets/image/home-image/concentrate.jpg";
import Personer_custom from "../../assets/image/home-image/personer-custom.jpg";
import Quality_tutor from "../../assets/image/home-image/quality-tutor.jpg";
import Monitor from "../../assets/image/home-image/monitor.jpg";
import Reputation from "../../assets/image/home-image/reputation.png";
import Container from "../../components/common/Container";
import { Link } from "react-router-dom";

const CustomSliderWhySelectUs = () => {
  const articles = [
    {
      id: 1,
      slug: "tien-loi-va-thoai-mai",
      title: "Tiện lợi và thoải mái",
      image: Store_img1,
      content: `
                Chúng tôi cung cấp dịch vụ gia sư tại nhà, giúp bạn dễ dàng tiếp cận kiến thức ngay tại không gian quen thuộc của mình.
                Bạn có thể học tại nhà mà không cần di chuyển, tiết kiệm thời gian.
            `
    },
    {
      id: 2,
      slug: "tap-trung-cao-do",
      title: "Tập trung cao độ",
      image: Concentrate_img,
      content: `
                Với môi trường học tập tại nhà, bạn có thể tập trung hoàn toàn vào việc học mà không bị phân tán bởi những yếu tố ngoại vi.
                Gia sư sẽ đến tận nơi, tạo ra một không gian học tập yên tĩnh và chuyên sâu.
            `
    },
    {
      id: 3,
      slug: "tuy-chinh-ca-nhan-hoa",
      title: "Tùy chỉnh cá nhân hóa",
      image: Personer_custom,
      content: `
                Dịch vụ gia sư tại nhà của chúng tôi cho phép bạn tùy chỉnh lộ trình học tập theo sở thích và mục tiêu cá nhân.
                Bạn có thể chọn gia sư phù hợp với mình và xây dựng kế hoạch học tập linh hoạt.
            `
    },
    {
      id: 4,
      slug: "gia-su-chat-luong",
      title: "Gia sư chất lượng",
      image: Quality_tutor,
      content: `
                Đội ngũ gia sư của chúng tôi được chọn lọc kỹ càng, chuyên môn cao và kinh nghiệm giảng dạy rõ ràng.
                Chúng tôi chỉ hợp tác với những gia sư đã được kiểm tra về năng lực và đạo đức nghề nghiệp.
            `
    },
    {
      id: 5,
      slug: "su-giam-sat-va-danh-gia",
      title: "Sự giám sát và đánh giá",
      image: Monitor,
      content: `
                Chúng tôi cung cấp sự giám sát chặt chẽ và đánh giá thường xuyên để đảm bảo tiến độ học tập.
                Gia sư sẽ theo dõi quá trình học của bạn, đưa ra các đánh giá và điều chỉnh phương pháp giảng dạy.
            `
    },
    {
      id: 6,
      slug: "uy-tin-va-chat-luong",
      title: "Uy tín và chất lượng",
      image: Reputation,
      content: `
                Chúng tôi cam kết mang đến dịch vụ gia sư chất lượng nhất với uy tín đã được xây dựng qua thời gian.
                Bạn có thể hoàn toàn yên tâm khi lựa chọn dịch vụ của chúng tôi.
            `
    }
  ];

  // Mảng chứa các màu nền tương ứng với từng bài viết
  const backgroundColors = [
    'bg-red-300',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-400',
    'bg-orange-300'
  ];

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container className=" justify-center items-center">
      <div className="w-full">
        <Slider {...custom_sliderSettings_1}>
          {articles.map((article, index) => (
            <div key={article.id} className="border border-dashed border-blue-500 p-5 rounded-xl md:max-w-[300px] w-full mx-auto">
              <div className={`relative text-white rounded-lg h-full overflow-hidden ${backgroundColors[index % backgroundColors.length]}`}>
                <div className="flex justify-center box_slider_auto">
                  <img src={article.image} alt={article.title} className="item_slider_auto object-cover" />
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-[18px] text-center line-clamp-1">{article.title}</h5>
                  <h5 className="mt-4 mb-6 text-center line-clamp-6">{article.content}</h5>
                  <div className="text-center bg-color-orange flex items-center justify-center w-[150px] h-10 mx-auto rounded-full">
                    <Link
                      to={`/bai-viet/${article.slug}`}
                      className="text-white font-semibold text-[16px] rounded-full"
                    >
                      <h6>Xem chi tiết</h6>
                    </Link>
                    <FaArrowRight className="ml-2 text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default CustomSliderWhySelectUs;
