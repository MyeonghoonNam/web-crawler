import type { InputProps } from './types';

const Input = ({ value, onChange, testId }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      data-testid={testId}
      className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
    />
  );
};

export default Input;
