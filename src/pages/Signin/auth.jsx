import React, { useState, useEffect } from 'react';
import Modal from './components/modal';
import Signin from './components/signin';
import Signup from './components/signup';
import ForgotPassword from './components/forgetpassword';

const AuthModal = ({ isOpen, onClose, initialAuthType = 'login' }) => {
  // Modes: 'login', 'register', 'forgot'
  const [authType, setAuthType] = useState(initialAuthType);

  // If initialAuthType changes (when modal is reopened), update authType state
  useEffect(() => {
    setAuthType(initialAuthType);
  }, [initialAuthType]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        {/* Navigation Tabs */}
        <div className="flex justify-around items-center mb-4 border-b pb-2">
          <button
            className={`px-4 py-2 ${
              authType === 'login'
                ? 'border-b-2 border-blue-600 font-bold'
                : 'text-gray-600'
            }`}
            onClick={() => setAuthType('login')}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 ${
              authType === 'register'
                ? 'border-b-2 border-green-600 font-bold'
                : 'text-gray-600'
            }`}
            onClick={() => setAuthType('register')}
          >
            Register
          </button>
        </div>

        {/* Render content based on active mode */}
        {authType === 'login' && (
          <Signin switchToForgot={() => setAuthType('forgot')} onSuccess={onClose} />
        )}
        {authType === 'register' && <Signup onSuccess={onClose} />}
        {authType === 'forgot' && <ForgotPassword onSuccess={onClose} />}
      </div>
    </Modal>
  );
};

export default AuthModal;
