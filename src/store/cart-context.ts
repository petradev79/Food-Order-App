import { createContext } from 'react';
import CartItemType from '../types/CartItemType';

const CartContext = createContext({
  items: [] as CartItemType[],
  totalAmount: 0,
  addItem: (item: CartItemType) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;
