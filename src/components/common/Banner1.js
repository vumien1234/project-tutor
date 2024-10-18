import React, { useState, useEffect } from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Banner1({
  className,
  banners,
  isFullPage = false,
  height = 600,
  width = 1400,
  isPagination = false,
}) {
  const [curr, setCurr] = useState(0);

  const next = () => setCurr((current) => (current === banners.length - 1 ? 0 : current + 1));

  useEffect(() => {
    const slidesInterval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(slidesInterval);
  }, [banners.length]);

  const handleSelectSlide = (index) => {
    setCurr(index);
  };

  return (
    <div className={classNames(className, isFullPage && 'relative')}>
      <div className="relative overflow-hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {banners.map((item, index) => (
              <React.Fragment key={index}>
                <img
                  alt="banner"
                  className="min-h-[200px] w-full object-cover md:h-[590px]"
                  height={height}
                  src={item.image_url}
                  width={width}
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {isPagination && (
          <div className="absolute bottom-4 left-0 right-0 md:mt-6 md:flex">
            <div className="flex items-center justify-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 bg-secondary transition-all ${
                    curr === i
                      ? 'w-6 rounded-[32px]'
                      : 'w-2 rounded-full bg-gray-500'
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
