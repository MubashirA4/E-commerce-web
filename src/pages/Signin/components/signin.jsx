// Signin.jsx
import React, { useState } from 'react';
import { fakeLogin } from './authservice';
import { useNavigate } from 'react-router-dom';

const Signin = ({ onSuccess, switchToForgot }) => {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fakeLogin({ email, password });
      localStorage.setItem('authToken', response.token);
      onSuccess(); // notify the parent (AuthModal) to close the modal
      navigate('/dashboard');
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className='container mx-auto'>
      <h2 className="text-xl font-semibold mb-4">Sign In</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border w-full p-2"
            required 
          />
        </div>
        <div className="mb-2">
          <label>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border w-full p-2"
            required 
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {/* Replace Link with a button that switches mode */}
      <p className="mt-2">
        Forgot your password?{' '}
        <button onClick={switchToForgot} className="text-blue-600 underline">
          Reset here
        </button>
      </p>
    </div>
  );
};

export default Signin;
