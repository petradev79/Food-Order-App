type InputType = {
  label: string;
  className?: string;
  errorMessage?: string;
  isValid?: boolean;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
};

export default InputType;
