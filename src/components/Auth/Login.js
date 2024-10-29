// src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation to signup
import '../../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate();
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token); // Store JWT token
      navigate('/'); // Redirect to home after login
    } catch (err) {
      if (err.response) {
        setError(err.response.data.msg || 'Invalid email or password'); // Set error message from server response
      } else {
        setError('An unexpected error occurred'); // Handle other types of errors
      }
      console.error(err);
    }
  };

  return (
    <form 
      className={`login-form ${isDarkMode ? 'dark-mode' : ''}`} 
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
      />
      <button 
        type="submit" 
        className={isDarkMode ? 'dark-mode' : ''}
      >
        Login
      </button>
      
      {/* Display error message if login fails */}
      {error && <p className="error-message">{error}</p>}

      {/* Link to sign up if user doesn't have an account */}
      <p className="signup-prompt">
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </form>
  );
};

export default Login;





