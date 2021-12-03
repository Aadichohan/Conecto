import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
export default function ProtectedRoute({ component : Component, ...rest}) {
    const {isLoggedIn} = useAuth();
    return (
        <Route
        {...rest}
        render = {props=>{
          return  isLoggedIn && <Redirect to="/" /> 
        }}
     >
    </Route>
    )
}
