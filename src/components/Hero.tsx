import Button from './shared/Button';
import heroImg from '../assets/images/hero/hero.png';
import road from '../assets/images/hero/road.svg';

const Hero = () => {
  return (
    <main className='pt-12 md:h-[825px] section-padding text-center md:text-start mb-20 md:mb-0'>
      <div className='container'>
        <h1 className='h1 mb-10'>
          <p>Sprzedajemy samochody</p>
          <p>z europy</p>
        </h1>

        <div>
          <p>Kup kofmortowy pojazd, aby każda podróż</p>
          <p>była wyjątkowym przeżyciem</p>
        </div>
        <div className='flex gap-6 mt-10 justify-center md:justify-normal'>
          <Button>Zobacz zdjęcia</Button>
          <Button variant='outlined'>Zadzwoń do nas</Button>
        </div>
      </div>
      <div className='absolute right-0 lg:top-[407px] lg:max-w-[1064px] lg:max-h-[404px] w-[75%] z-10 hidden md:block'>
        <img
          className='w-full h-full'
          src={heroImg}
        />
      </div>
      <div
        className={`absolute top-0 xl:right-[68px] xl:max-w-[668px] 
          xl:max-h-[659px] lg:block lg:-right-4  hidden`}
      >
        <img
          className='w-full h-full'
          src={road}
          alt='Trzy samochody'
        />
      </div>
    </main>
  );
};

export default Hero;
