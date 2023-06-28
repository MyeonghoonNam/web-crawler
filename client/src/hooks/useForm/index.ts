import { ChangeEvent, FormEvent, useState, useCallback } from 'react';

import type { UseFormProps, ErrorType } from './types';

const useForm = <T extends object>({
  initialState,
  validate,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ErrorType<T>>();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = validate(values);

      if (Object.keys(newErrors).length === 0) {
        await onSubmit();
      } else {
        setErrors(newErrors);
      }
    },
    [values, validate, onSubmit],
  );

  return { errors, handleChange, handleSubmit };
};

export default useForm;
