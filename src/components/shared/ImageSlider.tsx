import { useEffect, useState } from 'react';
import { rotateArray } from '../../helpers/rotateArray';

type ImageSliderType = {
  imagesUrls: string[];
};

const ImageSlider = ({ imagesUrls }: ImageSliderType) => {
  const [rotatedImages, setRotatedImages] = useState(imagesUrls);

  const rotateImagesOnDotClick = (idx: number) => {
    const rotated = rotateArray(imagesUrls, idx);

    setRotatedImages(rotated);
  };

  const dots = imagesUrls.map((url, i) => {
    return (
      <div
        key={`${url}-dot`}
        className={` w-2 h-2 rounded-full cursor-pointer hover:bg-brand animation
            ${url === rotatedImages[0] ? 'bg-brand' : 'bg-gallery-dots'}
            `}
        onClick={() => rotateImagesOnDotClick(i)}
      ></div>
    );
  });

  const images = rotatedImages.map((url) => {
    return (
      <div
        className='lg:min-w-[600px] lg:h-[446px] '
        key={url}
      >
        <img
          className={`object-cover h-full w-full animate-image-fade`}
          src={url}
          alt='Samochód na sprzedaż'
        />
      </div>
    );
  });

  useEffect(() => {
    setRotatedImages(imagesUrls);
  }, [imagesUrls]);

  return (
    <div>
      <div className='flex overflow-hidden gap-16 w-full flex-col lg:flex-row'>{images}</div>
      <div className='lg:flex justify-between mt-12 w-20 mx-auto -translate-x-11 hidden py-2'>{dots}</div>
    </div>
  );
};

export default ImageSlider;
