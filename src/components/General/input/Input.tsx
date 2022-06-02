import { forwardRef } from 'react';

import classes from './Input.module.css';
import InputType from '../../../types/InputType';

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
