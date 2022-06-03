import { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealItemForm from '../mealItemForm/MealItemForm';
import MealItemType from '../../../types/MealItemType';
import classes from './MealItem.module.css';

const MealItem: React.FC<MealItemType> = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
