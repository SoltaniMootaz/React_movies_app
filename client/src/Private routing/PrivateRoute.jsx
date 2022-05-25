import React from 'react'
import { Navigate} from 'react-router-dom'
  function PrivateRoute({ children }) {
    const isLoggedIn = localStorage.getItem('id');
    
    return isLoggedIn ? children : <Navigate to="/login" />;
  }
export default PrivateRoute