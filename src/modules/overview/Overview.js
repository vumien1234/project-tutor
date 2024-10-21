import React from "react";
import Banner1 from "../../components/common/Banner1";
import img1 from "../../assets/image/tong-quan/banner.jpeg";
import img2 from "../../assets/image/tong-quan/2.jpeg";

const Overview = () => {
  return (
    <div>
      <Banner1
        banners={[
          { src: img1, alt: "Banner 1" },
          { src: img2, alt: "Banner 2" }
        ]}
        isFullPage
      />
    </div>
  );
};

export default Overview;
