import React from "react";
import Banner1 from "../../components/common/Banner1";
import img1 from '../../assets/image/tong-quan/banner.webp'

const Overview = () => {
  return (
    <div>
      <div className="relative">
        <Banner1 
          banners={[
            { image_url: img1 },
            { image_url: img1 }
          ]}
          isFullPage 
          withButton 
        />
      </div>
    </div>
  );
};

export default Overview;
