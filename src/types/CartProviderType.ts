import CartItemType from './CartItemType';

export type cartStateType = {
  items: CartItemType[];
  totalAmount: number;
};

export type cartActionType =
  | { type: 'ADD'; item: CartItemType }
  | { type: 'REMOVE'; id: string };
