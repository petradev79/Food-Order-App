import React, { useContext, useState } from 'react';

import Modal from '../../General/modal/Modal';
import CartItem from '../cartItem/CartItem';
import CartContext from '../../../store/cart-context';
import CartCheckout from '../cartCheckout/CartCheckout';
import CartItemType from '../../../types/CartItemType';
import classes from './Cart.module.css';

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const [isCartCheckout, setIsCartCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item: CartItemType) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCartCheckout(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler}
          onRemove={cartItemRemoveHandler}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCartCheckout ? (
        <CartCheckout onCancel={props.onClose} />
      ) : (
        modalActions
      )}
    </Modal>
  );
};

export default Cart;
