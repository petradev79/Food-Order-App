import { useState } from 'react';

import Cart from './components/Cart/cart/Cart';
import Header from './components/Layout/header/Header';
import Meals from './components/Meals/meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
