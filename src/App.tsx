import { useState } from 'react';

import Header from './components/Layout/header/Header';
import Meals from './components/Meals/meals/Meals';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
