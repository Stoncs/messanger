import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChatList, ChatPanel, EmptyChatPanel } from '../components';

export default function Messenger() {
  const selectedChat = false;
  return (
    <div className='wrapper flex-row' >
      <ChatList />
      <Outlet />
    </div>
  );
}