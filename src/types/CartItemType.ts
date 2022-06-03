import MealItemType from './MealItemType';

type CartItemType = {
  id: string;
  name: string;
  amount: number;
  price: number;
  onRemove: (id: string) => void;
  onAdd: (item: MealItemType) => void;
};

export default CartItemType;
