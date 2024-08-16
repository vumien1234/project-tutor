import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "-30px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: '50%',
      padding: '10px',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    <FaChevronRight style={{ fontSize: "20px", color: "#fff" }} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "-30px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: '50%',
      padding: '10px',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}
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
