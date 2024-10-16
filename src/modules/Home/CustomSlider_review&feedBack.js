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
						<h5>
							"Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
							luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
							tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
							tạo nên một nền tảng tốt cho sự phát triển của con."
						</h5>
						<div className="border border-dashed border-orange-300 my-6"></div>
						<div className="flex">
							<img
								src={Parents_image}
								alt="image-Parents"
								className="w-[80px] h-[80px] rounded-md object-cover"
							/>
							<div className="ml-5 my-auto">
								<p className="font-bold md:text-xl text-[16px] text-[#0F2239]">Vũ Mộc Miên</p>
								<p className="md:text-lg text-[14px] text-color-orange">Phụ huynh</p>
							</div>
						</div>
					</div>
          <div>
						<h5>
							"Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
							luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
							tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
							tạo nên một nền tảng tốt cho sự phát triển của con."
						</h5>
						<div className="border border-dashed border-orange-300 my-6"></div>
						<div className="flex">
							<img
								src={Parents_image}
								alt="image-Parents"
								className="w-[80px] h-[80px] rounded-md object-cover"
							/>
							<div className="ml-5 my-auto">
								<p className="font-bold md:text-xl text-[16px] text-[#0F2239]">Vũ Mộc Miên</p>
								<p className="md:text-lg text-[14px] text-color-orange">Phụ huynh</p>
							</div>
						</div>
					</div>
          <div>
						<h5>
							"Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
							luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
							tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
							tạo nên một nền tảng tốt cho sự phát triển của con."
						</h5>
						<div className="border border-dashed border-orange-300 my-6"></div>
						<div className="flex">
							<img
								src={Parents_image}
								alt="image-Parents"
								className="w-[80px] h-[80px] rounded-md object-cover"
							/>
							<div className="ml-5 my-auto">
								<p className="font-bold md:text-xl text-[16px] text-[#0F2239]">Vũ Mộc Miên</p>
								<p className="md:text-lg text-[14px] text-color-orange">Phụ huynh</p>
							</div>
						</div>
					</div>
          <div>
						<h5>
							"Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
							luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
							tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
							tạo nên một nền tảng tốt cho sự phát triển của con."
						</h5>
						<div className="border border-dashed border-orange-300 my-6"></div>
						<div className="flex">
							<img
								src={Parents_image}
								alt="image-Parents"
								className="w-[80px] h-[80px] rounded-md object-cover"
							/>
							<div className="ml-5 my-auto">
								<p className="font-bold md:text-xl text-[16px] text-[#0F2239]">Vũ Mộc Miên</p>
								<p className="md:text-lg text-[14px] text-color-orange">Phụ huynh</p>
							</div>
						</div>
					</div>
          <div>
						<h5>
							"Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên
							luôn tạo môi trường yêu thương và hỗ trợ con tôi trong quá trình học
							tập. Chúng tôi cảm nhận được sự tiến bộ của con và thấy rằng trường đã
							tạo nên một nền tảng tốt cho sự phát triển của con."
						</h5>
						<div className="border border-dashed border-orange-300 my-6"></div>
						<div className="flex">
							<img
								src={Parents_image}
								alt="image-Parents"
								className="w-[80px] h-[80px] rounded-md object-cover"
							/>
							<div className="ml-5 my-auto">
								<p className="font-bold md:text-xl text-[16px] text-[#0F2239]">Vũ Mộc Miên</p>
								<p className="md:text-lg text-[14px] text-color-orange">Phụ huynh</p>
							</div>
						</div>
					</div>
				
				</Slider>
			</div>
		</Container>
	);
};

export default CustomSliderReviewFeedBack;
