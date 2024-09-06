import { useState } from 'react';

type MenuIconProps = {
  action: () => void;
};

const MenuIcon = ({ action }: MenuIconProps) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen((prev) => !prev);
    action();
  };

  return (
    <div
      className='flex flex-col gap-2 cursor-pointer relative'
      onClick={handleOnClick}
    >
      <div
        className={`h-[2px] w-8 animation transform bg-brand ${
          open ? 'absolute top-1/2 rotate-45 -translate-y-1/2' : ''
        }`}
      ></div>
      <div className={`h-[2px] w-8  bg-black ${open ? 'opacity-0' : 'opacity-100'}`}></div>
      <div
        className={`h-[2px] w-8 animation transform  bg-brand ${
          open ? 'absolute top-1/2 -rotate-45 -translate-y-1/2' : ''
        }`}
      ></div>
    </div>
  );
};

export default MenuIcon;
