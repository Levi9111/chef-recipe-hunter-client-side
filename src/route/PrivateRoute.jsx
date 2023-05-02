import React, {useContext} from 'react';
import {AuthContext} from '../provider/AuthProvider';
import {Navigate} from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) return <ProgressBar></ProgressBar>;
    if (user) return children;
    else return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;
