import React, { useContext } from 'react';
import '../../styles/style.css';
import CartContext from '../../context/CartContext';

const Header = () => {
  const { totalItems } = useContext(CartContext); // Get the totalItems from CartContext

  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="logo">
          <a href="/">BookiMart</a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products..."
          />
        </div>
        <div className="header-links">
          <a href="/signup" className="sign-link">Signup</a>
          <a href="/login" className="login-link">Login</a>
          <a href="/cart" className="cart-link">
            <span>Cart ({totalItems})</span> {/* Display the total items count */}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

