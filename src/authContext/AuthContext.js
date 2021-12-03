import React,{useContext, useState, useEffect} from 'react';
import {auth} from '../fb_auth/firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
// import Signup from '../pages/authpages/Signup';
//  const AuthContext = React.createContext({
//  isLoggedIn : false,
//  onLogin : ()=>{},
//  onLogOut : () =>{}
// });

const AuthContext = React.createContext({});


export const useAuth = () => {
//    console.log('useContext(AuthContext) ',useContext(AuthContext).currentUser)
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {
    // console.log('children ',children );
    const [currentUser, setCurrentUser] = useState();
    const [isLoggedIn, setisLoggedIn] = useState();

    const register = (email, password) => {

    return  createUserWithEmailAndPassword(auth, email, password)

    }   
     const login = (email, password) => {

    return  signInWithEmailAndPassword(auth, email, password)

    }    
     const logout = () => {

      return  auth.signOut()
     
    }

    useEffect(() => {
        
      const unSubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentUser(user);

            if(user){
             setisLoggedIn(true);
             localStorage.setItem('user', true);
            }
            else{
              setisLoggedIn(false);
              localStorage.removeItem('user');
            }
        })
        return unSubscribe;
    }, []);
    const val = {
    currentUser,
    isLoggedIn,
    register, 
    login,
    logout
    }
    console.log('val ',val);
    return (
        <AuthContext.Provider value={val}>
          {children}
        </AuthContext.Provider>
    )
}
