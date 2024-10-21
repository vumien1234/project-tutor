"use client";
import React, { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Banner({
  banners,
  className,
  isFullPage,
  isHead,
  height = 650,
  width = 1924,
  isPagination = false,
  rounded = false,
  slideTime = 4000
}) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const slidesInterval = setInterval(() => {
      setCurr((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, slideTime);

    return () => clearInterval(slidesInterval);
  }, [banners.length, slideTime]);

  const handleSelectSlide = (index) => {
    setCurr(index);
  };

  return (
    <div className={classNames(className, isHead && "", isFullPage && "relative")}>
      <div className="relative overflow-hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {banners.map((item, index) => (
              <img
                key={index}
                alt={item.alt || "banner"}
                className={classNames(
                  rounded ? "rounded-3xl" : "",
                  isFullPage ? "md:h-[650px] h-[400px]" : "",
                  `h-[400px] w-full object-cover md:h-[${height}px]`
                )}
                style={!isFullPage ? { width: `${width}px`, height: `${height}px` } : { minWidth: "100%" }}
                height={height}
                src={item.src}
                width={width}
              />
            ))}
          </div>
        </div>

        {/* Phần pagination, nếu isPagination là true */}
        {isPagination && (
          <div className="absolute bottom-4 left-0 right-0 md:mt-6 md:flex">
            <div className="flex items-center justify-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 bg-secondary transition-all ${
                    curr === i ? "w-6 rounded-[32px]" : "w-2 rounded-full bg-gray-500"
                  } `}
                  onClick={() => handleSelectSlide(i)}
                  type="button"
                  aria-label={`button-${i}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
