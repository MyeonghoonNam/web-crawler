import { ChangeEvent, FormEvent, useState, useCallback, useMemo } from 'react';

import type { UseFormProps, ErrorType } from './types';

const useForm = <T extends object>({
  initialState,
  validate,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ErrorType<T>>();
  const propertyLen = useMemo(
    () => Object.keys(initialState).length,
    [initialState],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = validate(values);
      const validPropertyLen = Object.values(newErrors).filter(
        (v) => v === null,
      ).length;

      const isValid = propertyLen === validPropertyLen;

      if (isValid) {
        await onSubmit();
      } else {
        setErrors(newErrors);
      }
    },
    [values, validate, onSubmit, propertyLen],
  );

  return { errors, handleChange, handleSubmit };
};

export default useForm;
