import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { MESSENGER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from './utils/consts';
import { Login, Messenger, Page404, Profile, Settings } from './pages';
import { ChatPanel, EmptyChatPanel } from './components';

export default function AppRouter() {
  const isAuth = useSelector(({user}) => user.isAuth);
  return (
    <Routes>
      {isAuth &&
        <>
          <Route path={MESSENGER_ROUTE} element={<Messenger />}>
            <Route index element={<EmptyChatPanel />} />
            <Route path=":chatId" element={<ChatPanel />} />
          </Route>
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path={SETTINGS_ROUTE} element={<Settings />} />
        </>
      }
      
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={REGISTRATION_ROUTE} element={<Login />} />
      <Route path='*' element={<Page404 />} />
    </ Routes>
  );
}