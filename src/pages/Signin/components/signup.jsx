import React, { useState } from 'react';
import { fakeRegister } from './authservice';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError]       = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await fakeRegister({ name, email, password });
      setMessage(response.message);
      setTimeout(() => {
        onSuccess();
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      { error && <p className="text-red-500">{error}</p> }
      { message && <p className="text-green-500">{message}</p> }
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Name:</label>
          <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border w-full p-2"
            required 
          />
        </div>
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
        <div className="mb-2">
          <label>Confirm Password:</label>
          <input 
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="border w-full p-2"
            required 
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
