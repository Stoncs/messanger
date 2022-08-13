import React from 'react';

import './ChatPreview.scss';
import img from '../../assets/img/default_user_avatar.png';

export default function ChatPreview() {
  const chatPreview = {
    chatId: 1,
    title: 'норм норм',
    lastMessage: {
      nickname: 'maxim',
      avatar_image: img,
      text: 'приветfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff!!',
      date: Date.now()
    }
  };

  return (
    <div className='chat-preview'>
      <div className="chat-preview__image">
        <img src={chatPreview.lastMessage.avatar_image} alt="chat-preview" />
      </div>
      <div className='chat-preview__texts'>
        <div className='chat-preview__title'>{chatPreview.title}</div>
        <div className='chat-preview__text'>{chatPreview.lastMessage.nickname}: {chatPreview.lastMessage.text}</div>
      </div>
      <div className="chat-preview__right">
        <div className='chat-preview__date'>
          10:43
        </div>
      </div>
    </div>
  );
}