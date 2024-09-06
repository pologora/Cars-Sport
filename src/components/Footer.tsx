const Footer = () => {
  return (
    <footer className='bg-dark-primary text-light-secondary py-6 section-padding text-center'>
      <div className='container flex justify-between flex-col gap-4 md:flex-row'>
        <p className='font-bold cursor-pointer hover:text-brand animation'>Cars Spot</p>
        <div
          className={`border-b h-6 border-light-secondary box-border hover:text-brand hover:border-brand
            animation inline-block max-w-[131px] mx-auto md:mx-0`}
        >
          <a className='cursor-pointer'>Polityka prywatności</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
