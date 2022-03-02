import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserProtected = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user?.role === 'user' || user?.role === 'admin' ? children : <Navigate to='/' />;
};

export default UserProtected;
