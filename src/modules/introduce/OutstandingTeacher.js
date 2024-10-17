import React from "react";
import Slider from "react-slick";
import sliderSettings from "../../components/common/SliderSettings";
import Teacher from "../../assets/image/home-image/teacher.jpg";
import Container from "../../components/common/Container";

const OutstandingTeacher = () => {
	const settings = {
		...sliderSettings,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		nextArrow: false,
		prevArrow: false,
		appendDots: (dots) => (
			<div>
				<ul style={{ padding: "0px", display: "flex", justifyContent: "center" }}>
					{dots}
				</ul>
			</div>
		),
		responsive: [
			{
				breakpoint: 1480,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	};

	return (
		<Container className="flex justify-center py-5 items-center">
			<Slider {...settings} className="w-full">
				{[...Array(6)].map((_, index) => (
					<div key={index} className="flex justify-center items-center">
						<div className="text-center py-5">
							<img
								src={Teacher}
								alt="Teacher"
								className="w-[180px] h-[180px] rounded-full object-cover mx-auto"
							/>
							<h4 className="pt-3">Vũ Mộc Miên</h4>
							<h5 className="text-color-orange font-semibold">Giáo viên</h5>
						</div>
					</div>
				))}
			</Slider>
		</Container>
	);
};

export default OutstandingTeacher;
