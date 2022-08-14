import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { ChatList, ChatPanel, EmptyChatPanel } from '../components';
import { setSelectedChat } from '../redux/actions/chats';
import { MESSENGER_ROUTE } from '../utils/consts';

export default function Messenger() {
  // const selectedChat = useSelector(({chats}) => chats.selectedChat);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <div className='wrapper flex-row' >
      <ChatList />
      <Outlet />
    </div>
  );
}