import React,{createContext, useState} from 'react';
import Auth from './Auth/Auth';
import Login from './pages/login/login';
import Homepage from './pages/home/home';
import App from './App';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    let authObj = new Auth();
    const [auth,setAuth]=useState(authObj)
    return (
        <AuthContext.Provider value={auth}>
            {/* <Login />
            <Homepage /> 
             <App /> */}
            {props.children}
        </AuthContext.Provider>
    );
};