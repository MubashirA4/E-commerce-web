// OrderHistory.jsx
import React, { useState, useEffect } from 'react';
import { fetchOrderHistory } from '../dashboardservice';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOrderHistory()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load orders.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Order ID</th>
          <th className="py-2 px-4 border">Date</th>
          <th className="py-2 px-4 border">Total</th>
          <th className="py-2 px-4 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td className="py-2 px-4 border">{order.id}</td>
            <td className="py-2 px-4 border">{order.date}</td>
            <td className="py-2 px-4 border">${order.total.toFixed(2)}</td>
            <td className="py-2 px-4 border">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderHistory;
