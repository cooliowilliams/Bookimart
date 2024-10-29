// src/components/Auth/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Log the passwords to check their values
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Validate if passwords match
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
            name,
            email,
            password,
            confirmPassword,
        });
        console.log('Response from server:', response.data);
        setSuccess('Signup successful! You can now log in.');
        setError('');
        setTimeout(() => {
            navigate('/login');
        }, 2000); // Redirect after 2 seconds
    } catch (err) {
        if (err.response) {
            console.log('Error response data:', err.response.data);
            setError(err.response.data.errors[0].msg || 'Signup failed');
        } else {
            setError('An unexpected error occurred');
        }
        console.error(err);
    }
};

  
  
  

  return (
    <form 
      className={`signup-form ${isDarkMode ? 'dark-mode' : ''}`} 
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        className={isDarkMode ? 'dark-mode' : ''}
        required
      />
      <button 
        type="submit" 
        className={isDarkMode ? 'dark-mode' : ''}
      >
        Sign Up
      </button>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <p className="login-prompt">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
};

export default Signup;




