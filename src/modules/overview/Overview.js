import React from "react";
// import Container from "../../components/common/Container";
import Banner from "../../components/common/Banner";
import ImgOverview from "../../assets/image/banner-overview.jpg";

const Overview = () => {
    return (
        <>
            <Banner
                className="h-[400px]"
                image={ImgOverview}
                title="Chào mừng Mộc Miên đến với TutorMaster"
                description="Tổng quan"
            />
        </>
    );
};

export default Overview;
