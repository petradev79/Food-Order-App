type CartItemType = {
  id: string;
  name: string;
  amount: number;
  price: number;
  // onRemove: (id: string) => void;
  // onAdd: (item: CartItemType) => void;
};

export type CartItemHandlerType = {
  item: CartItemType;
  onAdd: (item: CartItemType) => void;
  onRemove: (id: string) => void;
};

export default CartItemType;
