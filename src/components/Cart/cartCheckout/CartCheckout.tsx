import { FormEvent, useRef, useState } from 'react';
import UserType from '../../../types/UserType';
import Input from '../../General/input/Input';
import classes from './CartCheckout.module.css';

const isEmpty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

const CartCheckout: React.FC<{
  onCancel: () => void;
  onConfirm: (userData: UserType) => void;
}> = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredStreet = streetInputRef.current!.value;
    const enteredPostal = postalInputRef.current!.value;
    const enteredCity = cityInputRef.current!.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postal ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <Input
        ref={nameInputRef}
        label='Your Name'
        className={nameControlClasses}
        isValid={!formInputsValidity.name}
        errorMessage='Please enter a valid name!'
        input={{
          id: 'name',
          type: 'text',
        }}
      />
      <Input
        ref={streetInputRef}
        label='Street'
        className={streetControlClasses}
        isValid={!formInputsValidity.street}
        errorMessage='Please enter a valid street!'
        input={{
          id: 'street',
          type: 'text',
        }}
      />
      <Input
        ref={postalInputRef}
        label='Postal Code'
        className={postalControlClasses}
        isValid={!formInputsValidity.postal}
        errorMessage='Please enter a valid postal code!'
        input={{
          id: 'postal',
          type: 'text',
        }}
      />
      <Input
        ref={cityInputRef}
        label='City'
        className={cityControlClasses}
        isValid={!formInputsValidity.city}
        errorMessage='Please enter a valid city!'
        input={{
          id: 'city',
          type: 'text',
        }}
      />
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CartCheckout;
