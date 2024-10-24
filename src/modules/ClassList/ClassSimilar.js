import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiBookLine } from "react-icons/ri";
import { IoLocationSharp, IoTime, IoPerson } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { CiCalendar, CiBookmark } from "react-icons/ci";
import CustomButton from "../../components/common/Button";

const ClassListSlider = ({ classList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1); 
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex < classList.length - slidesToShow ? prevIndex + 1 : 0)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex > 0 ? prevIndex - 1 : classList.length - slidesToShow)
    );
  };

  const getSlideWidth = () => {
    const slideWidth = 295 + 16;
    return slideWidth; 
  };

  return (
    <div className="py-2">
      <h4 className="font-semibold mb-6">Các lớp tương tự</h4>
      {classList && classList.length > 0 ? (
        <div className="relative overflow-hidden">
          <div
            className="relative flex transition-transform duration-500 ease-in-out gap-4 mb-5"
            style={{
              transform: `translateX(-${currentIndex * getSlideWidth()}px)`,
              width: `${classList.length * getSlideWidth()}px`
            }}
          >
            {classList.map((item, index) => (
              <div className="border border-gray-300 w-[295px]" key={index}>
                <div className="bg-blue-800 p-4">
                  <h6 className="font-semibold text-white">{item.id}</h6>
                </div>
                <div className="p-4 space-y-4">
                  {[
                    { icon: <RiBookLine />, label: `Môn học: ${item.subject}` },
                    { icon: <IoPerson />, label: `Giáo viên: ${item.username}` },
                    { icon: <IoLocationSharp />, label: `Địa điểm: ${item.address}` },
                    { icon: <MdAttachMoney />, label: `Giá: ${item.total_price}` },
                    { icon: <IoTime />, label: `Thời gian: ${item.time}` },
                    { icon: <CiCalendar />, label: `Ngày đến hạn: ${item.due_date}` },
                    { icon: <CiBookmark />, label: `Ghi chú: ${item.note}` }
                  ].map(({ icon, label }, idx) => (
                    <div className="flex items-center" key={idx}>
                      <div className="w-[30px]">{icon}</div>
                      <h6 className="font-semibold">{label}</h6>
                    </div>
                  ))}
                  <Link to={`/danh-sach-lop/${item.id}`}>
                    <div className="pt-5">
                      <CustomButton color="primary" title="Xem chi tiết" icon={FaArrowRight} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Previous slide"
            className="absolute left-[-20px] flex items-center justify-center top-1/2 z-10 ml-[23px] w-[50px] h-[50px] -translate-y-1/2 transform rounded-full bg-gray-200 p-2 opacity-80 shadow-lg"
            onClick={prevSlide}
            type="button"
          >
            <svg fill="none" height="20" style={{ fill: "#000" }} viewBox="0 0 20 20" width="20">
              <path
                d="M5.02767 9.02755C4.77422 9.28108 4.63184 9.6249 4.63184 9.98339C4.63184 10.3419 4.77422 10.6857 5.02767 10.9392L12.6757 18.5873C12.8004 18.7164 12.9496 18.8194 13.1146 18.8902C13.2795 18.9611 13.4569 18.9984 13.6364 18.9999C13.8159 19.0015 13.994 18.9673 14.1601 18.8993C14.3263 18.8313 14.4772 18.731 14.6041 18.604C14.7311 18.4771 14.8315 18.3261 14.8994 18.16C14.9674 17.9938 15.0016 17.8158 15.0001 17.6363C14.9985 17.4568 14.9612 17.2794 14.8904 17.1144C14.8195 16.9495 14.7165 16.8003 14.5874 16.6756L7.89518 9.98339L14.5874 3.29118C14.8337 3.0362 14.9699 2.69469 14.9668 2.34021C14.9638 1.98573 14.8216 1.64664 14.5709 1.39598C14.3203 1.14532 13.9812 1.00313 13.6267 1.00005C13.2722 0.996971 12.9307 1.13324 12.6757 1.37951L5.02767 9.02755Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            className="absolute right-[-20px] top-1/2 z-10 mr-[23px] -translate-y-1/2  flex items-center justify-center  w-[50px] h-[50px] transform rounded-full bg-gray-200 p-[11px] opacity-80 shadow-lg"
            onClick={nextSlide}
            type="button"
          >
            <svg fill="none" height="20" style={{ fill: "#000" }} viewBox="0 0 20 20" width="20">
              <path
                d="M14.6043 9.02755C14.8577 9.28108 15.0001 9.6249 15.0001 9.98339C15.0001 10.3419 14.8577 10.6857 14.6043 10.9392L6.95625 18.5873C6.83153 18.7164 6.68235 18.8194 6.51741 18.8902C6.35246 18.9611 6.17506 18.9984 5.99554 18.9999C5.81603 19.0015 5.63801 18.9673 5.47186 18.8993C5.3057 18.8313 5.15475 18.731 5.02782 18.604C4.90088 18.4771 4.80049 18.3261 4.73251 18.16C4.66453 17.9938 4.63033 17.8158 4.63189 17.6363C4.63345 17.4568 4.67074 17.2794 4.74158 17.1144C4.81243 16.9495 4.91546 16.8003 5.04457 16.6756L11.7368 9.98339L5.04457 3.29118C4.79829 3.0362 4.66204 2.69469 4.66511 2.34021C4.66818 1.98573 4.81038 1.64664 5.06104 1.39598C5.3117 1.14532 5.65079 1.00313 6.00527 1.00005C6.35975 0.996971 6.70126 1.13324 6.95625 1.37951L14.6043 9.02755Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : <>không có dữ liệu</>}
    </div>
  );
};

export default ClassListSlider;
