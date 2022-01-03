import { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHander = () => {
      setCartIsShown(true);
   };
   const hideCartHander = () => {
      setCartIsShown(false);
   };

   return (
      <CartProvider>
         {cartIsShown && <Cart onClose={hideCartHander} />}
         <Header onShowCart={showCartHander}></Header>
         <main>
            <Meals />
         </main>
      </CartProvider>
   );
}

export default App;
