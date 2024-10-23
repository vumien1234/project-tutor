import React, { useState } from 'react';
import NoImage from '../../assets/image/no-image.avif';

const CustomImage = ({ defaultImage = NoImage, src, alt = '', ...imageProps }) => {
  const [currentSrc, setCurrentSrc] = useState(src || defaultImage);

  const handleError = () => {
    setCurrentSrc(defaultImage);
  };

  return (
    <img
      {...imageProps}
      src={currentSrc}
      onError={handleError}
      alt={alt}
    />
  );
};

export default CustomImage;
