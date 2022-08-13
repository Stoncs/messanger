import React from 'react';
import { useLocation } from 'react-router-dom';
import { SignIn, SignUp } from '../components';
import { LOGIN_ROUTE } from '../utils/consts';

export default function Login() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div className='background-dark wrapper'>
      {isLogin 
        ? <SignIn /> 
        : <SignUp />}
    </div>
  );
}