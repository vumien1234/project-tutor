import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
  className="
    absolute top-1/2 right-[-30px] transform -translate-y-1/2
    cursor-pointer z-10 bg-black/20 rounded-full p-2
    w-10 h-10 md:flex justify-center items-center shadow-md hidden
  "
  onClick={onClick}
>
  <FaChevronRight className="text-white text-xl" />
</div>

);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
  className="
  absolute top-1/2 left-[-30px] transform -translate-y-1/2
  cursor-pointer z-10 bg-black/20 rounded-full p-2
  w-10 h-10 md:flex justify-center items-center shadow-md hidden
"
onClick={onClick}
  >
    <FaChevronLeft style={{ fontSize: "20px", color: "#fff" }} />
  </div>
);

// Định nghĩa các cài đặt của slider
export const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  customPaging: i => (
    <div
      className={`dot ${i === 0 ? 'slick-active' : ''}`}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 5px",
        backgroundColor: "white",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  )
};

export default sliderSettings;
