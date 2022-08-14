import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import './Message.scss';

export default function Message({messageInfo}) {
  console.log(messageInfo);

  const getDateString = () => {
    const day = 86400000;
    if (Date.now() - new Date(messageInfo.date) < day) {
      return moment(messageInfo.date).format('LT');
    } else {
      return moment(messageInfo.date).calendar();
    }
  };
  
  return (
    <div className='message'>
      <div className='message__image'>
        <img src={process.env.REACT_APP_API_URL + messageInfo.user.avatar_image} alt="" />
      </div>
      <div className='message__container'>
        <div className='message__text'>
          <p className='message__username'>{messageInfo.user.username}</p>
          {messageInfo.text.split('\n').map((line, index) => <p key={index}>{line}</p>)}
        </div>
        <div className='message__date'>{getDateString()}</div>
      </div>
    </div>
  );
}