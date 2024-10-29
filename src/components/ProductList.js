// src/components/ProductList.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Sidebar from '../components/Layout/Sidebar';
import Hero from '../components/Layout/Hero';
import CartContext from '../context/CartContext';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log('Add to cart function:', addToCart);
  return (
    <div className="main-content">
      <Sidebar />
      <div className="content-area">
        <Hero />
        <div className="products-container">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product._id} className="product-card">
                <img src={`/assets/images/${product.image}`} alt={product.name} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;





