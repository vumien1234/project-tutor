import React from 'react';
import Slider from "react-slick";
import ImageTeacher from '../../assets/image/home-image/teacher.jpg';
import { FaStar } from "react-icons/fa";
import sliderSettings from '../../components/common/SliderSettings';
import Container from '../../components/common/Container';

const CustomSliderTeacher = () => {
  const settings = {
    ...sliderSettings,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <ul style={{ margin: "20px", padding: "0px", display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Container className="justify-center items-center">
      <div className="w-full mx-auto max-w-[800px]">
        <Slider {...settings}>
          <div className="text-center mx-auto mb-16 ">
            <p className='font-semibold md:text-xl text-[16px]'>Vũ Thị Miên</p>
            <img src={ImageTeacher} alt='ImageTeacher' className='w-[150px] h-[150px] rounded-full object-cover mx-auto my-5'/>
            <div className='flex justify-center'>
              <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' />
            </div>
            <h5 className="text-center mx-auto mt-4">
              Vũ Thị Miên tốt nghiệp xuất sắc từ Đại học Sư phạm Hà Nội, chuyên ngành Toán học. Với hơn 10 năm kinh nghiệm giảng dạy, cô Minh Anh sở hữu kiến thức chuyên môn sâu rộng và luôn cập nhật các phương pháp giảng dạy tiên tiến. Tận tâm và nhiệt huyết, cô đã giúp nhiều học viên đạt kết quả cao trong các kỳ thi.
            </h5>
          </div>
          <div className="text-center mx-auto mb-16">
            <h3 className='font-semibold md:text-xl text-[16px]'>Vũ Thị Miên</h3>
            <img src={ImageTeacher} alt='ImageTeacher' className='w-[150px] h-[150px] rounded-full object-cover mx-auto my-5'/>
            <div className='flex justify-center '>
              <FaStar className='star' /><FaStar className='star ' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' />
            </div>
            <h5 className="text-center mx-auto  mt-4">
              Vũ Thị Miên tốt nghiệp xuất sắc từ Đại học Sư phạm Hà Nội, chuyên ngành Toán học. Với hơn 10 năm kinh nghiệm giảng dạy, cô Minh Anh sở hữu kiến thức chuyên môn sâu rộng và luôn cập nhật các phương pháp giảng dạy tiên tiến. Tận tâm và nhiệt huyết, cô đã giúp nhiều học viên đạt kết quả cao trong các kỳ thi.
            </h5>
          </div>
        
        </Slider>
      </div>
    </Container>
  );
}

export default CustomSliderTeacher;
