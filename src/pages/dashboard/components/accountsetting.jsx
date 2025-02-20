// AccountSettings.jsx
import React, { useState } from 'react';
import { updateAccountSettings } from '../dashboardservice';

const AccountSettings = ({ storedUser }) => {
  const [settings, setSettings] = useState({
    email: storedUser.email || '',
    password: '',
    shippingAddress: storedUser.shippingAddress || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      const response = await updateAccountSettings(settings);
      setMessage(response.message);
      // Optionally update localStorage or global context here
      setLoading(false);
    } catch (err) {
      setError('Failed to update account settings.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input 
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
          className="border w-full p-2"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Password:</label>
        <input 
          type="password"
          name="password"
          value={settings.password}
          onChange={handleChange}
          className="border w-full p-2"
          placeholder="Leave blank if not changing"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Shipping Address:</label>
        <textarea 
          name="shippingAddress"
          value={settings.shippingAddress}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </div>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? 'Updating...' : 'Update Settings'}
      </button>
    </form>
  );
};

export default AccountSettings;
