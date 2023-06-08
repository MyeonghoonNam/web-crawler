import type { InputProps } from './types';

const Input = ({ value, onChange, testId }: InputProps) => {
  return (
    <input type="text" value={value} onChange={onChange} data-testid={testId} />
  );
};

export default Input;
