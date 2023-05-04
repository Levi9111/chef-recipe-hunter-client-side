import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <ProgressBar></ProgressBar>;
  if (user) return children;
  else
    return (
      <Navigate
        state={{ from: location }}
        to="/login"
        replace={true}
      ></Navigate>
    );
};

export default PrivateRouter;
