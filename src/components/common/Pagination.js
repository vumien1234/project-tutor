import React from "react";

const Pagination = ({ page, setCurrentPage, contentRef, className = "", totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const scrollToContent = () => {
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actionNext = () => {
    if (page < totalPages) {
      setCurrentPage(prev => prev + 1);
      scrollToContent(); 
    }
  };

  const actionPrev = () => {
    if (page > 1) {
      setCurrentPage(prev => prev - 1);
      scrollToContent();
    }
  };

  const actionPage = (value) => {
    setCurrentPage(value); 
    scrollToContent();
  };

  return (
    <div className={`${className} flex items-center justify-center gap-x-5`}>
      <button
        className={`flex size-8 items-center justify-center rounded-full md:size-10 ${
          page === 1 ? "cursor-not-allowed bg-[#EAEAEA]" : "bg-[#C2EFFF]"
        }`}
        onClick={actionPrev}
        type="button"
        aria-label="pre"
        disabled={page === 1}
      >
        <svg
          fill="none"
          height="20"
          style={{ fill: `${page === 1 ? "#AAAAAA" : "#00AEEF"}` }}
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              clipRule="evenodd"
              d="M5.02767 9.02755C4.77422 9.28108 4.63184 9.6249 4.63184 9.98339C4.63184 10.3419 4.77422 10.6857 5.02767 10.9392L12.6757 18.5873C12.8004 18.7164 12.9496 18.8194 13.1146 18.8902C13.2795 18.9611 13.4569 18.9984 13.6364 18.9999C13.8159 19.0015 13.994 18.9673 14.1601 18.8993C14.3263 18.8313 14.4772 18.731 14.6041 18.604C14.7311 18.4771 14.8315 18.3261 14.8994 18.16C14.9674 17.9938 15.0016 17.8158 15.0001 17.6363C14.9985 17.4568 14.9612 17.2794 14.8904 17.1144C14.8195 16.9495 14.7165 16.8003 14.5874 16.6756L7.89518 9.98339L14.5874 3.29118C14.8337 3.0362 14.9699 2.69469 14.9668 2.34021C14.9638 1.98573 14.8216 1.64664 14.5709 1.39598C14.3203 1.14532 13.9812 1.00313 13.6267 1.00005C13.2722 0.996971 12.9307 1.13324 12.6757 1.37951L5.02767 9.02755Z"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </button>

      {pageNumbers.map((item) => (
        <button
          key={item}
          className={`flex size-8 items-center justify-center rounded-full md:size-10 ${
            item === page ? "bg-[#1984C7] text-white" : "bg-[#C2EFFF] text-[#00AEEF]"
          }`}
          onClick={() => actionPage(item)}
          type="button"
          aria-label="page"
        >
          <p className="text-base font-semibold not-italic">{item}</p>
        </button>
      ))}

      <button
        className={`flex size-8 items-center justify-center rounded-full md:size-10 ${
          page === totalPages ? "cursor-not-allowed bg-[#EAEAEA]" : "bg-[#C2EFFF]"
        }`}
        onClick={actionNext}
        type="button"
        aria-label="next"
        disabled={page === totalPages}
      >
        <svg
          fill="none"
          height="20"
          style={{
            fill: `${page === totalPages ? "#AAAAAA" : "#00AEEF"}`
          }}
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              clipRule="evenodd"
              d="M14.6043 9.02755C14.8577 9.28108 15.0001 9.6249 15.0001 9.98339C15.0001 10.3419 14.8577 10.6857 14.6043 10.9392L6.95625 18.5873C6.83153 18.7164 6.68235 18.8194 6.51741 18.8902C6.35246 18.9611 6.17506 18.9984 5.99554 18.9999C5.81603 19.0015 5.63801 18.9673 5.47186 18.8993C5.3057 18.8313 5.15475 18.731 5.02782 18.604C4.90088 18.4771 4.80049 18.3261 4.73251 18.16C4.66453 17.9938 4.63033 17.8158 4.63189 17.6363C4.63345 17.4568 4.67074 17.2794 4.7416 17.1144C4.81245 16.9495 4.91545 16.8003 5.04457 16.6756L11.7368 9.98339L5.04457 3.29118C4.7983 3.0362 4.66203 2.69469 4.66511 2.34021C4.66819 1.98573 4.81038 1.64664 5.06104 1.39598C5.31171 1.14532 5.65079 1.00313 6.00527 1.00005C6.35975 0.996971 6.70126 1.13324 6.95625 1.37951L14.6043 9.02755Z"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export { Pagination };
