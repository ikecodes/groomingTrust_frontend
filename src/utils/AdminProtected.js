import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const admin = localStorage.getItem('admin');
  return admin && admin === 'ike@gmail.com' ? children : <Navigate to='/' />;
};

export default AdminProtected;
