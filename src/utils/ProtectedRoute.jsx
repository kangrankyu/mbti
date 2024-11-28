import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from '../api/auth';
const ProtectedRoute = ({ redirectPath = "/" }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
   
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
      }
   

  return ( <Outlet />)
};

export default ProtectedRoute