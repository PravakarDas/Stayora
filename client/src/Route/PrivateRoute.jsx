import React, { Children, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return  <div className='flex justify-center'><span className="loading max-w-full mx-auto loading-ring loading-xl"></span></div>
    }
    if(!user){
        return<Navigate state={{from:location}} to='/login' replace></Navigate>
    }
    return children
};

export default PrivateRoute;