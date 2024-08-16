import React from "react";
import Slider from "react-slick";
import sliderSettings from "../../components/common/SliderSettings";
import Parents_image from "../../assets/image/home-image/teacher.jpg";
import Container from "../../components/common/Container";

const CustomSliderReviewFeedBack = () => {
    const customSliderSettings = {
        ...sliderSettings,
        autoplay: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <Container className="justify-center items-center">
            <div className="slider-container mx-auto mb-5 w-full">
                <Slider {...customSliderSettings}>
                    <div>
                        <p>
                            "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
                            luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
                            tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
                            tạo nên một nền tảng tốt cho sự phát triển của con."
                        </p>
                        <div className="border border-dashed border-orange-300 my-6"></div>
                        <div className="flex">
                            <img
                                src={Parents_image}
                                alt="image-Parents"
                                className="w-[80px] h-[80px] rounded-md object-cover"
                            />
                            <div className="ml-5">
                                <p className="font-bold text-[#0F2239] text-2xl">Vũ Mộc Miên</p>
                                <span className="block mt-5 text-color-orange">Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
                            luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
                            tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
                            tạo nên một nền tảng tốt cho sự phát triển của con."
                        </p>
                        <div className="border border-dashed border-orange-300 my-6"></div>
                        <div className="flex">
                            <img
                                src={Parents_image}
                                alt="image-Parents"
                                className="w-[80px] h-[80px] rounded-md object-cover"
                            />
                            <div className="ml-5">
                                <p className="font-bold text-[#0F2239] text-2xl">Vũ Mộc Miên</p>
                                <span className="block mt-5 text-color-orange">Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
                            luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
                            tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
                            tạo nên một nền tảng tốt cho sự phát triển của con."
                        </p>
                        <div className="border border-dashed border-orange-300 my-6"></div>
                        <div className="flex">
                            <img
                                src={Parents_image}
                                alt="image-Parents"
                                className="w-[80px] h-[80px] rounded-md object-cover"
                            />
                            <div className="ml-5">
                                <p className="font-bold text-[#0F2239] text-2xl">Vũ Mộc Miên</p>
                                <span className="block mt-5 text-color-orange">Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
                            luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
                            tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
                            tạo nên một nền tảng tốt cho sự phát triển của con."
                        </p>
                        <div className="border border-dashed border-orange-300 my-6"></div>
                        <div className="flex">
                            <img
                                src={Parents_image}
                                alt="image-Parents"
                                className="w-[80px] h-[80px] rounded-md object-cover"
                            />
                            <div className="ml-5">
                                <p className="font-bold text-[#0F2239] text-2xl">Vũ Mộc Miên</p>
                                <span className="block mt-5 text-color-orange">Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
                            luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
                            tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
                            tạo nên một nền tảng tốt cho sự phát triển của con."
                        </p>
                        <div className="border border-dashed border-orange-300 my-6"></div>
                        <div className="flex">
                            <img
                                src={Parents_image}
                                alt="image-Parents"
                                className="w-[80px] h-[80px] rounded-md object-cover"
                            />
                            <div className="ml-5">
                                <p className="font-bold text-[#0F2239] text-2xl">Vũ Mộc Miên</p>
                                <span className="block mt-5 text-color-orange">Phụ huynh</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </Container>
    );
};

export default CustomSliderReviewFeedBack;
