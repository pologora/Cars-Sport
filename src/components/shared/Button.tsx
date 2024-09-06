type ButtonProps = {
  variant?: ButtonVariants;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

type ButtonVariants = 'outlined' | 'contained';

const buttonVariants: Record<ButtonVariants, string> = {
  contained: 'bg-brand text-light-primary hover:bg-blue-800',
  outlined: `outline outline-1 outline-brand text-brand hover:bg-gray-200`,
};

const Button = ({ variant = 'contained', children, onClick, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonVariants[variant]}
      px-6 py-3 rounded-lg font-semibold btn-tab-font animation ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
