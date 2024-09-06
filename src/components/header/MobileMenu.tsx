import { useEffect, useState } from 'react';
import MenuIcon from './MenuIcon';

type MobileMenuProps = {
  children?: React.ReactNode;
  className?: string;
};

const MobileMenu = ({ children, className = '', ...props }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenuOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      {...props}
      className={`md:hidden`}
    >
      <div>
        <MenuIcon action={toggleMenuOpen} />
      </div>
      <div
        className={`${
          open ? '' : 'transition -translate-x-[500%]'
        } fixed py-12 top-[65px] z-50 inset-0 bg-light-primary h-[calc(h-screen - 65px)] animation ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileMenu;
