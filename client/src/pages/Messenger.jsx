import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChatList, ChatPanel, EmptyChatPanel } from '../components';

export default function Messenger() {
  const chatPreviews = [
    {
      chatId: 1,
      title: 'норм норм',
      lastMessage: {
        nickname: 'maxim',
        avatar_image: 'defult_user_avatar.png',
        text: 'привет!!',
        date: Date.now()
      }
    },
    {
      chatId: 1,
      title: 'норм норм',
      lastMessage: {
        nickname: 'maxim',
        avatar_image: 'defult_user_avatar.png',
        text: 'привет!!',
        date: Date.now()
      }
    },
    {
      chatId: 1,
      title: 'норм норм',
      lastMessage: {
        nickname: 'maxim',
        avatar_image: 'defult_user_avatar.png',
        text: 'привет!!',
        date: Date.now()
      }
    },
    {
      chatId: 1,
      title: 'норм норм',
      lastMessage: {
        nickname: 'maxim',
        avatar_image: 'defult_user_avatar.png',
        text: 'привет!!',
        date: Date.now()
      }
    },
  ];
  const selectedChat = false;
  return (
    <div className='wrapper flex-row' >
      <ChatList chatPreviews={chatPreviews} />
      <Outlet />
    </div>
  );
}