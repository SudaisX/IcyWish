import React, { useState } from 'react';
import Header from './componenets/Layout/Header';
import Meals from './componenets/Meals/Meals';
import Cart from './componenets/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
    const [cartActive, setCartActive] = useState(false);

    const showCartHandler = () => {
        setCartActive(true);
    };

    const hideCartHandler = () => {
        setCartActive(false);
    };

    return (
        <CartProvider>
            {cartActive && <Cart onClose={hideCartHandler} />}
            <Header onShowCartHandler={showCartHandler} onClose={hideCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
