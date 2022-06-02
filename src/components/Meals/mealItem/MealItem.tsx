import MealItemForm from '../mealItemForm/MealItemForm';
import classes from './MealItem.module.css';
import MealItemType from '../../../types/MealItemType';

const MealItem: React.FC<MealItemType> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    console.log(amount);
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
