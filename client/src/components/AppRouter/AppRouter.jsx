import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';

export default function AppRouter() {
  const isAuth = true;
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