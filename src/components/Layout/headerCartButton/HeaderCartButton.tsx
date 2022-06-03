import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../General/icons/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton: React.FC<{ onClick: () => void }> = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (cur, item) => cur + item.amount,
    0
  );

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
