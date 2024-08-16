import React from "react";

const Banner = ({ className, title, description, image }) => {
    return (
        <div
            className={`${className} relative flex flex-col w-full h-[350px] justify-center items-center overflow-hidden`}>
            <img
                src={image}
                alt="Banner background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: -2 }}
            />
            <div className="absolute inset-0 bg-black opacity-60" style={{ zIndex: -1 }} />
            <div className="relative flex flex-col w-full h-full justify-center items-center bg-primary bg-opacity-60 z-10">
                <h3 className="text-white font-medium mb-2">{title}</h3>
                <h1 className="text-orange-500">{description}</h1>
            </div>
        </div>
    );
};

export default Banner;
