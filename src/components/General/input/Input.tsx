import classes from './Input.module.css';
import InputType from '../../../types/InputType';

const Input: React.FC<InputType> = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
