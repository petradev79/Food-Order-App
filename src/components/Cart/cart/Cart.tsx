import { Fragment } from 'react';

import Modal from '../../General/modal/Modal';
import CartItem from '../cartItem/CartItem';
import MealItemType from '../../../types/MealItemType';
import classes from './Cart.module.css';
import CartItemType from '../../../types/CartItemType';

const testData: CartItemType[] = [];

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const cartItemRemoveHandler = (id: string) => {
    console.log(id);
  };

  const cartItemAddHandler = (item: MealItemType) => {
    console.log(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {testData.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {/* <Fragment> */}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {/* {hasItems && <button className={classes.button}>Order</button>} */}
      </div>
      {/* </Fragment> */}
    </Modal>
  );
};

export default Cart;
