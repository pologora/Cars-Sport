import MobileMenu from './MobileMenu';
import Button from '../shared/Button';
import Link from '../shared/Link';
import Logo from '../shared/Logo';

const Header = () => {
  return (
    <header className='py-4 z-10 relative section-padding'>
      <div className='flex justify-between items-center container mx-auto'>
        <Logo />

        <div className='font-roboto-flex md:flex gap-6 hidden'>
          <Link>Galeria zdjęć</Link>
          <Link>FaQ</Link>
        </div>
        <Button className='hidden md:block'>Zadzwoń do nas</Button>

        <MobileMenu className='flex flex-col items-center justify-between'>
          <div className='font-roboto-flex gap-6 flex flex-col items-center'>
            <Link>Galeria zdjęć</Link>
            <Link>FaQ</Link>
          </div>
          <Button className=''>Zadzwoń do nas</Button>
        </MobileMenu>
      </div>
    </header>
  );
};

export default Header;
