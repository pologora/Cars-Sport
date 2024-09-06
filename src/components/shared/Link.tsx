type LinkProps = {
  children: React.ReactNode;
};

const Link = ({ children }: LinkProps) => {
  return <a className='cursor-pointer hover:text-brand animation'>{children}</a>;
};

export default Link;
