import { ReactNode, ReactElement, InputHTMLAttributes } from 'react';

export interface InputProps {
  label?: ReactNode;
  children: ReactElement;
}

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
