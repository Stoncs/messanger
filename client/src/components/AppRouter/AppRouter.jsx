import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';

export default function AppRouter() {
  const isAuth = useSelector(({user}) => user.isAuth);
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element} />)
      }
      {publicRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element} exact />)
      }
    </ Routes>
  );
}