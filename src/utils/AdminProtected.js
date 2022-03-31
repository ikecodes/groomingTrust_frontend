import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const user = localStorage.getItem('user');
  return user && user === 'ike@gmail.com' ? children : <Navigate to='/' />;
};

export default AdminProtected;
