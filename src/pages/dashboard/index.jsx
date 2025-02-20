// Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './components/orderhistory';
import AccountSettings from './components/accountsetting';

const Dashboard = () => {
  const navigate = useNavigate();

  // Assume user data is stored in localStorage for this example:
  const storedUser = JSON.parse(localStorage.getItem('user')) || { name: 'User', email: '' };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {storedUser.name}!</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <OrderHistory />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <AccountSettings storedUser={storedUser} />
      </section>
    </div>
  );
};

export default Dashboard;
