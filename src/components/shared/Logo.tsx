import logo from '../../assets/images/logos/logo.png';

const Logo = () => {
  return (
    <div className='flex gap-2 hover:cursor-pointer'>
      <div className='h-[33px] w-[153px]'>
        <img
          src={logo}
          alt='Logo firmy'
        />
      </div>
    </div>
  );
};
export default Logo;
