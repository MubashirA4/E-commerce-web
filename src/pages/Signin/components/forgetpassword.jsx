// ForgotPassword.jsx
import React, { useState } from 'react';
import { fakeForgotPassword } from './authservice';

const ForgotPassword = ({ onSuccess }) => {
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [error, setError]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fakeForgotPassword({ email });
      setMessage(response.message);
      // Optionally, you can call onSuccess() after a delay to close the modal
      setTimeout(() => onSuccess(), 1500);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      { error && <p style={{color:'red'}}>{error}</p> }
      { message && <p style={{color:'green'}}>{message}</p> }
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
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
