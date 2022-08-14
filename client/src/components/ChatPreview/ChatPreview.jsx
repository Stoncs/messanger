import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './ChatPreview.scss';

export default function ChatPreview({info}) {
  console.log(info);
  const srcImage = info.avatar_image
    ? process.env.REACT_APP_API_URL + info.avatar_image
    : process.env.REACT_APP_API_URL + 'default_user_avatar.png';
  const lastMessage = info.text
    ? {
      username: info.username + ': ', 
      text: info.text, 
      date: info.date
    }
    : {
      username: '',
      text: 'Чат создан',
      date: info.createdAt
    };
  
  
  const getDateString = () => {
    const day = 86400000;
    console.log(Date.now() - new Date(lastMessage.date));
    if (Date.now() - new Date(lastMessage.date) < day) {
      return moment(lastMessage.date).format('LT');
    } else {
      return moment(lastMessage.date).calendar();
    }
  };


  return (
    <div className='chat-preview'>
      <div className="chat-preview__image">
        <img src={srcImage} alt="chat-preview" />
      </div>
      <div className='chat-preview__texts'>
        <div className='chat-preview__title'>{info.title}</div>
        <div className='chat-preview__text'>{lastMessage.username+ lastMessage.text}</div>
      </div>
      <div className="chat-preview__right">
        <div className='chat-preview__date'>
          {getDateString()}
        </div>
      </div>
    </div>
  );
};