import type { ButtonProps } from './types';

const Button = ({ children, onClick, testId }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className="w-[100px] h-[40px] text-[white] bg-[black] rounded-[5px]"
    >
      {children}
    </button>
  );
};

export default Button;
