import React from 'react';
import { ChatList, ChatPanel, EmptyChatPanel } from '../components';

export default function Messanger() {
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
      {selectedChat 
        ? <ChatPanel />
        : <EmptyChatPanel />
      }
    </div>
  );
}