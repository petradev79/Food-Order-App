import { Fragment, useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

import Modal from '../../General/modal/Modal';
import CartItem from '../cartItem/CartItem';
import CartContext from '../../../store/cart-context';
import CartCheckout from '../cartCheckout/CartCheckout';
import CartItemType from '../../../types/CartItemType';
import classes from './Cart.module.css';
import UserType from '../../../types/UserType';

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const [isCartCheckout, setIsCartCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);
  const orderCollectionRef = collection(db, 'orders');

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

  const submitOrderHandler = async (userData: UserType) => {
    setIsSubmitting(true);
    await addDoc(orderCollectionRef, {
      user: userData,
      orderedItems: cartCtx.items,
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCartCheckout ? (
        <CartCheckout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      ) : (
        modalActions
      )}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      <Fragment>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </Fragment>
    </Modal>
  );
};

export default Cart;
