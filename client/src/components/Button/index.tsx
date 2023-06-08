import type { ButtonProps } from './types';

const Button = ({ text, testId }: ButtonProps) => {
  return (
    <button type="button" data-testid={testId}>
      {text}
    </button>
  );
};

export default Button;
