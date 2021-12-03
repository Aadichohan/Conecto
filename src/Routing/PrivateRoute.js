import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
export default function PrivateRoute({ component : Component, ...rest}) {
    const {currentUser, isLoggedIn} = useAuth();
   
console.log('PrivateRoute ', currentUser);
console.log('isLoggedIn ', isLoggedIn);
let user = localStorage.getItem('user');
    return (
        <Route
            {...rest}
            render = {props=>{
              return  user ? <Component {...props}/> : <Redirect to="/login" />
            }}
         >
        </Route>
    )
}
