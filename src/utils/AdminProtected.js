import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const admin = localStorage.getItem('admin');
  return admin &&
    (admin === 'ike@gmail.com' || 'Getinfo@groomingendowment.org') ? (
    children
  ) : (
    <Navigate to='/' />
  );
};

export default AdminProtected;
// Getinfo@groomingendowment.org
