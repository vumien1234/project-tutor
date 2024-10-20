import React from "react";
import Banner1 from "../../components/common/Banner1";
import img1 from "../../assets/image/tong-quan/banner.webp";

const Overview = () => {
  return (
    <div>
      <Banner1
        banners={[
          { src: img1, alt: "Banner 1" },
          { src: img1, alt: "Banner 2" }
        ]}
        isFullPage
      />
    </div>
  );
};

export default Overview;
