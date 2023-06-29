export type ErrorType<P> = {
  [key in keyof P]: string | null;
};

export interface UseFormProps<T extends object> {
  initialState: T;
  validate: (values: T) => ErrorType<T>;
  onSubmit: () => Promise<void>;
}
