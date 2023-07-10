import { Children, cloneElement, ForwardedRef, forwardRef, useId } from 'react';
import type { InputProps, TextFieldProps } from './type';

const Input = ({ label, children, ...props }: InputProps) => {
  const child = Children.only(children);
  const generatedId = useId();
  const id = child.props.id ?? generatedId;

  return (
    <div {...props}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
    </div>
  );
};

Input.TextField = forwardRef(
  ({ ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
        {...props}
      />
    );
  },
);

export default Input;
