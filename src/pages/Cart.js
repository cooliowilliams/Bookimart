import React, { useContext } from 'react';
import CartContext from '../context/CartContext'; // Updated path
import '../styles/style.css'; // Updated path

const Cart = () => {
  const { cart, totalItems } = useContext(CartContext);

  console.log('Cart items:', cart);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {totalItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  {/* Add other item details here */}
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Items: {totalItems}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
