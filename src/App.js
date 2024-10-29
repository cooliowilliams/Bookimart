import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import './styles/style.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);

    document.body.classList.toggle('dark-mode', storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  return (
    <Router>
      <CartProvider> {/* Wrap the entire app to provide context to all components */}
        <div className="app-container">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} /> 
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;






