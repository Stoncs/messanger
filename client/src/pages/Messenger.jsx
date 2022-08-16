import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ChatList, ChatPanel, EmptyChatPanel } from '../components';

export default function Messenger() {

  return (
    <>
      <div className='wrapper flex-row' >
        <ChatList />
        <Outlet />
      </div>
    </>
  );
}