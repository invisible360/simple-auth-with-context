import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContecxt';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation ();
    if (loading) {
        console.log ('yes loading found')
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        console.log ('user found')
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;