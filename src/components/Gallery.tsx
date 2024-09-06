import { useState } from 'react';
import { galleries } from '../data/carsLists';
import ImageSlider from './shared/ImageSlider';

const Gallery = () => {
  const [currentGallery, setCurrentGallery] = useState(galleries[0]);

  const activeTabStyle = 'text-brand border-brand font-semibold animation';
  const inactiveTabStype = 'border-transparent';

  const changeGalleryHandler = (title: string) => {
    const newGalleryIdx = galleries.findIndex((item) => item.title === title);

    if (newGalleryIdx === -1) {
      throw new Error(`Gallery title: ${title} does not exists`);
    }

    setCurrentGallery(galleries[newGalleryIdx]);
  };

  const tabs = galleries.map((gallery) => {
    const { title } = gallery;
    return (
      <button
        key={title}
        className={`max-w-fit mx-auto lg:mx-0 lg:max-w-full border-b max-h-[23px] ${
          title === currentGallery.title ? activeTabStyle : inactiveTabStype
        } hover:text-brand btn-tab-font animation `}
        onClick={() => changeGalleryHandler(title)}
      >
        {title}
      </button>
    );
  });

  return (
    <section className='lg:pl-[88px] overflow-hidden section-padding my-20 text-center lg:text-left'>
      <header>
        <h4 className='text-brand h4 mb-4 lg:mb-0'>Prezentacja firmy</h4>
        <h2 className='h2'>Zobacz naszą galerię zdjęć</h2>
        <div className='flex lg:gap-12 mt-11 gap-5 lg:mt-6 justify-center lg:justify-normal flex-col lg:flex-row'>
          {tabs}
        </div>
      </header>
      <div className='mt-20'>
        <ImageSlider imagesUrls={currentGallery.urls} />
      </div>
    </section>
  );
};
export default Gallery;
