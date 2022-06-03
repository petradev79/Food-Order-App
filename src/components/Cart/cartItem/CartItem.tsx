import { CartItemHandlerType } from '../../../types/CartItemType';
import classes from './CartItem.module.css';

const CartItem: React.FC<CartItemHandlerType> = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.onRemove(props.item.id)}>−</button>
        <button onClick={() => props.onAdd(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
