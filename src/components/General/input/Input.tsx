import { forwardRef } from 'react';
import InputType from '../../../types/InputType';

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.isValid && <p>{props.errorMessage}</p>}
    </div>
  );
});

export default Input;
